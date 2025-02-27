import { FaSackDollar } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbBrandNetbeans } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import CountUp from "react-countup"




function Impacts (){
    return <div className="font-poppin text-white leading-[35px] mt-7 sm:mt-[290px] text-center ">
        {/* Top */}
        <div className="sm:flex gap-2 px-[10px]  ml-10 sm:ml-0 items-end">
            {[
                { count: 50, label: "Partners", height:"h-[130px]", bgColor:"bg-[#051C3C]", suffix:"+" },
                { count: 80, label: "Mentors", height:"h-[180px]", bgColor:"bg-[#FFBC01]", suffix:"+" },
                { count: 350, label: "Events", height:"h-[230px]", bgColor:"bg-[#C1EE4B]", suffix:"+" },
                { count: 450, label: "Impacted Startups", height:"h-[280px]", bgColor:"bg-[#CFB7F5]", suffix:"+" },
                { count: 3000, label: "Youth Empowered", height:"h-[330px]", bgColor:"bg-[#051C3C]", suffix:"+" },
                { count: 25, label: "Participants", height:"h-[380px]", bgColor:"bg-[#FFBC01]", suffix:"K" },
            ].map((ImpactNumber,index) => (
                <div key={index} className="sm:mt-0 mt-7">
                    <div className={`w-[300px] sm:${ImpactNumber.height} sm:w-[200px]  h-[170px] ${ImpactNumber.bgColor} rounded-lg leading-[22px] sm:text-left  sm:p-4 sm:justify-end sm:items-start items-center justify-center flex-col flex`} >
                        <h1 className="text-[40px] sm:text-[35px] font-semibold mb-2"> <CountUp end={ImpactNumber.count} suffix={ImpactNumber.suffix} /> </h1> {/*50+ || bg-[#051C3C]*/} 
                        <h1 className="text-[20px] sm:text-[16px] mt-2 sm:mt-0"> {ImpactNumber.label}</h1> {/*Partners*/}
                    </div>
                </div>
            ))}
        </div>
        
        <div className=" gap-2 ml-6 sm:ml-0 sm:absolute px-[20px] sm:mt-[-590.5px]">
            <div className=" grid grid-cols-2 sm:grid-cols-3 gap-y-8 py-10 bg-orange sm:mt-0 mt-7 sm:w-[600px] w-0 rounded-lg">
                {[
                    { icon: <FaSackDollar /> , count: 10, label: "Investment Raised", prefix:"$", suffix:"M+" },
                    { icon: <LiaHandHoldingUsdSolid /> , count: 720, label: "Startup Grant", prefix:"$", suffix:"K" },
                    { icon: <HiOutlineClipboardDocumentList /> , count: 45, label: "Applications Received", suffix:"+" },
                    { icon: <RiUserCommunityLine /> , count: 40, label: "iRise Community Members", suffix:"+" },
                    { icon: <HiOutlineUsers /> , count: 300, label: "Women Invested", suffix:"+" },
                    { icon: <TbBrandNetbeans /> , count: 20, label: "Programs", suffix:"+" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col leading-[25px] font-poppins items-center">
                        <div className="text-[40px]">{item.icon}</div> {/*<FaSackDollar className="text-[40px]" />*/}
                        <h1 className="text-[28px] font-semibold mt-3 "> <CountUp prefix={item.prefix} end={item.count}suffix={item.suffix} duration={2.5}  /> </h1> 
                        <h2> {item.label} </h2> {/*Ivestment Raised*/}
                    </div>
                ))}
            </div>
        </div>
    </div>
}
export default Impacts