import iRisehubLogo from "../Images/iRisehubLogo.png"
// import { FaBarsStaggered } from "react-icons/fa6";
import iRisehubVideo from "../Video/iRisehubIntro.mp4"
import { MdOutlineClose } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareYoutube } from "react-icons/fa6";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";


function Header (){
    const menuRef = useRef()
    const [ IsMenuOpen, setIsMenuOpen] = useState(false)
    const [IsHeaderOpen, setIsHeaderOpen] = useState(false)
    const [logoSize, setLogoSize] = useState("large")
    // const [IsHeroSectionVisible, setIsHeroSectionVisible] = useState(true)
    const MenuOpen = () =>{
        setIsMenuOpen(true)
    }
    const MenuClose = () =>{
        setIsMenuOpen(false)
    }

    // const HeaderScrolled = () => {
    //     setIsHeaderOpen(true)
    // }

    // UseEffect gan wuxuu qaabilsan yahay marka lagu dhufto hero section screen meel waliba oo kamid  in uu menu bar close gareyo
    useEffect(() => {
        const HandleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)){
                MenuClose()
            }
        }
        document.addEventListener('mousedown', HandleClickOutside);
        return () => {
            document.removeEventListener('mousedown', HandleClickOutside);
        }
    })
    // useEffect gan wuxuu qaabil san yahay marka menu bar uu furan yahay inuusan scroll gareesmin 
    // menu bar ama opacity waxa ka dambeya yacni body ga website hadii  ama la scroll gareyana wax shaqo ma qabanayo
    useEffect(() => {
        if (IsMenuOpen){
            document.body.classList.add("overflow-hidden");
        }
        else{
            document.body.classList.remove("overflow-hidden");
        }
    },[IsMenuOpen]) 
    
    //useEffect gan wuxuu qaabil san yahay logo-da marka la jogo hero section inay wayn ahaato marka la scroll gareyo oo laga hero section inay yaraato logo-da
    useEffect(() => {
        const HandleScroll = () => {
            const scrollY = window.scrollY
            const HeroSectionHeight = document.getElementById('hero-section').offsetHeight;
            if (scrollY > HeroSectionHeight){
                setLogoSize("small")
                setIsHeroSectionVisible(false)
            }
            else {
                setLogoSize('large')
                setIsHeroSectionVisible(true)
            }
        }
        window.addEventListener('scroll', HandleScroll)
        return () => {
            window.removeEventListener('scroll', HandleScroll)
        }
    },[])
    return <div>
        <div id="hero-section">
            {/* Main Header  */}
            <div className={` fixed z-20 transition-all duration-500   w-full px-[80px]  h-[80px] ${ logoSize === "large" ?  " top-0" : "top-0 backdrop-blur-md bg-black/30"} ${IsHeaderOpen ? "translate-y-0 " : "-translate-y-full mt-[80px] pt-5"}`}>
                <div className={`flex justify-between  mt-[-50px] items-center  `}>
                    <Link to="/" ><img className={`w-[200px] ml-[-30px] h-[140px] transition-all duration-500"  "w-[100px] h-[180px]"} ml-[-30px] `} src={iRisehubLogo} alt="iRisehub Logo" /></Link>
                    <h1 style={{display: IsMenuOpen == true  ? "none" : ""}} onClick={MenuOpen} className="bg-orange px-[10px] py-[5px] text-white font-semibold hover:underline"> Menu </h1>
                </div>
                {/* The Huge irisehub Text  */}
                <h1 className={`  transition-all duration-700 text-white  font-bold ${logoSize === "large" ? "text-[220px] mt-[130px] ml-[-15px] " : "text-[25px] opacity-0 ml-[500px] absolute  top-4 text-center "} `}> {'<irisehub>'} </h1>
            </div>
        </div>
        
        {/* Desktop Menu ---------------> FIxed-ka ka saar sm */}
        <div  className={`w-full left-0 h-full sm:fixed z-20 top-0  transition-transform duration-500 ease-in-out ${ IsMenuOpen ? "-translate-x-0" : "translate-x-full"} bg-black/80`}>
            <div  ref={menuRef} className={`w-[400px] right-0 sm:fixed h-screen z-30 bg-orange  transition-transform duration-500 ease-in-out ${IsMenuOpen ? "translate-y-0" : "-translate-x-full"}`} style={{right:0}}>
                <div className=" h-full overflow-y-auto">
                    {/* Close Button */}
                    <div style={{display: IsMenuOpen == true ? "block" : ""}} onClick={MenuClose} className=" w-[50px] hidden  h-[50px]  hover:text-white absolute  text-orange items-center right-10 top-11  justify-center pt-[7px] pl-[6px] hover:bg-transparent hover:border-2  hover:border-white bg-white">
                        <MdOutlineClose className=" text-4xl " />
                    </div>
                    <div onClick={MenuClose} className="absolute top-11 flex justify-center items-center sm:hidden  w-[50px] h-[50px] text-orange bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white">
                        <MdOutlineClose className="text-4xl" />
                    </div>
                    {/* Menu Items  */}
                    <div className="pt-[120px] font-poppins font-semibold ml-[30px] text-white text-[25px] leading-[80px]">
                        <div className=" border-b-1 pb-2 w-[250px] border-white group ">
                            <h1 className=" text-[25px] hover:text-[#0e0e0e] font-poppins"> About Us </h1>
                            <ul className=" hidden group-hover:block font-poppins font-semibold mt-[-10px] ml-[15px] text-white text-[18px] leading-[40px]">
                                <li className=" w-[250px] hover:underline border-white"> Our Team </li>
                                <li className=" w-[250px] hover:underline border-white"> Policies </li>
                                <li className=" w-[250px] hover:underline border-white"> Visual Identity </li>
                            </ul>
                        </div>

                        <div className=" border-b-1 pb-2 w-[250px] border-white group ">
                            <h1 className=" text-[25px] hover:text-[#0e0e0e] font-poppins"> Ecosystem </h1>
                            <ul className=" hidden group-hover:block font-poppins font-semibold mt-[-10px] ml-[15px] text-white text-[18px] leading-[40px]">
                                <li className=" w-[250px] hover:underline border-white"> Rise Academy </li>
                                <li className=" w-[250px] hover:underline border-white"> Rise Solution </li>
                                <li className=" w-[250px] hover:underline border-white"> Minbar </li>
                                <li className=" w-[250px] hover:underline border-white"> Kobciye </li>
                                <li className=" w-[250px] hover:underline border-white"> Mogadishu Tech Summit </li>
                                <li className=" w-[250px] hover:underline border-white"> TVET </li>
                                <li className=" w-[250px] hover:underline border-white"> IFFS </li>
                            </ul>
                        </div>

                        <h1 className="border-b-1 w-[250px] hover:text-[#0e0e0e] border-white"> Areas We Focus </h1>

                        <div className=" border-b-1 pb-2 w-[250px] border-white group ">
                            <h1 className=" text-[25px] hover:text-[#0e0e0e] font-poppins"> Community </h1>
                            <ul className=" hidden group-hover:block font-poppins font-semibold mt-[-10px] ml-[15px] text-white text-[18px] leading-[40px]">
                                <Link to="/events" ><li className=" w-[250px] hover:underline border-white"> Events </li></Link>
                                <Link to="/news" ><li className=" w-[250px] hover:underline border-white"> News </li></Link>
                                <Link to="/newsletter" ><li className=" w-[250px] hover:underline border-white"> Newsletter </li></Link>
                            </ul>
                        </div>
                        <h1 className=" w-[250px] hover:text-[#0e0e0e] border-white"> Startups </h1>
                    
                    </div>
            <div className="w-full   bg-[#c43e19] pb-[30px] pt-[20px] pl-[30px]">
                <div className="flex gap-[50px]  ">
                <ul className="font-poppins text-white text-[14px] leading-[30px]">
                    <li className="hover:underline"> What We Do </li>
                    <li className="hover:underline"> Who We Are </li>
                    <li className="hover:underline"> Events </li>
                    <li className="hover:underline"> News </li>
                </ul>
                <ul className="font-poppins text-white text-[14px] leading-[30px]">
                    <li className="hover:underline "> Terms of Service </li>
                    <li className="hover:underline "> Privacy Policy  </li>
                    <li className="hover:underline "> Cookie Settings </li>
                    <li className="hover:underline "> Contact Us </li>
                </ul>
                </div>
                    {/* Social Media Platforms icon */}
                    <div className="flex gap-[10px] mt-7 ml-[-8px]">
                        <FaSquareFacebook className="w-[40px] h-[25px] hover:text-[#0e0e0e] text-white"/>
                        <BsTwitterX className="w-[40px] h-[25px] hover:text-[#0e0e0e] text-white"/>
                        <IoLogoLinkedin className="w-[40px] h-[25px] hover:text-[#0e0e0e] text-white"/>
                        <FaSquareYoutube className="w-[40px] h-[25px] hover:text-[#0e0e0e] text-white"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
}
export default Header