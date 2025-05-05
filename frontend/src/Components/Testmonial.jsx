import { useState } from "react"

const TestmonialData = [
    {
        Image: "https://img.freepik.com/free-photo/car-being-taking-care-workshop_23-2149580604.jpg?uid=R24839574&ga=GA1.1.338947751.1707332523&semt=ais_hybrid",
        title: "Software Engineer",
        Name: "Abukar Ibrahim",
        Description: "I am proud to be a part of the Dalbile bootcamp beneficiary It is indeed a remarkable and unique somali startups to create advanced and unprecedented technologies and services."
    },
    {
        Image: "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1740946881~exp=1740950481~hmac=2883ea9221f37dd7ac8d45eeffae8ec4aabe33ca892fa3b6794e87429c160487&w=740",
        title: "Student",
        Name: "Ahmed Omar",
        Description: "I can only say that women and girls in general must attend these kinds of bootcamps. It gives us a sense of owning and being part of the change."
    },
    {
        Image: "https://img.freepik.com/free-photo/happy-confident-female-professional_1262-21130.jpg?uid=R24839574&ga=GA1.1.338947751.1707332523&semt=ais_hybrid",
        title: "Manager",
        Name: "Ayaan Mire ",
        Description: "Dalbile will open up substantial opportunities, with access to corporate partners, investors and government collaborations through iRise Hub."
    },
    {
        Image: "https://img.freepik.com/free-photo/confident-entrepreneur-looking-camera-with-arms-folded-smiling_1098-18840.jpg?t=st=1742722415~exp=1742726015~hmac=fb14bc3aa3830be163923cc67f56b54d1eace725489646881b6e98d62e5814fd&w=740",
        title: "Entreprenuer",
        Name: "Mohamed Amin ",
        Description: "SomTech will unlock significant potential, providing access to strategic partnerships, investor networks, and government collaborations through iRise Hub."
    },
]
function Testmonial (){
    const [testmonials, setTestmonials] = useState(TestmonialData)
    const HandleHoverImage = (HoveredImage) => {
        const ReOrderImageHovered = [
            testmonials[HoveredImage],
           ...testmonials.filter((_,index) => index !== HoveredImage),
        ];
        setTestmonials(ReOrderImageHovered);
    }
    return <div className="mt-15 w-full px-[30px]">
        <div className="w-[160px] flex justify-center items-center mx-auto">
            <h1 className="text-3xl font-semibold font-poppins text-orange border-b-4 border-orange  text-center">#WhyiRise </h1>
        </div>
        <div className="sm:flex justify-between mt-8 items-center">
            <div className="w-[350px]  font-poppins">
                <h1 className="font-semibold mb-2 text-[20px] text-orange">{testmonials[0].Name}</h1>
                <p>{testmonials[0].Description}</p>
            </div>
            <div className="flex gap-2 sm:gap-5 sm:mt-0 mt-7 ">
                {
                    testmonials.map((item, index) => (
                        <div key={index} onMouseEnter={() => HandleHoverImage(index)} className={` group ${index === 0 ? " w-[200px] sm:w-[400px]" : " w-[80px] sm:w-[120px]"}  relative h-[220px] sm:h-[450px]`}>
                            <img className=" object-cover rounded-[10px] object-center absolute h-full w-full" src={item.Image} alt={item.Image} />
                            {/* <div className=" absolute ml-10 leading-6 flex-col  bottom-16 w-full">
                            </div> */}
                            <div className="absolute w-full sm:mt-0 mt-[100px] h-[200px] sm:h-[250px] bottom-0 bg-gradient-to-t from-black  rounded-b-lg   to-transparent ">
                                <div className="absolute w-full h-[400px] w-full sm:h-[300px] sm:pt-40 pt-35 pl-2 sm:pl-5">
                                    <h1 className={`text-orange font-semibold ${index === 0 ? "" : "opacity-0"} font-poppins text-[13px] sm:text-[20px]`}> {item.title} </h1>
                                    <h1 className={`text-white font-poppins ${index === 0 ? "" : "sm:right-[-30px] -right-3 sm:bottom-30 bottom-60 absolute transform rotate-270"} text-[18px] leading-5 sm:leading-9 sm:text-[20px]`}> {item.Name} </h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/* <div className="w-[180px]  relative h-[450px]">
                    <img className=" object-cover rounded-[10px] object-center absolute h-full w-full" src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1740946881~exp=1740950481~hmac=2883ea9221f37dd7ac8d45eeffae8ec4aabe33ca892fa3b6794e87429c160487&w=740" alt="" />
                    <h1 className="absolute bottom-16 -right-6 transform rotate-270 text-white font-poppins text-[20px]"> AbdiNair Ise </h1>
                </div>
                <div className="w-[180px]  relative h-[450px]">
                    <img className=" object-cover rounded-[10px] object-center absolute h-full w-full" src="https://img.freepik.com/free-photo/happy-confident-female-professional_1262-21130.jpg?uid=R24839574&ga=GA1.1.338947751.1707332523&semt=ais_hybrid" alt="" />
                    <h1 className="absolute bottom-16 -right-6 transform rotate-270 text-white font-poppins text-[20px]"> Maria Bakar </h1>
                </div> */}
            </div>
        </div>
    </div>
}
export default Testmonial