const SectionTitle = ({ eyebrow, title, description, centered = true }) => (
  <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    {eyebrow ? (
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#ef3a04]">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="text-3xl font-semibold tracking-tight text-[#383838] sm:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    ) : null}
  </div>
)

export default SectionTitle
