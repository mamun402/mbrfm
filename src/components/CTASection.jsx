const CTASection = () => (
  <section id="quote" className="px-4 pb-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_left,_rgba(239,58,4,0.2),_transparent_35%),linear-gradient(135deg,_#383838_0%,_#232323_100%)] px-6 py-16 text-white shadow-2xl sm:px-10 lg:px-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ef3a04]">Request a Quote</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Looking for Reliable Facilities Management Services?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Let our team create a dependable service plan for your residential, commercial, or hospitality property.
          </p>
        </div>
        <a href="#contact" className="inline-flex rounded-full bg-[#ef3a04] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c82f00]">
          Request a Quote
        </a>
      </div>
    </div>
  </section>
)

export default CTASection
