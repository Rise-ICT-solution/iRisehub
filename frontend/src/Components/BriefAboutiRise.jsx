import iRiseLogoCover from "../Images/Home Pages images/iRiseCover.png"
import Presentation from "../Images/Home Pages images/Presentation.png"
import Ainte from "../Images/Home Pages images/Caynte.png"
import iRisehubTeam from "../Images/Home Pages images/Team.png"
import Marti from "../Images/Home Pages images/Marti.png"
function BriefAboutiRise (){
    return <div>
        <h1 className="text-center  text-[30px] font-poppins font-semibold text-orange "> A brief about iRisehub</h1>
        <div className="sm:flex w-full   justify-around mt-10 ">

            <div className="sm:w-[400px] w-[350px]   font-poppins mt-0 sm:mt-16">
                <h1 className="font-bold text-[30px] mb-1 "> Who We Are</h1>
                <p> We are the launching-pad for Somali's innovation, entrepreneurship and technological leap-frogging. We are community of pioneers and social-disputers to drive economic prosperity.</p>
                {/* <button className=" mt-5 rounded-lg  w-[120px] h-[40px] text-[14px] border-1 hover:border-none hover:bg-orange hover:text-white hover:font-normal border-orange text-orange font-medium "> View more </button> */}
                <h1 className="font-bold text-[30px] mb-1 mt-5"> What We Do</h1>
                <p> We nurture Somali's tech talents, entrepreneurs and innovators who are pioneering real-time solutions. Through our blended approach, we offer a unique design-thinking skills that unlocks every potentials into a reality. We welcome every dreamer.</p>
                {/* <button className=" mt-5 rounded-lg  w-[120px] h-[40px] text-[14px] border-1 hover:border-none hover:bg-orange hover:text-white hover:font-normal border-orange text-orange font-medium "> View more </button> */}
                <h1 className="font-bold text-[30px] mb-1 mt-5"> How We Do It</h1>
                <p> We work with every aspect of the community, irrespective of their economic and social condition. We take people-to-people approach and build a partnership. We then design a customized programs that would enable every startup to immediately unleash into the market.</p>
                <button className=" mt-5 rounded-lg  w-[120px] h-[40px] text-[14px] border-1 hover:border-none hover:bg-orange hover:text-white hover:font-normal border-orange text-orange font-medium "> View more </button>
            </div>

            {/* Brief Right */}
            <div className="mt-5 sm:mt-0 flex gap-2">
                {/* Brief Right Column 1 */}
                <div className="w-[300px]">
                    <div className="w-full  overflow-hidden h-[180px] bg-gray-400 rounded-lg">
                        <img className="w-full h-full  object-cover " src={iRiseLogoCover} alt="" />
                    </div>
                    <div className="w-full h-[330px]  overflow-hidden mt-3 bg-gray-400 rounded-lg">
                        <img className="w-full h-full  object-cover " src={Ainte} alt="" />
                    </div>
                </div>
                {/* Brief Right Column 2 */}
                <div className="w-[300px] ">
                    <div className="w-full overflow-hidden h-[250px] bg-gray-400 rounded-lg">
                        <img className="w-full h-full  object-cover " src={iRisehubTeam} alt="" />
                    </div>
                    <div className="w-full mt-3 overflow-hidden h-[180px]  bg-gray-400 rounded-lg">
                        <img className="w-full h-full object-cover" src={Presentation} alt="" />
                    </div>
                    <div className="w-full overflow-hidden  mt-3 h-[330px] bg-gray-400 rounded-lg">
                        <img className="w-full h-full  object-cover " src={Marti} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default BriefAboutiRise