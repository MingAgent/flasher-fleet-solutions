import Hero from '../components/Hero'
import './LegalPage.css'

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Hero
        title="Privacy"
        highlight="Policy"
        compact
      />

      <section className="section legal-content">
        <div className="container">
          <div className="legal-document">
            <p className="last-updated">Last Updated: February 2026</p>

            <h2>Introduction</h2>
            <p>
              Flasher Fleet Solutions ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out a contact or quote request form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Communicate with us via email, phone, or other methods</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and job title</li>
              <li>Business email address and phone number</li>
              <li>Company/organization name</li>
              <li>Industry and fleet size</li>
              <li>Project requirements and specifications</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and quote requests</li>
              <li>Provide and improve our services</li>
              <li>Communicate with you about projects and services</li>
              <li>Send relevant industry updates (with your consent)</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li>Service providers who assist us in operating our website and business</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but this may limit some features of our website.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last Updated" date at the top of this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>
              <strong>Flasher Fleet Solutions</strong><br />
              Email: sales@flasherfleetsolutions.com<br />
              Phone: (210) 201-6121
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
