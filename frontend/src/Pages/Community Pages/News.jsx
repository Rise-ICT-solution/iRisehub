/* eslint-disable no-unused-vars */
import React from "react";

const EventSection = () => {
  return (
    <div className="bg-[#E44F2A] text-white py-10 px-5 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-blue-700 text-white px-3 py-1 rounded text-sm">MEMBERS ONLY</span>
          <h1 className="text-4xl font-bold mt-3">Youth Empowered</h1>
          <p className="font-bold mt-3">Tuesday, February 11, 2025, 8:00 AM - 8:45 AM</p>
          <p className="text-gray-200">Lewes Road, Brighton, BN2 4GL</p>
          <p className="mt-3 text-gray-100">
            Join us every Tuesday morning at 8AM in the Wellbeing Space on Floor 2 for Members' Yoga with Charlie.
          </p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4 hover:bg-blue-800">
            Member sign up
          </button>
        </div>
        <div>
          <img src="/path-to-your-image.jpg" alt="Event" className="rounded-lg w-full" />
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
          <img src="/path-to-your-image-2.jpg" alt="Discussion" className="rounded-lg w-full" />
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