import { motion } from 'framer-motion'
import { FaShieldAlt, FaTools, FaClock, FaCheckCircle, FaBolt, FaRocket, FaHandshake, FaLayerGroup } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const features = [
  { title: 'Experienced Professionals', text: 'Skilled teams with deep expertise in facility operations and property maintenance.', icon: FaShieldAlt },
  { title: 'Affordable Pricing', text: 'Flexible packages that balance premium service with clear, competitive pricing.', icon: FaLayerGroup },
  { title: '24/7 Support', text: 'Rapid support for urgent issues, emergencies, and scheduled maintenance.', icon: FaClock },
  { title: 'Quality Assurance', text: 'Strict service standards, careful supervision, and consistent delivery.', icon: FaCheckCircle },
  { title: 'Quick Response', text: 'Fast mobilization and efficient turnaround for every request.', icon: FaRocket },
  { title: 'Modern Equipment', text: 'Advanced tools and technology for safe, precise, and efficient execution.', icon: FaTools },
  { title: 'Trusted & Reliable', text: 'A reputation built on dependability, transparency, and professionalism.', icon: FaHandshake },
  { title: 'Customized Solutions', text: 'Service plans tailored to the needs of each client and property.', icon: FaBolt },
]

const WhyChooseUsSection = () => (
  <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Why Choose Us"
        title="Premium service standards with dependable execution"
        description="Our approach blends expert care, transparent communication, and a proactive mindset to protect your property and elevate daily operations."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#ef3a04]/10 p-3 text-[#ef3a04]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#383838]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

export default WhyChooseUsSection
