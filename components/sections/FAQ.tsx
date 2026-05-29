"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clientConfig } from "@/lib/client.config";

const BORDER = "rgba(255,255,255,0.08)";

function AccordionItem({
  faq,
  isOpen,
  isLast,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderTop: `1px solid ${BORDER}`, ...(isLast ? { borderBottom: `1px solid ${BORDER}` } : {}) }}>
      <button
        className="w-full flex items-center justify-between py-7 text-left gap-6"
        onClick={onToggle}
      >
        <span
          className="font-playfair text-lg leading-snug transition-colors duration-200"
          style={{ color: isOpen ? "#B8902A" : "#FFFFFF" }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="text-2xl font-light flex-shrink-0 leading-none"
          style={{ color: "#B8902A" }}
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
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p
              className="font-dmsans text-base leading-relaxed pb-6 pr-8"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ContactButton = ({ className }: { className?: string }) => (
  <a
    href="#contact"
    className={`inline-flex items-center gap-2 border border-[#C89B3E] text-[#C89B3E] hover:bg-[#C89B3E] hover:text-[#1A2E1A] font-dmsans text-sm font-semibold tracking-wide px-10 py-3.5 rounded-full transition-all duration-200 ${className ?? ""}`}
  >
    Contact Us Directly →
  </a>
);

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  const handleToggle = (i: number) => setOpen((prev) => (prev === i ? -1 : i));

  const faqs = clientConfig.faq.map(f => ({ q: f.question, a: f.answer }));

  return (
    <section id="faq" className="relative py-[100px] overflow-hidden" style={{ background: "#1C2B1A" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-20 lg:items-start">

          {/* Left — sticky on desktop, stacks above accordion on mobile */}
          <div className="mb-16 lg:mb-0 lg:sticky lg:top-32">
            <p className="font-dmsans text-xs tracking-[0.25em] uppercase text-[#C89B3E] mb-5">
              — Frequently Asked —
            </p>
            <h2 className="font-playfair text-5xl md:text-6xl text-white font-normal leading-tight">
              Everything you{" "}
              <em className="italic text-[#C89B3E]">wondered.</em>
            </h2>
            <p className="font-dmsans text-sm mt-6 leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
              Can&apos;t find your answer? Give us a call.
            </p>
            <a
              href={clientConfig.business.phoneHref}
              className="block font-playfair text-xl text-[#C89B3E] mt-2 hover:text-[#E8C06A] transition-colors"
            >
              {clientConfig.business.phone}
            </a>
            {/* Desktop button */}
            <ContactButton className="mt-8 hidden lg:inline-flex" />
          </div>

          {/* Right — accordion */}
          <div>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                isOpen={open === i}
                isLast={i === faqs.length - 1}
                onToggle={() => handleToggle(i)}
              />
            ))}
            {/* Mobile button — below last item */}
            <ContactButton className="mt-10 lg:hidden" />
          </div>

        </div>
      </div>

    </section>
  );
}
