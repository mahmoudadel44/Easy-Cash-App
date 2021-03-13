import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../images/home/logo footer.png'
const Footer = () => {
    return (
        //    start footer section 

        <section className="footer pt-5 pb-5 wow fadeInUp" id="contactus">
          <div class="overlay"></div>  
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <img src={footerLogo} className="footerImage" alt="logoFooter" />
                                <div className="contact">
                                    <div className="socialStyle">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="helpful-links">
                                    <h6>Website Map</h6>
                                    <ul className="list-unstyled">
                                        <Link to="/home">
                                            <li>Home</li>
                                        </Link>
                                        <Link to="/about">
                                            <li>About Us</li>
                                        </Link>
                                        <Link to="#">
                                            <li>Contact Us</li>
                                        </Link>
                                        <Link to="/signin">
                                            <li>Login</li>
                                        </Link>
                                        <Link to="/signup">
                                            <li>Sign Up</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="helpful-links">
                                    <h6>Contact Us</h6>
                                    <ul className="list-unstyled">
                                        <Link to="#">
                                            <li>+880 12345678</li>
                                        </Link>
                                        <Link to="#">
                                            <li>youremail@gmail.com</li>
                                        </Link>
                                        <Link to="#">
                                            <li>Rangpurcity</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 footerText">
                        <p className="para"><span className="cfinspan">cfin</span> will unleash your business potential
                  and drive everlasting impact by providing insights about all
                  your busines financial in a simple dashboard
                </p>
                    </div>
                    <div className="end mt-3" style={{ margin: 'auto' }}>
                        <span className="mr-5">Terms of use</span>
                        <span style={{ color: 'grey' }}>|</span>
                        <span className="ml-5">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </section>
        //   end footer section

    )
}

export default Footer
