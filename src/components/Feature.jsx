import React from 'react';
 
// Images (Replace with actual paths)
import feature1Image from '../assets/ai.svg';
import feature2Image from '../assets/tracking.svg';
import feature3Image from '../assets/alerts.svg';

export default function Feature() {
  return (
    <div className="bg-[#00000020] py-16">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Our Key Features</h2>
      
      <div className="max-w-5xl px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Feature 1 */}
        <div className="text-center"  data-aos="fade-up" data-aos-duration="1200" data-aos-once>
          <img src={feature1Image} alt="Feature 1" className="w-32 h-32 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-700">AI-Powered Assistance</h3>
          <p className="text-gray-600 mt-2">
            Our AI technology detects, predicts, and prevents threats in real-time, ensuring immediate assistance in times of need.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250" data-aos-once>
          <img src={feature3Image} alt="Feature 3" className="w-32 h-32 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-700">Instant Alerts</h3>
          <p className="text-gray-600 mt-2">
            Receive instant notifications for any suspicious activities or emergencies, so you can take action right away.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="text-center"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" data-aos-once>
          <img src={feature2Image} alt="Feature 2" className="w-32 h-32 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-700">Real-Time Tracking</h3>
          <p className="text-gray-600 mt-2">
            Real-time GPS tracking helps you stay connected with your loved ones, ensuring their safety at all times.
          </p>
        </div>


      </div>
    </div>
  );
}
