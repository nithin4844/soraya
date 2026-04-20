import { useState } from 'react'
import Logo from './Logo'

export default function BrandLogo({ size = 44, src = './brand-logo.jpg', alt = 'Soraya Skin Clinic' }) {
  const [ok, setOk] = useState(true)

  if (!ok) return <Logo size={size} />

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="brand-logo-img"
      onError={() => setOk(false)}
      loading="eager"
    />
  )
}
