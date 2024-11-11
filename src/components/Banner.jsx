import React, { useState } from 'react';
import Logo from '../assets/reehaLogo.png';
import googlePlayLogo from '../assets/googleplay.svg';
import appStoreLogo from '../assets/appstore.svg';
import { Link } from 'react-router-dom';

export default function Banner() { 
  const [showPopup, setShowPopup] = useState(false);
 

  const handleIconClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000); // Popup disappears after 2 seconds
  };

  return (
    <div className="h-[100vh] md:px-20 relative">
      <div className="flex gap-16  md:gap-0 flex-col md:flex-row h-full md:items-end items-center justify-center md:px-20 px-5">
        <div className=" md:h-[80%] order-2 md:order-1 w-full md:text-[2vw] text-[5vw] md:inline flex flex-col items-center justify-center gap-5">
          <div  data-aos="fade-right" data-aos-duration="1000" data-aos-once>
            <p>Welcome to </p>
            <h1 className="md:text-[5vw] text-[8vw] font-bold">ReehaAi</h1>
            <p className='text-white font-semibold uppercase'>Your Trusted Safety Companion</p>
            <p>
              One stop solution for safety of <br /> <span className="text-white font-semibold">Women , Girls , Men</span> and <span className="text-white font-semibold">Kids</span>
            </p>
          </div>
         <Link to="/user-guide">
         <button
           data-aos="fade-right" data-aos-duration="1000" data-aos-once
            className="bg-white mt-5 text-black p-2 px-10 rounded-3xl md:text-[1.5vw] text-[5vw]"
          
          >
            More Info
          </button></Link> 
            <div className="flex gap-5 " data-aos="fade-up" data-aos-duration="1000" data-aos-once>
              <img
                src={googlePlayLogo}
                alt="Download from Google Play"
                className="w-[25%] cursor-pointer"
                onClick={handleIconClick}
              />
              <img
                src={appStoreLogo}
                alt="Download from App Store"
                className="w-[25%] cursor-pointer"
                onClick={handleIconClick}
              />
            </div> 
        </div>
        <div className=" md:h-[80%] order-1 md:order-2 w-full flex flex-col items-center">
          <img src={Logo} alt="Reeha Logo" className="w-[70%]"  data-aos="zoom-in" data-aos-duration="1000" data-aos-once />
          <h1 className="text-white md:text-[3vw] text-[5vw]"  data-aos="fade-up" data-aos-duration="1000" data-aos-once>Reeha (Freedom) With AI</h1>
        </div>
      </div>
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-5 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">Coming Soon</p>
          </div>
        </div>
      )}
    </div>
  );
}
