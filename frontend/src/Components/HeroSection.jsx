import iRisehubVideo from "../Video/iRisehubIntro.mp4"
import Header from "../Components/Header"


function HeroSection (){
  
    return <div>
        <div className="">
            <Header />
            {/* HeroSection Video */}
            <div className="relative w-full h-[550px]">
                <video
                    className="absolute  left-0 w-full sm:h-full object-cover"src={iRisehubVideo} autoPlay loop muted playsInline>
                </video>
                <div className="absolute bottom-15 w-full overflow-hidden">
                    <div className="animate-scroll inline-flex gap-10">
                        {/* First set */}
                        <div className="flex gap-10 whitespace-nowrap">
                            <h1 className="font-semibold font-poppins text-white text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-white text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-white text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-4xl"> iRisehub </h1>
                        </div>
                        {/* Second set (exact duplicate) */}
                        <div className="flex gap-10 whitespace-nowrap">
                            <h1 className="font-semibold font-poppins text-white text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-white text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-white text-4xl"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-4xl"> iRisehub </h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
}
export default HeroSection