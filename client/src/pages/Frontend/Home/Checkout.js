// import React, { useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
// import { UploadFile, MoneyOffCsredRounded } from '@mui/icons-material';
// import { Modal, Tab, Tabs } from 'react-bootstrap';
// import SweetAlert from 'react-bootstrap-sweetalert';
// import jazzcash from '../../../../src/assets/jazzcash.png';
// import easypaisa from '../../../../src/assets/easypaisa.png';
// import bank from '../../../../src/assets/bank.png';
// import receipt from '../../../../src/assets/receipt.png';
// import img from "../../../assets/images/AboutUs.png";

// const Checkout = (props) => {
//     const [key, setKey] = useState('home');
//     const [payMethod, setPayMethod] = useState('jazzcash');
//     const [imageUrl, setImageUrl] = useState(receipt);
//     const [image, setImage] = useState(null);
//     const navigate = useNavigate();
//     const [showAlert, setShowAlert] = useState(false);
//     const [cData, setcData] = useState({ cprice: 1000, cdesc: "Description of the course" });
//     const [promoPrice, setPromoPrice] = useState(0);
//     const [promoCode, setPromoCode] = useState('');
//     const ref = useRef();

//     const accounts = {
//         jazzcash: { name: "Asad Ali", ac: "03138825124", iban: "asdf#asdf" },
//         easypaisa: { name: "Asad Ali", ac: "03138825124", iban: "easypasisa iban" },
//         bank: { name: "saeed abbass", ac: "012323099444", iban: "11100033312124d" }
//     };

//     const handleRedeem = () => {
//         // handle redeem logic
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImageUrl(URL.createObjectURL(file));
//             setImage(file);
//         }
//     };

//     const handlePurchase = () => {
//         // handle purchase logic
//         setShowAlert(true);
//     };

//     return (
//         <>
//             <Box>
//                 <div className="checkout glassy-background">
//                     <div className="container bg-light rounded-5 shadow-lg p-3 px-2 mt-2">
//                         <div className="py-1 text-center">
//                             <h2 className='text-primary fw-bold'>CSS MCQ BANK</h2>
//                             <p className="lead">Pay to get McQs Bank</p>
//                         </div>

