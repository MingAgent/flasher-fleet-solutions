import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import CtaSection from '../components/CtaSection'
import './LawEnforcement.css'

function LawEnforcement() {
  const services = [
    {
      title: 'Emergency Lighting',
      description: 'Full lightbar installations, interior/exterior LED systems, and traffic advisors from top vendors.',
    },
    {
      title: 'Communication Systems',
      description: 'Radio installations, speaker systems, PA setups, and integrated control systems.',
    },
    {
      title: 'Console & Mounting',
      description: 'Custom console builds, laptop mounts, weapon mounts, and equipment storage solutions.',
    },
    {
      title: 'Prisoner Transport',
      description: 'Professional partition installations, transport seats, and security equipment.',
    },
    {
      title: 'Video Systems',
      description: 'In-car video, body camera integration, and evidence management solutions.',
    },
    {
      title: 'Electrical Systems',
      description: 'Auxiliary wiring, power management, and charging solutions for all vehicle electronics.',
    },
  ]

  const features = [
    'Factory-level quality installations',
    'Department-specific configurations',
    'Compliance with all safety standards',
    'Comprehensive testing and QA',
    'Ongoing maintenance support',
    'Fast turnaround times',
  ]

  const stats = [
    { value: '68+', label: 'Years Combined Experience' },
    { value: '24/7', label: 'Customer Support' },
    { value: '48hr', label: 'Typical Turnaround' },
    { value: '100%', label: 'Satisfaction Guaranteed' },
  ]

  return (
    <div className="law-enforcement-page">
      <Hero
        title="Law Enforcement"
        highlight="Vehicle Upfitting"
        subtitle="Complete patrol vehicle solutions built to your department's specifications. From lightbars to prisoner transport, we deliver quality you can depend on."
        primaryCta="Request Quote"
        primaryCtaLink="/contact"
        backgroundImage="/images/hero/law-enforcement-hero.jpg"
        compact
      />

      {/* Services Grid */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>Complete Patrol Vehicle Solutions</h2>
            <p>Everything you need to equip your fleet for the mission</p>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2>Built for the Badge</h2>
              <p>
                We understand that law enforcement vehicles aren't just transportation—they're mobile command centers that must perform flawlessly in critical situations. Our experienced team brings the same dedication to precision and reliability that you bring to your duty.
              </p>
              <p>
                Every installation is completed to factory-quality standards, with meticulous attention to wire management, equipment placement, and integration. We work with your department to ensure every vehicle meets your exact specifications.
              </p>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors */}
      <section className="section vendors-section">
        <div className="container">
          <div className="section-header">
            <h2>Vendor Agnostic</h2>
            <p>We work with all major equipment manufacturers to find the best solution for your needs</p>
          </div>
          <div className="vendors-note">
            <p>
              We're not tied to any single vendor. Whether you prefer Whelen, Federal Signal, Feniex, SoundOff, Code 3, or any other manufacturer, we'll source and install exactly what you need. Our job is to find the right equipment for your mission—not to push a particular brand.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to Equip Your Fleet?"
        subtitle="Get a detailed quote for your department's vehicle upfitting needs. We'll work with you to create the perfect specification."
        ctaText="Get Your Quote"
        ctaLink="/contact"
      />
    </div>
  )
}

export default LawEnforcement
