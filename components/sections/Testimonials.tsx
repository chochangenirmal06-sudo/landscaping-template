"use client";

import { motion } from "framer-motion";
import { clientConfig } from "@/lib/client.config";

function getInitials(name: string): string {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

const activeTestimonials = clientConfig.testimonials
  .filter(t => t.active)
  .map(t => ({
    quote:    t.text,
    name:     t.name,
    location: t.location.toUpperCase(),
    initials: getInitials(t.name),
  }));

function TestimonialCard({
  quote, name, location, initials,
}: {
  quote: string; name: string; location: string; initials: string;
}) {
  return (
    <div
      className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-7 flex flex-col gap-4 select-none"
      style={{ border: "1px solid rgb(var(--color-accent-rgb) / 0.35)" }}
    >
      {/* Quote mark */}
      <span className="font-playfair italic text-[56px] leading-none text-brand-accent/35 -mb-2">
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="font-dmsans text-brand-bg-text text-[15px] leading-relaxed flex-1">
        {quote}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-black/[0.07]" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
          <span className="font-dmsans text-[11px] font-semibold text-brand-primary-text tracking-wide">
            {initials}
          </span>
        </div>
        <div>
          <p className="font-dmsans font-semibold text-brand-bg-text text-sm leading-tight">
            {name}
          </p>
          <p className="font-dmsans text-[10px] tracking-[0.18em] uppercase text-brand-bg-text/40 mt-0.5">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-brand-bg py-[100px] overflow-hidden">

      {/* Header */}
      <motion.div
        className="text-center px-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-px bg-brand-accent" />
          <p className="font-dmsans text-xs tracking-[0.25em] uppercase text-brand-accent">
            In Their Words
          </p>
          <span className="w-8 h-px bg-brand-accent" />
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl font-normal text-brand-bg-text leading-tight">
          From our{" "}
          <em className="italic text-brand-accent">neighbors.</em>
        </h2>
      </motion.div>

      {/* Scrolling rows */}
      <div className="flex flex-col gap-5">

        {/* Row 1 — scrolls right */}
        <div className="row-1 relative overflow-hidden">
          <div className="marquee-right flex gap-6 w-max">
            {[...activeTestimonials, ...activeTestimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: "linear-gradient(to right, var(--color-bg) 0%, transparent 15%, transparent 85%, var(--color-bg) 100%)" }}
          />
        </div>

        {/* Row 2 — scrolls left */}
        <div className="row-2 relative overflow-hidden">
          <div className="marquee-left flex gap-6 w-max">
            {[...activeTestimonials, ...activeTestimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: "linear-gradient(to right, var(--color-bg) 0%, transparent 15%, transparent 85%, var(--color-bg) 100%)" }}
          />
        </div>

      </div>

      {/* Cream → Dark wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
        zIndex: 10, lineHeight: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "64px" }}>
          <path d="M0,44 C240,8 600,72 960,28 C1140,8 1320,56 1440,24 L1440,64 L0,64 Z"
            fill="var(--color-primary)" />
        </svg>
      </div>
    </section>
  );
}
