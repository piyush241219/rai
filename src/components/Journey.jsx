import React from 'react';

// Images (Replace with actual paths)
import phase1Image from '../assets/reeha_alldevice.png';
import phase2Image from '../assets/reeha_track.png';
import phase3Image from '../assets/ai_tool.png';

export default function Journey() {
  return (
    <div className="md:px-20 px-5  py-12">
      <h2 className="md:px-20 md:text-[3vw] text-[8vw] font-bold mb-10">Our Future Journey</h2>
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Phase 1 - App Launch */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right" data-aos-duration="1200" data-aos-once>
          <img src={phase1Image} alt="App Launch" className="w-1/3 h-auto mb-4 md:mb-0 md:mr-6" />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-black">Phase 1: App Launch</h3>
            <p className="text-gray-600 mt-2">
              Our app aims to empower individuals with real-time assistance through AI. Accessible, easy-to-use, and available to everyone in need.
            </p>
          </div>
        </div>
        
        {/* Phase 2 - Kids Safety Device */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-left" data-aos-duration="1200" data-aos-once>
          <div className="order-2 md:order-1 text-center md:text-left md:mr-6">
            <h3 className="text-3xl font-bold text-black">Phase 2: Kids Safety Device</h3>
            <p className="text-gray-600 mt-2">
              A wearable IoT device for kids, designed to monitor movement and surroundings, providing parents with peace of mind and security.
            </p>
          </div>
          <img src={phase2Image} alt="Kids Safety Device" className="w-1/3 h-auto mb-4 md:mb-0 order-1 md:order-2" />
        </div>
        
        {/* Phase 3 - Future Innovations */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right" data-aos-duration="1200" data-aos-once>
          <img src={phase3Image} alt="Future Innovations" className="w-1/3 h-auto mb-4 md:mb-0 md:mr-6" />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-black">Phase 3: Future Innovations</h3>
            <p className="text-gray-600 mt-2">
              We’re exploring advanced AI and IoT solutions for a broader scope of safety applications. Stay tuned for exciting developments!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
