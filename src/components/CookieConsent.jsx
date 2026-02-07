import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CookieConsent.css'

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show if the user hasn't already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Brief delay so it doesn't flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-consent">
      <div className="cookie-consent-inner">
        <p className="cookie-consent-text">
          We use cookies to improve your experience on our site. By continuing to browse, you agree to our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
        <div className="cookie-consent-buttons">
          <button className="cookie-btn cookie-btn-reject" onClick={handleReject}>
            Reject
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
