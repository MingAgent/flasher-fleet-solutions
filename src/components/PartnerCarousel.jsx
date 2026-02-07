import { useEffect, useRef } from 'react'
import './PartnerCarousel.css'

// Partner data - logos can be added when available
// Set logo: null to use styled text fallback
const partners = [
  { name: 'Feniex', logo: null, accent: '#E31837' },
  { name: 'Whelen', logo: null, accent: '#00529B' },
  { name: 'Federal Signal', logo: null, accent: '#1C3F6E' },
  { name: 'SoundOff Signal', logo: null, accent: '#F15A24' },
  { name: 'Code 3', logo: null, accent: '#CE1126' },
  { name: 'Setina', logo: null, accent: '#004B87' },
  { name: 'Jotto Desk', logo: null, accent: '#2B5797' },
  { name: 'Havis', logo: null, accent: '#E4002B' },
]

function PartnerCarousel() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset scroll position when we've scrolled half the content
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Duplicate partners for infinite scroll effect
  const allPartners = [...partners, ...partners]

  return (
    <section className="partners-section">
      <div className="container">
        <h3 className="partners-title">Trusted Vendor Partners</h3>
      </div>
      <div className="carousel-container" ref={scrollRef}>
        <div className="carousel-track">
          {allPartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="partner-item">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              ) : (
                <div
                  className="partner-logo-styled"
                  style={{ '--accent-color': partner.accent }}
                >
                  <span className="partner-name">{partner.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerCarousel
