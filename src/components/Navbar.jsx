import { useState, useEffect } from 'react'
import BrandLogo from './BrandLogo'

const LINKS = [
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'stories',  label: 'Reviews' },
  { id: 'contact',  label: 'Contact' },
]

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-30% 0px -60% 0px' }
    )
    LINKS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="nav__inner">
          <a href="#" className="nav__logo" aria-label="Soraya Skin Clinic">
            <div className="logo-bubble"><BrandLogo size={52} /></div>
            <div className="nav__logo-text">
              <span className="nav__logo-name">Soraya</span>
              <span className="nav__logo-sub">Skin Clinic · Nagpur</span>
            </div>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map(l => (
              <button
                key={l.id}
                className={`nav__link${active === l.id ? ' active' : ''}`}
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="nav__actions">
            <a href="tel:+917420999402" className="nav__phone">
              <i className="fa-solid fa-phone" style={{ fontSize: '.7rem' }} />
              +91 74209 99402
            </a>
            <button className="btn btn-sage btn-sm" onClick={onBook}>Book Now</button>
          </div>

          <button
            className={`nav__burger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`drawer__overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />

      <div className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="drawer__hd">
          <div className="nav__logo">
            <div className="logo-bubble"><BrandLogo size={48} /></div>
            <span className="nav__logo-name">Soraya</span>
          </div>
          <button className="drawer__close" onClick={() => setOpen(false)} aria-label="Close menu">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <nav className="drawer__links">
          {LINKS.map(l => (
            <button key={l.id} className="drawer__link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="drawer__foot">
          <a href="tel:+917420999402" className="drawer__link">
            <i className="fa-solid fa-phone" /> +91 74209 99402
          </a>
          <button className="btn btn-sage" onClick={() => { setOpen(false); onBook() }}>
            Book Consultation
          </button>
        </div>
      </div>
    </>
  )
}
