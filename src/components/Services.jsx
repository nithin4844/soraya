import { useState } from 'react'
import useInView from '../hooks/useInView'

const SERVICES = [
  {
    slug: 'laser',
    name: 'Laser Treatments',
    treatment: 'Laser Toning / Carbon Peel',
    icon: 'fa-solid fa-wand-magic-sparkles',
    img: './services/laser.jpg',
    desc: 'Medical-grade laser protocols for pigmentation, resurfacing, and long-term hair reduction with measurable, lasting results.',
    feats: ['Laser Toning', 'Carbon Peel', 'Fractional Resurfacing', 'Laser Hair Removal'],
  },
  {
    slug: 'anti-ageing',
    name: 'Anti-Ageing & Injectables',
    treatment: 'Anti-Ageing / Injectables',
    icon: 'fa-solid fa-syringe',
    img: './services/anti-ageing.jpg',
    desc: 'Botulinum toxin, dermal fillers, and PRP administered with artistry to soften lines, restore volume, and revitalise skin.',
    feats: ['Botulinum Toxin', 'Dermal Fillers', 'PRP Therapy', 'Skin Boosters'],
  },
  {
    slug: 'acne-scar',
    name: 'Acne & Scar Management',
    treatment: 'Acne & Scar Treatment',
    icon: 'fa-solid fa-droplet',
    img: './services/acne-scar.jpg',
    desc: 'Chemical peels, subcision, and microneedling RF combined in protocols built around your skin type and scar profile.',
    feats: ['Chemical Peels', 'Microneedling RF', 'Subcision', 'Comedone Extraction'],
  },
  {
    slug: 'pigmentation',
    name: 'Pigmentation & Brightening',
    treatment: 'Pigmentation & Brightening',
    icon: 'fa-solid fa-sun',
    img: './services/pigmentation.jpg',
    desc: 'Melasma, post-inflammatory pigmentation, and sun damage treated through layered laser, peel, and topical protocols.',
    feats: ['Melasma Protocol', 'Glow Peels', 'IV Glutathione', 'Brightening Facials'],
  },
  {
    slug: 'hair',
    name: 'Hair Restoration',
    treatment: 'Hair Restoration (GFC/PRP)',
    icon: 'fa-solid fa-scissors',
    img: './services/hair.jpg',
    desc: 'GFC, PRP for hair, and mesotherapy combined with personalised oral and topical regimens to address root-cause hair loss.',
    feats: ['GFC Therapy', 'PRP for Hair', 'Mesotherapy', 'Scalp Analysis'],
  },
  {
    slug: 'facials',
    name: 'Skin Health & Facials',
    treatment: 'HydraFacial / Medi-Facial',
    icon: 'fa-solid fa-spa',
    img: './services/facials.jpg',
    desc: 'Medical-grade facials and peels calibrated for your skin: HydraFacial, oxygen therapy, and customised medi-facials.',
    feats: ['HydraFacial', 'Oxygen Therapy', 'Medi-Facials', 'Customised Peels'],
  },
]

function ServiceCard({ s, onBook }) {
  const [imgOk, setImgOk] = useState(true)
  return (
    <article className="svc-card">
      <div className="svc-card__media">
        {imgOk && (
          <img
            src={s.img}
            alt={s.name}
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        )}
        <div className="svc-card__fallback" aria-hidden="true">
          <i className={s.icon} />
        </div>
      </div>
      <div className="svc-card__body">
        <h3 className="svc-card__title">{s.name}</h3>
        <p className="svc-card__desc">{s.desc}</p>
        <ul className="svc-card__feats">
          {s.feats.map(f => (
            <li key={f}><i className="fa-solid fa-check" /> {f}</li>
          ))}
        </ul>
        <button className="svc-card__cta" onClick={() => onBook(s.treatment)}>
          Book This Treatment
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </article>
  )
}

export default function Services({ onBook }) {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className={`services__hd reveal${inView ? ' in' : ''}`} ref={ref}>
          <span className="label label-ink" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            What We Offer
          </span>
          <h2 className="display display--lg">
            Treatments Crafted<br /><em>For You</em>
          </h2>
          <p className="services__intro">
            Every treatment at Soraya is backed by clinical evidence and shaped around your skin, never a template. Explore the core services below.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map(s => <ServiceCard key={s.slug} s={s} onBook={onBook} />)}
        </div>
      </div>
    </section>
  )
}
