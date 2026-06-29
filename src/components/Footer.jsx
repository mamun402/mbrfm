import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-sm">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="MBR logo"
            className="h-11 w-18"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ef3a04]">MBR</p>
            <p className="text-base font-semibold text-[#383838]">Facilities Management</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Elevate Your Space Elevate Your Life. <br />MBR Facilities Management delivers dependable property maintenance, housekeeping, MEP support, and premium facility care across the UAE with a focus on quality, safety, and long-term value.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#383838]">Quick Links</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li><a href="#about" className="transition hover:text-[#ef3a04]">About Us</a></li>
          <li><a href="#services" className="transition hover:text-[#ef3a04]">Services</a></li>
          <li><a href="#portfolio" className="transition hover:text-[#ef3a04]">Portfolio</a></li>
          <li><a href="#contact" className="transition hover:text-[#ef3a04]">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#383838]">Services</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>Property Management</li>
          <li>Cleaning & Housekeeping</li>
          <li>MEP & HVAC</li>
          <li>Refurbishment & Fit-Outs</li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#383838]">Follow Us</h3>
        <div className="mt-4 flex gap-3">
          {[
            { icon: FaFacebookF, href: 'https://www.facebook.com/mbr.facility' },
            { icon: FaInstagram, href: 'https://instagram.com/mbr.facility' },
            { icon: FaYoutube, href: 'https://www.youtube.com/@mbr.facility' },
            { icon: FaTiktok, href: 'https://www.tiktok.com/@mbr.facility' },
          ].map((social) => {
            const Icon = social.icon
            return (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-3 text-[#383838] transition hover:border-[#ef3a04] hover:text-[#ef3a04]">
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </div>

    <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 MBR Facilities Management. All rights reserved.</p>
      <p>Professional. Trusted. Premium.</p>
    </div>
  </footer>
)

export default Footer
