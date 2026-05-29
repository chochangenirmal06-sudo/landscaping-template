"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

const BADGES = [
  "No-Obligation Estimate",
  "Licensed & Insured",
  "Response Within 2 Hours",
];

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110844.72736442!2d-97.8394!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b592d8d2ac6b%3A0x2dc4a0e2035cd8b2!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

export default function CTA() {
  return (
    <section id="estimate" className="py-[100px]" style={{ background: "#F5F0E8" }}>

      {/* Two-column content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-stretch">

          {/* Left — text content */}
          <div>
            {/* Eyebrow */}
            <p className="font-dmsans text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "#B8902A" }}>
              — Get Started —
            </p>

            {/* Heading */}
            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-normal leading-tight" style={{ color: "#1C2B1A" }}>
              Your dream yard
              <br />
              is one call
              <br />
              <em className="italic" style={{ color: "#B8902A" }}>away.</em>
            </h2>

            {/* Subtext */}
            <p
              className="font-sans font-light text-lg leading-relaxed max-w-md mt-6 mb-8"
              style={{ color: "#6B7280" }}
            >
              No pressure. No surprises. Just a yard you&apos;ll love coming home to.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/contact"
                className="font-dmsans font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-colors duration-200"
                style={{ background: "#B8902A", color: "#1C2B1A" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#9A7820"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#B8902A"; }}
              >
                GET A FREE QUOTE →
              </a>
              <a
                href={clientConfig.business.phoneHref}
                className="inline-flex items-center gap-2.5 border font-dmsans font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-colors duration-200"
                style={{ borderColor: "rgba(28,43,26,0.25)", color: "#1C2B1A", background: "transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(28,43,26,0.60)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(28,43,26,0.25)"; }}
              >
                <Phone size={14} strokeWidth={2} />
                {clientConfig.business.phone}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-start mt-10 gap-3 sm:gap-0">
              {BADGES.map((badge, i) => (
                <div key={badge} className="flex items-center">
                  <span
                    className="font-sans font-light text-xs tracking-[0.15em] uppercase whitespace-nowrap"
                    style={{ color: "#6B7280" }}
                  >
                    <span style={{ color: "#B8902A" }}>✓</span> {badge}
                  </span>
                  {i < BADGES.length - 1 && (
                    <span
                      className="hidden sm:block w-px h-3 mx-6"
                      style={{ background: "rgba(28,43,26,0.15)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Google Maps embed (hidden on mobile) */}
          <div className="hidden lg:block relative" style={{ height: "100%", minHeight: "320px", borderRadius: "16px", border: "1px solid rgba(28,43,26,0.10)", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
            <iframe
              src={MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${clientConfig.business.fullName} — ${clientConfig.business.city}, ${clientConfig.business.state}`}
            />
            {/* Subtle dark green tint overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(28,58,42,0.15)" }}
            />
          </div>

        </div>
      </motion.div>



    </section>
  );
}
