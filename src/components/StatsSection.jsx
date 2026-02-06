import './StatsSection.css'

const defaultStats = [
  { value: '68+', label: 'Years Combined Experience' },
  { value: '500+', label: 'Vehicles Outfitted' },
  { value: '24/7', label: 'Customer Support' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
]

function StatsSection({ stats = defaultStats }) {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
