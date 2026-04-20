export default function Hero({ onBook }) {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__left">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <i className="fa-solid fa-leaf" /> Soraya Skin Clinic · Nagpur
          </span>

          <h1 className="hero__headline">
            Healthy Skin,<br />
            <em>Happy You!</em>
          </h1>

          <p className="hero__sub">
            Expert dermatology and medical aesthetics under the care of
            Dr. Mahika Goel Jaiswal, MBBS, MD DVD, FAD (Dubai), at Soraya Skin Clinic, Nagpur.
          </p>

          <div className="hero__ctas">
            <button className="btn btn-sage btn-lg" onClick={onBook}>
              <i className="fa-regular fa-calendar-check" /> Book Consultation
            </button>
            <a href="#services" className="hero__link">
              Explore Treatments
              <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <i className="fa-regular fa-clock" />
              <span>Mon to Sat<br /><em>10 AM to 7 PM</em></span>
            </div>
            <div className="hero__meta-sep" />
            <div className="hero__meta-item">
              <i className="fa-solid fa-location-dot" />
              <span>Sitabuldi<br /><em>Jagannath Sadan</em></span>
            </div>
            <div className="hero__meta-sep" />
            <a href="tel:+917420999402" className="hero__meta-item hero__meta-item--link">
              <i className="fa-solid fa-phone" />
              <span>Call Clinic<br /><em>+91 74209 99402</em></span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero__right">
        <img
          src="./doctor.jpg"
          alt="Dr. Mahika Goel Jaiswal, Soraya Skin Clinic Nagpur"
          className="hero__photo"
          loading="eager"
        />
        <div className="hero__veil" />
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span>Scroll</span>
        <i className="fa-solid fa-chevron-down" />
      </a>
    </section>
  )
}
