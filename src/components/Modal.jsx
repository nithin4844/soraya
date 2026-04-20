import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'

const TREATMENTS = [
  'Laser Toning / Carbon Peel',
  'Acne & Scar Treatment',
  'Anti-Ageing / Injectables',
  'Pigmentation & Brightening',
  'Hair Restoration (GFC/PRP)',
  'HydraFacial / Medi-Facial',
  'General Consultation',
  'Other',
]

export default function Modal({ onClose, preset = '' }) {
  const [step, setStep]     = useState('form')
  const initialTreatment    = TREATMENTS.includes(preset) ? preset : ''
  const [form, setForm]     = useState({ name: '', phone: '', treatment: initialTreatment, msg: '' })
  const [errors, setErrors] = useState({})
  const firstRef            = useRef(null)

  useEffect(() => {
    firstRef.current?.focus()
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const validate = () => {
    const e = {}
    if (!form.name.trim())                   e.name = 'Please enter your name.'
    if (!/^\d{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit number.'
    if (!form.treatment)                      e.treatment = 'Please select a treatment.'
    return e
  }

  const submit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    const msg = [
      `Hi Dr. Mahika, I'd like to book a consultation.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Treatment: ${form.treatment}`,
      form.msg ? `Note: ${form.msg}` : '',
    ].filter(Boolean).join('\n')

    setStep('success')
    setTimeout(() => {
      window.open(`https://wa.me/917420999402?text=${encodeURIComponent(msg)}`, '_blank')
    }, 1200)
  }

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: undefined }))
  }

  return (
    <div
      className="modal-bg"
      role="dialog"
      aria-modal="true"
      aria-label="Book consultation"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark" />
        </button>

        {step === 'form' ? (
          <>
            <div className="modal-hd">
              <div className="logo-bubble" style={{ margin: '0 auto' }}><Logo size={52} /></div>
              <h2>Book a Consultation</h2>
              <p>We'll confirm via WhatsApp within the hour.</p>
            </div>

            <div className="form-g" style={{ marginTop: 0 }}>
              <label htmlFor="m-name">Full Name</label>
              <input
                id="m-name"
                ref={firstRef}
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                autoComplete="name"
                style={errors.name ? { borderColor: '#e05b5b' } : {}}
              />
              {errors.name && <span style={{ fontSize: '.75rem', color: '#e05b5b', marginTop: '4px' }}>{errors.name}</span>}
            </div>

            <div className="form-g">
              <label htmlFor="m-phone">Mobile Number</label>
              <input
                id="m-phone"
                type="tel"
                placeholder="10-digit mobile"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                autoComplete="tel"
                inputMode="numeric"
                maxLength={10}
                style={errors.phone ? { borderColor: '#e05b5b' } : {}}
              />
              {errors.phone && <span style={{ fontSize: '.75rem', color: '#e05b5b', marginTop: '4px' }}>{errors.phone}</span>}
            </div>

            <div className="form-g">
              <label htmlFor="m-treatment">Treatment of Interest</label>
              <select
                id="m-treatment"
                value={form.treatment}
                onChange={e => set('treatment', e.target.value)}
                style={errors.treatment ? { borderColor: '#e05b5b' } : {}}
              >
                <option value="">Select a treatment…</option>
                {TREATMENTS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.treatment && <span style={{ fontSize: '.75rem', color: '#e05b5b', marginTop: '4px' }}>{errors.treatment}</span>}
            </div>

            <div className="form-g">
              <label htmlFor="m-msg">
                Additional Notes{' '}
                <span style={{ fontWeight: 400, opacity: .5 }}>(optional)</span>
              </label>
              <textarea
                id="m-msg"
                rows={3}
                placeholder="Any concerns or questions…"
                value={form.msg}
                onChange={e => set('msg', e.target.value)}
              />
            </div>

            <div className="modal-actions">
              <button className="btn btn-sage" onClick={submit} style={{ width: '100%', justifyContent: 'center' }}>
                <i className="fa-brands fa-whatsapp" /> Send via WhatsApp
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'rgba(155,184,120,.15)', border: '2px solid var(--sage)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <i className="fa-solid fa-check" style={{ color: 'var(--sage)', fontSize: '1.6rem' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', color: 'var(--ink)', marginBottom: '8px' }}>
              Request Sent!
            </h2>
            <p style={{ color: 'var(--on-cream-65)', fontSize: '.9rem' }}>
              Redirecting you to WhatsApp to connect with Dr. Mahika…
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
