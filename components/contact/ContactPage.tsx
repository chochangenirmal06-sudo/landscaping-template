'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { clientConfig } from '@/lib/client.config';

const CHEVRON = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="rgba(28,43,26,0.45)" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'
)}")`;

const CONTACT_CARDS = [
  { Icon: Phone,  label: 'PHONE',        value: clientConfig.business.phone,   sub: null,                             href: clientConfig.business.phoneHref         },
  { Icon: Mail,   label: 'EMAIL',        value: clientConfig.business.email,   sub: null,                             href: `mailto:${clientConfig.business.email}` },
  { Icon: MapPin, label: 'OFFICE',       value: clientConfig.business.address, sub: 'By appointment only',            href: null                                    },
  { Icon: Clock,  label: 'CONSULTATION', value: 'First consultation is FREE',  sub: '30-minute no-obligation meeting', href: null                                   },
];

type FormData = {
  fullName: string; email: string; phone: string; streetAddress: string;
  service: string; spaceSize: string; timeframe: string; budget: string;
  issues: string; additionalDetails: string;
};
type ScalarField = keyof FormData;
type FormErrors = Partial<Record<ScalarField, string>>;

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, '').slice(0, 10);
  if (d.length <= 3) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function ContactPage() {
  const [focused,      setFocused]      = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors,       setErrors]       = useState<FormErrors>({});

  const [form, setForm] = useState<FormData>({
    fullName: '', email: '', phone: '', streetAddress: '',
    service: '', spaceSize: '', timeframe: '', budget: '',
    issues: '', additionalDetails: '',
  });

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background: '#FFFFFF',
    border: `1px solid ${errors[name as ScalarField] ? '#e53e3e' : focused === name ? 'var(--color-accent-dark)' : 'rgba(28,43,26,0.15)'}`,
    borderRadius: '8px',
    padding: '14px 16px',
    fontSize: '14px',
    color: 'var(--color-bg-text)',
    boxSizing: 'border-box',
    outline: 'none',
    boxShadow: focused === name ? '0 0 0 3px rgb(var(--color-accent-dark-rgb) / 0.10)' : 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
    appearance: 'none',
    WebkitAppearance: 'none',
  });

  const bind = (name: string) => ({
    style: fieldStyle(name),
    onFocus: () => setFocused(name),
    onBlur:  () => setFocused(null),
    className: 'light-placeholder',
  });

  const selectStyle = (name: string, hasValue: boolean): React.CSSProperties => ({
    ...fieldStyle(name),
    cursor: 'pointer',
    color: hasValue ? 'var(--color-bg-text)' : '#9CA3AF',
    backgroundImage: CHEVRON,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    backgroundSize: '12px',
    paddingRight: '36px',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as ScalarField]) setErrors(err => ({ ...err, [name]: undefined }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = formatPhone(e.target.value);
    setForm(f => ({ ...f, phone: v }));
    if (errors.phone) setErrors(err => ({ ...err, phone: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.fullName.trim())       e.fullName      = 'Full name is required.';
    if (!form.email.trim())          e.email         = 'Email address is required.';
    else if (!isValidEmail(form.email)) e.email      = 'Enter a valid email address.';
    if (!form.phone.trim())          e.phone         = 'Phone number is required.';
    else if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a 10-digit phone number.';
    if (!form.streetAddress.trim())  e.streetAddress = 'Street address is required.';
    if (!form.service)               e.service       = 'Please select a service.';
    if (!form.spaceSize)             e.spaceSize     = 'Please select a size.';
    if (!form.timeframe)             e.timeframe     = 'Please select a timeframe.';
    if (!form.budget)                e.budget        = 'Please select a budget.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName, email: form.email, phone: form.phone,
          streetAddress: form.streetAddress, serviceNeeded: form.service,
          spaceToLandscape: form.spaceSize, timeframe: form.timeframe,
          budget: form.budget, issues: form.issues, additionalDetails: form.additionalDetails,
        }),
      });
      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        alert(`Something went wrong. Please call us at ${clientConfig.business.phone}`);
      }
    } catch {
      alert(`Something went wrong. Please call us at ${clientConfig.business.phone}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const SECTION_LABEL: React.CSSProperties = {
    fontSize: '11px', fontWeight: 700, color: 'var(--color-bg-text)',
    textTransform: 'uppercase', letterSpacing: '0.15em',
    borderBottom: '2px solid var(--color-bg-text)', paddingBottom: '8px',
    margin: '28px 0 20px', display: 'block',
    fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
  };

  const FIELD_LABEL: React.CSSProperties = {
    fontSize: '12px', fontWeight: 600, color: 'var(--color-bg-text)',
    marginBottom: '6px', display: 'block',
    fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
  };

  const ERROR_MSG: React.CSSProperties = {
    fontSize: '12px', color: '#e53e3e', marginTop: '4px',
    fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
  };

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--color-primary)', padding: '160px 0 80px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(255,255,255,0.1)',
          color: 'var(--color-primary-text)', borderRadius: '50px',
          padding: '6px 16px', fontSize: '12px',
          fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
          fontWeight: 500, marginBottom: '24px',
        }}>
          FREE CONSULTATION
        </div>

        <h1 style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 300,
          color: 'var(--color-primary-text)', margin: '0 0 20px', lineHeight: 1.05,
        }}>
          Let&rsquo;s Talk
        </h1>

        <p style={{
          fontSize: '16px', color: 'rgba(255,255,255,0.65)',
          maxWidth: '520px', margin: '0 auto', lineHeight: 1.65,
          fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
        }}>
          Your first consultation is free. Tell us about your project and we&rsquo;ll get back to you within 2 hours.
        </p>
      </section>

      {/* TWO COLUMN */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0 100px' }}>
        <div className="contact-outer" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', boxSizing: 'border-box' }}>
          <div className="contact-columns" style={{ display: 'grid', gridTemplateColumns: '38% 62%', gap: '80px', alignItems: 'start' }}>

            {/* LEFT: Contact Information */}
            <div>
              <h2 style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: '28px', fontWeight: 600, color: 'var(--color-bg-text)', marginBottom: '12px',
              }}>
                Contact Information
              </h2>

              <p style={{
                fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '32px',
                fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
              }}>
                Ready to start your project? Call us or send a message and we&rsquo;ll get back to you quickly. The first consultation is always free!
              </p>

              {CONTACT_CARDS.map(({ Icon, label, value, sub, href }) => {
                const inner = (
                  <div style={{
                    background: '#FFFFFF', borderRadius: '12px', padding: '18px 20px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '12px',
                    display: 'flex', alignItems: 'center', gap: '16px',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                      background: 'rgb(var(--color-primary-rgb) / 0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={18} style={{ color: 'var(--color-bg-text)' }} />
                    </div>
                    <div>
                      <span style={{
                        fontSize: '11px', color: 'var(--color-accent-dark)', textTransform: 'uppercase',
                        letterSpacing: '0.12em', fontWeight: 500, display: 'block',
                        fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
                      }}>
                        {label}
                      </span>
                      <span style={{
                        fontSize: '15px', color: 'var(--color-bg-text)', fontWeight: 600, display: 'block',
                        fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
                      }}>
                        {value}
                      </span>
                      {sub && (
                        <span style={{
                          fontSize: '13px', color: 'var(--color-text-muted)', display: 'block', marginTop: '2px',
                          fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
                        }}>
                          {sub}
                        </span>
                      )}
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} style={{ textDecoration: 'none', display: 'block' }} className="hover:opacity-80 transition-opacity duration-150">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>

            {/* RIGHT: Form */}
            <div>
              <h2 style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: '28px', fontWeight: 600, color: 'var(--color-bg-text)', marginBottom: '8px',
              }}>
                Request a Consultation
              </h2>

              <p style={{
                fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '32px', lineHeight: 1.6,
                fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
              }}>
                Please provide as much detail as possible — this helps us prepare for our first conversation.
              </p>

              <form onSubmit={handleSubmit} noValidate>

                <span style={{ ...SECTION_LABEL, marginTop: 0 }}>Contact Information</span>

                <div style={{ marginBottom: '16px' }}>
                  <label style={FIELD_LABEL}>Full Name *</label>
                  <input type="text" name="fullName" placeholder="Your name" autoComplete="name" value={form.fullName} onChange={handleChange} {...bind('fullName')} />
                  {errors.fullName && <p style={ERROR_MSG}>{errors.fullName}</p>}
                </div>

                <div className="field-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <label style={FIELD_LABEL}>Email *</label>
                    <input type="email" name="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={handleChange} {...bind('email')} />
                    {errors.email && <p style={ERROR_MSG}>{errors.email}</p>}
                  </div>
                  <div>
                    <label style={FIELD_LABEL}>Phone *</label>
                    <input type="tel" name="phone" placeholder="(512) 555-1234" autoComplete="tel" value={form.phone} onChange={handlePhone} {...bind('phone')} />
                    {errors.phone && <p style={ERROR_MSG}>{errors.phone}</p>}
                  </div>
                </div>

                <span style={SECTION_LABEL}>Property Location</span>

                <div style={{ marginBottom: '16px' }}>
                  <label style={FIELD_LABEL}>Street Address *</label>
                  <input type="text" name="streetAddress" placeholder="123 Main St" autoComplete="street-address" value={form.streetAddress} onChange={handleChange} {...bind('streetAddress')} />
                  {errors.streetAddress && <p style={ERROR_MSG}>{errors.streetAddress}</p>}
                </div>

                <span style={SECTION_LABEL}>Project Details</span>

                <div style={{ marginBottom: '16px' }}>
                  <label style={FIELD_LABEL}>Primary Service Needed *</label>
                  <select name="service" value={form.service} onChange={handleChange} onFocus={() => setFocused('service')} onBlur={() => setFocused(null)} style={selectStyle('service', !!form.service)}>
                    <option value="">Select a service...</option>
                    <option value="landscape-design">Landscape Design</option>
                    <option value="hardscaping">Hardscaping &amp; Patios</option>
                    <option value="porcelain-paving">Porcelain &amp; Natural Stone Paving</option>
                    <option value="fencing-joinery">Bespoke Fencing &amp; Joinery</option>
                    <option value="garden-beds">Garden Bed Design</option>
                    <option value="seasonal-cleanup">Seasonal Cleanup</option>
                    <option value="not-sure">Not Sure — Help Me Decide</option>
                  </select>
                  {errors.service && <p style={ERROR_MSG}>{errors.service}</p>}
                </div>

                <div className="field-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <label style={FIELD_LABEL}>Space to Landscape *</label>
                    <select name="spaceSize" value={form.spaceSize} onChange={handleChange} onFocus={() => setFocused('spaceSize')} onBlur={() => setFocused(null)} style={selectStyle('spaceSize', !!form.spaceSize)}>
                      <option value="" disabled style={{ color: '#9CA3AF' }}>Select approximate size...</option>
                      {['Under 500 sq ft', '500–1,000 sq ft', '1,000–2,500 sq ft', '2,500–5,000 sq ft', '5,000+ sq ft'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.spaceSize && <p style={ERROR_MSG}>{errors.spaceSize}</p>}
                  </div>
                  <div>
                    <label style={FIELD_LABEL}>Estimated Timeframe *</label>
                    <select name="timeframe" value={form.timeframe} onChange={handleChange} onFocus={() => setFocused('timeframe')} onBlur={() => setFocused(null)} style={selectStyle('timeframe', !!form.timeframe)}>
                      <option value="" disabled style={{ color: '#9CA3AF' }}>Select timeframe...</option>
                      {['ASAP', 'Within 1 month', '1–3 months', '3–6 months', 'Just exploring'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.timeframe && <p style={ERROR_MSG}>{errors.timeframe}</p>}
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={FIELD_LABEL}>Estimated Budget *</label>
                  <select name="budget" value={form.budget} onChange={handleChange} onFocus={() => setFocused('budget')} onBlur={() => setFocused(null)} style={selectStyle('budget', !!form.budget)}>
                    <option value="" disabled style={{ color: '#9CA3AF' }}>Select budget range...</option>
                    {['Under £500', '£500–£2,000', '£2,000–£5,000', '£5,000–£10,000', '£10,000–£25,000', '£25,000+', 'Not sure yet'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.budget && <p style={ERROR_MSG}>{errors.budget}</p>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={FIELD_LABEL}>Issues to Address</label>
                  <textarea name="issues" placeholder="e.g., Poor drainage, dead lawn, overgrown beds..." value={form.issues} onChange={handleChange} onFocus={() => setFocused('issues')} onBlur={() => setFocused(null)} className="light-placeholder" style={{ ...fieldStyle('issues'), resize: 'vertical', minHeight: '100px' }} />
                </div>

                <div style={{ marginTop: '20px' }}>
                  <label style={FIELD_LABEL}>Additional Details</label>
                  <textarea name="additionalDetails" placeholder="Tell us anything else about your vision, must-haves, or concerns..." value={form.additionalDetails} onChange={handleChange} onFocus={() => setFocused('additionalDetails')} onBlur={() => setFocused(null)} className="light-placeholder" style={{ ...fieldStyle('additionalDetails'), resize: 'vertical', minHeight: '120px' }} />
                </div>

                <button
                  type="submit" disabled={isSubmitting}
                  className={isSubmitting ? undefined : 'gold-btn'}
                  style={{
                    width: '100%',
                    background: isSubmitting ? 'var(--color-accent)' : 'var(--color-accent-dark)',
                    color: 'var(--color-accent-text)',
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                    fontSize: '15px', borderRadius: '10px', padding: '18px',
                    marginTop: '28px', border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.85 : 1, transition: 'background 0.2s',
                    fontFamily: 'var(--font-dmsans), system-ui, sans-serif',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 0.8s linear infinite', flexShrink: 0 }}>
                        <circle cx="8" cy="8" r="6" stroke="rgba(28,43,26,0.3)" strokeWidth="2.5" />
                        <path d="M8 2 A6 6 0 0 1 14 8" style={{ stroke: 'var(--color-accent-text)' }} strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      SENDING...
                    </>
                  ) : (
                    'GET A FREE QUOTE →'
                  )}
                </button>

                <p style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', marginTop: '12px', fontFamily: 'var(--font-dmsans), system-ui, sans-serif' }}>
                  We typically respond within 2 hours · First consultation is always free
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .gold-btn:hover { background: var(--color-accent) !important; }
        @media (max-width: 1024px) {
          .contact-outer   { padding: 0 32px !important; }
          .contact-columns { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .contact-outer  { padding: 0 20px !important; }
          .field-row-2    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
