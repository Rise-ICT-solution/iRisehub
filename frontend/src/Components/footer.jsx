import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

function Footer (){
    return <div className="w-full px-[10px]  pb-[30px] ">
        <div className="flex justify-around">
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
            <ul className=" leading-[28px] ">
                <li className="font-semibold text-[18px] font-poppins mb-2"> Follow Us </li>
                <li className=" text-[#0e0e0e] hover:text-orange flex items-center gap-1"> <FaFacebookSquare className="text-[20px]" /> Facebook </li>
                <li className=" text-[#0e0e0e] hover:text-orange flex items-center gap-1"> <FaSquareXTwitter className="text-[20px]" /> Twitter  </li>
                <li className=" text-[#0e0e0e] hover:text-orange flex items-center gap-1"> <FaLinkedin  className="text-[20px]"/> LinkedIn </li>
                <li className=" text-[#0e0e0e] hover:text-orange flex items-center gap-1"> <FaSquareYoutube className="text-[20px]" /> Youtube  </li>
            </ul>
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