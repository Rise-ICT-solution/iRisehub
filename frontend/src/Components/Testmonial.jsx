import { MdFormatQuote } from "react-icons/md";

function Testmonial ({image, name, description}){
    return <div className="w-[320px] pt-7 px-[15px] bg-white relative h-[400px] flex mt-4  flex-col   gap-3 items-center rounded-lg shadow-md  ">
        <div className="w-[60px] flex items-center p-2 text-white h-[60px] rounded-full bg-orange">
            <MdFormatQuote className="text-5xl" />
        </div>
            <p className="text-[14px] w-[250px] text-[#606060] text-center mt-3">❝ {description} ❞ </p>
            <div className="flex gap-3 absolute bottom-4  items-center  ">
                <img className="w-[55px] h-[55px] rounded-full" src={image} alt="" />        
                <h1 className="font-semibold text-orange text-[20px]"> {name} </h1>
            </div>
    </div>
}
export default Testmonial