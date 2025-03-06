import iRiseLogoIcon from "../Images/Home-Pages-images/iRise-Logo Icon-Transparent.png"
import ImageOne from "../Images/Home-Pages-images/AboutImages/image1.png"
import ImageTwo from "../Images/Home-Pages-images/AboutImages/image2.png"
import ImageThree from "../Images/Home-Pages-images/AboutImages/image3.png"
import ImageFour from "../Images/Home-Pages-images/AboutImages/image4.png"
import ImageFive from "../Images/Home-Pages-images/AboutImages/image5.png"
import { useState } from "react"
function BriefAboutiRise (){
    const [ActiveSection, setActiveSection] = useState("Who we are")
    const Sections = {
       "Who we are":
            "iRisehub is a community of disruptors and dreamers, fostering innovation, entrepreneurship, and technology to build a thriving future for Somalia. We are a group of passionate individuals, experts, and creatives working together to create transformative solutions for the world's most challenging problems.",
        "What we do":
            "We are working on a range of initiatives that foster entrepreneurship, innovation, and collaboration to solve the world's toughest challenges, especially focusing on empowering the Somali community.",
        "How we do it":
            "Through technology, creative solutions, mentorship, and collaborative workspaces, we bring together like-minded individuals to create impactful projects that drive change.",
    }
    return <div className="w-full  mt-0 pt-20 pb-[50px]  relative overflow-hidden">
        {/* Unique Modern Tech Background */}
        <div className="absolute inset-0 -z-10">
            {/* Morphing Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E85024]/5 to-white"></div>
            
            {/* Neural Network Pattern */}
            <div className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 25px 25px, #E85024 2px, transparent 0),
                        linear-gradient(to right, #E85024 1px, transparent 1px),
                        linear-gradient(to bottom, #E85024 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px, 25px 25px, 25px 25px',
                }}
            ></div>

            {/* Futuristic Circles */}
            <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] border border-[#E85024]/10 rounded-full"
                style={{ transform: 'rotate(-15deg)' }}
            ></div>
            <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] border border-[#E85024]/15 rounded-full"
                style={{ transform: 'rotate(15deg)' }}
            ></div>
            <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] border border-[#E85024]/20 rounded-full"
                style={{ transform: 'rotate(-30deg)' }}
            ></div>

            {/* Dynamic Light Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#E85024]/10 via-[#E85024]/5 to-transparent rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#E85024]/15 via-[#E85024]/5 to-transparent rounded-full blur-[100px] animate-pulse"></div>

            {/* Tech Flow Lines */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            #E85024 10px,
                            #E85024 11px
                        )
                    `
                }}
            ></div>

            {/* Floating Elements */}
            <div className="absolute top-30 right-40 opacity-20">
                <div className="w-20 h-1 bg-[#E85024] rounded-full"></div>
                <div className="w-10 h-1 bg-[#E85024] rounded-full mt-3"></div>
                <div className="w-16 h-1 bg-[#E85024] rounded-full mt-3"></div>
            </div>

            {/* Abstract Tech Shapes */}
            <div className="absolute bottom-40 right-60 opacity-10">
                <div className="w-40 h-40 border-2 border-[#E85024]"
                    style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
                    }}
                ></div>
            </div>

            {/* Dot Matrix */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        radial-gradient(#E85024 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '-10px -10px'
                }}
            ></div>
        </div>

        <h1 className="  text-[30px] text-center  font-poppins font-semibold text-orange "> A brief about iRisehub</h1>
        <div className=" flex justify-around ">
            <div className="w-[400px] mt-30 transition-all duration-500 ease-in-out">
                <h1 className="  text-[30px] font-poppins font-semibold text-orange "> {ActiveSection} </h1>
                <p className="mt-1">
                    {Sections[ActiveSection]}
                </p>
            
            </div>
            <div className=" flex flex-col items-center relative">
                <img className="w-[450px] absolute " src={iRiseLogoIcon} alt="" />
                {/* crossing image in the */}
                <div className="relative   w-[450px] h-[450px]">
                    {
                        ActiveSection === "Who we are" && (
                            <div>
                                 <img style={{ animationDelay: "0s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[15deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in   "  src={ImageOne} alt="" /> 
                                 <img style={{ animationDelay: "0.2s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[45deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in "  src={ImageTwo} alt="" /> 
                                 <img style={{ animationDelay: "0.6s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[30deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in "  src={ImageFour} alt="" />
                                 <img style={{ animationDelay: "0.4s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[0deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in"  src={ImageThree} alt="" /> 
                            </div>
                        )
                    }
                    {
                        ActiveSection === "What we do" && (
                            <div>
                                 <img style={{ animationDelay: "0s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[30deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in"  src={ImageThree} alt="" /> 
                                 <img style={{ animationDelay: "0.2s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[45deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in "  src={ImageTwo} alt="" /> 
                                 <img style={{ animationDelay: "0.4s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[15deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in   "  src={ImageOne} alt="" /> 
                                 <img style={{ animationDelay: "0.6s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[00deg] rounded-md  transition-transform duration-500 ease-in-out opacity-0 animate-slide-in "  src={ImageFour} alt="" />
                            </div>
                        )
                    }
                    {
                        ActiveSection === "How we do it" && (
                            <div>
                                 <img style={{ animationDelay: "0s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[15deg] rounded-md   transition-transform duration-500 ease-in-out opacity-0 animate-slide-in  "  src={ImageOne} alt="" /> 
                                 <img style={{ animationDelay: "0.2s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[45deg] rounded-md   transition-transform duration-500 ease-in-out opacity-0 animate-slide-in"  src={ImageTwo} alt="" /> 
                                 <img style={{ animationDelay: "0.4s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[30deg] rounded-md   transition-transform duration-500 ease-in-out opacity-0 animate-slide-in"  src={ImageFour} alt="" />
                                 <img style={{ animationDelay: "0.6s" }} className="w-[200px] absolute top-40 left-30 transform rotate-[0deg] rounded-md transition-transform duration-500 ease-in-out opacity-0 animate-slide-in"   src={ImageThree} alt="" /> 
                            </div>
                        )
                    }
                    {/* <img className="w-[200px] absolute top-0 left-0 transform rotate-[20deg]   rounded-md   "  src={ImageOne} alt="" /> 
                    <img className="w-[200px] absolute top-0 left-0 transform rotate-[10deg]   rounded-md "  src={ImageTwo} alt="" /> 
                    <img className="w-[200px] absolute top-0 left-0 transform rotate-[30deg]   rounded-md "  src={ImageThree} alt="" /> 
                    <img className="w-[200px] absolute top-0 left-0 transform rotate-0   rounded-md "  src={ImageFour} alt="" /> 
                    <img className="w-[200px]  rounded-md "  src={ImageFive} alt="" />  */}
                </div>
                <div className="flex flex-col items-center gap-3 -mt-[45px]  z-10">
                    <div 
                        onMouseEnter={() => setActiveSection("Who we are")} 
                        className="group bg-[#E85024] hover:bg-orange-700 cursor-pointer w-[135px] h-[30px] text-center rounded-[20px] transform hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-lg hover:shadow-orange-400/50"
                    >
                        <h1 className="text-white group-hover:scale-105 transition-transform"> 
                            Who we are
                        </h1>
                    </div>

                    <div 
                        onMouseEnter={() => setActiveSection("What we do")} 
                        className="group bg-[#E85024] hover:bg-orange-700 cursor-pointer w-[140px] h-[30px] text-center rounded-[20px] transform hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-lg hover:shadow-orange-400/50"
                    >
                        <h1 className="text-white group-hover:scale-105 transition-transform">
                            What we do
                        </h1>
                    </div>

                    <div 
                        onMouseEnter={() => setActiveSection("How we do it")} 
                        className="group bg-[#E85024] hover:bg-orange-700 cursor-pointer w-[70px] h-[30px] text-center rounded-b-full  transform hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-lg hover:shadow-orange-400/50"
                    >
                        <h1 className="text-white group-hover:scale-105 transition-transform">
                            How
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default BriefAboutiRise