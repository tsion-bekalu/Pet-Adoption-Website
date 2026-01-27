function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="section-title text-pawsome-text dark:text-white">{title}</h2>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle
