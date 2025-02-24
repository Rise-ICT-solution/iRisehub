/* eslint-disable no-unused-vars */
import React from "react";
import RightOne from "../../Images/RigrhOne.png";
import HedaerPicture from "../../Images/IriseHubEvents.jpg";
import HakiimiImg from "../../Images/HakiimiImg.jpg";
import ghuul from "../../Images/ghuul.png";
import footer from "../../Components/footer.jsx"
import Footer from "../../Components/footer.jsx"
import Header from "../../Components/Header.jsx"
const NewsPage = () => {
  return (
    <div className="w-full">
      <Header />
      {/* Header Section */}
      <div className="relative">
        <img src={HedaerPicture} alt="Event" className="w-full object-cover" />
        <img className="absolute rounded-2xl left-1/2 transform -translate-x-1/2 w-4/5 md:w-[900px] -bottom-16" src={ghuul} alt="" />
      </div>

      {/* Event Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-28 items-center bg-[#E44F2A] text-white py-10 px-5 md:px-20">
        <div>
          <span className="bg-blue-700 text-white px-3 py-1 rounded text-sm">MEMBERS ONLY</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">Youth Empowered</h1>
          <p className="font-bold mt-3 text-sm md:text-base">Tuesday, February 11, 2025, 8:00 AM - 8:45 AM</p>
          <p className="text-gray-200 text-sm md:text-base">Lewes Road, Brighton, BN2 4GL</p>
          <p className="mt-3 text-gray-100 text-sm md:text-base">
            Join us every Tuesday morning at 8AM in the Wellbeing Space on Floor 2 for Members, Yoga with Charlie.
          </p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4 hover:bg-blue-800">Member sign up</button>
        </div>
        <div>
          <img src={RightOne} alt="Event" className="rounded-lg w-full" />
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-white text-black py-10 px-5 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={HakiimiImg} alt="Discussion" className="rounded-lg w-full" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Each class will include:</h2>
            <ul className="list-disc list-inside mt-3 space-y-2 text-sm md:text-base">
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

        {/* Quote Section */}
        <div className="flex justify-center items-center min-h-[50vh] bg-white px-4 w-full">
          <div className="w-full max-w-5xl bg-white p-6 md:p-8 relative">
            <div className="absolute top-4 left-4 w-6 h-6 bg-orange-600 rotate-45"></div>
            <p className="text-gray-700 text-sm md:text-lg italic">
              ‘Hi there, I’m Charlie. I’ve been teaching yoga and Pilates for over 10 years. I co-run Om Retreats - a non-profit yoga retreats
              organisation, where all profits go to the Brighton Yoga Foundation. I’m also part of the teaching team at BYF, taking yoga classes for
              vulnerable people from various charities...'
            </p>
            <p className="text-gray-500 text-sm mt-4 text-center shadow-none">
              Charlie Griffin, <span className="font-medium">Yoga Instructor</span>
            </p>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-orange-600 rotate-45"></div>
          </div>
        </div>
      </div>
      

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NewsPage;
