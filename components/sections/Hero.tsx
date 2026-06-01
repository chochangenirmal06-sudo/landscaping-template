"use client";

import Link from "next/link";
import Image from "next/image";
import { clientConfig } from "@/lib/client.config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex items-center" style={{ minHeight: "100svh", maxHeight: "960px" }}>

      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt={`${clientConfig.business.fullName} ${clientConfig.business.city} TX`}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* Content */}
      <div
        className="relative z-20 w-full px-5 md:px-8 lg:pl-[140px] pt-[140px] pb-[100px]"
        style={{ maxWidth: '720px' }}
      >

        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-brand-accent" aria-hidden="true" />
          <p
            className="font-dmsans font-bold uppercase text-brand-accent"
            style={{ fontSize: '13px', letterSpacing: '0.25em' }}
          >
            {clientConfig.business.city}, {clientConfig.business.state} · Landscaping Services
          </p>
        </div>

        {/* Headline */}
        <h1
          className="mt-4 font-playfair font-bold text-white"
          style={{
            fontSize: "clamp(48px, 5.5vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.0,
            marginBottom: '24px',
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {clientConfig.business.tagline}
        </h1>

        {/* Brush-stroke underline */}
        <svg
          width="380"
          height="18"
          viewBox="0 0 380 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: '8px', marginBottom: '28px', display: 'block' }}
        >
          <path
            d="M2 11.5C60 6 120 3.5 190 4C260 4.5 320 7 378 13.5"
            style={{ stroke: 'var(--color-accent-dark)' }}
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M15 14C70 9.5 140 7 200 7.5C265 8 325 10.5 370 15"
            style={{ stroke: 'var(--color-accent-dark)' }}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>

        {/* Subtext */}
        <p
          className="font-dmsans text-white/75"
          style={{
            fontSize: '17px',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '40px',
          }}
        >
          {clientConfig.business.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="hero-btns flex flex-col sm:flex-row gap-4 items-start">
          <Link
            href="/contact"
            className="hero-btn-primary w-full sm:w-auto text-center font-dmsans"
            style={{
              display: 'inline-block',
              background: 'var(--color-accent-dark)',
              color: 'var(--color-accent-text)',
              fontWeight: 700,
              padding: '18px 40px',
              borderRadius: '8px',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            GET A FREE QUOTE →
          </Link>
          <a
            href={clientConfig.business.phoneHref}
            className="hero-btn-secondary w-full sm:w-auto text-center font-dmsans"
            style={{
              display: 'inline-block',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#FFFFFF',
              fontWeight: 600,
              padding: '18px 40px',
              borderRadius: '8px',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            ☎ {clientConfig.business.phone}
          </a>
        </div>

        {/* Trust stats */}
        <div className="flex items-center flex-wrap mt-10 overflow-hidden" style={{ gap: '56px' }}>
          <div className="text-center shrink-0">
            <div className="font-bold text-white font-playfair" style={{ fontSize: '36px' }}>{clientConfig.business.stats.projectsCompleted}</div>
            <div className="text-white/60 tracking-wide" style={{ fontSize: '12px' }}>Projects Done</div>
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block shrink-0" />
          <div className="text-center shrink-0">
            <div className="font-bold text-white font-playfair" style={{ fontSize: '36px' }}>{clientConfig.business.stats.rating}</div>
            <div className="text-white/60 tracking-wide" style={{ fontSize: '12px' }}>Google Rating</div>
          </div>
          <div className="w-px h-8 bg-white/20 hidden sm:block shrink-0" />
          <div className="text-center shrink-0">
            <div className="font-bold text-white font-playfair" style={{ fontSize: '36px' }}>{clientConfig.business.stats.yearsExperience}</div>
            <div className="text-white/60 tracking-wide" style={{ fontSize: '12px' }}>Years in {clientConfig.business.city}</div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-btn-primary:hover  { background: var(--color-accent) !important; }
        .hero-btn-secondary:hover { background: rgba(255,255,255,0.08) !important; }
      `}</style>

    </section>
  );
}
