import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h4>Flasher Fleet Solutions</h4>
            <p>
              Professional vehicle upfitting and fleet solutions.
              Premium workmanship, reliability, and cutting-edge technology.
            </p>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <nav>
              <Link to="/law-enforcement">Law Enforcement</Link>
              <Link to="/amber-market">Amber Market</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/about">About Us</Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="footer-section">
            <h4>Locations</h4>
            <div className="location">
              <strong>San Antonio</strong>
              <p>5827 W Highway 90<br />San Antonio, TX 78227</p>
            </div>
            <div className="location">
              <strong>Victoria</strong>
              <p>8718 Nursery Dr<br />Victoria, TX 77904</p>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <a href="tel:2102016121" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (210) 201-6121
            </a>
            <a href="mailto:sales@flasherfleetsolutions.com" className="contact-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              sales@flasherfleetsolutions.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Flasher Fleet Solutions. All rights reserved.</p>
          <nav className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
