import React, { useState } from "react";
import MohamedBashir from "../Images/MohamedBashir.png"
import Testmonial from "../Components/Testmonial"

import TestMonialBgImage from "../Images/TestmonialBgImage.png"

import { IoArrowBackCircleOutline, IoArrowForwardCircle } from "react-icons/io5";

const testimonials = [
  {
    image: MohamedBashir,
    name: "Mohamed Bashir",
    description: "beneficiary It is indeed a remarkable and unique somali startups to create advanced and unprecedented technologies and services"
  },
  {
    image: MohamedBashir,
    name: "Mohamed Bashir",
    description: "I am proud to be a part of the Dalbile bootcamp beneficiary It is indeed a remarkable and unique somali startups to create advanced and unprecedented technologies and services"
  },
  // Ku dar testimonials kale halkan sida liiska.
];

function TestTestmonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-20 w-full h-[400px] relative mb-[500px] justify-around">
      <img className="w-full absolute bg-cover" src={TestMonialBgImage} alt="" />
      <div className="w-full bg-black/60 absolute h-[842px]">
        <div className="text-center mt-20 font-poppins">
          <h1 className="text-[30px] font-semibold text-orange "> #WhyiRise</h1>
          <p className="w-[500px] ml-[30%] mt-3 text-white">
            We are iRisehub, a community of disruptors and dreamers, fostering innovation, entrepreneurship, and technology to build a thriving future for Somalia.
          </p>
        </div>
        
        <div className="flex justify-around mt-10 items-center">
          {/* Arrow Back */}
          <IoArrowBackCircleOutline
            onClick={handlePrev}
            className="text-orange text-[50px] hover:text-white mt-48 cursor-pointer"
          />

          {/* Testimonial */}
          <div className="flex gap-10 hover:cursor-grab">
            <Testmonial
              image={testimonials[currentIndex].image}
              name={testimonials[currentIndex].name}
              description={testimonials[currentIndex].description}
            />
          </div>

          {/* Arrow Forward */}
          <IoArrowForwardCircle
            onClick={handleNext}
            className="text-orange text-[50px] hover:text-white mt-48 cursor-pointer"
          />
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-3 mt-15 inset-0 justify-center">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-[30px] h-[8px] rounded-lg ${
                index === currentIndex
                  ? "bg-transparent border-[1.5px] border-[#D9D9D9]"
                  : "bg-[#D9D9D9]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestTestmonial;
