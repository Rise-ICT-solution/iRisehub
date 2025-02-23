import BriefAboutiRise from "../Components/BriefAboutiRise"
import HeroSection from "../Components/HeroSection"
import Impacts from "../Components/Impacts"
import { FaArrowRight } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
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
import EventUpdate from "../Components/EventsUpdates";
// Events Left and Right arrows
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

import EventUpdateBgImage from "../Images/EventsBG.jpg"
import EventOneImage from "../Images/Event1Image.png"
import EventTwoImage from "../Images/Event2Image.png"
import EventThreeImage from "../Images/Event3Image.png"
import EventFourImage from "../Images/Home-Pages-images/Presentation.png"
import Partners from "../Components/Partner";
//Partners Logo Images
import UNFPA from "../Images/UNFPA.png"
import WasaaradaWaxbarashada from "../Images/WasaradaWaxbarashada.png"
import USAEmpassy from "../Images/USAEmpassy.png"
import Eurobe from "../Images/Eurobe.png"
import UNICEF from "../Images/UNICEF.png"
import UNIDO from "../Images/UNIDO.png"
import Netherland from "../Images/GovNetherland.png"
import UNDP from "../Images/UNDP.png"
import Somali from "../Images/SomaliaFederal.png"
import USAID from "../Images/USAID.png"
import Creative from "../Images/Creative.png"
import FCA from "../Images/FCA.png"

import FAQ from "../Components/FAQs";
import GirlWithQuestion from "../Images/QuestionGirl.png"
import Testmonial from "../Components/Testmonial";
// Testmonial Persona who made comment images
import MohamedBashir from "../Images/MohamedBashir.png"
import Luul from "../Images/LuulHaji.png"
import Ayaan from "../Images/AyaanMire.png"
import Ahmed from "../Images/AhmedAbdulle.png"
import TestMonialBgImage from "../Images/TestmonialBgImage.png"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";

// footer
import Footer from "../Components/footer";
import BookNow from "../Components/BookNow";
import TestTestmonial from "../Components/TestTestmonial";
import { useState } from "react";

const testmonials = [
    {
        image: MohamedBashir, name: "Mohamed Bashir", describtion:"beneficiary It is indeed a remarkable and unique somali startups to create advanced and unprecedented technologies and services",
    },
    {
        image: Luul, name: "Luul Haji", describtion:"I am proud to be part of iRisehub's ecosystem which fosters great innovation and entrepreneurship."
    },
    {
        image: Ayaan, name: "Ayaan Mire", describtion:"Joining iRisehub was one of the best decisions I've made. It's a community filled with ambition and creativity."
    },
    {
        image: Ahmed, name: "Ahmed Abdulle", describtion:"iRisehub's training programs have greatly improved my skills and helped me grow professionally." 
    },
]
const events = [
    {
        image: EventOneImage,
        date: "Dec 7,2024",
        title: "Empowering Dreams in AWE",
        description: "In our Academy for Women Entrepreneurship, we've been busy diving into the art of creating impactful business plans, fostering innovation, and igniting the flame of aspirations."
    },
    {
        image: EventTwoImage,
        date: "Feb 23, 2024",
        title: "iRise Annual Retreat and Review Week",
        description: "iRisehub team had empowering training session aimed to enhance our team’s skills and lay the groundwork for our strategies in this new year."
      },
      {
        image: EventThreeImage,
        date: "Feb 10, 2024",
        title: "iRise Hub Newsletter — Your January Edition, 2024",
        description: "Stay in the loop with all our latest updates! Check out our newsletter now. Read our January newsletter."
      },
      {
        image: EventFourImage,
        date: "Aug 10, 2024",
        title: "Students Demo day 2025",
        description: "Stay in the loop with all our latest updates! Check out our newsletter now. Read our January newsletter."
      },

]

