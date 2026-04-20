import useInView from '../hooks/useInView'

const CHIPS = [
  'Laser Treatments',
  'Anti-Ageing & Injectables',
  'Acne & Scar Management',
  'Pigmentation Correction',
  'Hair Restoration',
  'Aesthetic Dermatology',
]

export default function About({ onBook }) {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className={`about__grid reveal${inView ? ' in' : ''}`} ref={ref}>
          <div className="about__img-wrap">
            <div className="about__img-frame">
              <img
                src="./doctor.jpg"
                alt="Dr. Mahika Goel Jaiswal, Dermatologist at Soraya Skin Clinic Nagpur"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about__text">
            <span className="label label-ink" style={{ marginBottom: '20px', display: 'inline-flex' }}>
              Meet Your Doctor
            </span>

            <h2 className="about__name" style={{ marginBottom: '14px' }}>
              Dr. Mahika Goel Jaiswal
            </h2>

            <p className="about__creds">
              <i className="fa-solid fa-graduation-cap" />
              MBBS, MD DVD, FAD (Dubai)
            </p>

            <p className="about__para">
              Dr. Mahika Goel Jaiswal brings a rare combination of clinical precision and aesthetic
              sensitivity to every consultation. Her approach centres on evidence-based treatments
              tailored to each individual, understanding your skin, your lifestyle, and your goals
              before recommending a plan.
            </p>
            <p className="about__para">
              Holding an MD in Dermatology, Venereology &amp; Leprosy and a Fellowship in Aesthetic
              Dermatology from Dubai, Dr. Mahika combines deep scientific expertise with an artist's
              eye for natural, harmonious results.
            </p>

            <div className="about__chips">
              {CHIPS.map(c => (
                <span key={c} className="chip">
                  <i className="fa-solid fa-circle-dot" /> {c}
                </span>
              ))}
            </div>

            <div className="about__ctas">
              <button className="btn btn-outline-ink" onClick={onBook}>
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
