import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-grid-system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import visa from '../../../asserts/visa.png'
import paypal from '../../../asserts/paypal.webp'
import mastercard from '../../../asserts/mastercard.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

function Footer() {
    return (
        // <div>
        //     <footer className="section footer-corporate footer-corporate-3 context-dark" style={{ margin: '15px 0px', textAlign: 'center', boxSizing: 'border-box', display: 'block', lineHeight: '1.6', color: 'white' }}>
        //         <div className="footer-corporate-body section-lg">
        //             <div className="container">
        //                 <div className="row row-40 row-md-50 justify-content-xl-between">
        //                     <div className="col-sm-6 col-lg-4 wow fadeInRight" >
        //                         <h2 className="footer-corporate-title">Visit our farm</h2>
        //                         <div className="footer-corporate-decor" style={{}}></div>
        //                         <ul className="footer-corporate-info">
        //                             <li>
        //                                 <div className="unit flex-column flex-sm-row align-items-center">
        //                                     <div className="unit-left"><span className="icon mdi mdi-map-marker"></span></div>
        //                                     <div className="unit-body">
        //                                         <ul>
        //                                             <li href="#">533 Sylvan Ave, 5th Floor<br />Mountain View, Ch3 94041 USA</li>
        //                                         </ul>
        //                                     </div>
        //                                 </div>
        //                             </li>
        //                             <li>
        //                                 <div className="unit flex-column flex-sm-row align-items-center">
        //                                     <div className="unit-left"><span className="icon mdi mdi-clock"></span></div>
        //                                     <div className="unit-body">
        //                                         <ul className="list-schedule">
        //                                             <li><span>Weekdays:</span><span>08:00am - 08:00pm</span></li>
        //                                             <li><span>Weekends:</span><span>10:00am - 06:00pm</span></li>
        //                                         </ul>
        //                                     </div>
        //                                 </div>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                     <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay=".1s" >
        //                         <h2 className="footer-corporate-title">Quick links</h2>
        //                         <div className="footer-corporate-decor"></div>
        //                         <Container>
        //                             <Row>
        //                                 <Col><ul className="footer-corporate-list d-sm-inline-block d-md-block">
        //                                     <li>History</li>
        //                                     <li>FAQ</li>
        //                                     <li>Farmers</li>
        //                                     <li>Events</li>
        //                                     <li>Blog</li>
        //                                 </ul>
        //                                 </Col>
        //                                 <Col>
        //                                     <ul className="footer-corporate-list d-sm-inline-block d-md-block">
        //                                         <li>Blog</li>
        //                                         <li>Organic Fruits</li>
        //                                         <li>Our Smootihes</li>
        //                                         <li>Gift Vouchers</li>
        //                                         <li>Boxes</li>
        //                                     </ul>
        //                                 </Col>
        //                             </Row>
        //                         </Container>
        //                     </div>
        //                     <div className="col-lg-4 wow fadeInRight" data-wow-delay=".3s" >
        //                         <h2 className="footer-corporate-title">Get in touch</h2>
        //                         <div className="footer-corporate-decor"></div>
        //                         <p className="footer-corporate-text">We are always ready  to answer any questions you may have or help you select organic fruits.</p>
        //                         <div className="group-sm group-middle">
        //                             <h5 className="button button-shadow-3 button-gray-14 button-zakaria" href="grid-shop.html">Shop now</h5>
        //                             <h5 className="button button-shadow-2 button-primary-2 button-zakaria" href="contact-us.html">Contact us</h5>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="footer-corporate-panel">
        //             <div className="container">
        //                 <div className="row row-10 row-sm-30 align-items-center justify-content-sm-between">
        //                     <div className="col-sm-auto col-lg-4 text-lg-left">
        //                         {/* <div className="group-xs group-middle"><img src="images/payment-1-45x15.png" alt="" width="45" height="15"/><img src="images/payment-2-46x28.png" alt="" width="46" height="28"><img src="images/payment-3-62x17.png" alt="" width="62" height="17"> */}
        //                     </div>
        //                 </div>
        //                 <div className="col-sm-auto col-lg-4">
        //                     <ul className="list-inline list-social-4 list-inline-xs">
        //                         <li><h4 className="icon mdi mdi-facebook icon-xxs" href="#"></h4></li>
        //                         <li><h4 className="icon mdi mdi-twitter icon-xxs" href="#"></h4></li>
        //                         <li><h4 className="icon mdi mdi-instagram icon-xxs" href="#"></h4></li>
        //                         <li><h4 className="icon mdi mdi-google-plus icon-xxs" href="#"></h4></li>
        //                         <li><h4 className="icon mdi mdi-skype icon-xxs" href="#"></h4></li>
        //                     </ul>
        //                 </div>
        //                 <div className="col-lg-4 text-lg-right">
        //                     <p className="rights"><span>©&nbsp; </span><span className="copyright-year">3033</span><span>&nbsp;</span><span>Orange</span><span>.&nbsp; All rights reserved.</span><span>&nbsp;</span><h4 href="privacy-policy.html">Privacy Policy</h4><span>.</span></p>
        //                 </div>
        //             </div>
        //         </div>
        //     </footer >
        // </div>

        <footer >
            <div className="container" style={{ padding: '15px' }}>
                <div className="row row-40 row-md-50 justify-content-xl-between">
                    <div className="col-sm-6 col-lg-4 wow fadeInRight" style={{ padding: '10px' }}>
                        <h2>Visit our farm</h2>
                        <p><LocationOnIcon /> 9, Sanjay's Fine Foods, <br /> Mosikeeranar Street 4th, <br /> Erode - 638001</p>
                        <ul >
                            <li><AccessTimeIcon /> <span>Weekdays:</span><span>08:00am - 08:00pm</span></li>
                            <li><AccessTimeIcon /> <span>Weekends:</span><span>10:00am - 06:00pm</span></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-4" style={{ padding: '10px' }}>
                        <h2>Quick links</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <li>History</li>
                                    <li>FAQ</li>
                                    <li>Products</li>
                                    <li>Events</li>
                                    <li>Blog</li>
                                </Col>
                                <Col>
                                    <ul >
                                        <li>Blog</li>
                                        <li>Organic Products</li>
                                        <li>Our Smoothies</li>
                                        <li>Gift Vouchers</li>
                                        <li>Boxes</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="col-lg-4 wow fadeInRight" data-wow-delay=".3s" style={{ padding: '10px' }}>
                        <h2 >Get in touch</h2>
                        <div ></div>
                        <p >We are always ready  to answer any questions you may have or help you select healthy products.</p>
                        <div >
                            <h5>Shop now</h5>
                            <h5>Contact us</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="container" style={{ paddingTop: '0px' }}>
                    <div className="row row-10 row-sm-30 align-items-center justify-content-sm-between">
                        <div className="col-sm-auto col-lg-4 text-lg-left">
                            <div className="group-xs group-middle fade-in-image" >
                                <img src={visa} alt="" width="50" height="25" style={{ padding: '0px 4px' }} />
                                <img src={mastercard} alt="" width="50" height="25" style={{ padding: '0px 3px', borderRadius: '3px' }} />
                                <img src={paypal} alt="" width="50" height="25" style={{ padding: '0px 3px', borderRadius: '2px' }} />
                            </div>
                        </div>
                        <div className="col-sm-auto col-lg-4" style={{ padding: '15px 0px' }}>
                            {/* <ul className="list-inline list-social-4 list-inline-xs">
                                <li><h4 className="icon mdi mdi-facebook icon-xxs" href="#"><FacebookIcon/></h4></li>
                                <li><h4 className="icon mdi mdi-twitter icon-xxs" href="#"><TwitterIcon/></h4></li>
                                <li><h4 className="icon mdi mdi-instagram icon-xxs" href="#"><InstagramIcon/></h4></li>
                                <li><h4 className="icon mdi mdi-google-plus icon-xxs" href="#"><GoogleIcon/></h4></li>
                                <li><h4 className="icon mdi mdi-skype icon-xxs" href="#"></h4></li>
                            </ul> */}
                            <span ><FacebookIcon style={{ height: '25px', width: '30px' }} /> <InstagramIcon style={{ height: '25px', width: '30px' }} /> <TwitterIcon style={{ height: '25px', width: '30px' }} /> <GoogleIcon style={{ height: '25px', width: '30px' }} /> </span>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="rights">
                                <span>©&nbsp; </span>
                                <span className="copyright-year">3033</span>
                                <span>&nbsp;</span><span>Dry Fruits</span>
                                <span>.&nbsp; All rights reserved.</span>
                                <span>&nbsp;</span>
                                <h4 href="privacy-policy.html">Privacy Policy</h4>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer