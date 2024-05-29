import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { closeSnackbar, useSnackbar } from 'notistack';
import axios from 'axios';
import { useState } from 'react';
import {
    Box, Button, FormControl, FormControlLabel, FormLabel, Grid,
    IconButton, Radio, RadioGroup
} from '@mui/material';
import Close from '@mui/icons-material/Close';
import { MoneyOffCsredRounded, UploadFile } from '@mui/icons-material';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import jazzcash from '../../../assets/jazzcash.png';
import easypaisa from '../../../assets/easypaisa.png';
import bank from '../../../assets/bank.png';
import receipt from '../../../assets/receipt.png';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useCartContext } from '../../../context/cartContext';
import { useAuthContext } from '../../../context/AuthContext';

const Checkout = (props) => {
    const [cart, setCart] = useCartContext();
    const [key, setKey] = useState('home');
    const [payMethod, setPayMethod] = useState('jazzcash');
    const [imageUrl, setImageUrl] = useState(receipt);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const { auth } = useAuthContext();
    const accounts = {
        jazzcash: {
            name: "Ali Hamza",
            ac: "03037828419",
            iban: "asdf#asdf"
        },
        easypaisa: {
            name: "Timoor Abass",
            ac: "03037342343",
            iban: "easypasisa iban"
        },
        bank: {
            name: "saeed abbass",
            ac: "012323099444",
            iban: "11100033312124d"
        }
    };
    const { enqueueSnackbar } = useSnackbar();
    const [cData, setcData] = useState({ price: 100, productId: 1, productName: "MCQ Bank" });
    const ref = useRef();
    const { search } = useLocation();

    // Calculate total price
    const calculateTotalPrice = () => {
        let subtotalPrice = 0;
        try {
            cart?.map((item) => {
                subtotalPrice += item.price;
            });
            return subtotalPrice.toLocaleString("en-US", {
                currency: "PKR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
                style: "currency",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const alert = (message, variant) => {
        enqueueSnackbar(message, {
            variant: variant,
            autoHideDuration: 2500,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            },
            action: (
                <IconButton size="small" aria-label="close" color="inherit" onClick={() => closeSnackbar()}>
                    <Close fontSize="small" />
                </IconButton>
            )
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const url = URL.createObjectURL(file);
                setImageUrl(url);
                setImage(file);
            } else {
                alert("Please upload Image Type Paid Screenshot", "error");
            }
        }
    };
	const handlePurchase = async () => {
		const finalPrice = calculateTotalPrice();
		
		if (!image) {
		  alert("No image selected.", "error");
		  return;
		}
		
		if (!auth || !auth.user) {
		  alert("Please log in to place an order.", "error");
		  navigate('/auth/login', { state: { from: '/checkout' } });
		  return;
		}
		
		try {
		  const formData = new FormData();
		  formData.append('screenshot', image);
		  formData.append('finalPrice', finalPrice);
		  formData.append('productId', cData.productId);
		  formData.append('productName', cData.productName);
		  formData.append('userId', auth.user._id);
	  
		  const response = await fetch('/checkout', {
			method: 'POST',
			body: formData,
			headers: {
			  'Accept': 'application/json'
			}
		  });
	  
		  if (response.ok) {
			alert("Payment Screenshot Sent. Please wait for response", "success");
			setShowAlert(true);
			setTimeout(() => {
			  navigate('/');
			}, 4000);
		  } else {
			const errorData = await response.json();
			console.error('Error:', errorData);
			alert("Something went wrong. Please reload the page!", "error");
		  }
		} catch (error) {
		  console.error("Error:", error);
		  alert("Something went wrong. Please reload the page!", "error");
		}
	  };
	  
	  

    return (
        <>
            <Box>
                <div className="checkout glassy-background ">
                    <div className="container bg-light rounded-5 shadow-lg p-3 px-2 mt-2">
                        <div className="py-1 text-center">
                            <h2 className='text-primary fw-bold'>MCQ BANK</h2>
                            <p className="lead">Pay to get MCQs Bank</p>
                        </div>

                        <div className="row d-flex justify-item-center">
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3 d-flex justify-content-center"
                            >
                                <Tab eventKey="home">
                                    <Grid container spacing={.2}>
                                        <Grid xs={12} sm={12} md={4} display={'flex'} justifyContent={'center'}>
                                            <FormControl >
                                                <FormLabel id="demo-radio-buttons-group-label fw-bold fs-3">
                                                    <h5 className='fw-bold'>Select Payment Method</h5>
                                                </FormLabel>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="jazzcash"
                                                    name="radio-buttons-group"
                                                >
                                                    <div className="payopt jazzcash bg-light rounded-3 px-4 py-2 mb-3 d-flex align-items-center">
                                                        <FormControlLabel value="jazzcash" control={<Radio />} label="JazzCash" onClick={(e) => setPayMethod(e.target.value)} />
                                                        <img src={jazzcash} alt="jazzcash" height={55} />
                                                    </div>
                                                    <div className="payopt easypaisa bg-light rounded-3  px-4 py-2 mb-3 d-flex align-items-center">
                                                        <FormControlLabel value="easypaisa" control={<Radio />} label="EasyPaisa" onClick={(e) => setPayMethod(e.target.value)} />
                                                        <img src={easypaisa} alt="easypaisa" height={55} />
                                                    </div>
                                                    <div className="payopt bank bg-light rounded-3  px-4 py-2 mb-3 d-flex align-items-center">
                                                        <FormControlLabel value="bank" control={<Radio />} label="Bank Transfer" onClick={(e) => setPayMethod(e.target.value)} />
                                                        <img src={bank} alt="bank" height={55} />
                                                    </div>
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid xs={12} sm={12} md={8}>
                                            <div className="payment-section">
                                                <div className="row top-row">
                                                    <div className="col-md-7 col-12 pay-details-col">
                                                        {payMethod === 'jazzcash' && <img src={jazzcash} height={44} alt="" />}
                                                        {payMethod === 'easypaisa' && <img src={easypaisa} height={44} alt="" />}
                                                        {payMethod === 'bank' && <img src={bank} height={44} alt="" />}

                                                        <p>Transfer the amount to these accounts and upload the screenshot of the receipt</p>
                                                        <div className="row payment-details">
                                                            <strong>Name: {accounts[payMethod]?.name}</strong>
                                                            <strong>Account No: {accounts[payMethod]?.ac}</strong>
                                                            <strong>IBAN: {accounts[payMethod]?.iban}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5 col-12 pay-ss-col">
                                                        <img src={imageUrl} alt="" />
                                                        <div className="img-upload-input">
                                                            <input type="file" name="payimg" accept="image/*" id="payimg" hidden onChange={handleImageChange} />
                                                            <label htmlFor="payimg">Upload<UploadFile /></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Total Price */}
                                                <div className="row border-top py-3">
                                                    <div className="container d-flex justify-content-between">
                                                        <div className="left">
                                                            <strong style={{ fontSize: "22px", color: "#4e73df", fontFamily: "fredoka" }}>Total</strong>
                                                        </div>
                                                        <div className="right fs-3 text-primary fw-bold" style={{ color: "#4e73df", fontFamily: "fredoka" }}>
                                                            {calculateTotalPrice()}
                                                        </div>
                                                    </div>
                                                </div>
                                                <Grid mt={6} px={3} width={'100%'}>
                                                    <Button variant="contained" color='success' className='px-5 py-2 fw-bold px-3 ms-auto' style={{ fontSize: "20px" }} onClick={handlePurchase}>
                                                        Place Order <MoneyOffCsredRounded />
                                                    </Button>
                                                </Grid>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Tab>
                            </Tabs>
                        </div>

                        <footer className="my-5 pt-5 text-muted text-center text-small">
                            <div className="text-center p-3 text-black">
                                © {new Date().getFullYear()} Copyright reserved The Capital Academy
                            </div>
                            <ul className="list-inline">
                                <Link to={'/privacy'}>Privacy</Link>
                                <li className="list-inline-item"><a href="#">Terms</a></li>
                                <li className="list-inline-item"><a href="#">Support</a></li>
                            </ul>
                        </footer>
                    </div>
                </div>
            </Box>
            <SweetAlert
                show={showAlert}
                success
                title="Thanks For Placing Order"
                onConfirm={() => setShowAlert(false)}
                onCancel={() => setShowAlert(false)}
                showConfirm={false}
                timeout={4000}
            >
                <Link to={'/'}><Button variant="contained">HomePage</Button></Link>
            </SweetAlert>
        </>
    );
};

export default Checkout;
