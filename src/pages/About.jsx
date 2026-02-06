import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import CtaSection from '../components/CtaSection'
import './About.css'

function About() {
  const values = [
    {
      icon: '🏆',
      title: 'Premium Workmanship',
      description: 'We don\'t cut corners. Every wire is properly routed, every component professionally mounted, and every installation tested before delivery.',
    },
    {
      icon: '⚡',
      title: 'Cutting Edge',
      description: 'We stay current with the latest technology and installation techniques to deliver the most advanced solutions available.',
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'When off-the-shelf doesn\'t work, we engineer custom solutions to meet your exact requirements.',
    },
    {
      icon: '🛡️',
      title: 'Reliability',
      description: 'Our installations are built to last. We use quality components and proven methods that stand up to real-world conditions.',
    },
    {
      icon: '⏱️',
      title: 'Speed to Delivery',
      description: 'We know downtime costs money. Our efficient processes get your vehicles equipped and back in service quickly.',
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'We build relationships, not just installs. Our customers come back because we deliver what we promise, every time.',
    },
  ]

  const stats = [
    { value: '68+', label: 'Years Combined Experience' },
    { value: '2', label: 'Texas Locations' },
    { value: '500+', label: 'Vehicles Equipped' },
    { value: '100%', label: 'Veteran Owned' },
  ]

  return (
    <div className="about-page">
      <Hero
        title="About"
        highlight="Flasher Fleet Solutions"
        subtitle="A veteran-owned team with decades of combined experience, delivering premium vehicle upfitting across Texas."
        compact
      />

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Flasher Fleet Solutions is part of Flasher Equipment Company, a name that's been trusted in emergency equipment since 1956. While our parent company has deep roots in the industry, Flasher Fleet Solutions represents a new chapter—bringing that same commitment to quality to the Texas market with a fresh approach.
            </p>
            <p>
              Our team brings together decades of hands-on experience in vehicle upfitting, from law enforcement patrol builds to commercial fleet installations. We're veterans who understand what it means to depend on equipment that works when it matters most.
            </p>
            <p>
              Based in Texas, we serve the entire state from our San Antonio and Victoria locations. Whether you're a police department needing to outfit your entire fleet or a construction company needing amber lights on a single truck, we bring the same attention to detail and commitment to quality to every job.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Stand For</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Agnostic Section */}
      <section className="section vendor-section">
        <div className="container">
          <div className="vendor-content">
            <h2>Vendor Agnostic Approach</h2>
            <p>
              We're not here to push any particular brand. Our job is to find the right equipment for your specific needs, whether that's Whelen, Federal Signal, Feniex, SoundOff, Code 3, or any other quality manufacturer.
            </p>
            <p>
              This vendor-agnostic approach means you get honest recommendations based on what works best for your application—not what gives us the biggest margin. We'll help you evaluate options, explain the trade-offs, and source whatever equipment serves your mission best.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Let's Talk About Your Fleet"
        subtitle="Ready to work with a team that puts your needs first? Reach out for a conversation about your requirements."
        ctaText="Contact Us"
        ctaLink="/contact"
      />
    </div>
  )
}

export default About
