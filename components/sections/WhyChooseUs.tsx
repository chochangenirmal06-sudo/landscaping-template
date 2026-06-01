"use client";

import { Users, Home, MessageCircle, Shield } from "lucide-react";
import { clientConfig } from "@/lib/client.config";

const { city, stats } = clientConfig.business;

const CARDS = [
  {
    Icon: Users,
    title: `${stats.yearsExperience} Years of Experience`,
    body: `We've been proudly serving Greater ${city} with expert landscape care for over a decade.`,
  },
  {
    Icon: Home,
    title: "Local & Family-Owned",
    body: `We're part of the ${city} community and treat every yard like our own — no call centers, no franchises.`,
  },
  {
    Icon: MessageCircle,
    title: "Clear, Direct Communication",
    body: "You work directly with our team — no middlemen, no surprises, just honest and transparent service.",
  },
  {
    Icon: Shield,
    title: "Reliable & Fair Pricing",
    body: "Count on us for on-time service, no hidden fees, and competitive rates that respect your budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full relative"
      style={{ background: "var(--color-primary)", padding: "100px 0" }}
    >

      {/* Header */}
      <div className="text-center px-5">

        {/* Pill label */}
        <span
          className="font-dmsans inline-block"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "50px",
            padding: "6px 18px",
            fontSize: "12px",
            color: "var(--color-primary-text)",
          }}
        >
          Why Choose Us
        </span>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 300,
            color: "var(--color-primary-text)",
            lineHeight: 1.1,
            margin: "16px 0 12px",
          }}
        >
          {clientConfig.whyChooseUs.headline}
        </h2>

        {/* Subtext */}
        <p
          className="font-dmsans mx-auto"
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "580px",
            margin: "0 auto 64px",
            lineHeight: 1.7,
          }}
        >
          {clientConfig.whyChooseUs.subtext}
        </p>

      </div>

      {/* Cards grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto px-5 md:px-10 lg:px-[60px]"
        style={{ maxWidth: "1200px" }}
      >
        {CARDS.map(({ Icon, title, body }) => (
          <div
            key={title}
            className="group relative overflow-hidden transition-colors duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "36px 28px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
            }}
          >
            {/* Decorative circle */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "-40px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "rgb(var(--color-accent-dark-rgb) / 0.06)",
                pointerEvents: "none",
              }}
            />

            {/* Icon */}
            <Icon
              size={48}
              strokeWidth={1.5}
              style={{ color: "var(--color-accent-dark)", marginBottom: "20px", display: "block" }}
            />

            {/* Title */}
            <h3
              className="font-dmsans"
              style={{ fontSize: "17px", fontWeight: 600, color: "var(--color-primary-text)", marginBottom: "12px" }}
            >
              {title}
            </h3>

            {/* Body */}
            <p
              className="font-dmsans"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
            >
              {body}
            </p>
          </div>
        ))}
      </div>

      {/* Dark → Cream wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
        zIndex: 10, lineHeight: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "64px" }}>
          <path d="M0,20 C360,72 720,4 1080,52 C1260,72 1380,28 1440,44 L1440,64 L0,64 Z"
            fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
