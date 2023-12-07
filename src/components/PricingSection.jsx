import { getAllPrices } from '@/redux/actions/price';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

    const dispatch = useDispatch()
    const { pricings } = useSelector(state => state.price)
    console.log("main hoon pricing", pricings);

    useEffect(() => {
        dispatch(getAllPrices())
    }, [dispatch])
    return (

        <>
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="pricing section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <motion.h2
                            {...options}
                        >Pricing</motion.h2>
                        <motion.p {...options1}>Big impact, small cost. Elevate your brand with our budget-friendly digital services.</motion.p>
                    </div>
                    <div className="row">
                        {
                            pricings?.map(price => (
                                <motion.div {...options} className="col-lg-4 col-md-6 mt-4 mt-md-0 mb-4">

                                    <div key={price._id} className="box" data-aos="fade-up" data-aos-delay={100}>
                                        <h3>{price?.packageName}</h3>
                                        <h4><sup>$</sup>{price?.price}</h4>
                                        <div dangerouslySetInnerHTML={{ __html: price.features }} />

                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>



                                </motion.div>
                            ))
                        }

                    </div>
                </div>
            </section>{/* End Pricing Section */}

        </>
    )
}

export default PricingSection