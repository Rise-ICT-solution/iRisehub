import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import iRiseLogo from "../Images/iRisehubLogo.png"

function Footer (){
    return <div className="sm:w-full w-[350px] px-[10px]  pb-[30px] ">
        <div className="sm:flex justify-around">
            <div className="sm:mt-[-40px] mb-5 sm:mb-0 ml-13 sm:ml-0 ">
                <img className="w-[250px] h-[200px]" src={iRiseLogo} alt="" />
                <div className="flex items-center mt-[-50px]">
                    <input type="text"  placeholder="Enter your email" className="w-[150px] pr-[12px] outline-none border-orange border-2 h-[40px] rounded-[5px] px-2"/>
                    <button className="w-[100px] text-[14px] ml-[-10px] h-[40px] rounded-[5px]   bg-orange text-white"> Subscribe </button>
                </div>
            </div>
            <ul className=" leading-[28px] ml-5 sm:ml-0 mt-6 sm:mt-0 font-poppins ">
                <li className="font-semibold text-[18px] font-poppins mb-2"> Quick Links </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> What We Do </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Who We Are  </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Ecosystem </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Events  </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> News </li>
            </ul>
            <ul className=" leading-[28px] ml-5 sm:ml-0 mt-6 sm:mt-0 font-poppins ">
                <li className="font-semibold text-[18px] font-poppins mb-2"> Explore </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Team </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Board of Trustee  </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Community </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Startups  </li>
            </ul>
            <ul className=" leading-[28px] ml-5 sm:ml-0 mt-6 sm:mt-0 font-poppins ">
                <li className="font-semibold text-[18px] font-poppins mb-2"> Visit Us </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Amira Castel Opposite </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Pizza House 252 Hodan  </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Mogadishu Somalia </li>
            </ul>
            <div className="ml-5 sm:ml-0 mt-6 sm:mt-0">
                <div>
                    <h1 className="font-semibold text-[18px] font-poppins mb-2"> Get in touch </h1>
                    <div className="flex gap-2">
                        <FaFacebookSquare className="text-[20px] hover:text-orange" /> 
                        <FaSquareXTwitter className="text-[20px] hover:text-orange" /> 
                        <FaLinkedin  className="text-[20px] hover:text-orange"/> 
                        <FaSquareYoutube className="text-[20px] hover:text-orange" /> 
                    </div>
                </div>
                <div className="mt-5 leading-[20px]">
                    <h1 className="font-semibold text-[18px] font-poppins mb-2"> Office Hours </h1>
                    <div className="flex flex-col mt-[-5px] font-poppins">
                        <h1 className="hover:text-orange"> Saturday to Wednesday </h1>
                        <h1 className="hover:text-orange"> 8:00AM to 4:00PM </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full border-t-1 sm:flex justify-between border-t-gray-600 pt-2 mt-10">
            <h1 className="text-[17px] font-light sm:mt-0 mt-3 hover:text-orange"> ©2024 iRisehub® Home of innovation </h1>
            <ul className="sm:flex gap-5 sm:mt-0 mt-3 font-light">
                <li className="hover:text-orange border-r-[1.5px] pr-3 border-r-gray-400"> Terms of Service </li>
                <li className="hover:text-orange border-r-[1.5px] pr-3 border-r-gray-400"> Privacy Policy </li>
                <li className="hover:text-orange pr-3 "> Cookie Settings </li>
                <li className="hover:text-orange  pr-3"> Contact Us</li>
                <li className="hover:text-orange  pr-3"> Nuur</li>
            </ul>
        </div>
        

    </div>
}
export default Footer