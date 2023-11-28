import HeroSection from '@/components/HeroSection'
import ClientSection from '@/components/ClientSection'
import About from './about'
import AboutSection from '@/components/AboutSection'
import CountSection from '@/components/CountSection'
import TabSection from '@/components/TabSection'
import ServiceSection from '@/components/ServiceSection'
import { useEffect } from 'react'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import TeamSection from '@/components/TeamSection'
import PricingSection from '@/components/PricingSection'

const Home = () => {

  useEffect(() => {
    const PureCounterScript = require('../../public/vendor/purecounter/purecounter_vanilla');
    PureCounterScript();
  }, []);
  return (
    <main id='main'>
      <HeroSection />
      <ClientSection />
      <AboutSection />
      <CountSection />
      <TabSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}

export default Home