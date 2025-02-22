import kuul from "../Images/kuul.png"
import Ai from "../Images/Ai.png"
function EventsHero (){
    return<div>
            <div  className="h-screen relative w-full bg-cover p-12 bg-center"
              style={{ backgroundImage: `url(${kuul})` }}>
            
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
                <div className="relative z-10 flex items-center justify-center h-full">
                {/* <h1 className="text-white text-3xl mt-7 font-bold">Foods</h1> */}
              </div>
        
               </div>
            <div  className="h-[500PX]  w-[1000px] ml-24 -mt-66 rounded-md relative  bg-cover p-12 bg-center"
              style={{ backgroundImage: `url(${Ai})` }}>
            
            <div className="w-[70px] z-20 h-[40px] absolute top-8 -right-5 bg-[#eb5022]"> <h1 className="text-[18px] items-center p-2 text-white font-bold">06 <span className="text-[12px] font-normal">FEB</span></h1> </div>
             
        
               </div>
               {/* <div className="relative flex justify-center">
                <img className="h-[500px]  absolute -top-64 flex  rounded-md" src={Ai} alt="" />
               
               </div> */}

    </div>
}
export default EventsHero