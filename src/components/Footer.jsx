import BrandLogo from './BrandLogo'

export default function Footer({ onBook }) {
  const year = new Date().getFullYear()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">
                <div className="logo-bubble"><BrandLogo size={56} /></div>
                <div>
                  <span className="footer__logo-name">Soraya Skin Clinic</span>
                  <span className="footer__logo-sub">Dermatology · Hair · Laser · Aesthetics</span>
                </div>
              </div>
              <p className="footer__tagline">
                Expert dermatology and medical aesthetics under Dr. Mahika Goel Jaiswal, 
                MBBS, MD DVD, FAD (Dubai) in the heart of Nagpur.
              </p>
              <div className="footer__socials">
                <a href="https://wa.me/917420999402" className="footer__soc" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a href="https://www.instagram.com/sorayaskinclinicnagpur/" className="footer__soc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://www.facebook.com/p/Soraya-Skin-Clinic-61569010235872/" className="footer__soc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>

            <div className="footer__col">
              <h4>Navigate</h4>
              <ul>
                {[['about','About'],['services','Services'],['stories','Reviews'],['contact','Contact']].map(([id, label]) => (
                  <li key={id}>
                    <a role="button" style={{ cursor:'pointer' }} onClick={() => scrollTo(id)}>
                      <i className="fa-solid fa-circle-dot" /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4>Treatments</h4>
              <ul>
                {[
                  ['Laser Treatments',  'Laser Toning / Carbon Peel'],
                  ['Anti-Ageing',       'Anti-Ageing / Injectables'],
                  ['Acne & Scars',      'Acne & Scar Treatment'],
                  ['Pigmentation',      'Pigmentation & Brightening'],
                  ['Hair Restoration',  'Hair Restoration (GFC/PRP)'],
                  ['HydraFacial',       'HydraFacial / Medi-Facial'],
                ].map(([label, treatment]) => (
                  <li key={label}>
                    <a onClick={() => onBook(treatment)} style={{ cursor:'pointer' }}>
                      <i className="fa-solid fa-circle-dot" /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4>Visit Us</h4>
              <ul className="footer__contact">
                <li>
                  <i className="fa-solid fa-location-dot" />
                  <span>Ground Floor, Jagannath Sadan, Beside Hotel Hardeo, Sitabuldi, Nagpur 440 012</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone" />
                  <span>
                    <a href="tel:+917420999402">+91 74209 99402</a><br />
                    <a href="tel:+919175999402">+91 91759 99402</a>
                  </span>
                </li>
                <li>
                  <i className="fa-regular fa-clock" />
                  <span>Mon to Sat · 10 AM to 7 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__map">
            <div className="footer__map-embed">
              <iframe
                title="Soraya Skin Clinic location on Google Maps"
                src="https://maps.google.com/maps?q=Soraya%20Skin%20Clinic%2C%20Jagannath%20Sadan%2C%20Sitabuldi%2C%20Nagpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
              />
            </div>
            <a
              className="footer__directions"
              href="https://www.google.com/maps/dir/?api=1&destination=Soraya+Skin+Clinic+Jagannath+Sadan+Sitabuldi+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-diamond-turn-right" />
              Get Directions to Clinic
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
