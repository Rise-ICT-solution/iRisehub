/* eslint-disable no-unused-vars */
import React from "react";
// import NewsHeaderBgImage from "../../Images/Ai.png"
import RightOne from "../../Images/RigrhOne.png"
import HedaerPicture from "../../Images/IriseHubEvents.jpg"
import HakiimiImg from "../../Images/HakiimiImg.jpg"



const EventSection = () => {
  return (
    <div className="">
      <img src={HedaerPicture} alt="Event" className="rounded-lg w-full" />
      <div className="max-w-5xl  mx-auto grid md:grid-cols-2 gap-10 items-center bg-[#E44F2A] text-white py-10 px-5 md:px-20">
        <div>
          <span className="bg-blue-700 text-white px-3 py-1 rounded text-sm">MEMBERS ONLY</span>
          <h1 className="text-4xl font-bold mt-3">Youth Empowered</h1>
          <p className="font-bold mt-3">Tuesday, February 11, 2025, 8:00 AM - 8:45 AM</p>
          <p className="text-gray-200">Lewes Road, Brighton, BN2 4GL</p>
          <p className="mt-3 text-gray-100">
            Join us every Tuesday morning at 8AM in the Wellbeing Space on Floor 2 for Members,Yoga with Charlie.
          </p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4 hover:bg-blue-800">
            Member sign up
          </button>
        </div>
        <div>
          {/* <img src={NewsHeaderBgImage} alt="Event" className="rounded-lg w-full" /> */}
          <img src={RightOne} alt="Event" className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
};

const DetailsSection = () => {
  return (
    <div className="bg-[#F5F3EE] text-black py-10 px-5 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src={HakiimiImg} alt="Discussion" className="rounded-lg w-full" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Each class will include:</h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Flow yoga to uplifting music</li>
            <li>Meditation to clear the morning mind fog</li>
            <li>Yoga postures to remove tension and energize the body</li>
            <li>A snippet of relaxation for a breezy but productive day at work</li>
            <li>Classes will have a new theme each week</li>
            <li>Suitable for everybody and every body</li>
          </ul>
          <p className="mt-4 text-gray-600 text-sm">
            Please note: All yoga and pilates classes are designed with everyone in mind and are suitable for all levels of ability.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 w-full">
      <div className="w-full max-w-5xl bg-white p-8 shadow-lg relative">
        <div className="absolute top-4 left-4 w-6 h-6 bg-orange-600 rotate-45"></div>
        <p className="text-gray-700 text-lg italic">
          ‘Hi there, I’m Charlie. I’ve been teaching yoga and Pilates for over 10 years. I co-run Om Retreats - a non-profit yoga retreats organisation, where all profits go to the Brighton Yoga Foundation. I’m also part of the teaching team at BYF, taking yoga classes for vulnerable people from various charities. Last year I bit the bullet and joined the world online! I devised Akinyoga, offering a varied class catalogue of yoga and Pilates. Akin is where I am taking inspiration from, to teach you wonderful lot. Tailored to suit your needs, I’m very excited to be guiding a weekly yoga session at Plus X Innovation, where the vibe will be joyful, authentic, natural and lighthearted.’
        </p>
        <p className="text-gray-500 text-sm mt-4 text-center shadow-none">
          Charlie Griffin, <span className="font-medium">Yoga Instructor</span>, Akinyoga
        </p>
        <div className="absolute bottom-4 right-4 w-6 h-6 bg-orange-600 rotate-45"></div>
      </div>
      
    </div>
    
    </div>
  );
};

const EventPage = () => {
  return (
    <>
      <EventSection />
      <DetailsSection />
    </>
  );
};

export default EventPage;