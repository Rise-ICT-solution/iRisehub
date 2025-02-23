import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import iRiseLogo from "../Images/iRisehubLogo.png"

function Footer (){
    return <div className="w-full px-[10px]  pb-[30px] ">
        <div className="flex justify-between px-[50px]">
            <div className="w-[300px]  mt-[-60px] ">
                <img className="w-[240px] h-[190px]" src={iRiseLogo} alt="" />
                <div className="sm:absolute mt-[-50px] flex items-center">
                    <input className="w-[160px] outline-none px-2 h-[40px] border-2 border-orange" type="text" placeholder="Enter email" />
                    <button className="w-[100px] text-[14px] h-[40px] bg-orange text-white">SUBSCRIBE</button>
                </div>
            </div>
            <ul className=" leading-[28px] ">
                <li className="font-semibold text-[18px] font-poppins mb-2"> Quick Links </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> What We Do </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Who We Are  </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Ecosystem </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Events  </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> News </li>
            </ul>
            <ul className=" leading-[28px] ">
                <li className="font-semibold text-[18px] font-poppins mb-2"> Explore </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Team </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Board of Trustee  </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Community </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Startups  </li>
            </ul>
            <ul className=" leading-[28px] ">
                <li className="font-semibold text-[18px] font-poppins mb-2"> Visit Us </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Amira Castel Opposite </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Pizza House 252 Hodan  </li>
                <li className=" text-[#0e0e0e] hover:text-orange"> Mogadishu Somalia </li>
            </ul>
            <div>
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
        <div className="w-full border-t-1 flex justify-between border-t-gray-600 pt-2 mt-10">
            <h1 className="text-[17px] font-light hover:text-orange"> ©2024 iRisehub® Home of innovation </h1>
            <ul className="flex gap-5 font-light">
                <li className="hover:text-orange border-r-[1.5px] pr-3 border-r-gray-400"> Terms of Service </li>
                <li className="hover:text-orange border-r-[1.5px] pr-3 border-r-gray-400"> Privacy Policy </li>
                <li className="hover:text-orange border-r-[1.5px] pr-3 border-r-gray-400"> Cookie Settings </li>
                <li className="hover:text-orange border-r-[1.5px] pr-3 border-r-gray-400"> Contact Us</li>
            </ul>
        </div>
        

    </div>
}
export default Footer