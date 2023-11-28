import { motion } from 'framer-motion';
import Link from 'next/dist/client/link'
const HeroSection = () => {
    const options = {
        initial: {
            x: -250,
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
        transition: { delay: .2 },
    };
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container" data-aos="zoom-out" data-aos-delay={100}>
                    <div className="row">
                        <motion.div
                            {...options}
                            className="col-xl-6">
                            <h1>Bettter digital experience with Artline</h1>
                            <h2>We are team of talented Developers and Designers making websites for Businesses</h2>
                            <Link href="/about" className="btn-get-started scrollto">Get Started</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HeroSection