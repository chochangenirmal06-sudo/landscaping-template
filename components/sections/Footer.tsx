import { clientConfig } from "@/lib/client.config";

const activeServices = clientConfig.services.filter(s => s.active);

const COMPANY_LINKS = [
  { label: "Home",     href: "/"        },
  { label: "About Us", href: "/about"   },
  { label: "Our Work", href: "#our-work"},
  { label: "FAQ",      href: "/#faq"    },
];

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon, href: clientConfig.social.instagram },
  { label: "Facebook",  Icon: FacebookIcon,  href: clientConfig.social.facebook  },
];

export default function Footer() {
  return (
    <footer
      className="bg-brand-primary mt-0"
      style={{ borderTop: "1px solid rgb(var(--color-accent-rgb) / 0.25)" }}
    >

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">

          {/* Column 1 — Brand */}
          <div className="flex flex-col">
            <a href="/" className="font-playfair italic text-2xl text-brand-primary-text select-none">
              {clientConfig.business.name}
            </a>
            <p className="font-dmsans text-[10px] tracking-[0.22em] uppercase text-brand-primary-text/40 mt-3">
              {clientConfig.business.serviceArea}
            </p>
            <div className="flex items-center gap-5 mt-8 justify-center md:justify-start">
              {SOCIALS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-brand-primary-text/40 hover:text-brand-primary-text transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p className="font-dmsans font-semibold text-2xl uppercase tracking-wider text-brand-primary-text mb-8">
              Services
            </p>
            <ul className="space-y-4">
              {activeServices.map((service) => (
                <li key={service.slug}>
                  <a
                    href="/services"
                    className="font-dmsans text-sm uppercase tracking-widest text-brand-primary-text/55 hover:text-brand-primary-text transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p className="font-dmsans font-semibold text-2xl uppercase tracking-wider text-brand-primary-text mb-8">
              Company
            </p>
            <ul className="space-y-4">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-dmsans text-sm uppercase tracking-widest text-brand-primary-text/55 hover:text-brand-primary-text transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Get In Touch */}
          <div>
            <p className="font-dmsans font-semibold text-2xl uppercase tracking-wider text-brand-primary-text mb-8">
              Get In Touch
            </p>
            <div className="space-y-4">
              <a
                href={clientConfig.business.phoneHref}
                className="block font-dmsans text-base uppercase tracking-widest font-semibold hover:opacity-80 transition-opacity duration-200"
                style={{ color: "var(--color-accent)" }}
              >
                {clientConfig.business.phone}
              </a>
              <a
                href={`mailto:${clientConfig.business.email}`}
                className="block font-dmsans text-sm uppercase tracking-widest text-brand-primary-text/55 hover:text-brand-primary-text transition-colors duration-200"
              >
                {clientConfig.business.email}
              </a>
              <p className="font-dmsans text-sm uppercase tracking-widest text-brand-primary-text/55">
                {clientConfig.business.serviceArea}
              </p>
              <p className="font-dmsans text-sm uppercase tracking-widest text-brand-primary-text/55">
                {clientConfig.business.hours}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgb(var(--color-accent-rgb) / 0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dmsans text-xs uppercase tracking-widest text-brand-primary-text/30">
            © 2025 {clientConfig.business.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="font-dmsans text-xs uppercase tracking-widest text-brand-primary-text/30 hover:text-brand-primary-text/60 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="font-dmsans text-xs uppercase tracking-widest text-brand-primary-text/30 hover:text-brand-primary-text/60 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
