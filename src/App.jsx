import React from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import UserGuide from './components/UserGuide'
import Faq from './components/Faq'
import PrivacyPolicy from './components/PrivacyPolicy'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import TermsAndConditions from './components/TermsAndConditions'
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user-guide" element={<UserGuide />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer/>
    </div>
  )
}
