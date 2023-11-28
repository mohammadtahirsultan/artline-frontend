import { motion } from 'framer-motion';

const ServiceSection = () => {
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
            {/* ======= Services Section ======= */}
            <section id="services" className="services section-bg ">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>At Artline, we're masters of software innovation. Our expertise spans idea prototyping, MVP development, and custom software solutions. We're all about understanding your business and delivering tailored solutions across diverse domains. Welcome to our world of technology transformation.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <motion.div
                                {...options}
                                className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                <i className="bi bi-briefcase" />
                                <h4>Web Development Services</h4>
                                <p>Website Is The Most Powerful Marketing Tool, Artline is a premier web development agency with a team of top web developers in Pakistan. Share your project vision with us, and we will turn it into a reality.</p>
                            </motion.div>
                        </div>
                        <motion.div
                            {...options}
                            className="col-md-6 mt-4 mt-md-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                <i className="bi bi-card-checklist" />
                                <h4>Quality Web Development</h4>
                                <p>Artline is a web development agency that has top web developers in Pakistan. Tell us what you want to develop and we will bring it to fruition. From e-commerce to web development services, we do everything in between. </p>
                            </div>
                        </motion.div>
                        <motion.div     {...options} className="col-md-6 mt-4 mt-md-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                <i className="bi bi-bar-chart" />
                                <h4>Responsive Website Design</h4>
                                <p>We understand the power of responsive websites. According to Google, you are losing more than 60% of your web traffic if your website is not optimized for mobile screens.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            {...options}
                            className="col-md-6 mt-4 mt-md-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                                <i className="bi bi-binoculars" />
                                <h4>Logo Design & Identity</h4>
                                <p>Artline, Where Logos Become Your Brand's Face.As a top-quality branding agency in Pakistan, we specialize in crafting logos and brand identities for renowned companies—our expertise speaks for itself.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            {...options}
                            className="col-md-6 mt-4 mt-md-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={500}>
                                <i className="bi bi-brightness-high" />
                                <h4>Poster & Flyer Design</h4>
                                <p>Elevate Your Company's Image with Powerful Printed Marketing Materials. At Artline, we offer top-tier print design services to ensure that your, brochures, flyers, and posters make a lasting impression in all your sales interactions.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            {...options}
                            className="col-md-6 mt-4 mt-md-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={600}>
                                <i className="bi bi-calendar4-week" />
                                <h4>Web & App Design (UX/UI)</h4>
                                <p>From B2B to B2C websites, Artline delivers top-quality web, UI, and UX design services, ensuring pixel-perfect precision and responsive design. Elevate your online presence and outshine your competitors with our website design solutions.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>{/* End Services Section */}


        </>
    )
}

export default ServiceSection