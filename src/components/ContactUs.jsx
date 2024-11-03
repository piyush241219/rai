import React, { useEffect } from 'react'
import { FaFacebookSquare, FaGlobe, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='md:px-20 px-5'>
      <div className="pt-20 md:px-20 px-5 flex flex-col gap-10">
     <div className='mt-10'>
     <h1 className='md:text-[3vw] text-[5vw]  font-bold text-center md:text-start '>ContactUs</h1>
        <h1 className="font-bold text-[5vw] md:text-[2vw]">
          We’re Here to Help You Stay Safe
        </h1>
        <p className='md:text-[1.5vw] text-[3vw]'>
          At ReehaAi, our mission is to empower everyone with security and peace of mind. Whether you’re reaching out with a question, need assistance with our app, or want to learn more about how we’re working to make India safer for all, we’re here for you.
        </p>
     </div>
        <div className="flex flex-col md:flex-row">
          <div className='w-full'>

            <h1 className='md:text-[3vw] text-[5vw] font-bold text-center md:text-start '>Reach Us Directly</h1>
            <p className='flex items-center gap-5 md:text-[1.5vw] text-[5vw]'><SiGmail />reehaai.ai@gmail.com</p>
            <p className='flex items-center gap-5 md:text-[1.5vw] text-[5vw]'>
              <FaWhatsapp />
              Whatsapp us “Hi” at
              +916374648490
            </p>

            <p className='flex items-center gap-5 md:text-[2vw] text-[5vw]'><FaGlobe />www.reehaai.com</p>
          </div>
          <div className='w-full '>
            <div className='flex flex-col'>
              <h1 className='md:text-[3vw] text-[5vw] font-bold'>Follow Us on Social Media</h1>
              <p className='md:text-[1.5vw] text-[3vw]'>Stay updated on our latest features, safety tips, and community events.</p>
            </div>

            <div className='flex justify-center md:justify-start gap-5 md:text-[3vw] text-[5vw] mt-5 md:mt-0'>
              <a href="https://www.instagram.com/reeha.ai/profilecard/?" target='blank' className='hover:text-white'><FaInstagram /></a>
              
              <a href="https://www.facebook.com/profile.php?id=61566350452801" target='blank' className='hover:text-white'><FaFacebookSquare /></a>
              
              <a href="https://x.com/ReehaAi" target='blank' className='hover:text-white'><FaXTwitter /></a>
              
              <a href="https://www.linkedin.com/company/reehaai/?viewAsMember=true" target='blank' className='hover:text-white'><FaLinkedin /></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
