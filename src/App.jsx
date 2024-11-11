import React, { useEffect } from 'react'
import './App.css'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
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
import { Toaster } from 'react-hot-toast'
import Feedback from './components/Feedback'
import Report from './components/Report'
export default function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user-guide" element={<UserGuide />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/report-issue" element={<Report />} />
      </Routes>
      <Footer/>
    </div>
  )
}
