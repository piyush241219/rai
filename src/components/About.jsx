import React from 'react'
import ceoImg from '../assets/ceo.png'
export default function About() {
    return (
        <div className="md:px-20">
            <div className='h-[100%] flex items-center justify-around flex-col px-5 pt-5 md:px-20'>
            <div className="pt-20 flex flex-col gap-10">
                <div className="flex justify-between">
                    <h1 className='md:text-[3vw] text-[8vw] font-bold'>About Us</h1>

                </div>
                <p className='md:text-[1.5vw] text-[4vw]'>At ReehaAi, we are revolutionizing personal safety through the seamless integration of advanced artificial intelligence and IT solutions. Our mission is to empower every individual in India—whether it's school and college-going girls, working women, teenagers, kids, or men—by providing cutting-edge technology that offers immediate, genuine, and easily accessible assistance in moments of need. As a company, we are dedicated to creating a safer society, leveraging AI to detect, predict, and prevent threats in real-time. We believe in fostering a future where every individual can experience freedom from fear, no matter the circumstances. At the forefront of innovation, our solutions ensure security is not just a service but a societal right.</p>
            </div>
            <div>
                <div className="flex flex-col items-center md:flex-row gap-5 md:gap-10">
                    <div className='md:inline flex justify-center'>
                        <img src={ceoImg} alt="" className='  my-3 mt-5' width={180}/>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl text-center md:text-start mb-2'>Founder & CEO</h1>
                        <p className='font-bold italic text-center md:text-start'>Mr. Atharv Kothari</p>
                        <p>“As an AI Specialist , always wanted to dedicate my expertise to the betterment of society and to a global cause - So I and my team present before you ReehaAi. We Ensure your safety and prioritize your freedom, wellbeing ”</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
