import { FaSackDollar } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbBrandNetbeans } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { PiUsersFourLight } from "react-icons/pi";
import CountUp from "react-countup";
import { useState } from "react";
const impactData = [
    {
        icon: RiUserCommunityLine,
        program: "Mentors",
        number: 80,
        suffix: "+",
        prefix: "",
        bgColor: "bg-[#051C3C]"
        
    },
    {
        icon: HiOutlineClipboardDocumentList,
        program: "Participants",
        number: 900,
        suffix: "+",
        prefix: "",
        bgColor: "bg-[#FFBC01]"
    },
    {
        icon: HiOutlineUsers,
        program: "Programs",
        number: 100,
        suffix: "+",
        prefix: "",
        bgColor: "bg-[#C1EE4B]"

    },
    {
        icon: TbBrandNetbeans,
        program: "Investment",
        number: 1500,
        suffix: "+",
        prefix: "$",
        bgColor: "bg-[#CFB7F5]"
    },
    {
        icon: FaHandHoldingDollar,
        program: "Partners",
        number: 10,
        suffix: "+",
        prefix: "",
        bgColor: "bg-[#051C3C]"
    },
    {
        icon: LiaHandHoldingUsdSolid,
        program: "Investment",
        number: 720,
        suffix: "+",
        prefix: "$",
        bgColor: "bg-[#FFBC01]"
    },
    {
        icon: TbBrandNetbeans,
        program: "Partners",
        number: 10,
        suffix: "+",
        prefix: "",
        bgColor: "bg-[#C1EE4B]"
    },
    {
        icon: FaHandHoldingDollar,
        program: "Investment",
        number: 720,
        suffix: "+",
        prefix: "$",
        bgColor: "bg-[#CFB7F5]"
    },
    {
        icon: TbBrandNetbeans,
        program: "Partners",
        number: 30,
        suffix: "+",
        prefix: "$",
        bgColor: "bg-[#051C3C]"
    },
    {
        icon: FaHandHoldingDollar,
        program: "Investment",
        number: 230,
        suffix: "+",
        prefix: "$",
        bgColor: "bg-[#FFBC01]"


    },
    {
        icon: TbBrandNetbeans,
        program: "Partners",
        number: 20,
        suffix: "+",
        prefix: "$",
        bgColor: "bg-[#C1EE4B]"
    },
    {
        icon: FaHandHoldingDollar,
        program: "Investment",
        number: 230,
        suffix: "+",
        prefix: "$",
        bgColor: "bg-[#CFB7F5]"
    },
  
   
];

function Impacts() {
    // const [currentIndex, setCurrentIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="grid grid-cols-6  ml-10 gap-y-10 mt-12 gap-4 justify-center items-center">
            {impactData.map((item, index) => (
                <div
                    key={index}
                    className="group perspective"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}>
            {/* // > key={index} className=" group perspective"> */}
                    <div className="w-[140px] relative  h-[180px]">
                        {/* Front side */}
                        <div className={`absolute w-full h-full  backface-hidden text-center ${item.bgColor} justify-center items-center flex flex-col rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180`}>
                            <item.icon className="text-[60px] text-white" />
                            <h1 className="text-[20px] text-white font-medium font-poppins">
                                {item.program}
                            </h1>
                        </div>
                        {/* Back side */}
                        <div className="absolute w-full h-full bg-white shadow-lg shadow-gray-300  rounded-lg backface-hidden transform rotate-y-180 transition-transform duration-500 group-hover:rotate-y-0 flex flex-col justify-center items-center">
                            {/* {
                                currentIndex === index && ( */}
                                    <div className=" flex flex-col justify-center items-center" >
                                        <h1 className="text-[30px] text-orange font-semibold font-poppins">
                                            {hoveredIndex === index && (
                                               <>{item.prefix}<CountUp key={index} start={0} end={item.number} duration={2} />{item.suffix}</>
                                            )}
                                        </h1>
                                        {/* <h1 className="text-[30px] text-orange font-semibold font-poppins"><CountUp key={index} start={0} end={item.number} duration={2} /></h1> */}
                                        <h1 className="text-[18px] text-orange text-center font-medium font-poppins">
                                            {item.program}
                                        </h1>
                                    </div>
                                {/* )
                            } */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Impacts;