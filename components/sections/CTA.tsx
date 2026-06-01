"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

const BADGES = [
  "No-Obligation Estimate",
  "Licensed & Insured",
  "Response Within 2 Hours",
];

const MAP_URL = clientConfig.business.mapEmbedUrl;

export default function CTA() {
  return (
    <section id="estimate" className="relative py-[100px]" style={{ background: "var(--color-bg)" }}>

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
            <p className="font-dmsans text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--color-accent-dark)" }}>
              — Get Started —
            </p>

            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-normal leading-tight" style={{ color: "var(--color-bg-text)" }}>
              Your dream yard
              <br />
              is one call
              <br />
              <em className="italic" style={{ color: "var(--color-accent-dark)" }}>away.</em>
            </h2>

            <p
              className="font-sans font-light text-lg leading-relaxed max-w-md mt-6 mb-8"
              style={{ color: "var(--color-text-muted)" }}
            >
              No pressure. No surprises. Just a yard you&apos;ll love coming home to.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/contact"
                className="font-dmsans font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-colors duration-200"
                style={{ background: "var(--color-accent-dark)", color: "var(--color-accent-text)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-dark)"; }}
              >
                {clientConfig.business.ctaLabel} →
              </a>
              <a
                href={clientConfig.business.phoneHref}
                className="inline-flex items-center gap-2.5 border font-dmsans font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-colors duration-200"
                style={{ borderColor: "rgb(var(--color-bg-text-rgb) / 0.25)", color: "var(--color-bg-text)", background: "transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgb(var(--color-bg-text-rgb) / 0.60)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgb(var(--color-bg-text-rgb) / 0.25)"; }}
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
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span style={{ color: "var(--color-accent-dark)" }}>✓</span> {badge}
                  </span>
                  {i < BADGES.length - 1 && (
                    <span
                      className="hidden sm:block w-px h-3 mx-6"
                      style={{ background: "rgb(var(--color-bg-text-rgb) / 0.15)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Google Maps embed */}
          <div className="hidden lg:block relative" style={{ height: "100%", minHeight: "320px", borderRadius: "16px", border: "1px solid rgb(var(--color-bg-text-rgb) / 0.10)", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
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
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgb(var(--color-primary-rgb) / 0.15)" }}
            />
          </div>

        </div>
      </motion.div>

    </section>
  );
}
