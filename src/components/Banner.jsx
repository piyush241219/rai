import React from 'react'
import Logo from '../assets/reehaLogo.png'
export default function Banner() {
  return (
    <div className='h-[100vh]  md:px-20 '>
    <div className='flex gap-16 md:gap-0 flex-col md:flex-row h-full items-center justify-center md:px-20 px-5'>
        <div className='order-2  md:order-1 w-full md:text-[2vw] text-[5vw] md:inline flex flex-col items-center justify-center gap-5'>
            <div className=''>
                <p>Welcome to </p>
                <h1 className='md:text-[5vw] text-[8vw] font-bold'>ReehaAi</h1>
                <p>Your Trusted Safety Companion</p>
                <p>One stop solution for safety of <br /> Women , Girls , Men and Kids</p>
            </div>
            <button className="bg-white mt-5 text-black p-2 px-3 rounded-xl md:text-[1.5vw] text-[5vw] ">
                More Info
            </button>
        </div>
        <div className='order-1  md:order-2 w-full flex flex-col items-center  '>
            <img src={Logo} alt="" className='w-[70%]'/>
            {/* <h1 className='text-black md:text-[3vw] text-[5vw]'>Reeha(Freedom) With Ai</h1> */}
        </div>
    </div>
</div>
  )
}
