function Testmonial ({image, name, description}){
    return <div className="w-[320px] py-3 px-[15px] pt-3  gap-3 items-center rounded-r-lg shadow-md border-l-6 rounded-l-lg border-orange shadow-gray-400 ">
        <img className="w-[65px] h-[65px] rounded-full" src={image} alt="" />        
        <div>
            <p className="text-[14px] mt-3">❝ {description} ❞ </p>
            <h1 className="font-semibold mt-3 text-orange "> {name} </h1>
        </div>
    </div>
}
export default Testmonial