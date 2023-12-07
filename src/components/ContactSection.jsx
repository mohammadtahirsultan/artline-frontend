import React from "react";
import { motion } from 'framer-motion'
const Contact = () => {
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
            x: 200,
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
        transition: { delay: .7 },
    };
    const options2 = {
        initial: {
            x: -200,
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
        transition: { delay: .5},
    };
    const options3 = {
        initial: {
            x: -200,
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
        transition: { delay: .8},
    };
    const options4 = {
        initial: {
            x: -200,
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
        transition: { delay: .9},
    };
    return (
        <>
            <section className="text-gray-600 body-font relative margin">
                <motion.div {...options} className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <motion.h2 {...options1} className="text-gray-900 text-lg mb-1 text-center mb-3 font-bold title-font">Contact Us</motion.h2>
                        <motion.p {...options2} className="leading-relaxed mb-5 text-gray-600 text-center">We Will Be Happy to Listen From You</motion.p>
                        <motion.div {...options1} className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </motion.div>
                        <motion.p {...options3} className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </motion.p>
                        <motion.p {...options4} className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                        </motion.p>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
                     
                    </div>
                </motion.div>
            </section>

        </>
    );
};

export default Contact;


