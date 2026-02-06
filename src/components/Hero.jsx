import { Link } from 'react-router-dom'
import './Hero.css'

function Hero({
  title,
  highlight,
  subtitle,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  backgroundImage,
  compact = false,
}) {
  return (
    <section
      className={`hero ${compact ? 'hero-compact' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">
          {title} {highlight && <span className="hero-highlight">{highlight}</span>}
        </h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="hero-buttons">
            {primaryCta && (
              <Link to={primaryCtaLink || '/contact'} className="btn btn-primary">
                {primaryCta}
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCtaLink || '/about'} className="btn btn-secondary">
                {secondaryCta}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
