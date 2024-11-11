import React from 'react';

// Images (Replace with actual paths)
import missionImage from '../assets/mission.jpeg';
import empowermentLogo from '../assets/empowerment.svg';
import innovationLogo from '../assets/innovation.svg';
import safetyLogo from '../assets/safety.svg';

export default function Mission() {
  return (
    <div className=" md:px-20 px-5 py-16">
  <h2 className="md:px-20 md:text-[3vw] text-[8vw] font-bold mb-10">Our Mission</h2>
      
      {/* Mission Statement Section */}
      <div className="max-w-5xl mx-auto md:text-center mb-16">
        {/* <img src={missionImage} alt="Mission" className="w-full h-[25vh] mb-6" /> */}
        <p className="text-xl text-black" data-aos="fade-up" data-aos-duration="1200"  data-aos-once>
          At Reehaai, we are revolutionizing personal safety through seamless integration of artificial intelligence and IT solutions. Our mission is to empower individuals by providing cutting-edge technology that offers immediate, genuine, and easily accessible assistance in moments of need.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold text-center text-black mb-6">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center" data-aos="fade-up" data-aos-duration="1200" data-aos-once>
            <img src={safetyLogo}  alt="Core Values" className="w-32 h-32 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-black">Safety First</h4>
            <p className="text-black mt-2">
              We prioritize safety for everyone, ensuring that individuals can feel secure in any situation.
            </p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250" data-aos-once>
            <img src={empowermentLogo}  alt="Core Values" className="w-32 h-32 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-black">Empowerment</h4>
            <p className="text-black mt-2">
              Empowering individuals to take control of their safety through accessible and reliable technology.
            </p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250" data-aos-once>
            <img src={innovationLogo} alt="Core Values" className="w-32 h-32 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-black">Innovation</h4>
            <p className="text-black mt-2">
              We are committed to continuous innovation, using the latest in AI and IoT to provide real-time solutions.
            </p>
          </div>
        </div>
      </div>

      {/* The Impact Section */}
      <div className="max-w-5xl mx-auto text-center mb-16" data-aos="fade-up" data-aos-duration="1200" data-aos-once>
        {/* <img src="https://t4.ftcdn.net/jpg/02/66/49/13/360_F_266491337_e1jOoRuRqxnDrM6cCra5CjU0li4NUMvy.jpg"  alt="Impact" className="w-full h-[20vh] mb-6" /> */}
        <h3 className="text-3xl font-semibold text-black mb-6">Making a Difference</h3>
        <p className="text-xl text-black text-justify">
          At Reehaai, we are dedicated to creating a safer society, leveraging AI to detect, predict, and prevent threats in real-time. Our technology ensures that every individual can experience freedom from fear, no matter the circumstances.
        </p>
      </div>

    </div>
  );
}
