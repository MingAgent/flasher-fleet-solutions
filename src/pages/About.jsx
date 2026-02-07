import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import CtaSection from '../components/CtaSection'
import './About.css'

function About() {
  const values = [
    {
      title: 'Premium Workmanship',
      description: 'We do not cut corners. Every wire is properly routed, every component professionally mounted, and every installation tested before delivery.',
    },
    {
      title: 'Cutting Edge',
      description: 'We stay current with the latest technology and installation techniques to deliver the most advanced solutions available.',
    },
    {
      title: 'Innovative Solutions',
      description: 'When off-the-shelf does not work, we engineer custom solutions to meet your exact requirements.',
    },
    {
      title: 'Reliability',
      description: 'Our installations are built to last. We use quality components and proven methods that stand up to real-world conditions.',
    },
    {
      title: 'Speed to Delivery',
      description: 'We know downtime costs money. Our efficient processes get your vehicles equipped and back in service quickly.',
    },
    {
      title: 'Trust',
      description: 'We build relationships, not just installs. Our customers come back because we deliver what we promise, every time.',
    },
  ]

  const stats = [
    { value: '68+', label: 'Years Combined Experience' },
    { value: '2', label: 'Texas Locations' },
    { value: '24/7', label: 'Customer Support' },
    { value: '100%', label: 'Satisfaction Guaranteed' },
  ]

  return (
    <div className="about-page">
      <Hero
        title="About"
        highlight="Flasher Fleet Solutions"
        subtitle="An experienced team with decades of combined expertise, delivering premium vehicle upfitting across Texas."
        backgroundImage="/images/hero/about-hero.jpg"
        compact
      />

      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Flasher Fleet Solutions is part of Flasher Equipment Company, a name that has been trusted in emergency equipment since 1956. While our parent company has deep roots in the industry, Flasher Fleet Solutions represents a new chapter—bringing that same commitment to quality to the Texas market with a fresh approach.
            </p>
            <p>
              Our team brings together decades of hands-on experience in vehicle upfitting, from law enforcement patrol builds to commercial fleet installations. We understand what it means to depend on equipment that works when it matters most.
            </p>
            <p>
              Based in Texas, we serve the entire state from our San Antonio and Victoria locations. Whether you are a police department needing to outfit your entire fleet or a construction company needing amber lights on a single truck, we bring the same attention to detail and commitment to quality to every job.
            </p>
          </div>
        </div>
      </section>

      <StatsSection stats={stats} />

      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Stand For</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section vendor-section">
        <div className="container">
          <div className="vendor-content">
            <h2>Vendor Agnostic Approach</h2>
            <p>
              We are not here to push any particular brand. Our job is to find the right equipment for your specific needs, whether that is Whelen, Federal Signal, Feniex, SoundOff, Code 3, or any other quality manufacturer.
            </p>
            <p>
              This vendor-agnostic approach means you get honest recommendations based on what works best for your application—not what gives us the biggest margin. We will help you evaluate options, explain the trade-offs, and source whatever equipment serves your mission best.
            </p>
          </div>
        </div>
      </section>

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
