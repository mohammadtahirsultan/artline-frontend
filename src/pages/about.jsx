import AboutSection from '@/components/AboutSection'
import ClientSection from '@/components/ClientSection'
import CountSection from '@/components/CountSection'
import TabSection from '@/components/TabSection'
import React from 'react'

const About = () => {
    return (
        <>
            <main id="main">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                        <p>At Artline, we're masters of software innovation. Our expertise spans idea prototyping, MVP development, and custom software solutions. We're all about understanding your business and delivering tailored solutions across diverse domains. Welcome to our world of technology transformation.

                        </p>
                    </div>
                </div>
                {/* ======= Clients Section ======= */}
                <ClientSection />
                {/* End Clients Section */}
                <AboutSection />
                {/* ======= Counts Section ======= */}
                <CountSection />
                {/* End Counts Section */}
                {/* ======= Tabs Section ======= */}
                <TabSection />
                {/* End Tabs Section */}


            </main>

        </>
    )
}

export default About