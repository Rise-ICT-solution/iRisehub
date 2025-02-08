import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function EventUpdate ({image, title, description, date}){
    return <div className="w-[300px] relative font-poppins pb-[30px] shadow-lg shadow-gray-400  bg-white">
                <img className="w-full h-[200px]" src={image} alt="" />
                <div className="h-[40px] flex items-center  gap-1 px-2 bg-orange absolute inset-0 w-[130px] ">
                    <FaRegCalendarAlt className="text-white text-[20px]" />
                    <h1 className="text-white text-[14px] "> {date} </h1>
                </div>
                <div className="px-[10px] pt-4">
                    <h1 className="text-[18px] font-semibold hover:text-orange leading-[25px]"> {title}</h1>
                    <p className="mt-3"> {description} </p>
                    <button className=" px-3  h-[40px] mt-4 hover:bg-transparent hover:text-black hover:border-orange rounded-[5px] hover:border-2 text-[16px] text-white flex items-center gap-2 bg-orange"> View more <FaArrowRight />                        </button>
                </div>

            </div>
}
export default EventUpdate