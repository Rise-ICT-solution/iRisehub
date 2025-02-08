// import { BsCalendar4Event } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsRocket } from "react-icons/bs";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { FaUserTie } from "react-icons/fa6";
import { PiUsersFourLight } from "react-icons/pi";
import { PiHandFistBold } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { TbUserBitcoin } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Impacts from "./Impacts";

function Moving (){ //This page is only for testing 
    return <div>
        <div className="pb-[100px] mt-[70px]">
            <div className="flex mb-[20px] font-poppins justify-between px-[20px]">
                <h1 className="text-[22px] font-semibold"> Impact Numbers </h1>
                <p className="border-2 border-orange w-[150px] text-center items-center flex gap-3 justify-center rounded-[10px] py-[7px] hover:bg-orange hover:text-white h-[40px]"> Learn more <FaArrowRight />
                </p>
            </div>
            <div className="flex  w-full overflow-x-hidden  items-center p-4 bg-orange">
                <div className=" flex justify-around w-full items-center animate-scroll-right">
                    {/* <div className="flex justify-around  w-full">
                        <Impacts Icon={LiaNetworkWiredSolid} number="28+" program="Programs" />
                        <Impacts Icon={MdEventNote} number="350+" program="Events" />
                        <Impacts Icon={BsRocket} number="400+" program="Impacted Startups" />
                        <Impacts Icon={FaHandHoldingUsd} number="720,000" program="Startup Grant" />
                    </div> */}
                    {/* <div className="flex justify-around w-full">
                        <Impacts Icon={FaUserTie} number="80+" program="Mentors" />
                        <Impacts Icon={PiUsersFourLight} number="25K" program="Participants" />
                        <Impacts Icon={PiHandFistBold} number="3,000+" program="Youth Empowered" />
                        <Impacts Icon={FaRegHandshake} number="50+" program="Partners" />
                    </div> */}
                    <div className="flex justify-around w-full">
                        <Impacts Icon={FaSackDollar} number="10M" program="Investment Raised" />
                        <Impacts Icon={TbUserBitcoin} number="300+" program="Women Invested" />
                        <Impacts Icon={HiOutlineClipboardDocumentList} number="45K" program="Application Received" />
                        <Impacts Icon={FaPeopleGroup} number="40K" program="iRise Community Members" />
                    </div>
                </div>
            </div>    
            </div>
    </div>
}
export default Moving //This page is only for testing 