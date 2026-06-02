"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Phone } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

const fadeUp: Variants = {
  hidden: { y: 30 },
  visible: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function ServicesPage() {
  const activeServices = clientConfig.services.filter(s => s.active);

  const DEFAULT_IMAGES = [
    "/images/Lawn%20Care%20%26%20Maintenance1.png",
    "/images/Landscape%20Design1.png",
    "/images/Irrigation%20Systems1.png",
    "/images/Hardscaping%20%26%20Patios1.png",
    "/images/Seasonal%20Cleanup1.png",
    "/images/Tree%20%26%20Shrub%20Care1.png",
    "/images/Mulching%20%26%20Soil%20Health1.png",
    "/images/Garden%20Bed%20Design1.png",
  ];

  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef  = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const ctaInView  = useInView(ctaRef,  { once: true, margin: "-80px" });

  return (
    <div className="pt-[160px]" style={{ background: "var(--color-bg)" }}>

      {/* SECTION 1 — PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto px-8 pb-16">
        <p className="font-dmsans text-xs tracking-[0.32em] uppercase mb-5" style={{ color: "var(--color-accent)" }}>
          — WHAT WE OFFER —
        </p>
        <h1 className="font-playfair font-normal leading-tight" style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "var(--color-bg-text)" }}>
          Everything your yard
          <br />
          <em className="italic" style={{ color: "var(--color-accent)" }}>deserves.</em>
        </h1>
        <p
          className="font-dmsans font-light text-lg leading-relaxed mt-6 max-w-xl mx-auto"
          style={{ color: "rgb(var(--color-bg-text-rgb) / 0.60)" }}
        >
          From weekly maintenance to full landscape transformations — we handle it all, end to end.
        </p>
      </div>

      {/* SECTION 2 — SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <motion.div
          ref={gridRef}
          variants={stagger}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeServices.map((s, index) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-xl cursor-default"
              style={{ border: "1px solid transparent", transition: "border-color 0.3s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgb(var(--color-accent-rgb) / 0.4)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "transparent"; }}
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <Image src={s.image || DEFAULT_IMAGES[index % DEFAULT_IMAGES.length]} alt={s.name} fill loading="eager" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <span
                  className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-dmsans"
                  style={{ color: "var(--color-accent)" }}
                >
                  {s.badge}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6" style={{ background: "var(--color-primary)" }}>
                <h3 className="font-playfair text-xl font-medium leading-snug" style={{ color: "var(--color-primary-text)" }}>
                  {s.name}
                </h3>
                <p className="font-dmsans text-sm font-light leading-relaxed mt-2" style={{ color: "rgb(var(--color-primary-text-rgb) / 0.60)" }}>
                  {s.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((bullet) => (
                    <li key={bullet} className="font-dmsans text-xs flex items-center gap-2" style={{ color: "rgb(var(--color-primary-text-rgb) / 0.55)" }}>
                      <span style={{ color: "var(--color-accent)" }}>·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1 mt-5 font-dmsans text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity duration-200"
                  style={{ color: "var(--color-accent)" }}
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SECTION 3 — BOTTOM CTA */}
      <motion.div
        ref={ctaRef}
        initial={{ y: 30 }}
        animate={ctaInView ? { y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-20 text-center px-8"
        style={{ background: "var(--color-bg)" }}
      >
        <h2 className="font-playfair font-normal leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-bg-text)" }}>
          Not sure what you need?
        </h2>
        <p
          className="font-dmsans font-light text-base leading-relaxed mt-4 max-w-md mx-auto"
          style={{ color: "rgb(var(--color-bg-text-rgb) / 0.60)" }}
        >
          We&apos;ll assess your property for free and recommend exactly what it needs. No obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="/contact"
            className="font-dmsans font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full transition-colors duration-200"
            style={{ background: "var(--color-accent)", color: "var(--color-accent-text)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-light)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent)"; }}
          >
            GET A FREE QUOTE →
          </a>
          <a
            href={clientConfig.business.phoneHref}
            className="inline-flex items-center gap-2.5 font-dmsans font-semibold text-sm tracking-wide px-10 py-4 rounded-full transition-colors duration-200"
            style={{ border: "1px solid rgb(var(--color-bg-text-rgb) / 0.35)", color: "var(--color-bg-text)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgb(var(--color-bg-text-rgb) / 0.70)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgb(var(--color-bg-text-rgb) / 0.35)"; }}
          >
            <Phone size={14} strokeWidth={2} />
            {clientConfig.business.phone}
          </a>
        </div>
      </motion.div>

    </div>
  );
}
