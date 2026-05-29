"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/lib/client.config";

// Cycle through heights to give the masonry grid visual rhythm
const HEIGHTS = [320, 400, 270, 360, 380, 290, 430, 320, 260];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = clientConfig.gallery;

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        return (prev + dir + images.length) % images.length;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     setLightboxIndex(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft")  navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, navigate]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const activeSrc = lightboxIndex !== null ? (images[lightboxIndex] ?? null) : null;

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO STRIP
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "#1C2B1A", padding: "80px 0 60px" }}>
        <div className="text-center px-5">

          <p
            className="font-dmsans uppercase"
            style={{ color: "#B8902A", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "16px" }}
          >
            Our Work
          </p>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              color: "#FFFFFF",
              lineHeight: 1.1,
            }}
          >
            Landscapes We&rsquo;re Proud Of
          </h1>

          <p
            className="font-dmsans mx-auto"
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "520px",
              marginTop: "12px",
            }}
          >
            Every project tells a story. Here are some of our favorites.
          </p>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MASONRY GALLERY GRID
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "#F5F0E8", paddingTop: "52px", paddingBottom: "100px" }}>
        <div
          className="columns-1 sm:columns-2 lg:columns-3 mx-auto px-5 md:px-10 lg:px-[60px]"
          style={{ maxWidth: "1400px", columnGap: "16px" }}
        >
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
              style={{ marginBottom: "16px", height: `${HEIGHTS[index % HEIGHTS.length]}px` }}
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={src}
                alt={`Gallery photo ${index + 1}`}
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="transition-transform duration-[400ms] ease-in-out group-hover:scale-105"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />

              {/* Gradient overlay (fades in on hover) */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(28,43,26,0.6) 0%, transparent 60%)" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LIGHTBOX
      ═══════════════════════════════════════════════════ */}
      {activeSrc && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            zIndex:              9999,
            background:          "rgba(0,0,0,0.92)",
            backdropFilter:      "blur(4px)",
            WebkitBackdropFilter:"blur(4px)",
          }}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
              style={{
                top:          "-52px",
                right:        0,
                width:        "40px",
                height:       "40px",
                background:   "rgba(255,255,255,0.1)",
                border:       "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                color:        "#FFFFFF",
                fontSize:     "22px",
                cursor:       "pointer",
                lineHeight:   1,
              }}
              aria-label="Close"
            >
              ×
            </button>

            {/* Prev arrow — hidden on mobile */}
            <button
              onClick={() => navigate(-1)}
              className="hidden sm:flex absolute items-center justify-center transition-colors duration-200 hover:bg-white/20"
              style={{
                left:         "-68px",
                top:          "50%",
                transform:    "translateY(-50%)",
                width:        "48px",
                height:       "48px",
                background:   "rgba(255,255,255,0.1)",
                border:       "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                color:        "#FFFFFF",
                fontSize:     "28px",
                cursor:       "pointer",
                lineHeight:   1,
              }}
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Image */}
            <Image
              src={activeSrc}
              alt={`Gallery photo ${lightboxIndex !== null ? lightboxIndex + 1 : ""}`}
              width={1200}
              height={900}
              style={{
                width:        "auto",
                height:       "auto",
                maxWidth:     "90vw",
                maxHeight:    "85vh",
                objectFit:    "contain",
                borderRadius: "12px",
                display:      "block",
              }}
              priority
            />

            {/* Next arrow — hidden on mobile */}
            <button
              onClick={() => navigate(1)}
              className="hidden sm:flex absolute items-center justify-center transition-colors duration-200 hover:bg-white/20"
              style={{
                right:        "-68px",
                top:          "50%",
                transform:    "translateY(-50%)",
                width:        "48px",
                height:       "48px",
                background:   "rgba(255,255,255,0.1)",
                border:       "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                color:        "#FFFFFF",
                fontSize:     "28px",
                cursor:       "pointer",
                lineHeight:   1,
              }}
              aria-label="Next"
            >
              ›
            </button>

          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════
          CTA STRIP
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "#F5F0E8", padding: "80px 0" }}>
        <div className="text-center px-5">

          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize:   "clamp(32px, 5vw, 48px)",
              fontWeight: 300,
              color:      "#1C2B1A",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Ready to Transform Your Yard?
          </h2>

          <p
            className="font-dmsans mx-auto"
            style={{
              fontSize:     "16px",
              color:        "rgba(28,43,26,0.6)",
              maxWidth:     "480px",
              marginBottom: "32px",
            }}
          >
            Let&rsquo;s build something you&rsquo;ll love coming home to.
          </p>

          <Link
            href="/contact"
            className="inline-block font-dmsans font-bold uppercase transition-colors duration-200"
            style={{
              background:    "#B8902A",
              color:         "#1C2B1A",
              padding:       "16px 40px",
              borderRadius:  "8px",
              fontSize:      "13px",
              letterSpacing: "0.1em",
              textDecoration:"none",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#9A7820"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#B8902A"; }}
          >
            GET A FREE QUOTE →
          </Link>

        </div>
      </section>
    </>
  );
}
