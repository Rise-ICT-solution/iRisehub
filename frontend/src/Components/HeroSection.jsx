import iRisehubVideo from "../Video/iRisehubIntro.mp4"
import Header from "../Components/Header"


function HeroSection (){
  
    return <div>
        <div id="hero-section">
            {/* <Header /> */}
            {/* HeroSection Video */}
            <video
                className="absolute top-0 left-0 w-full sm:h-full object-cover"src={iRisehubVideo} autoPlay loop muted playsInline>
            </video>
            
        </div>
    </div>
}
export default HeroSection