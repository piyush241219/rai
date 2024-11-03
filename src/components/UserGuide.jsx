import React, { useEffect } from 'react'

export default function UserGuide() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='  flex items-center justify-around flex-col px-5 md:px-20   pt-10'>
            <div className="pt-20 flex flex-col  w-full">
                <h1 className='md:text-[3vw] text-[5vw] font-bold'>User Guide</h1>
                <p className='md:text-[1.5vw] text-[3vw]'>Here’s a quick guide to help you set up and explore our safety features:</p>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <h1 className='font-bold text-xl p-5'>Step by step Guide</h1>
                <div className="flex flex-col gap-5 w-[90%] md:w-[80%]">

                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>1</div>
                        <h1 className='font-bold '>Download and Install</h1>
                        <p>Start by downloading the app from our official link and following the installation prompts.</p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>02</div>
                        <h1 className='font-bold '>Signup/Login and Create Your Profile</h1>
                        <p>Signup/ Login and Set up a personal profile for a personalized experience by clicking on user profile button on home Page  . in the user profile please Include emergency contacts for added safety as in case of danger , emergency protocols such as sending your current location, 15s recording of your surrounding and a message saying you are in danger will be sent on whatsapp to this number .</p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>03</div>
                        <h1 className='font-bold '>Enable Location Tracking</h1>
                        <p>Allow location permissions to enable real-time tracking. This is essential for alerting emergency contacts in urgent situations.</p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>04</div>
                        <h1 className='font-bold '>Set Up Emergency Contacts</h1>
                        <p>Add trusted contacts so they’re notified instantly if there’s a need for assistance. You can add, delete or edit your emergency contacts in the user profile section </p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>05</div>
                        <h1 className='font-bold '>Leaving from Home Button </h1>
                        <p>As Soon as you click on leaving from home button, your work timer will get started and you will have to grant microphone access and camera access so that When you unlock your phone and say "HELP ME" in case of danger, Ai will authenticate and ask are you really in danger ? If "YES" then it will send your current location, 15s recording of your surrounding and a message saying you are in danger to the whatsapp number you have added and at the same time seeing your current location AI will inform to your nearby police station with a call and whatsapp message to the on duty officer. </p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>06</div>
                        <h1 className='font-bold '>Share a Schedule Button  </h1>
                        <p>As soon  as you click on "Share a Schedule Button" , you will be directed to a page where you'll see a calander , so choose a date for which you want to share a schedule , select your leaving and reaching time and the location you will be at , with a message for what work you will be busy at and click on share button present there , then you will be able to share the schedule to the emergency contacts you have added in user profile.
                        </p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>07</div>
                        <h1 className='font-bold '>If Microphone Access not given</h1>
                        <p>Together, we'll define clear and achievable financial goals. Whether it's saving for retirement, buying a home, or funding your child's education, we'll create a roadmap to get you there </p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>08</div>
                        <h1 className='font-bold '>Explore Safety Alerts </h1>
                        <p>Our AI monitors and sends you real-time alerts for potential risks in your vicinity. We send 
1. A WhatsApp message saying that you are in danger to the emergency contacts you have added
2. Your Current Location as a WhatsApp message to the emergency contacts you have added 
3. A 15 seconds video recording of your surrounding to the emergency contacts you have added
4. And all of these three things to the nearest police station from your location
</p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>09</div>
                        <h1 className='font-bold '>Use the Panic/ Danger Button</h1>
                        <p>The panic button allows you to send an immediate alert to contacts and authorities with two taps even when you do not provide your microphone access . Tap on the danger button and then an AI authentication button will pop up and after clicking on that , all the safety protocols gets initiated which are initiated in the case you give your microphone access and say "HELP ME" , authenticate with a "YES". 
                        </p>
                    </div>
                    <div className='border-2 md:relative z-0 border-[#dc85ff] rounded-xl p-2 pl-10'>
                        <div className='polygon hidden md:flex h-[70px] w-[70px] bg-white items-center justify-center'>10</div>
                        <h1 className='font-bold '>Check Out Help & Support</h1>
                        <p>If you ever need assistance, mail us at reehaai.ai@gmail.com or whatsapp us "Hi" at +916374648490 .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
