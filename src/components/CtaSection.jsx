import { Link } from 'react-router-dom'
import './CtaSection.css'

function CtaSection({
  title = "Ready to Upgrade Your Fleet?",
  subtitle = "Contact us today for a free consultation and quote.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  variant = "dark"
}) {
  return (
    <section className={`cta-section cta-${variant}`}>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
          <Link to={ctaLink} className="btn btn-primary">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
