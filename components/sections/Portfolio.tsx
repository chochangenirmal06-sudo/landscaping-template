"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientConfig } from "@/lib/client.config";

const BOTTOM_ROW = [
  { src: "/images/portfolio4.png", category: "Irrigation" },
  { src: "/images/hardscaping.png", category: "Hardscape" },
  { src: "/images/landscape-design.png", category: "Design" },
];

export default function Portfolio() {
  return (
    <section id="our-work" className="relative bg-brand-bg py-[100px] px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-brand-accent" />
              <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-brand-secondary">
                Recent Work
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-normal text-brand-bg-text leading-tight">
              Portfolio of{" "}
              <em className="italic text-brand-accent">{clientConfig.business.city}</em>
              <br />landscapes.
            </h2>
          </div>

          <a
            href="#"
            className="font-dmsans text-sm font-semibold tracking-widest uppercase text-brand-bg-text hover:text-brand-accent transition-colors md:mb-2"
          >
            View All Projects →
          </a>
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
                alt="Custom Patio Westlake"
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-dmsans text-[10px] tracking-[0.25em] uppercase text-white/60 mb-1.5">
                  Hardscape
                </p>
                <p className="font-playfair text-2xl text-white leading-snug">
                  Custom Patio · Westlake
                </p>
              </div>
            </div>

            {/* Right stacked */}
            <div className="md:col-span-2 grid grid-cols-2 md:flex md:flex-col gap-3">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1">
                <Image
                  src="/images/portfolio2.png"
                  alt="Renovation project"
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-dmsans">
                  Renovation
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1">
                <Image
                  src="/images/portfolio3.png"
                  alt="Plant design project"
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-dmsans">
                  Plant Design
                </span>
              </div>
            </div>
          </div>

          {/* Bottom row: 3 equal */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            {BOTTOM_ROW.map((img, i) => (
              <div
                key={img.src}
                className={`relative rounded-xl overflow-hidden aspect-[4/3]${i === 2 ? " col-span-2 md:col-span-1" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.category}
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-dmsans">
                  {img.category}
                </span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
