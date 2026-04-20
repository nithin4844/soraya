import { useState, useEffect } from 'react'

export default function Floats() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="https://wa.me/917420999402"
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="wa-tip">Chat with us</span>
        <i className="fa-brands fa-whatsapp" />
      </a>

      <button
        className={`btt${visible ? ' show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
    </>
  )
}
