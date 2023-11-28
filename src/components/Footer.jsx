import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                {/* ======= Footer ======= */}
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h3>Artline<span>.</span></h3>
                                    <p>
                                        DHA Phase 5, Main Office Building Lahore <br />
                                        <strong>Phone:</strong> +92 326 7985198<br />
                                        <strong>Email:</strong> artline@gmail.com<br />
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /> <a href="/">Home</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="/about">About us</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="/services">Services</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="/team">Team</a></li>

                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /> <a href="/portfolio">Web Design</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="/portfolio">Web Development</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="/portfolio">Marketing</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="/portfolio">Graphic Design</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Join Our Newsletter</h4>
                                    <form action method="post">
                                        <input type="email" name="email" placeholder='Enter Email' className='text-black' /><input type="submit" defaultValue="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container d-md-flex py-4">
                        <div className="me-md-auto text-center text-md-start">
                            <div className="copyright">
                                © Copyright {new Date().getFullYear()} <strong><span>Artline</span></strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                Designed by  <strong className='text-[#e03a3c]'> Artline Developers</strong>
                            </div>
                        </div>
                        <div className="social-links text-center text-md-end pt-3 pt-md-0">
                            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        </div>
                    </div>
                </footer>{/* End Footer */}<br />
            </div>

        </>
    )
}


export default Footer