import { motion } from 'framer-motion';

const AboutSection = () => {
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
    return (
        <>
            {/* ======= About Section ======= */}
            <section id="about" className="about section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="row no-gutters">
                        <div className="content col-xl-5 d-flex align-items-stretch">
                            <motion.div
                                {...options}
                                className="content">
                                <motion.div

                                    className='flex gap-4 items-center'>
                                    <h3 className='mobile-main-artline'>
                                        Artline.Tech
                                    </h3>
                                    <h6 className='mobile-main-company'>(Our Company)</h6>
                                </motion.div>
                                <p className='about-padding'>
                                    We Build Robust Solutions To Make Your Business Stand Out In The Industry
                                </p>
                                <a href="https://wa.me/+923267985198" target="blank" rel="noopener noreferrer">
                                    <button className='whatsapp'>
                                        Contact Now
                                    </button>
                                </a>
                            </motion.div>
                        </div>
                        <motion.div
                            {...options}
                            className="col-xl-7 d-flex align-items-stretch">
                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <i className="bx bx-receipt" />
                                        <h4>Focused On Quality</h4>
                                        <p>We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <i className="bx bx-cube-alt" />
                                        <h4>Strong Track Record</h4>
                                        <p>Our preventive and progressive approach will help take the lead while addressing possible threats in managing.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <i className="bx bx-images" />
                                        <h4>Strong Management</h4>
                                        <p>Our support team is available 24/7 and can get ready for solving any of your situational rising problems.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <i className="bx bx-shield" />
                                        <h4>Let Success Your Brand Digitally</h4>
                                        <p>Artline specializes in product solution & development.</p>
                                    </div>
                                </div>
                            </div>{/* End .content*/}
                        </motion.div>
                    </div>
                </div>
            </section>{/* End About Section */}
        </>
    )
}

export default AboutSection