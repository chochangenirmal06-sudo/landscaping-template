"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientConfig } from "@/lib/client.config";

export default function Portfolio() {
  const gallery = clientConfig.gallery;
  const featured = gallery[0];
  const stacked  = gallery.slice(1, 3);
  const bottom   = gallery.slice(3, 6);

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
            href="/gallery"
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
            {featured && (
              <div className="md:col-span-3 relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto">
                <Image
                  src={featured.src}
                  alt={featured.category ?? "Featured project"}
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}

            {/* Right stacked */}
            <div className="md:col-span-2 grid grid-cols-2 md:flex md:flex-col gap-3">
              {stacked.map((img) => (
                <div key={img.src} className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1">
                  <Image
                    src={img.src}
                    alt={img.category ?? "Project"}
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row: 3 equal */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            {bottom.map((img, i) => (
              <div
                key={img.src}
                className={`relative rounded-xl overflow-hidden aspect-[4/3]${i === 2 ? " col-span-2 md:col-span-1" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.category ?? "Project"}
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
