import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import CtaSection from '../components/CtaSection'
import './AmberMarket.css'

function AmberMarket() {
  const industries = [
    {
      icon: '🚧',
      title: 'DOT & Highway',
      description: 'Marking lights, arrow boards, strobes, and safety systems for highway maintenance and construction vehicles.',
    },
    {
      icon: '🏗️',
      title: 'Construction',
      description: 'Durable amber lighting solutions for heavy equipment, service trucks, and construction fleet vehicles.',
    },
    {
      icon: '🚛',
      title: 'Tow & Recovery',
      description: 'High-visibility warning lights, rotators, and safety equipment for tow trucks and recovery vehicles.',
    },
    {
      icon: '⚡',
      title: 'Utilities',
      description: 'Fleet-wide lighting packages for utility companies including bucket trucks, service vehicles, and trailers.',
    },
    {
      icon: '🛡️',
      title: 'Security',
      description: 'Amber and amber/white combination lighting for private security and patrol vehicles.',
    },
    {
      icon: '🚐',
      title: 'Commercial Fleet',
      description: 'Warning lights and safety equipment for delivery vehicles, service fleets, and commercial trucks.',
    },
  ]

  const services = [
    {
      icon: '💡',
      title: 'LED Lightbars',
      description: 'Full-size, mini, and micro lightbars in amber, amber/white, and custom configurations.',
    },
    {
      icon: '🔦',
      title: 'Surface Mount LEDs',
      description: 'Grill lights, hideaways, deck lights, and perimeter lighting solutions.',
    },
    {
      icon: '↗️',
      title: 'Arrow Boards',
      description: 'Directional arrow boards for traffic control and highway work zone safety.',
    },
    {
      icon: '🔊',
      title: 'Backup Alarms',
      description: 'Audible warning systems and backup cameras for heavy equipment and commercial vehicles.',
    },
  ]

  const stats = [
    { value: '300+', label: 'Commercial Vehicles' },
    { value: '20+', label: 'Fleet Contracts' },
    { value: '48hr', label: 'Typical Turnaround' },
    { value: '5yr', label: 'Product Warranty' },
  ]

  return (
    <div className="amber-market-page">
      <Hero
        title="Amber Market"
        highlight="Lighting Solutions"
        subtitle="Professional-grade amber lighting and safety equipment for DOT, construction, tow/recovery, utilities, and commercial fleets."
        primaryCta="Get Fleet Quote"
        primaryCtaLink="/contact"
        compact
      />

      {/* Industries We Serve */}
      <section className="section industries-section">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Specialized solutions for every fleet type</p>
          </div>
          <div className="grid grid-3">
            {industries.map((industry, index) => (
              <ServiceCard key={index} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Products & Services */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2>Products & Services</h2>
            <p>Complete amber lighting solutions</p>
          </div>
          <div className="grid grid-4 products-grid">
            {services.map((service, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Programs */}
      <section className="section fleet-section">
        <div className="container">
          <div className="fleet-content">
            <h2>Fleet Programs</h2>
            <p>
              Running a large fleet? We offer fleet-wide installation programs with volume pricing, scheduled maintenance, and dedicated account management. Whether you need to outfit 10 vehicles or 100, we'll create a program that works for your operation.
            </p>
            <div className="fleet-benefits">
              <div className="benefit">
                <strong>Volume Pricing</strong>
                <span>Competitive rates for fleet-wide installations</span>
              </div>
              <div className="benefit">
                <strong>Flexible Scheduling</strong>
                <span>Work around your operational needs</span>
              </div>
              <div className="benefit">
                <strong>Standardized Specs</strong>
                <span>Consistent equipment across your entire fleet</span>
              </div>
              <div className="benefit">
                <strong>Ongoing Support</strong>
                <span>Maintenance and warranty service programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Need Fleet Lighting Solutions?"
        subtitle="Contact us for a customized quote for your commercial fleet. Volume discounts available for multi-vehicle orders."
        ctaText="Request Fleet Quote"
        ctaLink="/contact"
      />
    </div>
  )
}

export default AmberMarket
