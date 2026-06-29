import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const scrollToSection = (event, id) => {
  event.preventDefault()
  const section = document.getElementById(id)
  const header = document.querySelector('header')
  const offset = header ? header.offsetHeight + 16 : 96
  if (section) {
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden bg-slate-950">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,58,4,0.35),_transparent_35%),linear-gradient(90deg,rgba(8,15,26,0.95),rgba(8,15,26,0.7))]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_25%)]" />

    <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-white/90 backdrop-blur">
          Elevate Your Space Elevate Your Life
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Your Trusted Partner for Complete Facilities Management Solutions
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          MBR Facilities Management delivers dependable property maintenance, housekeeping,
          MEP support, and premium facility care across the UAE with a focus on quality,
          safety, and long-term value.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            onClick={(event) => scrollToSection(event, 'contact')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ef3a04] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c82f00]"
          >
            Contact Us <FaArrowRight />
          </a>
          <a
            href="#services"
            onClick={(event) => scrollToSection(event, 'services')}
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-[#ef3a04] hover:text-[#ef3a04]"
          >
            Our Services
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
      >
        <div className="rounded-[1.5rem] bg-white/90 p-6 text-[#383838] shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ef3a04]">
            Why Clients Choose Us
          </p>
          <div className="mt-6 space-y-4">
            {[
              'Certified professionals and vetted technicians',
              'Fast response and transparent project delivery',
              '24/7 support for urgent maintenance needs',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ef3a04]" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default HeroSection
