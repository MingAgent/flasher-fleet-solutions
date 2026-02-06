import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import './Contact.css'

function Contact() {
  const locations = [
    {
      city: 'San Antonio',
      address: '5827 US-90',
      cityState: 'San Antonio, TX 78227',
      mapUrl: 'https://maps.google.com/?q=5827+US-90,+San+Antonio,+TX+78227',
    },
    {
      city: 'Victoria',
      address: '8718 Nursery Dr',
      cityState: 'Victoria, TX 77904',
      mapUrl: 'https://maps.google.com/?q=8718+Nursery+Dr,+Victoria,+TX+77904',
    },
  ]

  return (
    <div className="contact-page">
      <Hero
        title="Contact"
        highlight="Us"
        subtitle="Ready to discuss your project? Fill out the form below or reach out directly. We respond to all inquiries within 24 hours."
        compact
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Request a Quote</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.</p>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <aside className="contact-sidebar">
              {/* Direct Contact */}
              <div className="contact-card">
                <h3>Direct Contact</h3>
                <div className="contact-method">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:2102016121">(210) 201-6121</a>
                  </div>
                </div>
                <div className="contact-method">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:sales@flasherfleetsolutions.com">sales@flasherfleetsolutions.com</a>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="contact-card">
                <h3>Our Locations</h3>
                {locations.map((location, index) => (
                  <div key={index} className="location-item">
                    <strong>{location.city}</strong>
                    <p>
                      {location.address}<br />
                      {location.cityState}
                    </p>
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="map-link">
                      View on Map
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

              {/* Service Area */}
              <div className="contact-card">
                <h3>Service Area</h3>
                <p>We proudly serve the entire state of Texas. Whether you're in the Panhandle, along the Gulf Coast, or anywhere in between, we can help with your fleet needs.</p>
              </div>

              {/* Response Time */}
              <div className="contact-card highlight">
                <h3>Quick Response</h3>
                <p>We respond to all quote requests within 24 hours. For urgent needs, call us directly at <a href="tel:2102016121">(210) 201-6121</a>.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
