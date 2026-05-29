import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import { clientConfig } from '@/lib/client.config'

export const metadata: Metadata = {
  title: `Thank You | ${clientConfig.business.fullName}`,
  description: 'Your consultation request has been received. We\'ll be in touch within 2 hours.',
}

const STEPS = [
  { num: '01', text: 'We review your project details' },
  { num: '02', text: 'We reach out within 1 business day' },
  { num: '03', text: 'Receive your free quote' },
]

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: '100vh',
          background: '#F5F0E8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>

          {/* Animated checkmark */}
          <div
            style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: '#1C2B1A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto',
              animation: 'popIn 0.4s ease-out both',
            }}
          >
            <span style={{ fontSize: '36px', color: '#FFFFFF', lineHeight: 1 }}>✓</span>
          </div>

          {/* Label */}
          <p
            style={{
              fontSize: '11px', color: '#B8902A', letterSpacing: '0.2em',
              textTransform: 'uppercase', marginTop: '24px', marginBottom: '8px',
              fontFamily: 'var(--font-dmsans), system-ui, sans-serif', fontWeight: 600,
            }}
          >
            Quote Requested
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: 'clamp(40px, 8vw, 56px)', fontWeight: 300,
              color: '#1C2B1A', lineHeight: 1.1, margin: '0',
            }}
          >
            Your Quote Request Is In.
          </h1>

          {/* Body */}
          <p
            style={{
              fontSize: '16px', color: '#6B7280', lineHeight: 1.7,
              maxWidth: '420px', margin: '16px auto 0',
              fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
            }}
          >
            We&rsquo;ve received your details and will be in touch within 1 business day — by phone or email, whichever works best for you.
          </p>

          {/* Steps */}
          <div
            style={{
              display: 'flex', alignItems: 'flex-start',
              marginTop: '40px', gap: '0',
            }}
          >
            {STEPS.map(({ num, text }, i) => (
              <>
                <div key={num} style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: '#1C2B1A', color: '#B8902A',
                      fontSize: '14px', fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
                    }}
                  >
                    {num}
                  </div>
                  <p
                    style={{
                      fontSize: '13px', color: '#6B7280', textAlign: 'center',
                      maxWidth: '120px', margin: '10px auto 0',
                      fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
                      lineHeight: 1.4,
                    }}
                  >
                    {text}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    key={`line-${i}`}
                    style={{
                      flex: 1, height: '1px',
                      background: 'rgba(28,43,26,0.15)',
                      marginTop: '20px',
                    }}
                  />
                )}
              </>
            ))}
          </div>

          {/* Buttons */}
          <div
            style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
              gap: '12px', marginTop: '40px',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-block',
                background: '#B8902A', color: '#1C2B1A',
                fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', fontSize: '13px',
                padding: '16px 40px', borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
              }}
              className="thankyou-btn-primary"
            >
              Back to Home
            </Link>

            <Link
              href="/gallery"
              style={{
                display: 'inline-block',
                background: 'transparent',
                border: '1px solid rgba(28,43,26,0.25)',
                color: '#1C2B1A',
                fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', fontSize: '13px',
                padding: '16px 40px', borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
              }}
              className="thankyou-btn-secondary"
            >
              SEE OUR RECENT WORK →
            </Link>
          </div>

          {/* Reassurance */}
          <p
            style={{
              fontSize: '13px', color: '#9CA3AF', marginTop: '32px',
              fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
            }}
          >
            Questions? Call us at{' '}
            <a
              href={clientConfig.business.phoneHref}
              style={{ color: '#B8902A', fontWeight: 600, textDecoration: 'none' }}
            >
              {clientConfig.business.phone}
            </a>
          </p>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        .thankyou-btn-primary:hover  { background: #9A7820 !important; }
        .thankyou-btn-secondary:hover { background: rgba(28,43,26,0.05) !important; }
      `}</style>
    </>
  )
}
