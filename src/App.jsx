import { Routes, Route } from 'react-router-dom'

// Layout Components
import Header from './components/Header'
import Footer from './components/Footer'

// Page Components
import Home from './pages/Home'
import LawEnforcement from './pages/LawEnforcement'
import AmberMarket from './pages/AmberMarket'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/law-enforcement" element={<LawEnforcement />} />
          <Route path="/amber-market" element={<AmberMarket />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
