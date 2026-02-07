import { useEffect, useRef } from 'react'
import './PartnerCarousel.css'

// Partner data - SVG logos with brand colors
const partners = [
  { name: 'Feniex', logo: '/flasher-fleet-solutions/images/partners/feniex.svg', accent: '#E31837' },
  { name: 'Whelen', logo: '/flasher-fleet-solutions/images/partners/whelen.svg', accent: '#00529B' },
  { name: 'Federal Signal', logo: '/flasher-fleet-solutions/images/partners/federal-signal.svg', accent: '#1C3F6E' },
  { name: 'SoundOff Signal', logo: '/flasher-fleet-solutions/images/partners/soundoff-signal.svg', accent: '#F15A24' },
  { name: 'Code 3', logo: '/flasher-fleet-solutions/images/partners/code3.svg', accent: '#CE1126' },
  { name: 'Setina', logo: '/flasher-fleet-solutions/images/partners/setina.svg', accent: '#004B87' },
  { name: 'Jotto Desk', logo: '/flasher-fleet-solutions/images/partners/jotto-desk.svg', accent: '#2B5797' },
  { name: 'Havis', logo: '/flasher-fleet-solutions/images/partners/havis.svg', accent: '#E4002B' },
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
