"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clientConfig } from "@/lib/client.config";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = clientConfig.faq;

  return (
    <section
      id="faq"
      className="relative py-[100px]"
      style={{ background: "var(--color-primary)" }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <p
            className="font-dmsans"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              marginBottom: "16px",
            }}
          >
            Have Questions?
          </p>

          <h2
            className="font-playfair"
            style={{
              fontSize: "clamp(34px, 5vw, 50px)",
              fontWeight: 700,
              color: "var(--color-primary-text)",
              lineHeight: 1.05,
              margin: "0 0 14px",
            }}
          >
            Frequently Asked{" "}
            <em
              className="font-playfair italic"
              style={{ fontWeight: 400, color: "var(--color-accent)" }}
            >
              Questions
            </em>
          </h2>

          <p
            className="font-dmsans"
            style={{
              fontSize: "15px",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.42)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ rows — individual dark cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    className="font-dmsans"
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "var(--color-primary-text)",
                      flex: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="font-dmsans"
                    style={{
                      fontSize: "26px",
                      fontWeight: 300,
                      color: "var(--color-accent)",
                      flexShrink: 0,
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="font-dmsans"
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.85,
                          color: "rgba(255,255,255,0.55)",
                          padding: "0 24px 22px",
                          margin: 0,
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          paddingTop: "18px",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom contact line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "32px",
            padding: "20px 24px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            className="font-dmsans"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: 0 }}
          >
            Still have a question?
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href={clientConfig.business.phoneHref}
              className="font-dmsans"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--color-accent)",
                textDecoration: "none",
              }}
            >
              {clientConfig.business.phone}
            </a>
            <a
              href="/contact"
              className="font-dmsans"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--color-accent-text)",
                background: "var(--color-accent-dark)",
                padding: "8px 18px",
                borderRadius: "50px",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Contact Us →
            </a>
          </div>
        </div>

      </div>

      {/* Dark → Cream wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
        zIndex: 10, lineHeight: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "64px" }}>
          <path d="M0,32 C240,64 480,8 720,34 C960,60 1200,10 1440,32 L1440,64 L0,64 Z"
            fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
