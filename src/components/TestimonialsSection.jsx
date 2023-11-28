import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const options = {
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
    const options1 = {
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
    return (
        <>
            {/* ======= Testimonials Section ======= */}
            <section id="testimonials" className="testimonials">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <motion.h2 {...options}>Testimonials</motion.h2>
                        <motion.p
                            {...options1}
                        >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</motion.p>
                    </div>
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                        <div className="swiper-wrapper">
                            <motion.div
                                {...options}
                                className="swiper-slide">
                                <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} showArrows={true}>

                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                                            <h3>Hamza Ali</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                                            <h3>Ali Junaid</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                                            <h3>Akhtar Chacha</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>

                                </Carousel>

                            </motion.div>

                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </section>{/* End Testimonials Section */}


        </>
    )
}

export default TestimonialsSection