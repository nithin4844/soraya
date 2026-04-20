import { useState, useEffect, useRef } from 'react'
import useInView from '../hooks/useInView'

const INSTAGRAM_URL = 'https://www.instagram.com/sorayaskinclinicnagpur/'

// Paste real Google Maps reviews below.  Open the clinic's Google listing,
// copy the reviewer's first name (or initial), the review text, and (optionally)
// the treatment they had.  Replace each object in this array.
const TESTI = [
  {
    quote: "Dr. Mahika completely transformed my skin. After years of struggling with melasma, I finally have an even, glowing complexion. Her approach is thorough and genuinely personalised.",
    name: 'Priya S.',
    treatment: 'Melasma Treatment',
    initial: 'P',
  },
  {
    quote: "I was sceptical about laser treatments, but the results after just three sessions were remarkable. My acne scars have faded significantly and my confidence is back.",
    name: 'Rohit M.',
    treatment: 'Acne Scar Removal',
    initial: 'R',
  },
  {
    quote: "The clinic feels luxurious yet clinical, you know you're in expert hands. Dr. Mahika took the time to explain every step of my hair restoration journey.",
    name: 'Anita K.',
    treatment: 'GFC Hair Therapy',
    initial: 'A',
  },
  {
    quote: "I've visited many dermatologists in Nagpur, but none match Dr. Mahika's level of expertise and warmth. My skin has never looked better after her customised peel protocol.",
    name: 'Deepa R.',
    treatment: 'Chemical Peels',
    initial: 'D',
  },
]

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const [ref, inView] = useInView()
  const startX = useRef(null)

  const prev = () => setCur(c => (c - 1 + TESTI.length) % TESTI.length)
  const next = () => setCur(c => (c + 1) % TESTI.length)

  useEffect(() => {
    let timer
    const start = () => { timer = setInterval(next, 6500) }
    const stop  = () => { clearInterval(timer) }
    const onVis = () => (document.hidden ? stop() : start())
    start()
    document.addEventListener('visibilitychange', onVis)
    return () => { stop(); document.removeEventListener('visibilitychange', onVis) }
  }, [])

  const onTouchStart = e => { startX.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    startX.current = null
  }

  return (
    <section id="stories" className="stories">
      <div className="wrap">
        <div className={`stories__card reveal${inView ? ' in' : ''}`} ref={ref}>
          <div className="stories__testi">
            <span className="label label-ink" style={{ marginBottom: '18px', display: 'inline-flex' }}>
              Patient Stories
            </span>
            <h2 className="display display--lg">
              Real Results.<br /><em>Real Confidence.</em>
            </h2>

            <div
              className="testi__slider"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="testi__track"
                style={{ transform: `translateX(-${cur * 100}%)` }}
              >
                {TESTI.map((t, i) => (
                  <div key={i} className="testi__slide">
                    <span className="testi__quote-icon">"</span>
                    <p className="testi__text">{t.quote}</p>
                    <div className="testi__author">
                      <div className="testi__avatar">{t.initial}</div>
                      <div>
                        <p className="testi__author-n">{t.name}</p>
                        <p className="testi__author-s">{t.treatment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testi__controls">
              <button className="testi__nav" onClick={prev} aria-label="Previous">
                <i className="fa-solid fa-arrow-left" />
              </button>
              <div className="testi__dots">
                {TESTI.map((_, i) => (
                  <button
                    key={i}
                    className={`testi__dot${i === cur ? ' on' : ''}`}
                    onClick={() => setCur(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <button className="testi__nav" onClick={next} aria-label="Next">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>

          <aside className="stories__ig">
            <span className="label label-cream" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              Follow Along
            </span>
            <h3 className="stories__ig-title">
              Check us out on <em>Instagram</em>
            </h3>
            <p className="stories__ig-sub">
              Skincare tips, treatment walkthroughs, and behind-the-scenes
              moments from Dr. Mahika and the Soraya team.
            </p>
            <a
              className="stories__ig-btn"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram" />
              <span>
                <strong>@sorayaskinclinicnagpur</strong>
                <small>Follow on Instagram</small>
              </span>
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
