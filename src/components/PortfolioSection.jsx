import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
    title: 'Luxury Residence Refurbishment',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    title: 'Corporate Facility Upgrade',
  },
  {
    src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80',
    title: 'Hospitality Property Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80',
    title: 'Residential Fit-Out Delivery',
  },
]

const PortfolioSection = () => {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section id="portfolio" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Portfolio"
          title="Recent projects that speak for themselves"
          description="Our completed work reflects the balance of premium aesthetics, operational excellence, and long-term value."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm"
              onClick={() => setActiveImage(item)}
            >
              <img src={item.src} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#383838]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">Premium property care and refurbishment.</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-4 py-10 backdrop-blur">
          <div className="relative w-full max-w-4xl rounded-[2rem] bg-white p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-[#383838] shadow"
            >
              <FaTimes className="h-5 w-5" />
            </button>
            <img src={activeImage.src} alt={activeImage.title} className="max-h-[70vh] w-full rounded-[1.5rem] object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-[#383838]">{activeImage.title}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default PortfolioSection
