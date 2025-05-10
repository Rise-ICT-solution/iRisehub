import Header from "../../Components/Header";
import HeroSectioImage from "../../Images/Ecosystem-Images/MogadishuTechSummit/HerosectionMogadihuTechSummit.jpg"
import AinteSummit from "../../Images/Ecosystem-Images/MogadishuTechSummit/AinteMogadishuSummit.jpg"
import Section3Image from "../../Images/Ecosystem-Images/MogadishuTechSummit/Images2.jpg"
import SummitSectionFourOne from "../../Images/Ecosystem-Images/MogadishuTechSummit/Summit_Section4.jpg"
import SummitSectionFive from "../../Images/Ecosystem-Images/MogadishuTechSummit/Summit_Section5.jpg"
import Footer from "../../Components/Footer";
import { IoLogoYoutube } from "react-icons/io";
function MogadishuTechSummit() {
  return <div className="">
    {/* Herosection */}
    <Header /> 
    <div className="w-full h-[530px]  relative ">
        <img className="w-full h-full object-cover absolute bg-center" src={HeroSectioImage} alt="" />
        <div className="bg-black/50 absolute w-full h-full"></div>
    </div>
    {/* Section 2 */}
    <div className="w-[800px] mt-20  ml-20  h-[600px]">
      <h1 className="text-[30px] font-poppins font-semibold"> Mogadishu Tech Summit </h1>
      <img className="w-full mt-5 object-cover h-[480px] rounded-[20px]" src={AinteSummit} alt="" />
      <div className="w-full">
        <h1 className="text-[25px] font-poppins mt-2 font-semibold"> Missed Mogadishu Tech summit 2021? No Worries </h1>
        <p className="text-[22px] font-poppins leading-[33px] mt-1"> Join us with in this Upcomming December 2022 at Somalia's biggest Tech and Innovation Festival. </p>
        <button className="bg-orange px-10 mt-5 rounded-[10px] py-3 hover:underline text-white font-poppins "> Register now</button>
      </div>
    </div>
    {/* Section 3 */}
    <div className="w-full relative mt-70 h-[350px] ">
      <img className="w-full object-cover h-full" src={Section3Image} alt="" />
      <div className="w-full h-full bg-black/60 top-0 px-20 flex justify-center items-center absolute">
        <h1 className="text-white text-3xl text-center w-full leading-[45px]"> A socio-economic program that rides on the sole objective of investing Somali youth with skills and resources.</h1>
      </div>
    </div>
    {/* Section 4 */}
    <div className="mt-30">
      <h1 className="text-center text-3xl font-semibold"> Mogadishu Tech Summit </h1>
      <div className="mt-12 flex justify-center relative gap-10 items-center">
        <img className="w-[330px] relative h-[230px] object-cover rounded-[15px]" src={SummitSectionFourOne} alt="" />
        <IoLogoYoutube className="text-white -ml-190 absolute text-2xl w-10 h-10" />
        <img className="w-[330px] h-[230px] object-cover rounded-[15px]" src={SummitSectionFourOne} alt="" />
        <img className="w-[330px] h-[230px] object-cover rounded-[15px]" src={SummitSectionFourOne} alt="" />
        <IoLogoYoutube className="text-white ml-185 absolute text-2xl w-10 h-10" />
      </div>
    </div>
    {/* Section 5 */}
    <div className="mt-30 w- px-20">
      <h1 className="text-2xl font-semibold pb-3"> Mogadishu Tech Summit </h1>
      <p className="w-[850px]"> Mogadishu Tech Summit is the premier event for everything is cool, tech, innovation, entrepreneurship, investment, digital, networking and building partnership. It’s where you meet your future investor, co-founder and co-creator.</p>
      <p className="w-[850px] mt-8"> It’s the platform that links you to Somali tech entrepreneurs, disruptors and tech geeks. We bring together more than five thousand participants — from IT engineers at IBM, data scientists at Google to food-delivery startups in Mogadishu. It’s the place that you won’t miss.</p>
      <p className="w-[850px] mt-8"> Did you miss our latest Mogadishu Tech summit 2021? No worries, we got it all covered, we’ve got your recap right here! #MTS2021. see next year at #MTS2022.      </p>
    </div>
    {/* Section 6 */}
    <div className="w-full relative mt-10">
      <img className="w-[600px] rounded-[10px]  ml-20 h-[400px]" src={SummitSectionFive} alt="" />
      <IoLogoYoutube className="text-white absolute w-15 -mt-60 ml-85 h-15  h-10" />
    </div>

    {/* Section 7 */}
    <div className="mt-20 flex justify-between px-[200px]  gap-10">
      <div className="w-[450px] h-[250px] bg-orange text-white px-5 py-7">
        <h2 className="font-semibold"> Reach Us! </h2>
        <h1 className="mt-2 text-xl font-semibold"> Let's Talk</h1>
        <p className="mt-2"> Connect with us and find out how our entrepreneurial skill-building and youth engagement programs in Somalia can help you deliver impact.</p>
      </div>
      <div className="mt-10">
        <h1 className="text-orange text-lg font-semibold">Full Name </h1>
        <input className="w-[350px] outline-none text-white mt-1  placeholder:text-white rounded-[10px] px-[10px] h-[45px] bg-orange" type="text" placeholder="Full name" />
      </div>
    </div>
    <div className="mt-20">
      <Footer />
    </div>
    </div>
  
}
export default MogadishuTechSummit;