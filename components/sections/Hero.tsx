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
    <section style={{ position: "relative", minHeight: "100svh",
      display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt={`${business.fullName} ${business.city}`}
        fill priority quality={92} sizes="100vw"
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(170deg, rgba(5,15,5,0.72) 0%, rgba(0,0,0,0.28) 48%, rgba(5,12,5,0.68) 100%)" }} />

      {/* Centered content */}
      <div
        className="hero-content"
        style={{ position: "relative", zIndex: 2,
          flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center",
          padding: "148px 32px 100px" }}
      >
        <div style={{ maxWidth: "800px", width: "100%" }}>

          {/* Location label */}
          <p className="font-dmsans"
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.28em",
              textTransform: "uppercase", color: "#ffffff",
              marginBottom: "20px" }}>
            {business.city}, {business.state}&nbsp;&nbsp;·&nbsp;&nbsp;Landscaping Services
          </p>

          {/* Two-line heading */}
          <h1 style={{ margin: "0 0 22px", lineHeight: 1.0 }}>
            <span className="font-playfair" style={{
              display: "block",
              fontSize: "clamp(34px, 5.2vw, 68px)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "0.01em",
              color: "var(--color-accent)",
              lineHeight: 1.1,
            }}>
              {line1}
            </span>
            <span className="font-playfair" style={{
              display: "block",
              fontSize: "clamp(48px, 8.5vw, 108px)",
              fontWeight: 800,
              fontStyle: "normal",
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 0.95,
            }}>
              {line2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-dmsans"
            style={{ fontSize: "17px", color: "rgba(255,255,255,0.82)",
              lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 40px" }}>
            {business.heroSubtitle}
          </p>

          {/* CTA + phone */}
          <div style={{ display: "inline-flex", alignItems: "center",
            gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>

            <Link href="/contact" className="hero-cta font-dmsans"
              style={{ display: "inline-block",
                border: "2px solid var(--color-accent)",
                color: "var(--color-dark)", background: "var(--color-accent)",
                fontWeight: 700, padding: "15px 40px",
                borderRadius: "4px", fontSize: "13px",
                textTransform: "uppercase", letterSpacing: "0.14em",
                textDecoration: "none" }}>
              {business.ctaLabel} →
            </Link>

            <a href={business.phoneHref} className="hero-phone font-dmsans"
              style={{ display: "inline-flex", alignItems: "center", gap: "9px",
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                color: "#fff", fontWeight: 600,
                padding: "15px 24px", borderRadius: "4px",
                fontSize: "14px", textDecoration: "none",
                letterSpacing: "0.03em" }}>
              <Phone size={15} strokeWidth={2} />
              {business.phone}
            </a>

          </div>

        </div>
      </div>

      {/* Organic wave transition */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
        zIndex: 3, lineHeight: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "72px" }}>
          <path d="M0,36 C240,72 480,8 720,38 C960,68 1200,12 1440,36 L1440,72 L0,72 Z"
            fill="var(--color-bg)" />
        </svg>
      </div>

      <style>{`
        .hero-cta:hover {
          background: #c9a84c !important;
          border-color: #c9a84c !important;
        }
        .hero-phone:hover {
          background: rgba(255,255,255,0.18) !important;
          border-color: rgba(255,255,255,0.45) !important;
        }
        @media (max-width: 640px) {
          .hero-content { padding: 148px 24px 80px !important; }
        }
      `}</style>

    </section>
  );
}
