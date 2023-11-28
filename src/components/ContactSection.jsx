import { motion } from 'framer-motion';

const ContactSection = () => {
    const options = {
        initial: {
            y: 200,
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: { delay: .2 },
    };
    const options1 = {
        initial: {
            y: 200,
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: { delay: .5 },
    };
    const options2 = {
        initial: {
            y: 200,
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: { delay: .7 },
    };
    const options3 = {
        initial: {
            y: 200,
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: { delay: .9 },
    };

    return (
        <>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <motion.div {...options} className="section-title">
                        <h2>Contact</h2>
                        <p>We Just Need A Couple Of Hours! No More Than 2 Working Days Since Receiving Your Enquiry.</p>
                    </motion.div>
                    <div className="row" data-aos="fade-up" data-aos-delay={100}>
                        <motion.div {...options1} className="col-lg-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <i className="bx bx-map" />
                                        <h3>Our Address</h3>
                                        <p>DHA Phase 5, Main Office Building Lahore</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx bx-envelope" />
                                        <h3>Email Us</h3>
                                        <p>artline@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx bx-phone-call" />
                                        <h3>Call Us</h3>
                                        <p>+92 326 7985198</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...options2} className="col-lg-6">
                            <form className="php-email-form">
                                <div className="row">
                                    <div className="col form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>{/* End Contact Section */}


        </>
    )
}

export default ContactSection