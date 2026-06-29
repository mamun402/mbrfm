import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const contactItems = [
  { label: 'Phone', value: '+971 55 636 2982', icon: FaPhoneAlt, href: 'tel:+971 55 636 2982' },
  { label: 'Email', value: 'support@mbrfm.com', icon: FaEnvelope, href: 'mailto:support@mbrfm.com' },
  { label: 'Address', value: 'Abu Dhabi, United Arab Emirates', icon: FaMapMarkerAlt, href: 'https://maps.app.goo.gl/qfbRrjg86BM2BeA47' },
]

const ContactSection = () => (
  <section className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div id="contact" className="space-y-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ef3a04]">Contact Us</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#383838] sm:text-4xl">
            Let’s discuss your next facilities project
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Reach out for premium property maintenance, refurbishment, or tailored facility management support.
          </p>
          <div className="mt-8 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100">
                  <div className="rounded-full bg-[#ef3a04]/10 p-3 text-[#ef3a04]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-base font-medium text-[#383838]">{item.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.575751371238!2d54.531882200000005!3d24.326429100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e396ed1935053%3A0xbcac6968a163be58!2sMBR%20Facilities%20Management!5e0!3m2!1sen!2sbd!4v1782751889501!5m2!1sen!2sbd"
          className="h-72 w-full"
          loading="lazy"
        />
      </div>
    </div>

    <a
      href="https://wa.me/971556362982"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-2xl transition hover:-translate-y-1"
    >
      <FaWhatsapp className="h-5 w-5" />
      WhatsApp
    </a>
  </section>
)

export default ContactSection
