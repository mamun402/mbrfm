import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 1500, label: 'Projects Completed', suffix: '+' },
  { value: 550, label: 'Happy Clients', suffix: '+' },
  { value: 250, label: 'Expert Staff', suffix: '+' },
  { value: 7, label: 'Years of Experience', suffix: '+' },
]

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1300
    const stepTime = 16
    const increment = value / (duration / stepTime)

    const timer = window.setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        window.clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => window.clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const StatsSection = () => (
  <section className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#383838] px-6 py-16 text-white shadow-2xl sm:px-8 lg:px-12">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-center backdrop-blur"
          >
            <p className="text-4xl font-semibold text-[#ef3a04] sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default StatsSection
