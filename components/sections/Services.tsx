"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clientConfig } from "@/lib/client.config";

const activeServices = clientConfig.services.filter(s => s.active);

const cardVariants = {
  hidden: { y: 40 },
  visible: { y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-brand-bg py-[100px] px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-accent" />
              <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-brand-secondary">
                What We Do
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-normal text-brand-bg-text leading-tight max-w-xl">
              {clientConfig.business.city} {clientConfig.business.state} landscaping{" "}
              <em className="font-playfair italic text-brand-secondary">
                services
              </em>
              , end-to-end.
            </h2>
          </div>

          {/* Right */}
          <p className="font-dmsans text-base max-w-sm lg:mb-2" style={{ color: 'var(--color-text-muted)' }}>
            From the first call to the last blade of grass, we handle every aspect of your
            outdoor space. Serving {clientConfig.business.city} homeowners since {clientConfig.business.established}.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {activeServices.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className="bg-brand-primary rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category tag */}
                <span className="absolute top-4 left-4 z-10 bg-brand-accent text-brand-accent-text text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {service.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl text-white font-normal">
                  {service.name}
                </h3>
                <p className="font-dmsans text-sm text-white/60 mt-2 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {service.features.map((b) => (
                    <li key={b} className="font-dmsans text-xs text-white/50">
                      · {b}
                    </li>
                  ))}
                </ul>
                <a href="/#estimate" className="mt-4 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-brand-accent text-sm font-medium">
                  Get a Quote →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-16">
          <Link href="/services">
            <button className="border-2 border-brand-primary text-brand-bg-text px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-brand-primary hover:text-white transition-all duration-300 font-dmsans">
              See All Services
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
