import { motion } from 'framer-motion';

const PricingSection = () => {
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
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="pricing section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <motion.h2
                            {...options}
                        >Pricing</motion.h2>
                        <motion.p {...options1}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</motion.p>
                    </div>
                    <div className="row">
                        <motion.div {...options} className="col-lg-4 col-md-6">
                            <div className="box" data-aos="fade-up" data-aos-delay={100}>
                                <h3>Free</h3>
                                <h4><sup>$</sup>0<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li className="na">Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...options2} className="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div className="box featured" data-aos="fade-up" data-aos-delay={200}>
                                <h3>Business</h3>
                                <h4><sup>$</sup>19<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...options3} className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                            <div className="box" data-aos="fade-up" data-aos-delay={300}>
                                <h3>Developer</h3>
                                <h4><sup>$</sup>29<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>{/* End Pricing Section */}

        </>
    )
}

export default PricingSection