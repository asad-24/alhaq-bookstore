// const mongoose = require('mongoose');
// const wrapAsync = require('../../utils/wrapAsync.js');
const multer = require('multer');
const screenshotStorage = require('../../utils/Storage.js');
const userModel = require('../../models/user.js');
// const Purchase = require('../../models/purchase.js');
const Earnings = require('../../models/earning.js');
const { isLoggedIn } = require('../../utils/middleware.js');
const router = require('express').Router();


const upload = multer({ storage: screenshotStorage });

router.post('/upload-screenshot',isLoggedIn, upload.single('screenshot'),wrapAsync(async (req, res) => {
    let { finalPrice, course,userid } = req.body;
    console.log(req.body)
    // console.log(req.file)
    // const userid = req.headers.userid;
    const user = await userModel.findById(userid);
    if (user) {
        finalPrice = parseInt(finalPrice);
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }
        const uploadedFilePath = req.file.path;
        const fileURL = `${req.protocol}://${req.get('host')}/${uploadedFilePath}`;
        const newPurchase = new Purchase({
            user: userid,
            course: course,
            price: finalPrice,
            purchaseDate: new Date(),
            paymentScreenshot: fileURL
        });
        await newPurchase.save();
        return res.json({ message: "File uploaded", fileURL });
    } else {
        res.status(400).json({ error: "User not found." });
    }
}));


//get all purchases for admin panel
router.get('/', wrapAsync(async (req, res, next) => {
    const documents = await Purchase.find({}).populate('user');

    const extractedData = documents.map(doc => {
        const { _id, course, status, price, purchaseDate, paymentScreenshot, expiryDate } = doc;
        const user = doc.user || {}; // Handle cases where user object might be null or missing
        const username = user.username || null;
        const profileUrl = user.profileUrl || null;

        return {
            id: _id,
            avatarUrl: profileUrl,
            name: username,
            course,
            price,
            date: purchaseDate,
            status,
            paymentImg: paymentScreenshot,
            expiryDate
        };
    });
    res.json(extractedData);

}));

//get single purchase referalll for admin panel
router.get('/:id/:days', wrapAsync(async (req, res, next) => {
    const { id, days } = req.params;
    await Purchase.findOne({ _id: id })
        .then(purchase => {
            const daysToExtend = parseInt(days); // Example: Extend by 90 days
            return purchase.extendExpiryDate(daysToExtend);
        })
        .then(updatedPurchase => {
        })
        .catch(error => {
        });
}));


//handle purchase status for admin panel
router.put('/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    const purchase = await Purchase.findById(id);
    if (purchase) {
        purchase.status = status;
        await purchase.save();

        try {
            if (purchase.status == 'approved') {
                const newEarning = new Earnings({
                    _id: purchase._id,
                    course: purchase.course,
                    price: purchase.price,
                });
                const edata = await newEarning.save();
            }
        } catch (error) { }

        res.json({ message: "Status updated." });
    } else {
        res.status(404).json({ error: "Purchase not found." });
    }
}));

//handle purchase status for admin [array type]
router.put('/select/:type', wrapAsync(async (req, res, next) => {
    const { type } = req.params;
    const { status } = req.body;
    const { collectionsId } = req.body;

    if (type == 'update') {

        // try {
        //     const documentsToUpdate = await Purchase.find({ _id: { $in: collectionsId } });
        //     const promises = documentsToUpdate.map(async (document) => {
        //         document.status = status;
        //         await document.save(); // This will trigger the pre('save') hook
        //     });
        //     // Wait for all updates to complete
        //     await Promise.all(promises);
        //     res.status(200).json({ message: `${documentsToUpdate.length} items updated successfully.` });
        // } catch (error) {
        //     res.status(500).json({ error: error.message });
        // }

        try {
            const documentsToUpdate = await Purchase.find({ _id: { $in: collectionsId } });
            
            for (const document of documentsToUpdate) {
                document.status = status;
                await document.save(); // This will trigger the pre('save') hook
                
                if (status === 'approved') {
                    const newEarning = new Earnings({
                        course: document.course,
                        price: document.price,
                    });
                    await newEarning.save();
                }
            }
        
            res.status(200).json({ message: `${documentsToUpdate.length} items updated successfully.` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        

    } else if (type == 'delete') {
        const reponse = await Purchase.deleteMany({ _id: { $in: collectionsId } });
        res.status(200).json({ message: `${reponse.deletedCount} purchases deleted successfully.` });


    } else if (type == 'extendDate') {
        const days = req.body.days || 0;
        try {
            const documentsToUpdate = await Purchase.find({ _id: { $in: collectionsId } });
            const promises = documentsToUpdate.map(async (document) => {
                const daysToExtend = parseInt(days); // Example: Extend by 90 days
                return document.extendExpiryDate(daysToExtend);
            });
            // Wait for all updates to complete
            await Promise.all(promises);
            res.status(200).json({ message: `${documentsToUpdate.length} items updated successfully.` });
        } catch (error) {
            next(error);
        }
    }
    else {
        res.status(400).json({ error: "Invalid operation." });
    }
}));



module.exports = router;