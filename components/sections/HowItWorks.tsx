"use client";

import { motion, type Variants } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Free Consultation",
    description: "We visit your property, listen to your vision, and assess the space — no cost, no obligation.",
  },
  {
    num: "02",
    title: "Custom Proposal",
    description: "Within 48 hours you receive a detailed plan with transparent pricing. No surprises.",
  },
  {
    num: "03",
    title: "We Get to Work",
    description: "Our crew shows up on time, works clean, and keeps you updated throughout.",
  },
  {
    num: "04",
    title: "You Love It",
    description: "Final walkthrough together. We don't leave until every detail meets your expectations.",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function HeaderContent() {
  return (
    <>
      <p className="font-dmsans text-xs tracking-[0.3em] uppercase text-[#C89B3E] mb-5">
        — How We Work —
      </p>
      <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-2xl">
        From First Call to{" "}
        <em className="italic text-[#C89B3E]">Finished Project.</em>
      </h2>
      <div className="w-12 h-px bg-[#C89B3E]/45 mt-8" />
    </>
  );
}

function CtaButton() {
  return (
    <a
      href="/contact"
      className="group inline-flex items-center gap-4 bg-[#C89B3E] hover:bg-[#E8C06A] text-[#1A2E1A] font-semibold px-14 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 font-dmsans"
    >
      GET A FREE QUOTE →
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:translate-x-1 transition-transform duration-200"
      >
        <path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-[100px] overflow-hidden" style={{ background: "#1C2B1A" }}>

      {/* Diagonal line texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ opacity: 0.025 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="28" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      {/* Botanical corner motif — bottom right */}
      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] pointer-events-none" aria-hidden="true" style={{ opacity: 0.045 }}>
        <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M400,400 Q240,300 120,80 Q210,180 380,40" stroke="white" strokeWidth="1.2" />
          <path d="M400,400 Q180,260 60,40 Q230,160 400,400Z" stroke="white" strokeWidth="0.8" />
          <path d="M130,90 Q265,245 400,400" stroke="white" strokeWidth="0.5" />
          <path d="M180,70 Q310,220 400,400" stroke="white" strokeWidth="0.5" />
          <path d="M230,55 Q350,210 400,400" stroke="white" strokeWidth="0.5" />
          <path d="M280,45 Q390,200 400,400" stroke="white" strokeWidth="0.4" />
          <circle cx="122" cy="84" r="3" fill="white" opacity="0.6" />
          <circle cx="400" cy="400" r="4" fill="white" opacity="0.3" />
        </svg>
      </div>

      {/* Botanical corner motif — top left, mirrored */}
      <div className="absolute left-0 top-0 w-[280px] h-[280px] pointer-events-none" aria-hidden="true" style={{ opacity: 0.03, transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M400,400 Q240,300 120,80 Q210,180 380,40" stroke="white" strokeWidth="1.2" />
          <path d="M130,90 Q265,245 400,400" stroke="white" strokeWidth="0.5" />
          <path d="M180,70 Q310,220 400,400" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-[9fr_11fr] lg:gap-20 lg:items-start">

          {/* ── LEFT COLUMN — desktop sticky header + CTA (hidden on mobile) ── */}
          <motion.div
            className="hidden lg:flex lg:flex-col lg:sticky lg:top-40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <HeaderContent />
            <div className="mt-12">
              <CtaButton />
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — mobile header + timeline + mobile CTA ── */}
          <div>

            {/* Mobile header — hidden on desktop */}
            <motion.div
              className="mb-24 md:mb-32 lg:hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <HeaderContent />
            </motion.div>

            {/* Vertical timeline */}
            <div className="relative">
              <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-[#C89B3E]/0 via-[#C89B3E]/45 to-[#C89B3E]/0" />

              <motion.div
                className="space-y-20 md:space-y-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.18 }}
              >
                {STEPS.map((s) => (
                  <motion.div
                    key={s.num}
                    variants={itemVariants}
                    className="relative pl-10 md:pl-16"
                  >
                    {/* Gold dot */}
                    <div className="absolute left-[-3px] top-[22px] w-[7px] h-[7px] rounded-full bg-[#C89B3E] shadow-[0_0_12px_3px_rgba(200,155,62,0.25)]" />

                    {/* Ghost number */}
                    <span
                      className="absolute -top-6 left-4 md:left-6 font-playfair italic leading-none text-[#F5F0E8] select-none pointer-events-none hidden md:block"
                      style={{ fontSize: "148px", opacity: 0.042 }}
                    >
                      {s.num}
                    </span>

                    <div className="relative grid md:grid-cols-[5fr,7fr] gap-5 md:gap-16 items-start">
                      <div>
                        <p className="font-dmsans text-[10px] tracking-[0.32em] uppercase text-[#C89B3E]/55 mb-3">
                          Step {s.num}
                        </p>
                        <h3 className="font-playfair text-2xl md:text-3xl lg:text-[2rem] text-white font-normal leading-snug">
                          {s.title}
                        </h3>
                      </div>
                      <p className="font-dmsans text-[15px] text-white/45 leading-relaxed md:pt-10">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile CTA — hidden on desktop */}
            <motion.div
              className="flex justify-center mt-24 md:mt-32 lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CtaButton />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
