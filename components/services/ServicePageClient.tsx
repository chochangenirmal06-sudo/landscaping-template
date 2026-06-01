'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import type { Service } from '@/lib/services-data'
import { clientConfig } from '@/lib/client.config'

const DM = 'var(--font-dmsans), system-ui, sans-serif'
const CG = "var(--font-cormorant), 'Cormorant Garamond', serif"

export default function ServicePageClient({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const nameParts = service.name.split(' ')
  const firstWord = nameParts[0]
  const restWords = nameParts.slice(1).join(' ')

  const includesLastRow =
    service.includes.length % 2 === 0
      ? service.includes.length - 2
      : service.includes.length - 1

  const scrollToIncludes = () =>
    document.getElementById('svc2-includes')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section style={{ background: 'var(--color-primary)', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '140px 60px 0', boxSizing: 'border-box' }}>
          <div className="svc2-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'flex-start' }}>

            {/* LEFT */}
            <div style={{ paddingBottom: '80px' }}>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', margin: '0 0 24px', fontFamily: DM }}>
                {clientConfig.business.name} → {service.category} → {service.name}
              </p>

              <h1 className="svc2-hero-h1" style={{ fontFamily: CG, fontSize: '80px', fontWeight: 300, color: 'var(--color-primary-text)', lineHeight: 0.95, letterSpacing: '-0.02em', margin: 0 }}>
                {firstWord}
                {restWords ? (<><br /><em style={{ fontStyle: 'italic' }}>{restWords}.</em></>) : '.'}
              </h1>

              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', margin: '16px 0 0', fontFamily: CG }}>
                {service.tagline}
              </p>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '380px', margin: '16px 0 32px', fontFamily: DM }}>
                {service.description}
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  className="svc2-btn-gold"
                  style={{
                    display: 'inline-block', background: 'var(--color-accent-dark)', color: 'var(--color-accent-text)',
                    fontWeight: 700, padding: '14px 28px', borderRadius: '6px',
                    fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em',
                    textDecoration: 'none', fontFamily: DM,
                  }}
                >
                  GET A FREE QUOTE →
                </Link>
                <button
                  onClick={scrollToIncludes}
                  className="svc2-btn-outline"
                  style={{
                    border: '1px solid rgba(255,255,255,0.25)', color: 'var(--color-primary-text)',
                    background: 'transparent', padding: '14px 28px', borderRadius: '6px',
                    fontSize: '12px', cursor: 'pointer', fontFamily: DM,
                  }}
                >
                  VIEW MORE ↓
                </button>
              </div>

              {/* Stats bar */}
              <div className="svc2-stats" style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
                <div className="svc2-stat-item">
                  <span style={{ fontFamily: CG, fontSize: '32px', fontWeight: 300, color: 'var(--color-primary-text)', display: 'block', lineHeight: 1 }}>{clientConfig.business.stats.yearsExperience} YRS</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginTop: '4px', fontFamily: DM }}>in {clientConfig.business.city}</span>
                </div>
                <div className="svc2-stat-divider" style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', margin: '0 32px', flexShrink: 0 }} />
                <div className="svc2-stat-item">
                  <span style={{ fontFamily: CG, fontSize: '32px', fontWeight: 300, color: 'var(--color-primary-text)', display: 'block', lineHeight: 1 }}>{clientConfig.business.stats.projectsCompleted}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginTop: '4px', fontFamily: DM }}>projects done</span>
                </div>
                <div className="svc2-stat-divider" style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', margin: '0 32px', flexShrink: 0 }} />
                <div className="svc2-stat-item">
                  <span style={{ fontFamily: CG, fontSize: '32px', fontWeight: 300, color: 'var(--color-primary-text)', display: 'block', lineHeight: 1 }}>{service.startingPrice}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginTop: '4px', fontFamily: DM }}>starting price</span>
                </div>
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="svc2-hero-img-col" style={{ alignSelf: 'flex-end', position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.heroImage}
                alt={service.name}
                style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '16px 16px 0 0', display: 'block' }}
              />
              <div
                className="svc2-price-badge"
                style={{ position: 'absolute', bottom: '32px', left: '-20px', background: 'var(--color-bg)', borderRadius: '12px', padding: '20px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
              >
                <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', fontFamily: DM }}>Starting at</span>
                <span style={{ fontFamily: CG, fontSize: '36px', fontWeight: 300, color: 'var(--color-bg-text)', display: 'block', lineHeight: 1.1 }}>{service.startingPrice}</span>
                <span style={{ fontSize: '11px', color: '#9CA3AF', display: 'block', marginTop: '2px', fontFamily: DM }}>{service.priceNote}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT'S INCLUDED */}
      <section id="svc2-includes" style={{ background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 60px', boxSizing: 'border-box' }}>
          <div className="svc2-two-col" style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '80px', alignItems: 'flex-start' }}>

            <div>
              <p style={{ fontSize: '10px', color: 'var(--color-accent-dark)', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 20px', fontFamily: DM }}>
                WHAT&rsquo;S INCLUDED
              </p>
              <h2 className="svc2-section-h2" style={{ fontFamily: CG, fontSize: '56px', fontWeight: 300, color: 'var(--color-bg-text)', lineHeight: 1.0, margin: 0 }}>
                Everything taken<br /><em style={{ fontStyle: 'italic' }}>care of.</em>
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.8, maxWidth: '320px', margin: '20px 0 0', fontFamily: DM }}>
                From the first visit to the last walk-through, every last detail is included in the service — we take care of everything, so you never have to.
              </p>
            </div>

            <div className="svc2-includes-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '24px', rowGap: 0 }}>
              {service.includes.map((item, i) => (
                <div
                  key={item}
                  style={{
                    borderTop: '1px solid rgba(28,43,26,0.1)',
                    borderBottom: i >= includesLastRow ? '1px solid rgba(28,43,26,0.1)' : undefined,
                    padding: '20px 0', display: 'flex', alignItems: 'flex-start', gap: '16px',
                  }}
                >
                  <div style={{ width: '32px', height: '32px', flexShrink: 0, background: 'rgb(var(--color-primary-rgb) / 0.06)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} color="var(--color-bg-text)" />
                  </div>
                  <span style={{ fontSize: '14px', color: 'var(--color-bg-text)', fontWeight: 500, lineHeight: 1.4, fontFamily: DM }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — THE DIFFERENCE */}
      <section style={{ background: 'var(--color-primary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 60px', boxSizing: 'border-box' }}>
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 16px', fontFamily: DM }}>
            WHY CHOOSE US
          </p>
          <h2 className="svc2-benefits-h2" style={{ fontFamily: CG, fontSize: '64px', fontWeight: 300, color: 'var(--color-primary-text)', lineHeight: 1.0, margin: 0 }}>
            The {clientConfig.business.name}<br /><em style={{ fontStyle: 'italic' }}>difference.</em>
          </h2>

          <div className="svc2-benefits-layout" style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '80px', marginTop: '80px', alignItems: 'flex-start' }}>
            <div />
            <div>
              {service.benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  style={{
                    display: 'flex', gap: '40px', alignItems: 'flex-start',
                    padding: '40px 0',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    borderBottom: i === service.benefits.length - 1 ? '1px solid rgba(255,255,255,0.08)' : undefined,
                  }}
                >
                  <span style={{ fontFamily: CG, fontSize: '48px', fontWeight: 300, color: 'rgba(255,255,255,0.12)', lineHeight: 1, flexShrink: 0, width: '60px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-primary-text)', margin: '0 0 10px', fontFamily: DM }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0, fontFamily: DM }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section style={{ background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 60px', boxSizing: 'border-box' }}>
          <div className="svc2-two-col" style={{ display: 'grid', gridTemplateColumns: '35% 65%', gap: '80px', alignItems: 'flex-start' }}>

            <div>
              <p style={{ fontSize: '10px', color: 'var(--color-accent-dark)', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 20px', fontFamily: DM }}>
                OUR PROCESS
              </p>
              <h2 className="svc2-section-h2" style={{ fontFamily: CG, fontSize: '56px', fontWeight: 300, color: 'var(--color-bg-text)', lineHeight: 1.0, margin: 0 }}>
                A quiet,<br />deliberate<br /><em style={{ fontStyle: 'italic' }}>process.</em>
              </h2>
            </div>

            <div>
              {service.process.map((step, i) => (
                <div
                  key={step.step}
                  style={{
                    position: 'relative',
                    padding: `0 0 ${i < service.process.length - 1 ? '48px' : '0'} 64px`,
                    borderLeft: i < service.process.length - 1 ? '1px solid rgba(28,43,26,0.12)' : '1px solid transparent',
                  }}
                >
                  <div style={{
                    position: 'absolute', left: '-16px', top: 0,
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'var(--color-primary)', color: 'var(--color-accent-dark)',
                    fontSize: '12px', fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: DM,
                  }}>
                    {step.step}
                  </div>
                  <p style={{ fontSize: '10px', color: 'var(--color-accent-dark)', textTransform: 'uppercase', letterSpacing: '0.15em', margin: '0 0 8px', fontFamily: DM }}>
                    STEP {step.step}
                  </p>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-bg-text)', margin: '0 0 10px', fontFamily: DM }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.8, margin: 0, fontFamily: DM }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section style={{ background: 'var(--color-bg)', borderTop: '1px solid rgba(28,43,26,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 60px', boxSizing: 'border-box' }}>
          <div className="svc2-two-col" style={{ display: 'grid', gridTemplateColumns: '35% 65%', gap: '80px', alignItems: 'flex-start' }}>

            <div>
              <p style={{ fontSize: '10px', color: 'var(--color-accent-dark)', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 20px', fontFamily: DM }}>
                COMMON QUESTIONS
              </p>
              <h2 className="svc2-section-h2" style={{ fontFamily: CG, fontSize: '56px', fontWeight: 300, color: 'var(--color-bg-text)', lineHeight: 1.0, margin: 0 }}>
                Questions,<br /><em style={{ fontStyle: 'italic' }}>answered.</em>
              </h2>
              <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.7, maxWidth: '260px', margin: '20px 0 0', fontFamily: DM }}>
                A few things we hear most often. Can&apos;t see your question? Give us a ring — we respond personally, usually within the same day.
              </p>
            </div>

            <div>
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid rgba(28,43,26,0.1)',
                    borderBottom: i === service.faqs.length - 1 ? '1px solid rgba(28,43,26,0.1)' : undefined,
                    padding: '24px 0',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-bg-text)', lineHeight: 1.5, flex: 1, fontFamily: DM }}>
                      {faq.question}
                    </span>
                    <span style={{
                      width: '28px', height: '28px', minWidth: '28px', borderRadius: '50%',
                      border: '1px solid rgba(28,43,26,0.15)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-accent-dark)', fontSize: '18px', fontFamily: DM, lineHeight: 1,
                    }}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p style={{ paddingTop: '16px', fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0, fontFamily: DM }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section style={{ background: 'var(--color-bg)', borderTop: '1px solid rgba(28,43,26,0.1)', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 60px', boxSizing: 'border-box' }}>
          <h2 className="svc2-cta-h2" style={{ fontFamily: CG, fontSize: '64px', fontWeight: 300, color: 'var(--color-bg-text)', lineHeight: 1.0, margin: '0 0 20px' }}>
            A property that<br /><em style={{ fontStyle: 'italic' }}>looks finished.</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 36px', fontFamily: DM }}>
            Book a free walk-through. We&apos;ll assess your property, no obligation — we&apos;ll let the work speak for itself.
          </p>
          <Link
            href="/contact"
            className="svc2-cta-btn"
            style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'var(--color-primary-text)', fontWeight: 600, padding: '16px 40px', borderRadius: '6px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', fontFamily: DM }}
          >
            GET A FREE QUOTE →
          </Link>
          <div style={{ marginTop: '32px' }}>
            <span style={{ fontFamily: CG, fontStyle: 'italic', fontSize: '18px', color: 'var(--color-bg-text)' }}>{clientConfig.business.name}</span>
            <a
              href={clientConfig.business.phoneHref}
              className="svc2-phone"
              style={{ fontSize: '13px', color: '#9CA3AF', textDecoration: 'none', fontFamily: DM }}
            >
              {' · '}{clientConfig.business.phone}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .svc2-btn-gold:hover    { background: var(--color-accent) !important; }
        .svc2-btn-outline:hover { background: rgba(255,255,255,0.08) !important; }
        .svc2-cta-btn:hover     { opacity: 0.85; }
        .svc2-phone:hover       { color: var(--color-accent-dark) !important; }

        @media (max-width: 1024px) {
          .svc2-hero-grid         { grid-template-columns: 1fr !important; }
          .svc2-hero-img-col      { align-self: auto !important; margin-top: 40px; }
          .svc2-price-badge       { position: static !important; display: inline-block; margin-top: 20px; }
          .svc2-two-col           { grid-template-columns: 1fr !important; gap: 48px !important; }
          .svc2-benefits-layout   { grid-template-columns: 1fr !important; gap: 0 !important; }
          .svc2-benefits-layout > div:first-child { display: none !important; }
          .svc2-stats             { flex-wrap: wrap; gap: 20px 40px !important; }
          .svc2-stat-divider      { display: none !important; }
          .svc2-stat-item         { flex: 0 0 auto; }
        }

        @media (max-width: 768px) {
          .svc2-hero-h1     { font-size: 56px !important; }
          .svc2-section-h2  { font-size: 40px !important; }
          .svc2-benefits-h2 { font-size: 40px !important; }
          .svc2-cta-h2      { font-size: 40px !important; }
          .svc2-includes-grid { grid-template-columns: 1fr !important; }
          section > div     { padding-left: 24px !important; padding-right: 24px !important; }
          section > div[style*="padding: 120"] { padding-top: 60px !important; padding-bottom: 60px !important; }
          section > div[style*="padding: 80"]  { padding-top: 60px !important; }
          section > div[style*="padding: 100"] { padding-top: 60px !important; padding-bottom: 80px !important; }
        }
      `}</style>
    </>
  )
}
