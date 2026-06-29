import { motion } from 'framer-motion'
import { FaBuilding, FaBroom, FaPaintRoller, FaFan, FaTools, FaBolt, FaHammer, FaHome, FaWater, FaWindowMaximize, FaCouch, FaSwimmer, FaWarehouse, FaRulerCombined, FaProjectDiagram } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const services = [
  { title: 'Property Management', description: 'Strategic oversight for residential and commercial properties.', icon: FaBuilding },
  { title: 'House Cleaning Services', description: 'Meticulous cleaning for homes with attention to detail.', icon: FaBroom },
  { title: 'Commercial Cleaning', description: 'Reliable janitorial and maintenance solutions for business premises.', icon: FaWarehouse },
  { title: 'Residential Cleaning', description: 'Tailored cleaning plans for apartments, villas, and residences.', icon: FaHome },
  { title: 'Housekeeping Services', description: 'Professional housekeeping for hospitality and private spaces.', icon: FaBroom },
  { title: 'Sanitization Services', description: 'High-grade sanitization for hygiene-sensitive environments.', icon: FaTools },
  { title: 'Painting Services', description: 'Interior and exterior repainting with premium finishes.', icon: FaPaintRoller },
  { title: 'Waterproofing Services', description: 'Durable waterproofing to protect structures and assets.', icon: FaWater },
  { title: 'HVAC Services', description: 'Efficient climate control maintenance and system care.', icon: FaFan },
  { title: 'MEP Services', description: 'Complete mechanical, electrical, and plumbing support.', icon: FaBolt },
  { title: 'AC Servicing', description: 'Performance checks, repairs, and preventive care.', icon: FaFan },
  { title: 'Electrical Services', description: 'Safe and compliant electrical maintenance and upgrades.', icon: FaBolt },
  { title: 'Carpentry Services', description: 'Custom wooden installations, fittings, and repairs.', icon: FaHammer },
  { title: 'Masonry & Painting', description: 'Surface restoration combined with refined finishing.', icon: FaPaintRoller },
  { title: 'Tiling Services', description: 'Precision tiling for floors, walls, and wet areas.', icon: FaHome },
  { title: 'Rope Access Services', description: 'Safe access solutions for difficult-to-reach exterior work.', icon: FaBuilding },
  { title: 'Window Cleaning Services', description: 'Sparkling glasswork for residential and commercial properties.', icon: FaWindowMaximize },
  { title: 'Facade Cleaning Services', description: 'Exterior restoration to enhance curb appeal and safety.', icon: FaBuilding },
  { title: 'Sofa Cleaning Services', description: 'Deep cleaning for upholstery and fabric furnishings.', icon: FaCouch },
  { title: 'Swimming Pool Cleaning', description: 'Preventive care and sanitation for pools and leisure facilities.', icon: FaSwimmer },
  { title: 'Home Maintenance Services', description: 'Routine upkeep and repair support for every home.', icon: FaTools },
  { title: 'Interior Fit-Outs', description: 'Elegant fit-out delivery for commercial and luxury spaces.', icon: FaRulerCombined },
  { title: 'Space Planning', description: 'Smart design planning for function and flow.', icon: FaProjectDiagram },
  { title: 'Home & Office Refurbishment', description: 'Modern transformation services for living and workspaces.', icon: FaBuilding },
]

const ServicesSection = () => (
  <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Services"
        title="Tailored facility solutions for every property"
        description="From everyday maintenance to high-end refurbishment, our team blends precision, professionalism, and proactive care in every assignment."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#ef3a04]/30 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ef3a04]/10 text-[#ef3a04] transition group-hover:bg-[#ef3a04] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#383838]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </motion.article>
          )
        })}
      </div>
    </div>
  </section>
)

export default ServicesSection
