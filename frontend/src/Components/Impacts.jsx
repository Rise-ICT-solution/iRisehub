import { FaSackDollar } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbBrandNetbeans } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";




function Impacts (){
    return <div className="font-poppins   text-white leading-[35px] mt-[290px]   text-center  ">
        <div className="sm:flex gap-2 px-[10px] ml-10 sm:ml-0 items-end">
            <div className="w-[300px] sm:h-[130px] sm:w-[200px]  h-[170px] bg-[#051C3C] rounded-lg leading-[22px] sm:text-left  sm:p-4 sm:justify-end sm:items-start items-center justify-center flex-col flex">
                <h1 className="text-[40px] sm:text-[35px] font-semibold mb-2"> 50+ </h1>
                <h1 className="text-[20px] sm:text-[16px] mt-2 sm:mt-0"> Partners</h1>
            </div>
            <div className="w-[300px] sm:mt-0 mt-7 sm:h-[180px] sm:w-[200px] h-[170px] bg-[#FFBC01] rounded-lg leading-[22px] text-left  sm:p-4 sm:justify-end sm:items-start items-center justify-center flex-col flex">
                <h1 className="text-[40px] sm:text-[35px] font-semibold mb-2"> 80+ </h1>
                <h1 className="text-[20px] sm:text-[16px] mt-2 sm:mt-0"> Mentors</h1>
            </div>
            <div className="w-[300px] sm:mt-0 mt-7 sm:h-[230px] sm:w-[200px] h-[170px] bg-[#C1EE4B] rounded-lg leading-[22px] text-left  sm:p-4 sm:justify-end sm:items-start items-center justify-center flex-col flex">
                <h1 className="text-[40px] sm:text-[35px] font-semibold mb-2"> 350+ </h1>
                <h1 className="text-[20px] sm:text-[16px] mt-2 sm:mt-0"> Events</h1>
            </div>
            <div className="w-[300px] sm:mt-0 mt-7 sm:h-[280px] sm:w-[200px]  h-[170px] bg-[#CFB7F5] rounded-lg leading-[22px] text-left  sm:p-4 sm:justify-end sm:items-start items-center justify-center flex-col flex">
                <h1 className="text-[40px] sm:text-[35px] font-semibold mb-2"> 400+ </h1>
                <h1 className="text-[20px] sm:text-[16px] mt-2 sm:mt-0"> Impacted Startups</h1>
            </div>
            <div className="w-[300px] sm:mt-0 mt-7 sm:w-[200px] h-[170px] sm:h-[330px] bg-[#051C3C] rounded-lg leading-[22px] text-left p-2 sm:justify-end sm:items-start items-center justify-center flex-col flex">
                <h1 className="text-[40px] sm:text-[35px] font-semibold mb-2"> 3,000+ </h1>
                <h1 className="text-[20px] sm:text-[16px] mt-2 sm:mt-0"> Youth Empowered</h1>
            </div>
            <div className="w-[300px] sm:mt-0 mt-7 sm:w-[200px] h-[170px] sm:h-[380px] bg-[#FFBC01] rounded-lg leading-[22px] text-left  sm:p-4 sm:justify-end sm:items-start items-center justify-center flex-col flex">
                <h1 className="text-[40px] sm:text-[35px] font-semibold mb-2"> 25K </h1>
                <h1 className="text-[20px] sm:text-[16px] mt-2 sm:mt-0"> Participants</h1>
            </div>
        </div>
        
        <div className=" gap-2 ml-6 sm:ml-0 sm:absolute px-[20px] sm:mt-[-590.5px]">
            <div className=" grid grid-cols-[200px_200px_200px] gap-y-[30px] mt-0  py-[30px]  sm:mt-[-60px] h-[300px] bg-orange">
                <div className="flex flex-col leading-[25px] font-poppins items-center">
                    <FaSackDollar className="text-[40px]" />
                    <h1 className="text-[28px] font-semibold mt-3 "> 10M </h1>
                    <h1> Ivestment Raised</h1>
                </div>
                <div className="flex flex-col leading-[25px] font-poppins items-center">
                    <LiaHandHoldingUsdSolid className="text-[40px]" />
                    <h1 className="text-[28px] font-semibold mt-3 "> 720K </h1>
                    <h1> Startup Grant</h1>
                </div>
                <div className="flex flex-col leading-[25px] font-poppins items-center">
                    <HiOutlineClipboardDocumentList className="text-[40px]" />
                    <h1 className="text-[28px] font-semibold mt-3 "> 45K </h1>
                    <h1> Application Received </h1>
                </div>
                <div className="flex flex-col leading-[25px] font-poppins items-center">
                    <RiUserCommunityLine className="text-[40px]" />
                    <h1 className="text-[28px] font-semibold mt-3 "> 40K </h1>
                    <h1 className="leading-[22px]"> iRise Community Members </h1>
                </div>
                <div className="flex flex-col leading-[25px] font-poppins items-center">
                    <HiOutlineUsers className="text-[40px]" />
                    <h1 className="text-[28px] font-semibold mt-3 "> 300+ </h1>
                    <h1> Women Inveted</h1>
                </div>
                <div className="flex flex-col leading-[25px] font-poppins items-center">
                    <TbBrandNetbeans className="text-[40px]" />
                    <h1 className="text-[28px] font-semibold mt-3 "> 20+ </h1>
                    <h1> Programs</h1>
                </div>
            </div>
        </div>
    </div>
}
export default Impacts