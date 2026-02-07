import { useState } from 'react'
import './ContactForm.css'

// Personal email domains to block
const BLOCKED_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'protonmail.com',
  'mail.com',
  'live.com',
  'msn.com',
  'ymail.com',
  'googlemail.com',
]

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    fleetSize: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)

  const industries = [
    'Law Enforcement',
    'DOT/Highway',
    'Tow/Recovery',
    'Utilities',
    'Construction',
    'Other',
  ]

  const fleetSizes = [
    '1-5 vehicles',
    '6-15 vehicles',
    '16-50 vehicles',
    '51-100 vehicles',
    '100+ vehicles',
  ]

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address'
    }

    const domain = email.split('@')[1]?.toLowerCase()
    if (BLOCKED_DOMAINS.includes(domain)) {
      return 'Please use your business email address'
    }

    return null
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    const emailError = validateEmail(formData.email)
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (emailError) {
      newErrors.email = emailError
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select an industry'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    if (!validateForm()) {
      return
    }

    setSubmitStatus('sending')

    // Simulate form submission
    // In production, replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        fleetSize: '',
        message: '',
      })
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            placeholder="name@company.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="company">Company/Organization *</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={errors.company ? 'error' : ''}
        />
        {errors.company && <span className="error-message">{errors.company}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="industry">Industry *</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={errors.industry ? 'error' : ''}
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && <span className="error-message">{errors.industry}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="fleetSize">Fleet Size</label>
          <select
            id="fleetSize"
            name="fleetSize"
            value={formData.fleetSize}
            onChange={handleChange}
          >
            <option value="">Select Fleet Size</option>
            {fleetSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Project Details *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={errors.message ? 'error' : ''}
          placeholder="Tell us about your project requirements..."
        ></textarea>
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary submit-btn"
        disabled={submitStatus === 'sending'}
      >
        {submitStatus === 'sending' ? 'Sending...' : 'Request Quote'}
      </button>

      {submitStatus === 'success' && (
        <div className="form-status success">
          Thank you for your inquiry! We'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="form-status error">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
    </form>
  )
}

export default ContactForm