//                         <div className="row d-flex justify-item-center">
//                             <Tabs
//                                 id="controlled-tab-example"
//                                 activeKey={key}
//                                 onSelect={(k) => setKey(k)}
//                                 className="mb-3 d-flex justify-content-center"
//                             >
//                                 <Tab eventKey="home" title="Course Info">
//                                     <div className="row">
//                                         <div className="col-md-4 order-md-2 mb-4">
//                                             <h4 className="d-flex justify-content-between align-items-center mb-3">
//                                                 <span className="text-muted fw-bold h3">Your cart</span>
//                                                 <span className="badge badge-primary badge-pill">1</span>
//                                             </h4>
//                                             <ul className="list-group mb-3 shadow">
//                                                 <li className="list-group-item d-flex justify-content-between lh-condensed">
//                                                     <div>
//                                                         <h6 className="my-0">Product Price</h6>
//                                                         <small className="text-muted">CSS</small>
//                                                     </div>
//                                                     <span className="text-dark fw-bold">{cData?.cprice}</span>
//                                                 </li>
//                                                 <li className="list-group-item d-flex justify-content-between bg-light">
//                                                     <div className="text-success">
//                                                         <h6 className="my-0">Discount Price</h6>
//                                                     </div>
//                                                     <span className="text-success">{promoPrice > 0 && "-"}{parseInt(promoPrice)}</span>
//                                                 </li>
//                                                 <li className="list-group-item d-flex justify-content-between">
//                                                     <span>Total (PKR)</span>
//                                                     <strong>{parseInt(cData.cprice - promoPrice)}</strong>
//                                                 </li>
//                                             </ul>
//                                             <div className="card h-auto p-1 shadow">
//                                                 <div className="input-group-redeem mb-1">
//                                                     <input ref={ref} type="email" className='form-control' name="refcode" placeholder="Refferal code" />
//                                                 </div>
//                                                 <Button variant="contained" color="primary" onClick={handleRedeem}>Redeem</Button>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-8 order-md-1">
//                                             <h4 className="mb-3 fw-bold text-primary">Course details</h4>
//                                             <div className="mb-3 shadow">
//                                                 <img src={img} alt="" style={{ width: "100%", height: "242px", objectFit: "fill" }} className='rounded shadow-sm' />
//                                             </div>
//                                             <div className="row mt-3 fs-5 text-dark">
//                                                 <p>{cData.cdesc}</p>
//                                             </div>
//                                             <div className="container">
//                                                 <h4 className="mt-5 text-primary fw-bold">Payment Options</h4>
//                                                 <Button variant="contained" color="primary" className="w-100 ms-auto mt-3 fw-bold" onClick={() => setKey('payment')}>Next</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Tab>
//                                 <Tab eventKey="payment" title="Payment">
//                                     <Grid container spacing={.2}>
//                                         <Grid item xs={12} sm={12} md={4} display={'flex'} justifyContent={'center'}>
//                                             <FormControl>
//                                                 <FormLabel id="demo-radio-buttons-group-label fw-bold fs-3">
//                                                     <h5 className='fw-bold'>Select Payment Method</h5>
//                                                 </FormLabel>
//                                                 <RadioGroup
//                                                     aria-labelledby="demo-radio-buttons-group-label"
//                                                     defaultValue="jazzcash"
//                                                     name="radio-buttons-group"
//                                                     value={payMethod}
//                                                     onChange={(e) => setPayMethod(e.target.value)}
//                                                 >
//                                                     <div className="payopt jazzcash bg-light rounded-3 px-4 py-2 mb-3 d-flex align-items-center">
//                                                         <FormControlLabel value="jazzcash" control={<Radio />} label="JazzCash" />
//                                                         <img src={jazzcash} alt="jazzcash" height={55} />
//                                                     </div>
//                                                     <div className="payopt easypaisa bg-light rounded-3  px-4 py-2 mb-3 d-flex align-items-center">
//                                                         <FormControlLabel value="easypaisa" control={<Radio />} label="EasyPaisa" />
//                                                         <img src={easypaisa} alt="easypaisa" height={55} />
//                                                     </div>
//                                                     <div className="payopt bank bg-light rounded-3  px-4 py-2 mb-3 d-flex align-items-center">
//                                                         <FormControlLabel value="bank" control={<Radio />} label="Bank Transfer" />
//                                                         <img src={bank} alt="bank" height={55} />
//                                                     </div>
//                                                 </RadioGroup>
//                                             </FormControl>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={8}>
//                                             <div className="payment-section">
//                                                 <div className="row top-row">
//                                                     <div className="col-md-7 col-12 pay-details-col">
//                                                         {payMethod === 'jazzcash' && <img src={jazzcash} height={44} alt="" />}
//                                                         {payMethod === 'easypaisa' && <img src={easypaisa} height={44} alt="" />}
//                                                         {payMethod === 'bank' && <img src={bank} height={44} alt="" />}
//                                                         <p>Transfer the amount to these accounts and upload the screenshot of the receipt</p>
//                                                         <div className="row payment-details">
//                                                             <strong>Name: {accounts[payMethod]?.name}</strong>
//                                                             <strong>Account No: {accounts[payMethod]?.ac}</strong>
//                                                             <strong>IBAN: {accounts[payMethod]?.iban}</strong>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-md-5 col-12 pay-ss-col">
//                                                         <img src={imageUrl} alt="" />
//                                                         <div className="img-upload-input">
//                                                             <input type="file" name="payimg" accept="image/*" id="payimg" hidden onChange={handleImageChange} />
//                                                             <label htmlFor="payimg">Upload<UploadFile /></label>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row mt-4 py-3 border-bottom">
//                                                     <div className="container d-flex justify-content-between">
//                                                         <div className="left fw-bold" style={{ fontSize: "19px", color: "#1F305E", fontFamily: "inter" }}>Subtotal</div>
//                                                         <div className="right fw-bold" style={{ fontSize: "19px", color: "#1F305E", fontFamily: "inter" }}>{cData?.cprice}</div>
//                                                     </div>
//                                                     <div className="container d-flex justify-content-between">
//                                                         <div className="left fw-bold" style={{ fontSize: "19px", color: "#FA2A55" }}>Discount Price</div>
//                                                         <div className="right fw-bold" style={{ fontSize: "19px", color: "#FA2A55" }}>{promoPrice > 0 && "-"}{parseInt(promoPrice)}</div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row border-top py-3">
//                                                     <div className="container d-flex justify-content-between">
//                                                         <div className="left">
//                                                             <strong style={{ fontSize: "22px", color: "#4e73df", fontFamily: "fredoka" }}>Total</strong>
//                                                         </div>
//                                                         <div className="right fs-3 text-primary fw-bold" style={{ color: "#4e73df", fontFamily: "fredoka" }}>{parseInt(cData.cprice - promoPrice)}</div>
//                                                     </div>
//                                                 </div>
//                                                 <Grid mt={6} px={3} width={'100%'}>
//                                                     <Button variant="contained" color='success' className='px-5 py-2 fw-bold px-3 ms-auto' style={{ fontSize: "20px" }} onClick={handlePurchase}>Place Order <MoneyOffCsredRounded /></Button>
//                                                 </Grid>
//                                             </div>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid mt={6} px={3}>
//                                         <Button variant="contained" color='error' className='fw-bold' onClick={() => setKey('home')}>Back</Button>
//                                     </Grid>
//                                 </Tab>
//                             </Tabs>
//                         </div>
//                         <footer className="my-5 pt-5 text-muted text-center text-small">
//                             <div className="text-center p-3 text-black">
//                                 © {new Date().getFullYear()} Copyright reserved The Capital Academy
//                             </div>
//                             <ul className="list-inline">
//                                 <Link to={'/privacy'}>Privacy</Link>
//                                 <li className="list-inline-item"><a href="#">Terms</a></li>
//                                 <li className="list-inline-item"><a href="#">Support</a></li>
//                             </ul>
//                         </footer>
//                     </div>
//                 </div>
//             </Box>
//             <SweetAlert
//                 show={showAlert}
//                 success
//                 title="Thanks For Placing Order"
//                 onConfirm={() => setShowAlert(false)}
//                 onCancel={() => setShowAlert(false)}
//                 showConfirm={false}
//                 timeout={4000}
//             >
//                 <Link to={'/'}><Button variant="contained">HomePage</Button></Link>
//             </SweetAlert>
//         </>
//     );
// };

// export default Checkout;
