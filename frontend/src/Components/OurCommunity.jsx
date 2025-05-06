import ImageOne from "../Images/Home-Pages-images/AboutImages/image1.png"
import ImageTwo from "../Images/Home-Pages-images/AboutImages/image2.png"
import ImageThree from "../Images/Home-Pages-images/AboutImages/image3.png"
import ImageFour from "../Images/Home-Pages-images/AboutImages/image4.png"
import iRiseLogoIcon from "../Images/Home-Pages-images/iRise-Logo Icon-Transparent.png"
import CircleArrowImage from "../Images/Home-Pages-images/Circle-Arrow.png"
import { useState, useEffect } from "react"
function OurCommunity (){          
    return <div className="w-full mt-39 bg-orange/10 items-center  p-10 sm:flex justify-around ">
        <div className="w-[250px]  ">
            <h1 className="text-4xl font-semibold font-poppins text-orange border-b-3 pb-6 text-center border-b-orange"> Join iRisehub Community</h1>
        </div>
        <div className="flex items-center flex-col">
            <div className=" flex flex-col items-center relative">
                <img className="w-[450px] absolute " src={iRiseLogoIcon} alt="" />
                {/* crossing image in the */}
                <div className="relative   w-[450px] h-[450px]">
                    <div>
                            <img style={{ animationDelay: "0s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[15deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in   "  src={ImageOne} alt="" /> 
                            <img style={{ animationDelay: "0.2s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[45deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in "  src={ImageTwo} alt="" /> 
                            <img style={{ animationDelay: "0.6s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[30deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in "  src={ImageFour} alt="" />
                            <img style={{ animationDelay: "0.4s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[0deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in"  src={ImageThree} alt="" /> 
                    </div>
                </div>
            </div>
            {/* the three layer of the logo  */}
            <div className="flex relative flex-col gap-3 -mt-10 items-center ">
                <div className="bg-orange flex justify-center items-center w-[135px] h-[30px] rounded-[20px]">
                    <h1 className=" font-poppins font-semibold text-[11px] text-white">iRisehub Community</h1>
                </div>
                <div className="bg-orange   w-[140px] h-[30px] rounded-[20px]">
                    <input className="w-full px-2 font-poppins text-white text-[11px] text-center items-center outline-none " placeholder="Enter Your Email Here" type="text"  />
                </div>
                <div className="bg-orange flex justify-center items-center w-[70px] h-[30px] rounded-[20px]">
                    <h1 className="font-poppins font-semibold text-[11px] text-white">Join Us</h1>
                </div>
                <img className="absolute w-[90px] rotate-[25deg] scale-y-[-1] ml-35 mt-9" src={CircleArrowImage} alt="" />
            </div>
        </div>
    </div>
}
export default OurCommunity