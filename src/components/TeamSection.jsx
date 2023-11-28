import React from 'react'
import { motion } from 'framer-motion';

const TeamSection = () => {
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
            {/* ======= Team Section ======= */}
            <section

                id="team" className="team section-bg">
                <motion.div
                    {...options1}
                    className="container" data-aos="fade-up">
                    <motion.div
                        {...options}
                        className="section-title">
                        <h2>Team</h2>
                        <p>Our Team of Experts.</p>
                    </motion.div>
                    <div className="row">
                        <motion.div {...options} className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member-img">
                                    <img src="/team/team-1.jpg" className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Mohammad Tahir</h4>
                                    <span>Chief Executive Officer</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...options1}
                            className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                <div className="member-img">
                                    <img src="/team/team-2.png" className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Rehman Ahmed</h4>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...options2}
                            className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                <div className="member-img">
                                    <img src="/team/team-3.jpg" className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Anas Siddiqui</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            {...options3}
                            className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={400}>
                                <div className="member-img">
                                    <img src="/team/team-4.jpg" className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href><i className="bi bi-facebook" /></a>
                                        <a href><i className="bi bi-instagram" /></a>
                                        <a href><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Mohammad Abdullah </h4>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>{/* End Team Section */}


        </>
    )
}

export default TeamSection