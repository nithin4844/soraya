export default function Logo({ size = 44 }) {
  const n = 24
  const innerR = 21
  const outerR = 46
  const spread = (Math.PI / n) * 0.55
  const cx = 50, cy = 50

  const rays = Array.from({ length: n }, (_, i) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2
    const x1 = cx + innerR * Math.cos(angle - spread)
    const y1 = cy + innerR * Math.sin(angle - spread)
    const x2 = cx + outerR * Math.cos(angle)
    const y2 = cy + outerR * Math.sin(angle)
    const x3 = cx + innerR * Math.cos(angle + spread)
    const y3 = cy + innerR * Math.sin(angle + spread)
    return `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Soraya Skin Clinic logo"
    >
      {/* Original brand colors: dark olive rays + sage accent ring */}
      {rays.map((d, i) => <path key={i} d={d} fill="#3B3820" />)}
      <circle cx={cx} cy={cy} r="18" fill="#3B3820" />
      <circle cx={cx} cy={cy} r="12" fill="#9BB878" />
      <circle cx={cx} cy={cy} r="5"  fill="#3B3820" />
    </svg>
  )
}
