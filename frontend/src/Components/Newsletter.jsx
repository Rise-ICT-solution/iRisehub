import { FaArrowRightLong } from "react-icons/fa6";
import batuulo from "../Images/batuulo.png";

function Newsletter() {
  return (
    <div className="px-28">
      <h1 className="text-center py-6 text-2xl font-bold">
        iRise Hub Newsletter — Your January Edition, 2024
      </h1>

     <div className="w-[300px] rounded-tr-2xl rounded-bl-2xl relative border-[#eb5022] h-[300px] border">
                     <img className="absolute w-[260px]  -top-20" src={batuulo} alt="" />
                     <div className="px-4">
                     <h2 className="mt-20 bg-black text-white font-bold text-[9px] w-[110px] p-1">MEMBERS ONLY </h2>
                     <h1 className="mt-2 font-semibold ">AFTERNOON YOGA</h1>
                     <h4 className="text-[11px] font-bold">Febaruary 12,2025</h4>
                     <p className="text-[12px]">Brighton</p>
                     <p className="mt-3 text-[13px]">Join Charlie for an afternoon yoga session in the
                     Wellbeing Space for a midday flow!</p>
                     <button className="text-[#eb5022] flex gap-2 items-center text-[12px] absolute right-3 bottom-3">Find Out more <FaArrowRightLong /></button>
                     </div>
                     
                 </div>
                 <div className="grid grid-cols-3 gap-32 pt-16 mt-16">
                   <div className="w-[300px] rounded-tr-2xl rounded-bl-2xl relative border-[#eb5022] h-[300px] border">
                                  <img className="absolute w-[260px]  -top-20" src={batuulo} alt="" />
                                  <div className="px-4">
                                  <h2 className="mt-20 bg-black text-white font-bold text-[9px] w-[110px] p-1">MEMBERS ONLY </h2>
                                  <h1 className="mt-2 font-semibold ">AFTERNOON YOGA</h1>
                                  <h4 className="text-[11px] font-bold">Febaruary 12,2025</h4>
                                  <p className="text-[12px]">Brighton</p>
                                  <p className="mt-3 text-[13px]">Join Charlie for an afternoon yoga session in the
                                  Wellbeing Space for a midday flow!</p>
                                  <button className="text-[#eb5022] flex gap-2 items-center text-[12px] absolute right-3 bottom-3">Find Out more <FaArrowRightLong /></button>
                                  </div>
                                  
                              </div>

                 </div>
    </div>
  );
}

export default Newsletter;
