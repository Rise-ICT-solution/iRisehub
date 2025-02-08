function Impacts ({Icon, number, program}){
    return <div className="font-poppins text-white leading-[35px]  items-center flex flex-col text-center  ">
            <Icon className="text-[55px] text-center" />
            <h1 className="text-[30px] mt-3 font-semibold "> {number}</h1>
            <p className=" text-[16px]">{program}</p>
    </div>
}
export default Impacts