import { useState } from 'react'
import useInView from '../hooks/useInView'

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

export default function BookCTA({ onBook }) {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', phone: '', treatment: '' })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const msg = [
      `Hi Dr. Mahika, I'd like to book a consultation.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.treatment ? `Treatment: ${form.treatment}` : '',
    ].filter(Boolean).join('\n')
    setSent(true)
    setTimeout(() => {
      window.open(`https://wa.me/917420999402?text=${encodeURIComponent(msg)}`, '_blank')
    }, 800)
  }

  return (
    <section id="contact" className="book-cta">
      <div className="wrap">
        <div className={`book-cta__inner reveal${inView ? ' in' : ''}`} ref={ref}>
          <div className="book-cta__text">
            <span className="label label-ink" style={{ marginBottom: '20px', display: 'inline-flex' }}>
              Get In Touch
            </span>
            <h2 className="display display--lg">
              Begin Your<br /><em>Skin Journey</em>
            </h2>
            <p className="book-cta__sub">
              Schedule a personalised consultation with Dr. Mahika and discover
              the treatment plan designed for your unique skin.
            </p>

            <ul className="book-cta__info">
              <li className="book-cta__info-row">
                <i className="fa-solid fa-location-dot" />
                <span>
                  Ground Floor, Jagannath Sadan,<br />
                  Beside Hotel Hardeo, Sitabuldi,<br />
                  Nagpur 440 012
                </span>
              </li>
              <li className="book-cta__info-row">
                <i className="fa-solid fa-phone" />
                <span>
                  <a href="tel:+917420999402">+91 74209 99402</a>
                  &nbsp;·&nbsp;
                  <a href="tel:+919175999402">+91 91759 99402</a>
                </span>
              </li>
              <li className="book-cta__info-row">
                <i className="fa-regular fa-clock" />
                <span>Monday – Saturday &nbsp;·&nbsp; 10 AM – 7 PM</span>
              </li>
            </ul>
          </div>

          <div className="book-cta__form">
            <h3>Book a Consultation</h3>
            <p>We'll confirm your slot over WhatsApp.</p>

            {sent ? (
              <div className="form-success-msg">
                <i className="fa-solid fa-circle-check" />
                Redirecting you to WhatsApp…
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="form-row2">
                  <div className="form-g">
                    <label htmlFor="bc-name">Name <span>*</span></label>
                    <input
                      id="bc-name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-g">
                    <label htmlFor="bc-phone">Mobile <span>*</span></label>
                    <input
                      id="bc-phone"
                      type="tel"
                      placeholder="10-digit number"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      inputMode="numeric"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>
                <div className="form-g">
                  <label htmlFor="bc-treatment">Treatment of Interest</label>
                  <select
                    id="bc-treatment"
                    value={form.treatment}
                    onChange={e => set('treatment', e.target.value)}
                  >
                    <option value="">Select a treatment…</option>
                    {TREATMENTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="modal-actions">
                  <button type="submit" className="btn btn-sage" style={{ width: '100%', justifyContent: 'center' }}>
                    <i className="fa-brands fa-whatsapp" /> Send via WhatsApp
                  </button>
                  <button type="button" className="btn btn-outline-ink" style={{ width: '100%', justifyContent: 'center' }} onClick={onBook}>
                    <i className="fa-regular fa-calendar-check" /> Use Booking Form
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
