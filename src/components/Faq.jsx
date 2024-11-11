import React, { useEffect, useState } from 'react';

// FAQ Data Array
const faqData = [
  {
    question: ' How do I sign up on ReehaAI?',
    answer: (
      <>
         
        <p className="text-gray-500 dark:text-gray-400">
        To sign up, enter your name, contact number, email address, and password, and confirm the password. Once these details are provided, you'll be registered and can log in to the app.
        </p>
      </>
    ),
  },
  {
    question: 'How do I log in to the app?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Simply enter your registered email address and password on the login screen. If you’ve forgotten your password, use the "Forgot Password" link to reset it.
        </p>
         
      </>
    ),
  },
  {
    question: 'What happens when I press the “Leaving from Home” button?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        When you press "Leaving from Home," the app begins monitoring your location. It will prompt you to enable location services if they are not already turned on. Your home and work addresses will be displayed, along with your current location.
        </p>
         
      </>
    ),
  },
  {
    question: 'How can I share my schedule with trusted contacts?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        On the app's main screen, you’ll find the "Share Schedule" button. Here, you can input the date and time you’ll be out, and the app will send this information to the contacts you’ve marked as trusted.
        </p>
         
      </>
    ),
  },
  {
    question: 'How does ReehaAI detect an emergency?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        The app listens for the phrase "help me" through the microphone. If this phrase is detected, the app will ask you to confirm if you need help by saying "yes." Once confirmed, it will activate the emergency protocols.
        </p>
         
      </>
    ),
  },
  {
    question: 'What if I don’t grant microphone permission?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        If microphone permission is not granted, a visible "Danger" button will appear on the screen. You can press this button to activate the emergency protocols manually.
        </p>
         
      </>
    ),
  },
  {
    question: 'What are emergency protocols, and how do they work?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Once the emergency is confirmed (either by voice or by pressing the "Danger" button), the app will record a 15-second video of your surroundings, capture your current location, and send these details to your guardians and the nearest police station.
        </p>
         
      </>
    ),
  },
  {
    question: 'How does the app find and notify the nearest police station?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        ReehaAI uses the Google Maps API to find the nearest police stations based on your current location and sends them a notification with your location and the recorded video.
        </p>
         
      </>
    ),
  },
  {
    question: 'Can I track my travel and work history?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Yes. The app stores and shows a history of your work and travel times, allowing you to keep track of the times you’ve been out of the house.
        </p>
         
      </>
    ),
  },
  {
    question: 'What permissions do I need to grant the app for it to work properly?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        For ReehaAI to function optimally, you’ll need to grant permissions for location services, microphone access, and camera access. Location is used for tracking and notifying contacts, the microphone is used for voice-based alerts, and the camera is used to record in emergencies.
        </p>
         
      </>
    ),
  },
  {
    question: 'Can I customize my trusted contacts?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Yes, you can add or update your trusted contacts in the app’s settings. These contacts will be notified during an emergency, and you can share your schedule with them as well. You can add up to three trusted contacts.
        </p>
         
      </>
    ),
  },
  {
    question: 'Will ReehaAI work if my phone is in silent mode?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Yes, ReehaAI will continue to monitor your location and listen for voice commands, even if your phone is in silent mode. However, please ensure that microphone access is enabled for the app.
        </p>
         
      </>
    ),
  },
  {
    question: 'How do I enable or disable location services for ReehaAI?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        To enable or disable location services, go to your phone's settings, navigate to the "Location" or "Privacy" section, and ensure location access is granted to ReehaAI. The app will prompt you if location services are turned off.
        </p>
         
      </>
    ),
  },
  {
    question: 'How does the app ensure my personal data is secure?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        ReehaAI uses encryption to secure your data, including your personal information and location data. Only trusted contacts and the designated authorities will receive your emergency details, and no data is shared with third parties without your consent.
        </p>
         
      </>
    ),
  },
  {
    question: 'Can I change the phrase used to trigger an emergency?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Currently, ReehaAI is designed to recognize the phrase "help me" for emergencies. Future updates may allow customization of the trigger phrase.
        </p>
         
      </>
    ),
  },
  {
    question: 'What happens if I accidentally press the "Danger" button?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        If you accidentally press the "Danger" button, you will be prompted to confirm the emergency. If you cancel the confirmation, no alerts will be sent to your contacts or the authorities.
        </p>
         
      </>
    ),
  },
  {
    question: 'How do I stop location tracking when I don’t need it?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        You can stop location tracking by disabling location services through your phone’s settings. ReehaAI will no longer track your location once location services are turned off.
        </p>
         
      </>
    ),
  },
  {
    question: 'How many trusted contacts can I add for emergency notifications?',
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        You can add up to three trusted contacts in ReehaAI for emergency notifications. This ensures that your key contacts are notified during an emergency.
        </p>
         
      </>
    ),
  },
  {
    question: "Can I use ReehaAI if I don't have a smartphone?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        ReehaAI is currently available as a mobile app and requires a smartphone to function. However, we are exploring other platforms for future releases.
        </p>
         
      </>
    ),
  },
  {
    question: "What should I do if the app isn't detecting my voice?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Ensure that microphone access is enabled for ReehaAI in your phone's settings. The app requires this permission to detect voice commands, like "help me."
        </p>
         
      </>
    ),
  },
  {
    question: "How do I update my emergency contacts?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        You can update or change your emergency contacts in the app’s settings. Remember, you can add up to three trusted contacts.
        </p>
         
      </>
    ),
  },
  {
    question: "Will ReehaAI work if my phone's battery is low?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        ReehaAI will function as long as your phone has power. However, it’s recommended to keep your phone charged, especially when traveling, to ensure continuous monitoring and emergency response.
        </p>
         
      </>
    ),
  },
  {
    question: "Does ReehaAI send alerts automatically if my location changes unexpectedly?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        No, ReehaAI does not send alerts based solely on location changes. It requires user input, such as pressing the "Danger" button or confirming help via voice commands.
        </p>
         
      </>
    ),
  },
  {
    question: "Can ReehaAI run in the background while I use other apps?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Yes, ReehaAI can run in the background while you use other apps. It will continue to monitor your location and listen for voice commands like "help me."
        </p>
         
      </>
    ),
  },
  {
    question: "What if I need help but can’t speak?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        If you cannot speak, you can press the "Danger" button that appears on the app to activate the emergency protocols and alert your contacts and local authorities.
        </p>
         
      </>
    ),
  },
  {
    question: "How does the app ensure my location is accurate during an emergency?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        ReehaAI uses your phone’s GPS to get accurate location data. For the best results, ensure your GPS is enabled and functioning properly.
        </p>
         
      </>
    ),
  },
  {
    question: "What should I do if my emergency contact changes their number?",
    answer: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        If your emergency contact changes their phone number, make sure to update their contact information in the app’s settings to ensure they receive alerts in case of an emergency.
        </p>
         
      </>
    ),
  },
];

// SVG Icon Component
const AccordionIcon = ({ isOpen }) => (
  <svg
    className={`w-3 h-3 transform ${isOpen ? 'rotate-180' : ''} shrink-0`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5 5 1 1 5"
    />
  </svg>
);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to set the open accordion item
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="flex justify-center pt-5">
    <div className="p-20 px-5 md:px-20 w-[90%]">
      <div id="accordion-collapse">
        {faqData.map((faq, index) => (
          <div key={index}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-[#00000020] hover:text-white dark:hover:bg-gray-800 gap-3"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-collapse-body-${index + 1}`}
              >
                <span>{faq.question}</span>
                <AccordionIcon isOpen={openIndex === index} />
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index + 1}`}
              className={`${openIndex === index ? 'block' : 'hidden'}`}
              aria-labelledby={`accordion-collapse-heading-${index + 1}`}
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}
