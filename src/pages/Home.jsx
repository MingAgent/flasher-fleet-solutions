import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import PartnerCarousel from '../components/PartnerCarousel'
import CtaSection from '../components/CtaSection'
import './Home.css'

function Home() {
  const services = [
    {
      title: 'Law Enforcement',
      description: 'Complete patrol vehicle upfitting with lightbars, sirens, consoles, prisoner partitions, and more. Built to department specifications.',
      link: '/law-enforcement',
      image: '/images/services/law-enforcement.jpg',
    },
    {
      title: 'Amber Market',
      description: 'Professional amber lighting and safety equipment for DOT, construction, tow/recovery, and utility fleets.',
      link: '/amber-market',
      image: '/images/services/amber-market.jpg',
    },
    {
      title: 'Custom Upfitting',
      description: 'Tailored vehicle modifications to meet your exact operational requirements. From concept to completion.',
      link: '/portfolio',
      image: '/images/services/custom-upfitting.jpg',
    },
  ]

  const pillars = [
    {
      title: 'Premium Workmanship',
      description: 'Every install meets the highest standards. Our experienced team brings precision and attention to detail to every project.',
    },
    {
      title: 'Speed to Delivery',
      description: 'We understand downtime costs money. Our streamlined processes get your vehicles back on the road faster.',
    },
    {
      title: 'Reliability',
      description: 'Equipment that works when you need it most. We stand behind our installations with comprehensive warranties.',
    },
    {
      title: 'Trust',
      description: 'Over 68 years combined industry experience. We have built our reputation on doing the job right, every time.',
    },
  ]

  return (
    <div className="home-page">
      <Hero
        title="Professional Vehicle Upfitting"
        highlight="Built for the Mission"
        subtitle="Premium workmanship, cutting-edge technology, and innovative solutions for law enforcement, DOT, and commercial fleets across Texas."
        primaryCta="Request Quote"
        primaryCtaLink="/contact"
        secondaryCta="View Our Work"
        secondaryCtaLink="/portfolio"
        backgroundImage="/images/hero/home-hero.jpg"
        videos={[
          '/videos/hero-main.mp4',
          '/videos/hero-law-enforcement.mp4',
          '/videos/hero-amber.mp4',
          '/videos/hero-craftsmanship.mp4',
          '/videos/hero-showcase.mp4',
          '/videos/hero-video.mp4',
        ]}
      />

      {/* Partner Carousel - Trusted vendor partners */}
      <PartnerCarousel />

      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive fleet solutions from Texas trusted upfitting partner</p>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="section pillars-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Flasher Fleet Solutions?</h2>
            <p>The difference is in the details</p>
          </div>
          <div className="grid grid-4 pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section locations-section">
        <div className="container">
          <div className="section-header">
            <h2>Serving All of Texas</h2>
            <p>Two convenient locations to serve your fleet</p>
          </div>
          <div className="grid grid-2 locations-grid">
            <div className="location-card location-san-antonio">
              <div className="location-image has-image">
                <div className="location-overlay"></div>
                <span className="location-label">San Antonio</span>
              </div>
              <div className="location-info">
                <h3>San Antonio</h3>
                <p className="location-address">
                  5827 W Highway 90<br />
                  San Antonio, TX 78227
                </p>
                <a href="tel:2102016121" className="location-phone">(210) 201-6121</a>
              </div>
            </div>
            <div className="location-card location-victoria">
              <div className="location-image has-image">
                <div className="location-overlay"></div>
                <span className="location-label">Victoria</span>
              </div>
              <div className="location-info">
                <h3>Victoria</h3>
                <p className="location-address">
                  8718 Nursery Dr<br />
                  Victoria, TX 77904
                </p>
                <a href="tel:2102016121" className="location-phone">(210) 201-6121</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Outfit Your Fleet?"
        subtitle="Contact us today for a free consultation. Our team will work with you to find the perfect solution for your needs and budget."
        ctaText="Get Your Free Quote"
        ctaLink="/contact"
      />
    </div>
  )
}

export default Home
