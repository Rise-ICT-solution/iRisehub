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
            </div>
            
        </div>
    </div>
}
export default HeroSection