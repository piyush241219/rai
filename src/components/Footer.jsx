import React from 'react';
import Logo from '../assets/reehaLogo.png';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className=" text-black-300 py-10 md:px-20">
      <div className="container mx-auto px-10">
      <hr className="my-8 border-gray-700" />
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:items-start md:gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Reeha Logo" className="w-48 mb-4" />
            <p className="md:text-[1.5vw] text-[5vw] text-black-400">
              Empowering you with knowledge and connection.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-4 md:flex-row md:w-[40%] md:justify-center w-full md:gap-16 md:text-[1.5vw] text-[5vw]">
            <div className="flex flex-col space-y-2  ">
              <h3 className="font-bold text-black">Quick Links</h3>
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/contact-us" className="hover:text-white">Contact Us</Link>
              <Link to="/report-issue" className="hover:text-white">Report Issue</Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-black ">Policies</h3>
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
              <Link to="/faq" className="hover:text-white">FAQ</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <hr className="my-8 border-gray-700" /> */}

        {/* Address Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
          <div className="text-center md:text-left md:text-[1.5vw] text-[5vw]">
            <h3 className="font-semibold text-black underline">Address</h3>
            <p className=" text-black-400 mt-2 ">
              21 - Ramchandra Nagar Extension ,<br />
              indore , MP , 452005
            </p>
           <div className="flex flex-col md:flex-row text-xl gap-5">
           <p className=" text-black-400 flex gap-2 items-center"><MdEmail/> reehaai.ai@gmail.com</p>
           <p className=" text-black-400 flex gap-2 items-center"><FaPhoneAlt/>  +916374648490</p>
           </div>
          
          </div>

          {/* Copyright Section */}
          <div className="mt-6 md:mt-0 text-center md:text-right text-xl">
            <p className=" text-black-500">
              &copy; {new Date().getFullYear()} ReehaAi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
