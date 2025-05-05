import iRisehubVideo from "../Videos/iRisehubIntro.mp4"
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
                {/* <iframe
                    className="absolute left-0 w-full sm:h-full object-cover"
                    src="https://www.youtube.com/embed/Tymk-39Unh8?autoplay=1&loop=1&mute=1&playlist=Tymk-39Unh8"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe> */}
                {/* <div className="absolute bottom-15 w-full overflow-hidden">
                    <div className="animate-scroll inline-flex gap-10">
                        First set 
                        <div className="flex gap-10 whitespace-nowrap">
                            <h1 className="font-semibold font-poppins text-white text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-white text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-white text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-[25px]"> iRisehub </h1>
                        </div>
                        Second set (exact duplicate)
                        <div className="flex gap-10 whitespace-nowrap">
                            <h1 className="font-semibold font-poppins text-white text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-white text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-white text-[25px]"> iRisehub </h1>
                            <h1 className="font-semibold font-poppins text-orange text-[25px]"> iRisehub </h1>
                        </div>
                    </div>
                </div> */}
                
            </div>
            
        </div>
    </div>
}
export default HeroSection