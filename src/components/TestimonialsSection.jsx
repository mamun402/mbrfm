import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const testimonials = [
  {
    name: 'Aisha Al Mansoori',
    quote: 'MBR delivered remarkable care for our villa and responded instantly whenever maintenance was needed.',
  },
  {
    name: 'Khalid Rahman',
    quote: 'Their team is proactive, courteous, and always on top of quality. It feels like a true partnership.',
  },
  {
    name: 'Sara Haddad',
    quote: 'The level of professionalism and attention to detail is exceptional across every service.',
  },
]

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
        <SectionTitle
          eyebrow="Testimonials"
          title="What our clients say"
          description="Trusted by property owners, managers, and businesses seeking dependable facilities care."
        />

        <div className="mt-10 rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-xl sm:p-10">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`h-2.5 rounded-full transition ${idx === index ? 'w-8 bg-[#ef3a04]' : 'w-2.5 bg-white/30'}`}
                  onClick={() => setIndex(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={prev} className="rounded-full border border-white/20 p-3 transition hover:bg-white/10">
                <FaArrowLeft />
              </button>
              <button type="button" onClick={next} className="rounded-full border border-white/20 p-3 transition hover:bg-white/10">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <FaQuoteLeft className="text-4xl text-[#ef3a04]" />
              <p className="mt-5 text-xl leading-9 text-slate-200">“{current.quote}”</p>
              <div className="mt-8">
                <p className="font-semibold text-white">{current.name}</p>
                <p className="text-sm text-slate-400">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
