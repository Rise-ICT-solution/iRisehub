function SampleEco(){
    return <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="w-[450px] relative h-[450px] bg-tranparent border-[1.5px] border-white rounded-full">
            <div className="w-[25px] absolute translate-x-[50%]  rotate(0deg) translate-y-[50%] h-[25px] rounded-full bg-white"/>
            <div className="w-[25px] absolute translate-x-[50%]  rotate(45deg) translate-y-[25%] h-[25px] rounded-full bg-white"/>
            <div className="w-[25px] absolute translate-x-[50%]   rotate(30deg) translate-y-[45%] h-[25px] rounded-full bg-white"/>
            <div className="w-[25px] absolute translate-x-[50%]  rotate(-80deg) translate-y-[65%] h-[25px] rounded-full bg-white"/>
            <div className="w-[25px] absolute translate-x-[50%]   rotate(270deg) translate-y-[75%] h-[25px] rounded-full bg-white"/>
        </div>
    </div>
}
export default SampleEco;