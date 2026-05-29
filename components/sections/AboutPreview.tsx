"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const VALUE_PILLS = [
  `${clientConfig.business.stats.projectsCompleted} Projects Completed`,
  "Family Owned & Operated",
  "Licensed & Insured",
  "Free Consultations",
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPreview() {
  return (
    <section className="w-full" style={{ background: "#F5F0E8", padding: "100px 0" }}>
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-16 lg:gap-20 px-5 md:px-10 lg:px-[60px]"
        style={{ maxWidth: "1200px" }}
      >

        {/* ── LEFT — Image with overlays ───────────────────────────────── */}
        {/*
          Outer wrapper is the positioning context.
          pb-7 pr-7 (28px) reserves visual space so the badge
          doesn't bleed into adjacent content or get clipped.
        */}
        <div className="relative pb-7 pr-7 lg:pb-7 lg:pr-7">

          {/* Image container — overflow:hidden for rounded corners */}
          <div
            className="relative overflow-hidden rounded-xl lg:rounded-[20px]"
          >
            <Image
              src="/images/landscape-design.png"
              alt={`Professional landscaping by ${clientConfig.business.fullName} ${clientConfig.business.city} TX`}
              width={700}
              height={520}
              className="w-full h-auto block object-cover"
              priority
            />

            {/* Location badge — top-left, inside overflow:hidden */}
            <div
              className="absolute flex items-center"
              style={{
                top: "20px",
                left: "20px",
                background: "#FFFFFF",
                borderRadius: "50px",
                padding: "8px 16px",
                gap: "8px",
                zIndex: 2,
              }}
            >
              <MapPin size={14} style={{ color: "#B8902A", flexShrink: 0 }} />
              <span
                className="font-dmsans"
                style={{ fontSize: "13px", fontWeight: 600, color: "#1C2B1A" }}
              >
                {clientConfig.business.city}, {clientConfig.business.state}
              </span>
            </div>
          </div>

          {/* Stats badge — outside overflow:hidden, bottom-right of wrapper */}
          <div
            className="absolute"
            style={{
              bottom: 0,
              right: 0,
              background: "#1C2B1A",
              borderRadius: "16px",
              padding: "24px 28px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              zIndex: 3,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "48px",
                fontWeight: 300,
                color: "#B8902A",
                lineHeight: 1,
              }}
            >
              {clientConfig.business.stats.yearsExperience}
            </div>
            <div
              className="font-dmsans"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                marginTop: "4px",
              }}
            >
              Years of<br />Experience
            </div>
          </div>
        </div>

        {/* ── RIGHT — Text content ─────────────────────────────────────── */}
        <div>

          {/* Pill label */}
          <span
            className="font-dmsans inline-block"
            style={{
              background: "rgba(28,43,26,0.08)",
              border: "1px solid rgba(28,43,26,0.12)",
              borderRadius: "50px",
              padding: "6px 16px",
              fontSize: "12px",
              color: "#1C2B1A",
            }}
          >
            About Us
          </span>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 300,
              color: "#1C2B1A",
              lineHeight: 1.1,
              margin: "16px 0 20px",
            }}
          >
            {clientConfig.about.headline}
          </h2>

          {/* Body */}
          <p
            className="font-dmsans"
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#6B7280",
              maxWidth: "420px",
            }}
          >
            {clientConfig.about.story[0]}
          </p>

          {/* Value pills — 2×2 flex-wrap grid */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              margin: "24px 0 32px",
            }}
          >
            {VALUE_PILLS.map((label) => (
              <span
                key={label}
                className="font-dmsans inline-flex items-center"
                style={{
                  background: "rgba(28,43,26,0.06)",
                  border: "1px solid rgba(28,43,26,0.1)",
                  borderRadius: "50px",
                  padding: "10px 18px",
                  fontSize: "13px",
                  color: "#1C2B1A",
                  fontWeight: 500,
                }}
              >
                {/* Gold dot */}
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    background: "#B8902A",
                    borderRadius: "50%",
                    marginRight: "8px",
                    flexShrink: 0,
                  }}
                />
                {label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="inline-block font-dmsans font-bold uppercase transition-colors duration-200"
            style={{
              background: "#B8902A",
              color: "#1C2B1A",
              fontSize: "13px",
              letterSpacing: "0.1em",
              borderRadius: "8px",
              padding: "16px 32px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#9A7820";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#B8902A";
            }}
          >
            VIEW MORE DETAILS →
          </Link>

        </div>
        {/* ── END RIGHT ── */}

      </div>
    </section>
  );
}
