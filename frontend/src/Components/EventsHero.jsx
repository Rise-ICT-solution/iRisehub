import kuul from "../Images/kuul.png"
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
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
                <h1 className="text-5xl font-bold">Community Event</h1>
                <div className="flex absolute bottom-12 right-5 gap-3">
                <RiArrowLeftSLine className=" bg-[#a14b39]  text-white text-3xl" />
                <RiArrowRightSLine className="   bg-[#e85024] text-white text-3xl" />
                </div>
            
            <div className="w-[70px] z-20 h-[40px] absolute top-8 -right-5 bg-[#eb5022]"> <h1 className="text-[18px] items-center p-2 text-white font-bold">06 <span className="text-[12px] font-normal">FEB</span></h1> </div>
             
        
               </div>
         <div className="bg-[#eb5022] pl-10 pt-4 h-[60px] mt-16 ">
          <button className="w-[150px] h-[30px] bg-white mt-1 ml-14 rounded-md ">All Events</button>
          </div>     

    </div>
}
export default EventsHero