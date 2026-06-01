"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    num: 1,
    label: "Request",
    title: "Request Your",
    titleAccent: "Free Quote",
    description:
      "Tell us about your outdoor space and what you'd like to achieve. Fill out a quick form and we'll respond within one business day — no commitment, no pressure.",
    bullets: [
      "Simple online form — takes under 2 minutes",
      "No obligation, just an honest conversation",
      "Response guaranteed within 24 hours",
    ],
    image: "/images/step1.png",
  },
  {
    num: 2,
    label: "Site Visit",
    title: "We Visit Your",
    titleAccent: "Property",
    description:
      "A member of our team comes to your property, assesses the space in detail, and listens carefully to your goals. Every recommendation is tailored to your exact situation.",
    bullets: [
      "Thorough property walk-through at no cost",
      "Professional advice and honest recommendations",
      "You share the vision — we figure out the how",
    ],
    image: "/images/step2.png",
  },
  {
    num: 3,
    label: "We Work",
    title: "We Get",
    titleAccent: "to Work",
    description:
      "Our crew arrives on schedule, works efficiently, and keeps you updated throughout. Whether it's a one-day job or a multi-week project, you'll always know exactly where things stand.",
    bullets: [
      "Punctual, professional, and respectful of your property",
      "Regular updates at every stage of the project",
      "Clean site guaranteed — no mess left behind",
    ],
    image: "/images/step3.png",
  },
  {
    num: 4,
    label: "Enjoy",
    title: "Love Your",
    titleAccent: "Outdoor Space",
    description:
      "We walk through the finished result together and won't leave until every detail matches what was agreed. Then it's yours to enjoy — all season long.",
    bullets: [
      "Final walkthrough — every detail confirmed together",
      "Aftercare guidance to keep your space looking great",
      "A result you're proud to show off",
    ],
    image: "/images/step4.png",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-[100px] overflow-hidden"
      style={{ background: "var(--color-primary)" }}
    >
      {/* Diagonal line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.025 }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diag-hiw"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="28" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag-hiw)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">

        {/* Section badge */}
        <div className="flex justify-center mb-8">
          <span
            className="font-dmsans text-[11px] tracking-[0.28em] uppercase px-5 py-2 rounded-full"
            style={{
              border: "1px solid rgb(var(--color-accent-rgb) / 0.5)",
              color: "var(--color-accent)",
            }}
          >
            HOW IT WORKS
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="font-playfair font-normal text-white leading-tight"
            style={{ fontSize: "clamp(1.9rem, 5vw, 3rem)" }}
          >
            Everything You Need to
          </h2>
          <h2
            className="font-playfair font-normal leading-tight"
            style={{ fontSize: "clamp(1.9rem, 5vw, 3rem)" }}
          >
            <em className="italic" style={{ color: "var(--color-accent)" }}>
              Plan, Book &amp; Transform.
            </em>
          </h2>
        </div>

        {/* Step tab row */}
        <div className="flex items-center justify-center mb-6 md:mb-10 flex-wrap gap-y-2">
          {STEPS.map((s, i) => {
            const isActive = active === i;
            return (
              <div key={s.num} className="flex items-center">
                <button
                  onClick={() => setActive(i)}
                  className="flex items-center gap-2 px-3 py-2 md:gap-2.5 md:px-4 md:py-2.5 rounded-full transition-all duration-300 font-dmsans text-xs md:text-sm font-medium"
                  style={
                    isActive
                      ? {
                          background: "var(--color-accent)",
                          color: "var(--color-accent-text)",
                        }
                      : {
                          border: "1px solid rgba(255,255,255,0.18)",
                          color: "rgba(255,255,255,0.55)",
                        }
                  }
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                    style={
                      isActive
                        ? { background: "rgba(0,0,0,0.18)" }
                        : { border: "1px solid rgba(255,255,255,0.28)" }
                    }
                  >
                    {s.num}
                  </span>
                  {s.label}
                </button>
                {i < STEPS.length - 1 && (
                  <div
                    className="w-8 md:w-16 h-px mx-1 shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden grid md:grid-cols-2"
            style={{ background: "var(--color-bg)" }}
          >
            {/* Left — text */}
            <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
              <h3
                className="font-playfair font-normal leading-snug"
                style={{
                  fontSize: "clamp(1.65rem, 3.5vw, 2.25rem)",
                  color: "var(--color-bg-text)",
                }}
              >
                {step.title}{" "}
                <em className="italic" style={{ color: "var(--color-accent)" }}>
                  {step.titleAccent}
                </em>
              </h3>

              <p
                className="font-dmsans text-sm leading-relaxed mt-4"
                style={{ color: `rgb(var(--color-bg-text-rgb) / 0.60)` }}
              >
                {step.description}
              </p>

              <ul className="mt-6 space-y-3">
                {step.bullets.map((b) => (
                  <li
                    key={b}
                    className="font-dmsans text-sm flex items-start gap-3"
                    style={{ color: `rgb(var(--color-bg-text-rgb) / 0.75)` }}
                  >
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--color-accent)" }}
                    >
                      ↗
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="mt-8 self-start inline-flex items-center gap-2 font-dmsans text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 tracking-wide"
                style={{
                  background: "var(--color-accent-dark)",
                  color: "var(--color-accent-text)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--color-accent-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--color-accent-dark)";
                }}
              >
                Get A Free Quote ↗
              </a>
            </div>

            {/* Right — icon image, contained and centered */}
            <div className="relative h-[140px] sm:h-[180px] md:h-auto md:min-h-[280px]">
              <Image
                src={step.image}
                alt={`Step ${step.num}: ${step.label}`}
                fill
                className="object-contain p-6 md:p-10"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Dark → Cream wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
        zIndex: 10, lineHeight: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "64px" }}>
          <path d="M0,32 C240,64 480,8 720,34 C960,60 1200,10 1440,32 L1440,64 L0,64 Z"
            fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