function Home (){  
    const [CurrentComment, setCurrentComment] = useState(0)
    const GetCommentIndex = (index) => {
        return (CurrentComment + index) % testmonials.length
    }
    const HandleNextComment = () => {
        setCurrentComment((prevComment) => (prevComment + 1) % testmonials.length)
    } 
    const HandlePrevComment = () => {
        setCurrentComment((prevComment) => 
            prevComment === 0 ? testmonials.length -1 : prevComment - 1
        )
    }

    const [CurrentEvent, setCurrentEvent] = useState(0)

        // Helper function to calculate the index of the next event
    const GetEventIndex = (index) => {
        return (CurrentEvent + index) % events.length
    };
    const HandleNextEvent = () => {
        setCurrentEvent((prevEvent) => (prevEvent + 1) % events.length)
    }

    const HandlePrevEvent = () => {
        setCurrentEvent((prevEvent) => 
            prevEvent === 0 ? events.length -1 : prevEvent -1  
        )    
    }
    
    return <div>
        <HeroSection />
        <div className=" mt-20 sm:mt-[650px]  px-[20px]">
            <BriefAboutiRise />
        </div>
        {/* Impact NUmbers Section  */}
        <div className="pb-[100px] mt-[70px]">
            <div className="flex mb-[10px] font-poppins justify-between px-[20px]">
                <h1 className="sm:text-[22px] text-[20px] font-semibold"> Impact Numbers </h1>
                <p className="border-2 text-[14px] sm:text-[16px] border-orange w-[130px] text-center items-center flex gap-3 justify-center rounded-[10px] py-[7px] hover:bg-orange hover:text-white h-[40px]"> Learn more <FaArrowRight /></p>
            </div>
            <div className="flex  w-full">
                <Impacts />
            </div>    
            </div>
            {/* Events and Updates Section */}
            <div className="relative pb-[0px]">

                <div className=" w-full h-[800px] bg-cover bg-center bg-fixed " style={{backgroundImage: `url(${EventUpdateBgImage})`}}>
                    {/* <img className="w-full pb-[30px] h-[850px] relative object-cover" src={EventUpdateBgImage} alt="" /> */}
                    <div className="absolute h-[800px] bg-cover w-full bg-[#EEF3F9]/50 inset-0 pt-10 sm:pt-16">
                        <h1 className="text-center text-[30px] sm:text-[40px] text-orange font-semibold font-poppins"> Events and Updates </h1>
                        <div className="absolute right-[10px] sm:right-14 gap-3 top-26  sm:top-18   flex ">
                            <IoIosArrowDropleft onClick={HandlePrevEvent} className="text-[40px] hover:text-orange text-[#e84e249e]" />
                            <IoIosArrowDroprightCircle onClick={HandleNextEvent} className="text-[40px] hover:text-[#e84e249e] text-orange" />
                        </div>
                       
                        <div className="mt-16 flex justify-around flex-wrap sm:flex-nowrap  ">
                            {/* Display One event on mobile side */}
                            <div className="w-full sm:hidden sm:w-full ml-10 mt-5">
                                <EventUpdate
                                    image={events[GetEventIndex(0)].image}
                                    date={events[GetEventIndex(0)].date}
                                    title={events[GetEventIndex(0)].title}
                                    description={events[GetEventIndex(0)].description}
                                />
                            </div>
                            <div className="hidden sm:flex justify-around w-full">
                                {
                                    [0,1,2].map((offset) => (
                                        <EventUpdate 
                                            key={offset}
                                            image={events[GetEventIndex(offset)].image}
                                            date={events[GetEventIndex(offset)].date}
                                            title={events[GetEventIndex(offset)].title}
                                            description={events[GetEventIndex(offset)].description}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        {/* Dots for current position */}
                        <div className="flex justify-center items-center gap-6 mt-13">
                            {
                                events.map((_, index) => {
                                    return <div key={index} className={`w-[9px]  h-[9px] rounded-full  ${index === CurrentEvent? 'bg-orange' : 'bg-orange/55'}  rounded-full `}></div>
                                }
                                )
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Book an Event */}
            <div className=" mb-20">
                <BookNow />
            </div>
            {/* Valued Partners Section  */}
            <div className="w-full  pt-7 bg-orange px-[20px] font-poppins pb-[40px] text-white">
                <h1 className="text-center text-[22px] font-semibold"> Our Valued Partners </h1>
                {/* <p className="text-center text-[16px] w-[500px] mt-3 ml-[29%]"> Backed by a robust network of strategic partners, we pride ourselves in supporting young entrepreneurs and innovators to seed and scale their sustainable solutions for Somalia. </p> */}
                <div className="overflow-hidden">
                    <div className="flex gap-4 mt-7 animate-scroll">
                        <div className="flex gap-4">
                            <Partners width="100" height="60" image={UNFPA} />
                            <Partners width="110" height="110" image={WasaaradaWaxbarashada} />
                            <Partners width="90" height="90" image={USAEmpassy} />
                            <Partners width="120" height="80" image={Eurobe} />
                            <Partners width="120" height="70" image={UNICEF} />
                            <Partners width="115" height="80" image={UNIDO} />
                        </div>
                        <div className="flex gap-4">
                            <Partners width="200" height="80" image={Netherland} />
                            <Partners width="140" height="70" image={UNDP} />
                            <Partners width="100" height="100" image={Somali} />
                            <Partners width="150" height="75" image={USAID} />
                            <Partners width="150" height="" image={Creative} />
                            <Partners width="150" height="65" image={FCA} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Testmonial Section */}
            <div className="mt- w-full sm:h-[400px] relative mb-[500px]  justify-around">
                <img className="w-full h-[800px] sm:h-[842px] absolute  bg-cover" src={TestMonialBgImage} alt="" />
                <div className="w-full bg-black/60 absolute h-[800px] sm:h-[842px]">
                    <div className=" text-center mt-20 font-poppins">
                            <h1 className=" text-[30px] font-semibold text-orange "> #WhyiRise</h1>
                            <p className=" w-[350px] ml-5 sm:w-[500px] sm:ml-[30%] mt-3 text-white"> We are iRisehub, a community of disruptors and dreamers, fostering innovation, entrepreneurship, and technology to build a thriving future for Somalia.</p>
                    </div>
                    <div className="absolute flex gap-2 justify-end ml-[-20px] sm:ml-0 top-15 sm:top-60 sm:justify-between sm:px-[20px] px-0 w-full">
                        <IoArrowBackCircleOutline onClick={HandlePrevComment} className="text-orange text-[50px] hover:text-white mt-48" />
                        <IoArrowForwardCircle onClick={HandleNextComment} className="text-orange text-[50px] hover:text-white mt-48" />
                    </div>
                    <div className="flex justify-around mt-10">
                        {/* Display One event on mobile side */}
                        <div className="w-full sm:hidden sm:w-full ml-10 mt-5">
                        <Testmonial 
                            key={CurrentComment}
                            image={testmonials[CurrentComment].image}
                            name={testmonials[CurrentComment].name}
                            description={testmonials[CurrentComment].describtion}
                         />
                        </div>
                        {/* Display 3 events on desktop */}
                        <div className="w-full hidden sm:flex ml-[8%]  gap-10 ">
                            {
                                [0,1,2].map((offset) => (
                                    <Testmonial
                                     key={offset}
                                     image={testmonials[GetCommentIndex(offset)].image}
                                     name={testmonials[GetCommentIndex(offset)].name}
                                     description={testmonials[GetCommentIndex(offset)].describtion}

                                     />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex gap-3 mt-10 sm:mt-15 inset-0 justify-center">
                        {testmonials.map((_,index) => {
                            return <div key={index} className={`w-[30px] h-[8px] rounded-lg ${index === CurrentComment ? "bg-transparent w-[40px] border-[1.5px] border-[#D9D9D9] " : "bg-[#D9D9D9]"} `}></div>
                        })}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="sm:mt-[100px] ">
                <Footer />
            </div>
        </div>
}
export default Home