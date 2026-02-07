import { Link } from 'react-router-dom'
import './ServiceCard.css'

function ServiceCard({ icon, image, title, description, link }) {
  const CardContent = () => (
    <>
      {/* Card Image */}
      {image && (
        <div className="service-card-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="service-card-body">
        {icon && <div className="service-card-icon">{icon}</div>}
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        {link && (
          <span className="service-card-link">
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        )}
      </div>
    </>
  )

  if (link) {
    return (
      <Link to={link} className="service-card service-card-link-wrapper">
        <CardContent />
      </Link>
    )
  }

  return (
    <div className="service-card">
      <CardContent />
    </div>
  )
}

export default ServiceCard
