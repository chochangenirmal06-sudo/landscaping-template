"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Phone } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { y: 30 },
  visible: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const activeServices = clientConfig.services.filter(s => s.active);

  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef  = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const ctaInView  = useInView(ctaRef,  { once: true, margin: "-80px" });

  return (
    <div className="pt-32" style={{ background: "#F5F0E8" }}>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — PAGE HEADER
      ═══════════════════════════════════════════════════════════════ */}
      <div className="text-center max-w-3xl mx-auto px-8 pb-16">
        <p
          className="font-dmsans text-xs tracking-[0.32em] uppercase mb-5"
          style={{ color: "#C89B3E" }}
        >
          — WHAT WE OFFER —
        </p>
        <h1
          className="font-playfair font-normal leading-tight"
          style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "#1A2E1A" }}
        >
          Everything your yard
          <br />
          <em className="italic" style={{ color: "#C89B3E" }}>deserves.</em>
        </h1>
        <p
          className="font-dmsans font-light text-lg leading-relaxed mt-6 max-w-xl mx-auto"
          style={{ color: "rgba(28,58,42,0.60)" }}
        >
          From weekly maintenance to full landscape transformations — we handle it
          all, end to end.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — SERVICES GRID
      ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <motion.div
          ref={gridRef}
          variants={stagger}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeServices.map((s) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-xl cursor-default"
              style={{ border: "1px solid transparent", transition: "border-color 0.3s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,154,58,0.4)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "transparent"; }}
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <span
                  className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-dmsans"
                  style={{ color: "#C89B3E" }}
                >
                  {s.badge}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6" style={{ background: "#1C3A2A" }}>
                <h3
                  className="font-playfair text-xl font-medium leading-snug"
                  style={{ color: "#F5F0E8" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-dmsans text-sm font-light leading-relaxed mt-2"
                  style={{ color: "rgba(245,240,232,0.60)" }}
                >
                  {s.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-dmsans text-xs flex items-center gap-2"
                      style={{ color: "rgba(245,240,232,0.55)" }}
                    >
                      <span style={{ color: "#C89B3E" }}>·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1 mt-5 font-dmsans text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity duration-200"
                  style={{ color: "#C89B3E" }}
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — BOTTOM CTA STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        ref={ctaRef}
        initial={{ y: 30 }}
        animate={ctaInView ? { y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-20 text-center px-8"
        style={{ background: "#F5F0E8" }}
      >
        <h2
          className="font-playfair font-normal leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1C3A2A" }}
        >
          Not sure what you need?
        </h2>
        <p
          className="font-dmsans font-light text-base leading-relaxed mt-4 max-w-md mx-auto"
          style={{ color: "rgba(28,58,42,0.60)" }}
        >
          We&apos;ll assess your property for free and recommend exactly what it
          needs. No obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="/contact"
            className="font-dmsans font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full transition-colors duration-200"
            style={{ background: "#C89B3E", color: "#1A2E1A" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#E8C06A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#C89B3E"; }}
          >
            GET A FREE QUOTE →
          </a>
          <a
            href={clientConfig.business.phoneHref}
            className="inline-flex items-center gap-2.5 font-dmsans font-semibold text-sm tracking-wide px-10 py-4 rounded-full transition-colors duration-200"
            style={{ border: "1px solid rgba(28,58,42,0.35)", color: "#1C3A2A" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(28,58,42,0.70)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(28,58,42,0.35)"; }}
          >
            <Phone size={14} strokeWidth={2} />
            {clientConfig.business.phone}
          </a>
        </div>
      </motion.div>

    </div>
  );
}
