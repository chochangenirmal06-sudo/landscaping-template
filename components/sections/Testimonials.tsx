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
  quote,
  name,
  location,
  initials,
}: {
  quote: string;
  name: string;
  location: string;
  initials: string;
}) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-7 flex flex-col gap-4 select-none" style={{ border: "1px solid rgba(200, 154, 58, 0.35)" }}>
      {/* Quote mark */}
      <span className="font-playfair italic text-[56px] leading-none text-[#C89B3E]/35 -mb-2">
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="font-playfair italic text-[#1A2E1A] text-[15px] leading-relaxed flex-1">
        {quote}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-black/[0.07]" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1A2E1A] flex items-center justify-center flex-shrink-0">
          <span className="font-dmsans text-[11px] font-semibold text-[#F5F0E8] tracking-wide">
            {initials}
          </span>
        </div>
        <div>
          <p className="font-dmsans font-semibold text-[#1A2E1A] text-sm leading-tight">
            {name}
          </p>
          <p className="font-dmsans text-[10px] tracking-[0.18em] uppercase text-[#1A2E1A]/40 mt-0.5">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#F5F0E8] py-[100px] overflow-hidden">

      {/* Header */}
      <motion.div
        className="text-center px-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-px bg-[#C89B3E]" />
          <p className="font-dmsans text-xs tracking-[0.25em] uppercase text-[#C89B3E]">
            In Their Words
          </p>
          <span className="w-8 h-px bg-[#C89B3E]" />
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl font-normal text-[#1A2E1A] leading-tight">
          From our{" "}
          <em className="italic text-[#C89B3E]">neighbors.</em>
        </h2>
      </motion.div>

      {/* Scrolling rows */}
      <div className="flex flex-col gap-5">

        {/* Row 1 — scrolls right (→) */}
        <div className="row-1 relative overflow-hidden">
          <div className="marquee-right flex gap-6 w-max">
            {[...activeTestimonials, ...activeTestimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: "linear-gradient(to right, #F5F0E8 0%, transparent 15%, transparent 85%, #F5F0E8 100%)" }}
          />
        </div>

        {/* Row 2 — scrolls left (←) */}
        <div className="row-2 relative overflow-hidden">
          <div className="marquee-left flex gap-6 w-max">
            {[...activeTestimonials, ...activeTestimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: "linear-gradient(to right, #F5F0E8 0%, transparent 15%, transparent 85%, #F5F0E8 100%)" }}
          />
        </div>

      </div>
    </section>
  );
}
