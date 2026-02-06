import { useState } from 'react'
import Hero from '../components/Hero'
import CtaSection from '../components/CtaSection'
import './Portfolio.css'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'law-enforcement', label: 'Law Enforcement' },
    { id: 'amber', label: 'Amber/Commercial' },
    { id: 'fire-ems', label: 'Fire/EMS' },
    { id: 'specialty', label: 'Specialty' },
  ]

  // Placeholder projects - replace with actual project data
  const projects = [
    {
      id: 1,
      title: 'Police Interceptor Full Build',
      category: 'law-enforcement',
      description: 'Complete patrol package including lightbar, console, partition, and communications.',
      image: '/portfolio/project-1.jpg',
    },
    {
      id: 2,
      title: 'DOT Highway Maintenance Fleet',
      category: 'amber',
      description: '15-vehicle fleet outfitting with amber lightbars and arrow boards.',
      image: '/portfolio/project-2.jpg',
    },
    {
      id: 3,
      title: 'Fire Department Command Vehicle',
      category: 'fire-ems',
      description: 'Mobile command center with full communications and lighting package.',
      image: '/portfolio/project-3.jpg',
    },
    {
      id: 4,
      title: 'Tow Truck Warning System',
      category: 'amber',
      description: 'High-visibility amber LED system for roadside safety.',
      image: '/portfolio/project-4.jpg',
    },
    {
      id: 5,
      title: 'Unmarked Detective Vehicle',
      category: 'law-enforcement',
      description: 'Covert lighting package with hideaways and interior LEDs.',
      image: '/portfolio/project-5.jpg',
    },
    {
      id: 6,
      title: 'Utility Service Truck',
      category: 'amber',
      description: 'Work light and amber warning system installation.',
      image: '/portfolio/project-6.jpg',
    },
    {
      id: 7,
      title: 'K-9 Unit Vehicle',
      category: 'specialty',
      description: 'Specialized K-9 vehicle with climate control and safety systems.',
      image: '/portfolio/project-7.jpg',
    },
    {
      id: 8,
      title: 'EMS Quick Response Vehicle',
      category: 'fire-ems',
      description: 'Emergency lighting and medical equipment mounting solutions.',
      image: '/portfolio/project-8.jpg',
    },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="portfolio-page">
      <Hero
        title="Our"
        highlight="Portfolio"
        subtitle="See examples of our work across law enforcement, amber market, fire/EMS, and specialty vehicle applications."
        compact
      />

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  {/* Placeholder for actual images */}
                  <div className="project-placeholder">
                    <span>Project Image</span>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">
                    {categories.find(c => c.id === project.category)?.label}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="section note-section">
        <div className="container">
          <div className="note-content">
            <h2>Real Photos, Real Work</h2>
            <p>
              We believe in showing our actual work, not stock photos or AI-generated images. The projects shown here represent real installations for real customers. We're proud of every build that leaves our shop.
            </p>
            <p>
              Have a project in mind? Contact us to discuss your requirements and see more examples relevant to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss your vehicle upfitting needs and create something you can be proud of."
        ctaText="Get Started"
        ctaLink="/contact"
      />
    </div>
  )
}

export default Portfolio
