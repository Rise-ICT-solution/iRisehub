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
// footer
import Footer from "../Components/footer";



function Home (){   
    return <div>
        
        <HeroSection />
        <div className="mt-[650px]  px-[20px]">
            <BriefAboutiRise />
        </div>
        {/* Impact NUmbers Section  */}
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
            {/* Events and Updates Section */}
            <div className="relative pb-[0px]">

                <div className=" w-full h-[800px] bg-cover bg-center bg-fixed " style={{backgroundImage: `url(${EventUpdateBgImage})`}}>
                    {/* <img className="w-full pb-[30px] h-[850px] relative object-cover" src={EventUpdateBgImage} alt="" /> */}
                    <div className="absolute h-[800px] bg-cover w-full bg-black/50 inset-0 pt-16">
                        <h1 className="text-center text-[40px] text-white font-semibold font-poppins"> Events and Updates </h1>
                        <div className="absolute right-14 gap-3 top-18   flex ">
                            <IoIosArrowDropleft className="text-[40px] hover:text-orange text-white" />
                            <IoIosArrowDroprightCircle className="text-[40px] hover:text-orange text-white" />
                        </div>
                        <div className="mt-16 flex justify-around">
                            <EventUpdate image={EventOneImage} date="Dec 7,2024" title="Empowering Dreams in AWE" description="In our Academy for Women Entrepreneurship, we've been busy diving into the art of creating impactful business plans, fostering innovation, and igniting the flame of aspirations."  />
                            <EventUpdate image={EventTwoImage} date="Feb 23,2024" title="iRise Annual Retreat and Review Week" description="iRisehub team had empowering training session aimed to enhance our team’s skills and lay the groundwork for our strategies in this new year."  />
                            <EventUpdate image={EventThreeImage} date="Feb 10,2024" title="iRise Hub Newsletter — Your January Edition, 2024" description="Stay in the loop with all our latest updates! Check out our newsletter now. Read our January newsletter."  />
                        </div>
                        <div className="flex justify-center items-center gap-6 mt-16">
                            <div className="w-[8px] h-[8px] bg-orange-500/35  rounded-full "></div>
                            <div className="w-[8px] h-[8px] bg-orange-500/35  rounded-full "></div>
                            <div className="w-[8px] h-[8px] bg-orange-500/35  rounded-full "></div>
                            <div className="w-[8px] h-[8px] bg-orange-500/35  rounded-full "></div>
                            <div className="w-[8px] h-[8px] bg-orange  rounded-full "></div>
                            <div className="w-[8px] h-[8px] bg-orange-500/35  rounded-full "></div>
                            <div className="w-[8px] h-[8px] bg-orange-500/35  rounded-full "></div>
                            <div className="w-[8px] h-[8px] bg-orange-500/35  rounded-full "></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Valued Partners Section  */}
            <div className="w-full pt-15 bg-orange px-[20px] font-poppins pb-[70px] text-white">
                    <h1 className="text-center text-[22px] font-semibold"> Our Valued Partners </h1>
                    <p className="text-center text-[16px] w-[500px] mt-3 ml-[29%]"> Backed by a robust network of strategic partners, we pride ourselves in supporting young entrepreneurs and innovators to seed and scale their sustainable solutions for Somalia. </p>
                <div className="grid grid-cols-6 gap-4 mt-10">
                    <Partners width="100" height="60" image={UNFPA} />
                    <Partners width="110" height="110" image={WasaaradaWaxbarashada} />
                    <Partners width="90" height="90" image={USAEmpassy} />
                    <Partners width="120" height="80" image={Eurobe} />
                    <Partners width="120" height="70" image={UNICEF} />
                    <Partners width="115" height="80" image={UNIDO} />
                    <Partners width="150" height="80" image={Netherland} />
                    <Partners width="120" height="70" image={UNDP} />
                    <Partners width="100" height="100" image={Somali} />
                    <Partners width="120" height="75" image={USAID} />
                    <Partners width="" height="" image={Creative} />
                    <Partners width="120" height="65" image={FCA} />
                </div>
            </div>
            {/* FAQs Swction */}
            <div className="w-full bg-blue font-poppins pb-[30px] px-[20px] pt-[30px] text-white">
                <h1 className="text-[25px] text-center font-semibold "> Frequently Asked Questions </h1>
                <p className="text-center mt-3">Curious about something? Our FAQs have the answers you're looking for.</p>
                <div className="flex justify-center items-center  mt-5">
                    <FAQ />
                    <img className="" src={GirlWithQuestion} alt="" />
                </div>
            </div>
            {/* Testmonial Section */}
            <div className="mt-20 flex  pb-[50px] justify-around">
                <div className="w-[350px] mt-20 font-poppins">
                        <h1 className=" text-[30px] font-semibold text-orange "> #WhyiRise</h1>
                        <p> We are iRisehub, a community of disruptors and dreamers, fostering innovation, entrepreneurship, and technology to build a thriving future for Somalia.</p>
                </div>
                <div>
                    <div className="flex gap-5">
                        <Testmonial image={MohamedBashir} name="Mohamed Bashir" description="I am proud to be a part of the Dalbile bootcamp beneficiary It is indeed a remarkable and unique somali startups to create advanced and unprecedented technologies and services" />
                        <Testmonial image={Ayaan} name="Ayaan Mire" description=" Dalbile will open up substantial opportunities, with access to corporate partners, investors and government collaborations through iRise Hub" />
                    </div>
                    <div className="ml-[-100px] mt-4 gap-5 flex ">
                        <Testmonial image={Luul} name="Luul Haaji" description=" I can only say that women and girls in general must attend these kinds of bootcamps. It gives us a sense of owning and being part of the change  " />
                        <Testmonial image={Ahmed} name="Ahmed Abdulle" description="Dalbile provided us with the opportunity to exchange ideas and experiences with the entrepreneurs and access to potential clients and investors" />
                    </div>
                </div>
            </div>
            {/* Subscription  Section*/}
            <div className="bg-orange  w-full  py-5">
                <h1 className="text-center font-poppins leading-[30px] w-[350px] ml-[35%] text-white text-[20px]"> Join our community! <br /> Get the latest news and updates straight to your inbox. </h1>
                <div className="flex justify-center items-center mt-8 ">
                    <input type="text" placeholder="Your email address" className="w-[450px] h-[50px]   rounded-lg px-3 text-black placeholder:text-white outline-none bg-gray-200/30 border-white border-1 " />
                    <button className="bg-white w-[120px] h-[43px] rounded-[10px] ml-[-123px]  hover:bg-blue hover:text-white"> Subscribe</button>
                </div>
            </div>
            {/* Footer */}
            <div className="mt-[100px]">
                <Footer />
            </div>
        </div>
}
export default Home