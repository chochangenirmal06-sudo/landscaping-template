"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

const fadeUp: Variants = {
  hidden: { y: 30 },
  visible: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  const { about, business } = clientConfig;

  const storyLeftRef  = useRef<HTMLDivElement>(null);
  const storyRightRef = useRef<HTMLDivElement>(null);
  const founderImgRef = useRef<HTMLDivElement>(null);
  const founderTxtRef = useRef<HTMLDivElement>(null);

  const storyLeftIn  = useInView(storyLeftRef,  { once: true, margin: "-100px" });
  const storyRightIn = useInView(storyRightRef, { once: true, margin: "-100px" });
  const founderImgIn = useInView(founderImgRef, { once: true, margin: "-80px"  });
  const founderTxtIn = useInView(founderTxtRef, { once: true, margin: "-80px"  });

  return (
    <>
      {/* ── OUR STORY ─────────────────────────────────────────────── */}
      <section className="pt-[160px] pb-24 md:pb-32 overflow-hidden" style={{ background: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-24 items-center">

            {/* Left — text */}
            <motion.div
              ref={storyLeftRef}
              initial={{ x: -50 }}
              animate={storyLeftIn ? { x: 0 } : {}}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <p
                className="font-dmsans text-xs tracking-[0.32em] uppercase mb-6"
                style={{ color: "var(--color-accent)" }}
              >
                — WHO WE ARE —
              </p>
              <h2
                className="font-playfair font-normal leading-tight mb-9"
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", color: "var(--color-bg-text)" }}
              >
                {about.headline}
              </h2>

              <div className="space-y-5">
                {about.story.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-dmsans text-base leading-relaxed"
                    style={{ color: "rgb(var(--color-bg-text-rgb) / 0.85)" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
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
              <div className="absolute bottom-0 right-0 overflow-hidden rounded-2xl shadow-2xl" style={{ width: "76%", height: "400px" }}>
                <Image src="/images/portfolio3.png" alt="Landscaping craftsmanship" fill loading="eager" sizes="55vw" className="object-cover" />
              </div>
              <div
                className="absolute top-0 left-0 overflow-hidden rounded-2xl shadow-xl"
                style={{ width: "64%", height: "330px", border: "4px solid var(--color-bg)" }}
              >
                <Image src="/images/portfolio2.png" alt="Landscape design detail" fill loading="eager" sizes="55vw" className="object-cover" />
              </div>
              <div
                className="absolute bottom-6 left-5 z-10 px-4 py-2 rounded-lg"
                style={{ background: "var(--color-primary)", border: "1px solid rgb(var(--color-accent-rgb) / 0.45)" }}
              >
                <span className="font-dmsans text-[11px] tracking-[0.28em] uppercase font-semibold" style={{ color: "var(--color-accent)" }}>
                  — EST. {business.established} —
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ background: "var(--color-bg)" }}>
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
              <div className="relative w-full max-w-xs overflow-hidden" style={{ aspectRatio: "3 / 4", borderRadius: "16px" }}>
                {about.founderImage ? (
                  <Image
                    src={about.founderImage}
                    alt={`${about.founderName} — ${about.founderTitle}, ${business.fullName}`}
                    fill loading="eager" sizes="50vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{ background: "var(--color-primary)" }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full font-playfair font-normal"
                      style={{
                        width: "80px", height: "80px",
                        background: "rgb(var(--color-accent-rgb) / 0.15)",
                        border: "2px solid rgb(var(--color-accent-rgb) / 0.35)",
                        fontSize: "2rem", color: "var(--color-accent)",
                      }}
                    >
                      {about.founderName.charAt(0)}
                    </div>
                    <p
                      className="font-dmsans text-[11px] tracking-[0.22em] uppercase text-center px-4"
                      style={{ color: "rgb(var(--color-accent-rgb) / 0.55)" }}
                    >
                      Photo coming soon
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-6 text-center">
                <p className="font-playfair text-xl" style={{ color: "var(--color-bg-text)" }}>
                  {about.founderName}
                </p>
                <p className="font-dmsans text-[11px] tracking-[0.22em] uppercase mt-1.5" style={{ color: "var(--color-accent)" }}>
                  {about.founderTitle}
                </p>
              </div>
            </motion.div>

            {/* Right — story */}
            <motion.div
              ref={founderTxtRef}
              variants={stagger}
              initial="hidden"
              animate={founderTxtIn ? "visible" : "hidden"}
              className="pt-0 lg:pt-10"
            >
              <motion.p variants={fadeUp} className="font-dmsans text-xs tracking-[0.32em] uppercase mb-6" style={{ color: "var(--color-accent)" }}>
                — THE FOUNDER —
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-playfair font-normal leading-tight mb-9"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "var(--color-bg-text)" }}
              >
                Built by hand.{" "}
                <em className="italic" style={{ color: "var(--color-accent)" }}>Grown with care.</em>
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-5">
                {about.founderBio.map((paragraph, i) => (
                  <p key={i} className="font-dmsans text-base leading-relaxed" style={{ color: "rgb(var(--color-bg-text-rgb) / 0.85)" }}>
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {about.founderCredentials.length > 0 && (
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10">
                  {about.founderCredentials.map((badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <Check size={13} strokeWidth={2.5} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                      <span className="font-dmsans text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--color-accent)" }}>
                        {badge}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
