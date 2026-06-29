import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import StatsSection from './components/StatsSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <HeroSection />
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_0.95fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ef3a04]">About Us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#383838] sm:text-4xl">
              A premium facilities partner built on trust, precision, and performance.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-600">
            <p>
              At MBR Facilities Management, we take pride in delivering top-notch housekeeping services that ensure your space is always spotless, organized, and welcoming. Our dedicated team of professionals is committed to handling every detail, from daily tidying to deep cleaning, creating a pristine environment where you can relax and thrive. With a focus on efficiency, reliability, and personalized care, we make maintaining a clean and comfortable home or workspace effortless for you. Experience the joy of a perfectly managed space with our expert housekeeping services.
            </p>
            <p>
              We are committed to delivering measurable value through thoughtful care, proven processes, and responsive service that supports comfort, efficiency, and long-term property performance.
            </p>
          </div>
        </div>
      </section>
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-40 rounded-full bg-[#ef3a04] p-3 text-white shadow-2xl transition hover:bg-[#c82f00]"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </div>
  )
}

export default App
