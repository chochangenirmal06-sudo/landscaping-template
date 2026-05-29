import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data'
import { clientConfig } from '@/lib/client.config'

export async function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({ slug }))
}

const DM = 'var(--font-dmsans), system-ui, sans-serif'
const CG = "var(--font-cormorant), 'Cormorant Garamond', serif"

export default function ServicePage({ params }: { params: { slug: string } }) {
  const extService = getServiceBySlug(params.slug)
  const configService = clientConfig.services.find(s => s.slug === params.slug && s.active)

  if (!extService || !configService) notFound()

  return (
    <>
      <Navbar />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#1C2B1A', padding: '140px 0 100px' }}>
        <div className="svc-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', boxSizing: 'border-box' }}>
          <div className="svc-hero-cols" style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '60px', alignItems: 'center' }}>

            {/* LEFT — text */}
            <div>
              <span style={{
                display: 'inline-block', background: 'rgba(184,144,42,0.15)', color: '#B8902A',
                borderRadius: '50px', padding: '6px 16px', fontSize: '11px',
                textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 500,
                marginBottom: '20px', fontFamily: DM,
              }}>
                {configService.badge}
              </span>

              <h1 style={{
                fontFamily: CG, fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 300,
                color: '#FFFFFF', lineHeight: 1.05, margin: '0 0 16px',
              }}>
                {configService.name}
              </h1>

              <p style={{
                fontSize: '20px', color: 'rgba(255,255,255,0.65)',
                fontStyle: 'italic', marginBottom: '16px', fontFamily: DM,
              }}>
                {configService.tagline}
              </p>

              <p style={{
                fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8,
                marginBottom: '32px', fontFamily: DM, maxWidth: '400px',
              }}>
                {configService.description}
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <Link
                  href="/contact"
                  className="svc-btn-primary"
                  style={{
                    display: 'inline-block', background: '#B8902A', color: '#1C2B1A',
                    fontWeight: 700, padding: '16px 32px', borderRadius: '8px',
                    textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '13px',
                    textDecoration: 'none', fontFamily: DM,
                  }}
                >
                  GET A FREE QUOTE →
                </Link>
                <Link
                  href="/services"
                  className="svc-btn-secondary"
                  style={{
                    display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)',
                    color: '#FFFFFF', background: 'transparent', fontWeight: 600,
                    padding: '16px 32px', borderRadius: '8px', fontSize: '13px',
                    textDecoration: 'none', fontFamily: DM,
                  }}
                >
                  ← All Services
                </Link>
              </div>

              <div>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'block', fontFamily: DM }}>
                  Starting at
                </span>
                <span style={{ fontFamily: CG, fontSize: '28px', color: '#B8902A', fontWeight: 300 }}>
                  {configService.price}
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: DM, marginLeft: '8px' }}>
                  {configService.priceLabel}
                </span>
              </div>
            </div>

            {/* RIGHT — hero image */}
            <div className="svc-hero-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={configService.image}
                alt={configService.name}
                style={{
                  width: '100%', height: '420px', objectFit: 'cover',
                  objectPosition: 'center top', borderRadius: '20px', display: 'block',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT'S INCLUDED ──────────────────────────────── */}
      <section style={{ background: '#F5F0E8', padding: '80px 0' }}>
        <div className="svc-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', boxSizing: 'border-box' }}>
          <p style={{
            fontSize: '11px', color: '#B8902A', textTransform: 'uppercase',
            letterSpacing: '0.15em', fontWeight: 500, marginBottom: '12px', fontFamily: DM,
          }}>
            What&rsquo;s Included
          </p>
          <h2 style={{ fontFamily: CG, fontSize: '42px', fontWeight: 300, color: '#1C2B1A', margin: '0 0 40px' }}>
            Everything in this service
          </h2>
          <div className="svc-includes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {extService.includes.map(item => (
              <div
                key={item}
                style={{
                  background: '#FFFFFF', borderRadius: '10px', padding: '16px 20px',
                  display: 'flex', alignItems: 'center', gap: '12px',
                }}
              >
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: '#1C2B1A', color: '#B8902A',
                  fontSize: '14px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontFamily: DM,
                }}>
                  ✓
                </div>
                <span style={{ fontSize: '14px', color: '#1C2B1A', fontWeight: 500, fontFamily: DM }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BENEFITS ─────────────────────────────────────── */}
      <section style={{ background: '#1C2B1A', padding: '80px 0' }}>
        <div className="svc-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', boxSizing: 'border-box' }}>
          <p style={{
            fontSize: '11px', color: '#B8902A', textTransform: 'uppercase',
            letterSpacing: '0.15em', fontWeight: 500, marginBottom: '12px', fontFamily: DM,
          }}>
            Why Choose Us For This
          </p>
          <h2 style={{ fontFamily: CG, fontSize: '42px', fontWeight: 300, color: '#FFFFFF', margin: '0 0 48px' }}>
            The {clientConfig.business.name} difference
          </h2>
          <div className="svc-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {extService.benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    fontFamily: CG, fontSize: '64px', color: 'rgba(255,255,255,0.04)',
                    position: 'absolute', top: '16px', right: '20px', lineHeight: 1,
                    pointerEvents: 'none',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{
                  fontSize: '18px', fontWeight: 600, color: '#FFFFFF',
                  margin: '0 0 12px', fontFamily: DM, position: 'relative',
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7, margin: 0, fontFamily: DM, position: 'relative',
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PROCESS ──────────────────────────────────────── */}
      <section style={{ background: '#F5F0E8', padding: '80px 0' }}>
        <div className="svc-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', boxSizing: 'border-box' }}>
          <p style={{
            fontSize: '11px', color: '#B8902A', textTransform: 'uppercase',
            letterSpacing: '0.15em', fontWeight: 500, marginBottom: '12px', fontFamily: DM,
          }}>
            How It Works
          </p>
          <h2 style={{ fontFamily: CG, fontSize: '42px', fontWeight: 300, color: '#1C2B1A', margin: '0 0 64px' }}>
            Our process, start to finish
          </h2>
          <div className="svc-process-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
            {extService.process.map((step, i) => (
              <div
                key={step.step}
                className="svc-process-step"
                style={{
                  flex: 1, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', textAlign: 'center', position: 'relative',
                }}
              >
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: '#1C2B1A', color: '#B8902A',
                  fontSize: '18px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px', fontFamily: DM, flexShrink: 0,
                }}>
                  {step.step}
                </div>

                {/* Connector line to next step */}
                {i < extService.process.length - 1 && (
                  <div className="svc-process-connector" style={{
                    position: 'absolute', top: '28px',
                    left: 'calc(50% + 28px)',
                    width: 'calc(100% - 56px)',
                    height: '1px',
                    background: 'rgba(28,43,26,0.15)',
                  }} />
                )}

                <h4 style={{
                  fontSize: '16px', fontWeight: 600, color: '#1C2B1A',
                  margin: '0 0 8px', fontFamily: DM,
                }}>
                  {step.title}
                </h4>
                <p style={{
                  fontSize: '13px', color: '#6B7280', fontFamily: DM,
                  lineHeight: 1.6, margin: 0, maxWidth: '200px',
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FAQ ──────────────────────────────────────────── */}
      <section style={{ background: '#1C2B1A', padding: '80px 0' }}>
        <div className="svc-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', boxSizing: 'border-box' }}>
          <p style={{
            fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase',
            letterSpacing: '0.15em', fontWeight: 500, marginBottom: '12px', fontFamily: DM,
          }}>
            Common Questions
          </p>
          <h2 style={{ fontFamily: CG, fontSize: '42px', fontWeight: 300, color: '#FFFFFF', margin: '0 0 48px' }}>
            Frequently asked questions
          </h2>
          <ServiceFAQ faqs={extService.faqs} />
        </div>
      </section>

      {/* ── SECTION 6: CTA ──────────────────────────────────────────── */}
      <section style={{ background: '#F5F0E8', padding: '80px 0', textAlign: 'center' }}>
        <div className="svc-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', boxSizing: 'border-box' }}>
          <h2 style={{
            fontFamily: CG, fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 300,
            color: '#1C2B1A', margin: '0 0 12px',
          }}>
            Ready to get started?
          </h2>
          <p style={{
            fontSize: '16px', color: '#6B7280',
            marginBottom: '32px', fontFamily: DM,
          }}>
            Book your free consultation today. No obligation.
          </p>
          <Link
            href="/contact"
            className="svc-cta-btn"
            style={{
              display: 'inline-block', background: '#1C2B1A', color: '#FFFFFF',
              fontWeight: 700, padding: '18px 48px', borderRadius: '8px',
              textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px',
              textDecoration: 'none', fontFamily: DM,
            }}
          >
            GET A FREE QUOTE →
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        .svc-btn-primary:hover  { background: #9A7820 !important; }
        .svc-btn-secondary:hover { background: rgba(255,255,255,0.08) !important; }
        .svc-cta-btn:hover { background: #2C3E2C !important; }

        @media (max-width: 1024px) {
          .svc-inner { padding: 0 32px !important; }
          .svc-hero-cols { grid-template-columns: 1fr !important; }
          .svc-hero-img-wrap img { height: 300px !important; }
        }
        @media (max-width: 768px) {
          .svc-inner { padding: 0 20px !important; }
          .svc-includes-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .svc-benefits-grid { grid-template-columns: 1fr !important; }
          .svc-process-connector { display: none !important; }
          .svc-process-row { flex-wrap: wrap !important; gap: 28px !important; justify-content: center; }
          .svc-process-step { flex: 0 0 calc(50% - 14px) !important; max-width: calc(50% - 14px) !important; }
        }
        @media (max-width: 480px) {
          .svc-includes-grid { grid-template-columns: 1fr !important; }
          .svc-process-step { flex: 0 0 100% !important; max-width: 100% !important; }
        }
      `}</style>
    </>
  )
}
