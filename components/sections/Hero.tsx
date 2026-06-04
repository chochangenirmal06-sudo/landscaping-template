"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

export default function Hero() {
  const { business } = clientConfig;

  // Two-line heading from config; falls back to auto-splitting tagline at midpoint.
  const words = business.tagline.split(" ");
  const mid   = Math.ceil(words.length / 2);
  const biz = business as typeof business & { heroLine1?: string; heroLine2?: string };
  const line1 = biz.heroLine1 ?? words.slice(0, mid).join(" ");
  const line2 = biz.heroLine2 ?? words.slice(mid).join(" ");

  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden">

      {/* Background image */}
      <Image
        src={clientConfig.heroBg ?? "/images/hero-bg.png"}
        alt={`${business.fullName} ${business.city}`}
        fill priority quality={92} sizes="100vw"
        className="object-cover object-center z-0"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(170deg, rgba(5,15,5,0.72) 0%, rgba(0,0,0,0.28) 48%, rgba(5,12,5,0.68) 100%)" }}
      />

      {/* Centered content */}
      <div className="relative z-[2] flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-[160px] pb-14 sm:pb-20 lg:pb-24">
        <div className="w-full max-w-[800px]">

          {/* Location label */}
          <p className="hero-label font-dmsans font-bold uppercase text-white mb-4 sm:mb-5">
            {business.city}, {business.state}&nbsp;&nbsp;·&nbsp;&nbsp;Landscaping Services
          </p>

          {/* Two-line heading */}
          <h1 className="m-0 mb-4 sm:mb-5" style={{ lineHeight: 1.0 }}>
            <span
              className="font-playfair hero-line1 block font-normal italic"
              style={{ color: "var(--color-accent)", lineHeight: 1.1 }}
            >
              {line1}
            </span>
            <span
              className="font-playfair hero-line2 block font-extrabold not-italic"
              style={{ color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 0.95 }}
            >
              {line2}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle font-dmsans mx-auto mb-8 sm:mb-10"
            style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8, maxWidth: "520px" }}
          >
            {business.heroSubtitle}
          </p>

          {/* CTA + phone — stack on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

            <Link
              href="/contact"
              className="hero-cta font-dmsans w-full sm:w-auto text-center"
              style={{
                display: "block",
                border: "2px solid var(--color-accent)",
                color: "var(--color-accent-text)",
                background: "var(--color-accent)",
                fontWeight: 700,
                padding: "14px 36px",
                borderRadius: "4px",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                textDecoration: "none",
              }}
            >
              {business.ctaLabel} →
            </Link>

            <a
              href={business.phoneHref}
              className="hero-phone font-dmsans w-full sm:w-auto"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "9px",
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontWeight: 600,
                padding: "14px 24px",
                borderRadius: "4px",
                fontSize: "14px",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              <Phone size={15} strokeWidth={2} />
              {business.phone}
            </a>

          </div>
        </div>
      </div>

      {/* Organic wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="block w-full h-[40px] sm:h-[56px] lg:h-[72px]"
        >
          <path
            d="M0,36 C240,72 480,8 720,38 C960,68 1200,12 1440,36 L1440,72 L0,72 Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>

      <style>{`
        .hero-label    { font-size: 9px; letter-spacing: 0.14em; }
        .hero-line1    { font-size: clamp(26px, 5.2vw, 68px); overflow-wrap: break-word; }
        .hero-line2    { font-size: clamp(42px, 8.5vw, 108px); overflow-wrap: break-word; word-break: break-word; }
        .hero-subtitle { font-size: clamp(14px, 1.8vw, 17px); overflow-wrap: break-word; }

        @media (min-width: 480px) {
          .hero-label { font-size: 10px; letter-spacing: 0.22em; }
        }
        @media (min-width: 640px) {
          .hero-label { font-size: 11px; letter-spacing: 0.28em; }
        }

        .hero-cta:hover {
          background: var(--color-accent-light) !important;
          border-color: var(--color-accent-light) !important;
        }
        .hero-phone:hover {
          background: rgba(255,255,255,0.18) !important;
          border-color: rgba(255,255,255,0.45) !important;
        }
      `}</style>

    </section>
  );
}
