import { useEffect, useRef } from 'react'
import './PartnerCarousel.css'

// Partner logos - replace with actual logo paths when available
const partners = [
  { name: 'Feniex', logo: '/partners/feniex.png' },
  { name: 'Whelen', logo: '/partners/whelen.png' },
  { name: 'Federal Signal', logo: '/partners/federal-signal.png' },
  { name: 'SoundOff Signal', logo: '/partners/soundoff.png' },
  { name: 'Code 3', logo: '/partners/code3.png' },
  { name: 'Setina', logo: '/partners/setina.png' },
  { name: 'Jotto Desk', logo: '/partners/jotto-desk.png' },
  { name: 'Havis', logo: '/partners/havis.png' },
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
              <div className="partner-logo-placeholder">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerCarousel
