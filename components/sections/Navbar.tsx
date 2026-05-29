"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { clientConfig } from "@/lib/client.config";

const NAV_LINKS = [
  { label: "Home",     href: "/"         },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/gallery"  },
  { label: "About",    href: "/about"    },
  { label: "Contact",  href: "/contact"  },
];

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

function smoothScrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => smoothScrollTo(href), 50);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#1A2E1A] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-playfair italic text-2xl font-normal select-none text-[#F5F0E8]"
          >
            {clientConfig.business.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = href.startsWith("/") && pathname === href;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={href.startsWith("#") ? (e) => { e.preventDefault(); smoothScrollTo(href); } : undefined}
                  className={`relative font-playfair font-bold uppercase tracking-widest text-xs
                              transition-colors duration-300
                              after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#C89B3E]
                              hover:after:w-full after:transition-all after:duration-300
                              ${active ? "text-[#C89B3E]" : "text-[#F5F0E8]/70 hover:text-[#C89B3E]"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={clientConfig.business.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-sm text-[#F5F0E8] px-4 py-2 rounded-full transition-colors duration-200 hover:border-[rgba(245,240,232,0.7)]"
              style={{ border: "1px solid rgba(245,240,232,0.4)", borderRadius: "999px" }}
            >
              <Phone size={13} strokeWidth={2} />
              {clientConfig.business.phone}
            </a>
            <a
              href="#estimate"
              onClick={(e) => { e.preventDefault(); smoothScrollTo("#estimate"); }}
              className="hidden md:block bg-[#C89B3E] text-[#1A2E1A] text-sm font-semibold px-6 py-2.5 rounded-full tracking-wide hover:bg-[#E8C06A] transition-colors duration-200"
            >
              Get A Free Quote
            </a>
            <button
              className="md:hidden text-[#F5F0E8]"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col bg-[#1A2E1A]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-1 flex-col items-center justify-center gap-8"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = href.startsWith("/") && pathname === href;
                return (
                  <motion.a
                    key={href}
                    href={href}
                    variants={itemVariants}
                    onClick={href.startsWith("#") ? (e) => { e.preventDefault(); handleNavClick(href); } : () => setMobileOpen(false)}
                    className={`font-playfair text-3xl transition-colors duration-200
                                ${active ? "text-[#C89B3E]" : "text-white hover:text-[#C89B3E]"}`}
                  >
                    {label}
                  </motion.a>
                );
              })}

              <motion.a
                href={clientConfig.business.phoneHref}
                variants={itemVariants}
                className="font-dmsans text-lg text-white/60 hover:text-white transition-colors duration-200 mt-4"
              >
                {clientConfig.business.phone}
              </motion.a>

              <motion.a
                href="#estimate"
                variants={itemVariants}
                onClick={(e) => { e.preventDefault(); handleNavClick("#estimate"); }}
                className="w-full max-w-xs rounded-full bg-[#C89B3E] px-8 py-4 font-dmsans text-sm font-semibold tracking-wide text-[#1A2E1A] hover:bg-[#E8C06A] transition-colors duration-200 text-center"
              >
                Get A Free Quote
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
