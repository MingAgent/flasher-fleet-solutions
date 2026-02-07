import { useEffect, useRef } from 'react'
import './PartnerCarousel.css'

// Partner data with actual logo files
const partners = [
  { name: 'Feniex', logo: '/images/partners/feniex.webp' },
  { name: 'Whelen', logo: '/images/partners/whelen.jpg' },
  { name: 'Federal Signal', logo: '/images/partners/federal-signal.jpg' },
  { name: 'SoundOff Signal', logo: '/images/partners/soundoff-signal.png' },
  { name: 'Code 3', logo: '/images/partners/code3.png' },
  { name: 'Setina', logo: '/images/partners/setina.png' },
  { name: 'Jotto Desk', logo: '/images/partners/jotto-desk.webp' },
  { name: 'Havis', logo: '/images/partners/havis.png' },
  { name: 'Troy Products', logo: '/images/partners/troy-products.webp' },
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
              <div className="partner-logo-card">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerCarousel
