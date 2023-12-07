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
                        ><strong> Artline</strong> is Absolute legend, highest service possible. Was helped through the entire process, even through server hosting. Was very happy to work on revisions and provide us a propoer service and product! Thank you to the team of <strong> Artline</strong>! Will definetly be back for more work.                        .</motion.p>
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
                                            <h3>dengnoi</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Have been working with <strong> Artline</strong> for over 2 years, Very good at what he does and also revision communication is fast. Reliable and fast service . I highly recommend <strong> Artline</strong> to anyone. who's looking to build and have anything fixed on their websites.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                                            <h3>stacey_zackin</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                               <strong> Artline</strong> was very easy to work with, very responsive to my needs and requests and added some wonderful creative additions to the website template we chose. I also was not as quick to provide updates as I was hoping to be and he was very patient. I look forward to working together again with <strong> Artline</strong>.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                                            <h3>lexiehadley</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                I am a returning customer of <strong> Artline</strong> because the work is so well-done and FAST! I am very pleased. I have sent issues that I thought were pretty complicated but they were fixed in no time! I highly recommend <strong> Artline</strong>
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