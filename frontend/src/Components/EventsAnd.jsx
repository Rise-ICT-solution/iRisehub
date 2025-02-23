import { FaArrowRightLong } from "react-icons/fa6";
import Event1Image from "../Images/Event1Image.png"
import kill from "../Images/kill.png"
import Footer from "./footer";
function EventsAnd (){
    return <div >
        <div className="px-28  pt-16">

        
        <div className="flex gap-7 justify-center">
            <div>
                <h1 className="text-5xl w-[400px] mt-12 font-bold">Events and Updates</h1>
                <p className="mt-7 text-[#3f4d58] text-[14px]">We have a range of bookable and flexible event space
                        available for hire. Creating a positive social impact is at the
                        core of Plus X Innovation and we're committed to delivering
                        purposeful events by pioneering businesses and the local
                        community.</p>
                <p className="mt-8 text-[#3f4d58] text-[14px]">Get in touch to find out more about holding your next event
                        at Plus X Innovation.</p>
                <button className="bg-[#4262ff] text-white flex  mt-3 items-center p-2 w-[130px] h-[30px]">Events <FaArrowRightLong className="ml-12" /></button>
            </div>
            <img className="w-[600px] h-[450px] rounded-tr-3xl rounded-bl-3xl" src={kill} alt="" />
        </div>
        <div className="mt-16 relative px-[250px] rounded-tr-3xl h-[350px] ml-52 pt-12 bg-[#eb5022]">
            <h1 className="text-5xl text-white font-bold">Innovation 
            Programmes</h1>
            <p className="text-white text-[10px] mt-4">We're here to help the bold and brave innovators in business. If you've
                    got the idea, we provide award winning expertise, an unrivalled
                    innovators network and hand held support to help you and your business
                    succeed. From investment expert clinics to accelerators for designing,
                    testing and developing your prototype, let's make your business thrive.</p>
                    <button className="bg-[#4262ff] w-[180px] h-[30px] mt-6 text-white text-[10px]">Browse innovation programmes</button>
                    <img className="absolute rounded-bl-3xl w-[400px] h-[300px] top-4 -left-52" src={Event1Image} alt="" />

        </div>

        </div>
        <div className="mt-32">

        <Footer/>
        </div>
    </div>
}

export default EventsAnd