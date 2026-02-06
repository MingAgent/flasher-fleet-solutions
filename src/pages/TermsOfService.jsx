import Hero from '../components/Hero'
import './LegalPage.css'

function TermsOfService() {
  return (
    <div className="legal-page">
      <Hero
        title="Terms of"
        highlight="Service"
        compact
      />

      <section className="section legal-content">
        <div className="container">
          <div className="legal-document">
            <p className="last-updated">Last Updated: February 2026</p>

            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Flasher Fleet Solutions website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or use our services.
            </p>

            <h2>Services</h2>
            <p>
              Flasher Fleet Solutions provides vehicle upfitting, emergency lighting installation, and fleet management services. All services are subject to availability and our assessment of project requirements.
            </p>

            <h2>Quotes and Pricing</h2>
            <p>
              All quotes provided through our website or by our team are estimates and are subject to change based on final specifications, equipment availability, and site inspection. A formal quote or contract will be provided before any work begins.
            </p>
            <ul>
              <li>Quotes are typically valid for 30 days unless otherwise stated</li>
              <li>Pricing may be affected by changes in equipment costs or specifications</li>
              <li>Additional charges may apply for expedited services or special requirements</li>
            </ul>

            <h2>Project Terms</h2>
            <p>
              For all installation and upfitting projects:
            </p>
            <ul>
              <li>A deposit may be required before work begins</li>
              <li>Customer is responsible for delivering and retrieving vehicles at scheduled times</li>
              <li>Project timelines are estimates and may be affected by equipment availability</li>
              <li>Changes to specifications after work begins may result in additional charges</li>
            </ul>

            <h2>Warranty</h2>
            <p>
              Warranty terms are provided upon request and vary by project type and equipment used. Generally:
            </p>
            <ul>
              <li>Workmanship is warranted against defects for a specified period</li>
              <li>Equipment warranties are provided by the respective manufacturers</li>
              <li>Warranty does not cover damage from misuse, accidents, or unauthorized modifications</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the property of Flasher Fleet Solutions or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or use this content without our written permission.
            </p>

            <h2>User Responsibilities</h2>
            <p>When using our website, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use the website only for lawful purposes</li>
              <li>Not attempt to interfere with the website's operation</li>
              <li>Not use automated systems to access the website without permission</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Flasher Fleet Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Flasher Fleet Solutions, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our website or services or your violation of these terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or your use of our services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with Texas law.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at:</p>
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

export default TermsOfService
