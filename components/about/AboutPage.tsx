"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { clientConfig } from "@/lib/client.config";

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { y: 30 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─────────────────────────────────────────────────────────────────────────────
// Static image data (not in clientConfig)
// ─────────────────────────────────────────────────────────────────────────────

const GRID_TOP_RIGHT = [
  { src: "/images/portfolio2.png", alt: "Design project",      category: "DESIGN"       },
  { src: "/images/portfolio3.png", alt: "Irrigation project",  category: "IRRIGATION"   },
];

const GRID_BOTTOM = [
  { src: "/images/portfolio4.png",       alt: "Renovation project",   category: "RENOVATION"   },
  { src: "/images/hardscaping.png",      alt: "Plant design project", category: "PLANT DESIGN" },
  { src: "/images/landscape-design.png", alt: "Maintenance project",  category: "MAINTENANCE"  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const { about, business } = clientConfig;

  const values = about.principles.map((p, i) => ({
    num:  String(i + 1).padStart(2, "0"),
    name: p.title,
    desc: p.description,
  }));

  // Section refs
  const storyLeftRef  = useRef<HTMLDivElement>(null);
  const storyRightRef = useRef<HTMLDivElement>(null);
  const valuesRef     = useRef<HTMLDivElement>(null);
  const founderImgRef = useRef<HTMLDivElement>(null);
  const founderTxtRef = useRef<HTMLDivElement>(null);

  const storyLeftIn  = useInView(storyLeftRef,  { once: true, margin: "-100px" });
  const storyRightIn = useInView(storyRightRef, { once: true, margin: "-100px" });
  const valuesIn     = useInView(valuesRef,     { once: true, margin: "-80px"  });
  const founderImgIn = useInView(founderImgRef, { once: true, margin: "-80px"  });
  const founderTxtIn = useInView(founderTxtRef, { once: true, margin: "-80px"  });

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — OUR STORY (asymmetric two-column)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="pt-32 pb-24 md:pb-32 overflow-hidden"
        style={{ background: "#F5F0E8" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-24 items-center">

            {/* Left — editorial text */}
            <motion.div
              ref={storyLeftRef}
              initial={{ x: -50 }}
              animate={storyLeftIn ? { x: 0 } : {}}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <p
                className="font-dmsans text-xs tracking-[0.32em] uppercase mb-6"
                style={{ color: "#C89B3E" }}
              >
                — WHO WE ARE —
              </p>
              <h2
                className="font-playfair font-normal leading-tight mb-9"
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", color: "#1A2E1A" }}
              >
                {about.headline}
              </h2>

              <div className="space-y-5">
                {about.story.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-dmsans text-base leading-relaxed"
                    style={{ color: "rgba(26,46,26,0.85)" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <a
                href="/#portfolio"
                className="inline-flex items-center gap-2 mt-9 font-dmsans text-sm font-semibold tracking-wide transition-opacity duration-200 hover:opacity-60"
                style={{ color: "#C89B3E" }}
              >
                View Our Work →
              </a>
            </motion.div>

            {/* Right — stacked image collage */}
            <motion.div
              ref={storyRightRef}
              initial={{ x: 50 }}
              animate={storyRightIn ? { x: 0 } : {}}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
              className="relative hidden lg:block"
              style={{ height: "540px" }}
            >
              {/* Back image — larger, bottom-right */}
              <div
                className="absolute bottom-0 right-0 overflow-hidden rounded-2xl shadow-2xl"
                style={{ width: "76%", height: "400px" }}
              >
                <Image
                  src="/images/portfolio3.png"
                  alt="Landscaping craftsmanship"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              {/* Front image — smaller, top-left, elevated */}
              <div
                className="absolute top-0 left-0 overflow-hidden rounded-2xl shadow-xl"
                style={{
                  width: "64%",
                  height: "330px",
                  border: "4px solid #F5F0E8",
                }}
              >
                <Image
                  src="/images/portfolio2.png"
                  alt="Landscape design detail"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              {/* EST. badge */}
              <div
                className="absolute bottom-6 left-5 z-10 px-4 py-2 rounded-lg"
                style={{
                  background: "#1A2E1A",
                  border: "1px solid rgba(200,154,62,0.45)",
                }}
              >
                <span
                  className="font-dmsans text-[11px] tracking-[0.28em] uppercase font-semibold"
                  style={{ color: "#C89B3E" }}
                >
                  — EST. {business.established} —
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — CORE VALUES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-24 overflow-hidden" style={{ background: "#1C3A2A" }}>

        {/* Top cream wave — from Our Story section above */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20 block">
            <path d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z" fill="#F5F0E8" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header */}
          <div className="text-center mb-10">
            <p
              className="font-dmsans text-xs tracking-[0.32em] uppercase mb-5"
              style={{ color: "#C89B3E" }}
            >
              — WHAT WE STAND FOR —
            </p>
            <h2
              className="font-playfair text-4xl font-normal leading-tight"
              style={{ color: "#F5F0E8" }}
            >
              The principles behind{" "}
              <em className="italic" style={{ color: "#C89B3E" }}>every project.</em>
            </h2>
          </div>

          {/* Manifesto rows */}
          <motion.div
            ref={valuesRef}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={valuesIn ? "visible" : "hidden"}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                variants={fadeUp}
                className="group cursor-default flex items-center justify-between py-7"
                style={{
                  borderTop: i === 0 ? "1px solid rgba(200,154,58,0.2)" : undefined,
                  borderBottom: "1px solid rgba(200,154,58,0.2)",
                }}
              >
                {/* Left — subtle number label */}
                <span
                  className="font-playfair text-sm tracking-widest select-none flex-shrink-0"
                  style={{ color: "rgba(200,154,58,0.50)" }}
                  aria-hidden="true"
                >
                  {v.num}
                </span>

                {/* Center — value name (hero) */}
                <h3
                  className="font-playfair text-3xl font-light leading-tight pl-8 flex-1
                              transition-colors duration-300 ease-out"
                  style={{ color: "var(--row-color, #F5F0E8)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B3E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                >
                  {v.name}
                </h3>

                {/* Right — description */}
                <p
                  className="font-dmsans text-sm font-light leading-relaxed text-right max-w-xs hidden md:block"
                  style={{ color: "rgba(245,240,232,0.60)" }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom cream wave — to Founder section below */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20 block">
            <path d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z" fill="#F5F0E8" />
          </svg>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — FOUNDER STORY
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 overflow-hidden"
        style={{ background: "#F5F0E8" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16 lg:gap-24 items-start">

            {/* Left — portrait */}
            <motion.div
              ref={founderImgRef}
              initial={{ scale: 0.95 }}
              animate={founderImgIn ? { scale: 1 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Founder photo */}
              <div
                className="relative w-full max-w-xs overflow-hidden"
                style={{ aspectRatio: "3 / 4", borderRadius: "16px" }}
              >
                <Image
                  src={about.founderImage}
                  alt={`${about.founderName} — Founder of ${business.fullName}`}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Name + title */}
              <div className="mt-6 text-center">
                <p
                  className="font-playfair text-xl"
                  style={{ color: "#1A2E1A" }}
                >
                  {about.founderName}
                </p>
                <p
                  className="font-dmsans text-[11px] tracking-[0.22em] uppercase mt-1.5"
                  style={{ color: "#C89B3E" }}
                >
                  {about.founderTitle}
                </p>
              </div>
            </motion.div>

            {/* Right — story text */}
            <motion.div
              ref={founderTxtRef}
              variants={stagger}
              initial="hidden"
              animate={founderTxtIn ? "visible" : "hidden"}
              className="pt-0 lg:pt-10"
            >
              <motion.p
                variants={fadeUp}
                className="font-dmsans text-xs tracking-[0.32em] uppercase mb-6"
                style={{ color: "#C89B3E" }}
              >
                — THE FOUNDER —
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-playfair font-normal leading-tight mb-9"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "#1A2E1A" }}
              >
                Built by hand.{" "}
                <em className="italic" style={{ color: "#C89B3E" }}>
                  Grown with care.
                </em>
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-5">
                {about.founderBio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-dmsans text-base leading-relaxed"
                    style={{ color: "rgba(26,46,26,0.85)" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Credential badges */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10"
              >
                {about.founderCredentials.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      style={{ color: "#C89B3E", flexShrink: 0 }}
                    />
                    <span
                      className="font-dmsans text-[11px] uppercase tracking-[0.18em]"
                      style={{ color: "#C89B3E" }}
                    >
                      {badge}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — PORTFOLIO GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0E8] pt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            className="mb-10"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-dmsans text-xs tracking-[0.32em] uppercase mb-4"
              style={{ color: "#C89B3E" }}
            >
              — OUR WORK —
            </p>
            <h2
              className="font-playfair font-normal leading-tight"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", color: "#1A2E1A" }}
            >
              Projects we&apos;re{" "}
              <em className="italic" style={{ color: "#C89B3E" }}>proud of.</em>
            </h2>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >

            {/* Top row: 60/40 asymmetric */}
            <div className="flex flex-col md:grid md:grid-cols-5 gap-3 md:h-[540px]">

              {/* Featured left */}
              <div className="md:col-span-3 relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto">
                <Image
                  src="/images/portfolio1.png"
                  alt="Hardscape project"
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-dmsans"
                  style={{ color: "#C89B3E" }}
                >
                  Hardscape
                </span>
              </div>

              {/* Right stacked */}
              <div className="md:col-span-2 grid grid-cols-2 md:flex md:flex-col gap-3">
                {GRID_TOP_RIGHT.map((img) => (
                  <div
                    key={img.src}
                    className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="eager"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span
                      className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-dmsans"
                      style={{ color: "#C89B3E" }}
                    >
                      {img.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row: 3 equal */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
              {GRID_BOTTOM.map((img, i) => (
                <div
                  key={img.src}
                  className={`relative rounded-xl overflow-hidden aspect-[4/3]${i === 2 ? " col-span-2 md:col-span-1" : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span
                    className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-dmsans"
                    style={{ color: "#C89B3E" }}
                  >
                    {img.category}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — CTA
      ═══════════════════════════════════════════════════════════════ */}
      <CTA />
    </>
  );
}
