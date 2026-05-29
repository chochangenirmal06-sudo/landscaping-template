'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

const DM = 'var(--font-dmsans), system-ui, sans-serif'

export default function ServiceFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <div style={{ maxWidth: '800px' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '20px 0' }}>
          <button
            onClick={() => toggle(i)}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', background: 'none', border: 'none',
              cursor: 'pointer', padding: 0, textAlign: 'left',
            }}
          >
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#FFFFFF', fontFamily: DM }}>
              {faq.question}
            </span>
            <span style={{ color: '#B8902A', fontSize: '22px', flexShrink: 0, marginLeft: '16px', fontFamily: DM, lineHeight: 1 }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, paddingTop: '12px', margin: 0, fontFamily: DM }}>
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
