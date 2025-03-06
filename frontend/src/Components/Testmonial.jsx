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
        Name: "Maria Omar",
        Description: "I can only say that women and girls in general must attend these kinds of bootcamps. It gives us a sense of owning and being part of the change."
    },
    {
        Image: "https://img.freepik.com/free-photo/happy-confident-female-professional_1262-21130.jpg?uid=R24839574&ga=GA1.1.338947751.1707332523&semt=ais_hybrid",
        title: "Manager",
        Name: "Ayaan Mire ",
        Description: "Dalbile will open up substantial opportunities, with access to corporate partners, investors and government collaborations through iRise Hub."
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
        <h1 className="text-3xl font-semibold font-poppins text-orange  text-center">#WhyiRise </h1>
        <div className="flex justify-between mt-8 items-center">
            <div className="w-[350px]  font-poppins">
                <h1 className="font-semibold mb-2 text-[20px] text-orange">{testmonials[0].Name}</h1>
                <p>{testmonials[0].Description}</p>
            </div>
            <div className="flex gap-5 ">
                {
                    testmonials.map((item, index) => (
                        <div key={index} onMouseEnter={() => HandleHoverImage(index)} className={` group ${index === 0 ? "w-[400px]" : "w-[180px]"}  relative h-[450px]`}>
                            <img className=" object-cover rounded-[10px] object-center absolute h-full w-full" src={item.Image} alt={item.Image} />
                            {/* <div className=" absolute ml-10 leading-6 flex-col  bottom-16 w-full">
                            </div> */}
                            <div className="absolute w-full h-[250px] bottom-0 bg-gradient-to-t from-black pt-40 pl-5 rounded-b-lg   to-transparent ">
                                <h1 className={`text-orange font-semibold ${index === 0 ? "" : "opacity-0"} font-poppins text-[20px]`}> {item.title} </h1>
                                <h1 className={`text-white font-poppins ${index === 0 ? "" : "-right-6 bottom-16 absolute transform rotate-270"} text-[20px]`}> {item.Name} </h1>
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