import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Scissors, Leaf, ShieldCheck, Droplets, Sprout, TreePine, Layers, Flame } from 'lucide-react'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import { clientConfig } from '@/lib/client.config'

const DM = 'var(--font-dmsans), system-ui, sans-serif'
const CG = "var(--font-cormorant), 'Cormorant Garamond', serif"

const FEATURE_ICONS = [Scissors, Leaf, ShieldCheck, Droplets, Sprout, TreePine, Layers, Flame]

const DEFAULT_IMAGES = [
  '/images/Lawn%20Care%20%26%20Maintenance1.png',
  '/images/Landscape%20Design1.png',
  '/images/Irrigation%20Systems1.png',
  '/images/Hardscaping%20%26%20Patios1.png',
  '/images/Seasonal%20Cleanup1.png',
  '/images/Tree%20%26%20Shrub%20Care1.png',
  '/images/Mulching%20%26%20Soil%20Health1.png',
  '/images/Garden%20Bed%20Design1.png',
]

export async function generateStaticParams() {
  return clientConfig.services.filter(s => s.active).map(s => ({ slug: s.slug }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const allActive    = clientConfig.services.filter(s => s.active)
  const serviceIndex = allActive.findIndex(s => s.slug === params.slug)
  const service      = serviceIndex !== -1 ? allActive[serviceIndex] : null
  if (!service) notFound()

  // heroImage kept for reference but background is now brand color
  const heroImage = service.image || DEFAULT_IMAGES[serviceIndex % DEFAULT_IMAGES.length]
  void heroImage // suppress unused warning — kept for future use

  return (
    <>
      <Navbar />

      {/* ── Page background: brand cream ─────────────────────────── */}
      <div
        style={{ minHeight: '100vh', background: 'var(--color-bg)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center' }}
      >
        <div
          className="svc-wrap"
          style={{ width: '100%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', padding: '168px 32px 72px', boxSizing: 'border-box' }}
        >

          {/* ── THE CARD — dark primary color ────────────────────── */}
          <div
            className="svc-card"
            style={{ background: 'var(--color-primary)', borderRadius: '20px',
              width: '100%', maxWidth: '1080px', overflow: 'hidden' }}
          >

            {/* TOP — category, name, tagline, description */}
            <div style={{ padding: '36px 44px 28px' }}>

              {/* Category breadcrumb */}
              <p style={{ fontFamily: DM, fontSize: '11px', fontWeight: 600,
                color: 'var(--color-accent)', textTransform: 'uppercase',
                letterSpacing: '0.2em', margin: '0 0 14px' }}>
                Landscaping &nbsp;·&nbsp; {service.badge}
              </p>

              {/* Service name */}
              <h1 style={{ fontFamily: CG, fontSize: 'clamp(30px, 4vw, 50px)',
                fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.01em',
                color: 'var(--color-primary-text)', margin: '0 0 10px' }}>
                {service.name}
                <span style={{ color: 'var(--color-accent)' }}>.</span>
              </h1>

              {/* Tagline */}
              <p style={{ fontFamily: CG, fontSize: '18px', fontStyle: 'italic',
                color: 'rgb(var(--color-primary-text-rgb) / 0.58)',
                margin: '0 0 10px', lineHeight: 1.4 }}>
                {service.tagline}
              </p>

              {/* Description */}
              <p style={{ fontFamily: DM, fontSize: '14px',
                color: 'rgb(var(--color-primary-text-rgb) / 0.58)',
                lineHeight: 1.8, margin: 0, maxWidth: '560px' }}>
                {service.description}
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)',
              margin: '0 44px' }} />

            {/* FEATURE GRID */}
            <div
              className="svc-features"
              style={{ display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(service.features.length, 3)}, 1fr)`,
                margin: '0 44px' }}
            >
              {service.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length]
                return (
                  <div
                    key={feature}
                    style={{ padding: '28px 24px 28px 0',
                      borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                      paddingLeft: i > 0 ? '24px' : '0' }}
                  >
                    {/* Icon circle — translucent white on dark */}
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '12px' }}>
                      <Icon size={18} color="var(--color-accent)" strokeWidth={1.5} />
                    </div>
                    {/* Feature name */}
                    <h3 style={{ fontFamily: DM, fontSize: '15px', fontWeight: 600,
                      color: 'var(--color-primary-text)', margin: 0, lineHeight: 1.35 }}>
                      {feature}
                    </h3>
                  </div>
                )
              })}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)',
              margin: '0 44px' }} />

            {/* BOTTOM ROW — price | CTA | phone */}
            <div
              className="svc-bottom"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                gap: '0', padding: '28px 44px 32px', alignItems: 'center' }}
            >
              {/* Left: Price */}
              <div>
                <p style={{ fontFamily: DM, fontSize: '10px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase',
                  letterSpacing: '0.18em', margin: '0 0 4px' }}>
                  Starting at
                </p>
                <p style={{ fontFamily: CG, fontSize: '44px', fontWeight: 300,
                  color: 'var(--color-accent)', lineHeight: 1, margin: '0 0 4px' }}>
                  {service.price}
                </p>
                <p style={{ fontFamily: DM, fontSize: '12px',
                  color: 'rgba(255,255,255,0.42)', margin: 0 }}>
                  {service.priceLabel}
                </p>
              </div>

              {/* Center: CTA */}
              <div style={{ textAlign: 'center',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                padding: '0 28px' }}>
                <Link
                  href="/contact"
                  className="svc-cta-btn"
                  style={{ display: 'block', background: 'var(--color-accent-dark)',
                    color: 'var(--color-accent-text)', fontWeight: 700,
                    padding: '15px 24px', borderRadius: '10px', fontSize: '14px',
                    textDecoration: 'none', fontFamily: DM, letterSpacing: '0.02em',
                    textAlign: 'center' }}
                >
                  {clientConfig.business.ctaLabel} →
                </Link>
              </div>

              {/* Right: Phone */}
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: DM, fontSize: '10px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase',
                  letterSpacing: '0.18em', margin: '0 0 6px' }}>
                  Or Call
                </p>
                <a
                  href={clientConfig.business.phoneHref}
                  className="svc-phone"
                  style={{ fontFamily: DM, fontSize: '20px', fontWeight: 700,
                    color: 'var(--color-primary-text)', textDecoration: 'none',
                    display: 'block', marginBottom: '4px' }}
                >
                  {clientConfig.business.phone}
                </a>
                <p style={{ fontFamily: DM, fontSize: '12px',
                  color: 'rgba(255,255,255,0.42)', margin: 0 }}>
                  {clientConfig.business.hours}
                </p>
              </div>
            </div>

            {/* Rating strip */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)',
              padding: '14px 44px', textAlign: 'center', display: 'flex',
              alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: '13px' }}>★</span>
              <span style={{ fontFamily: DM, fontSize: '12px',
                color: 'rgba(255,255,255,0.38)' }}>
                {clientConfig.business.stats.rating}
                &nbsp;·&nbsp;
                {clientConfig.business.stats.projectsCompleted} Happy Clients
              </span>
            </div>

          </div>

          {/* Back to services — dark pill on cream background */}
          <Link
            href="/services"
            className="svc-back"
            style={{ fontFamily: DM, fontSize: '13px', fontWeight: 600,
              color: 'var(--color-primary-text)', textDecoration: 'none', marginTop: '24px',
              letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--color-primary)', padding: '11px 24px', borderRadius: '50px' }}
          >
            ← All Services
          </Link>

        </div>
      </div>

      <Footer />

      <style>{`
        .svc-cta-btn:hover { background: var(--color-accent) !important; }
        .svc-phone:hover   { color: var(--color-accent) !important; }
        .svc-back:hover    { opacity: 0.8; }

        @media (max-width: 900px) {
          .svc-card     { border-radius: 16px !important; }
          .svc-features { grid-template-columns: 1fr !important; margin: 0 28px !important; }
          .svc-features > div {
            border-left: none !important; padding-left: 0 !important;
            border-top: 1px solid rgba(255,255,255,0.07) !important;
            padding-top: 24px !important; padding-bottom: 24px !important;
          }
          .svc-bottom { grid-template-columns: 1fr !important; gap: 24px !important;
            padding: 28px !important; }
          .svc-bottom > div { border-left: none !important; border-right: none !important;
            padding: 0 !important; text-align: left !important; }
          .svc-wrap { padding: 160px 16px 56px !important; }
        }
      `}</style>
    </>
  )
}
