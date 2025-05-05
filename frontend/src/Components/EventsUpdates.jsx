import { useEffect, useState } from "react";
import ManStage from "../Images/Home-Pages-images/ManStage.jpg"
import { FaCirclePlay, FaChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";



const AllEventsData = [
    {
        PrimaryImage: ManStage,
        SecondaryImage: "https://img.freepik.com/free-photo/process-creating-stand-up-comedy_23-2151053483.jpg?t=st=1740835185~exp=1740838785~hmac=022b52df30150dce3fc106ecad618a898ccf118ff085aece23d19e4efc49e531&w=1800",
        EventVideo: ManStage,
        SpeakerOne: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        SpeakerTwo: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        SpeakerThree: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        TotalSpeakers: "4",
        title: "iRisehub's 1st Annual Workshop",
        date: "July 15, 2023",
        content: "Join us for an immersive workshop led by lorem experienced mentors to explore the world of innovation, creativity, and entrepreneurship."
    },
    {
        PrimaryImage: "https://img.freepik.com/free-photo/different-moments-theater-class_23-2151104268.jpg?t=st=1740912420~exp=1740916020~hmac=e772392fd03aef4d33b2c637359865f84d235dea923668541716a503f662b594&w=1800",
        SecondaryImage : "https://img.freepik.com/free-photo/different-moments-theater-class_23-2151104260.jpg?t=st=1740912457~exp=1740916057~hmac=41a95bfbd1e3b5f0bf535258ef1f40a391c072e1e49452941918fa0a1d5b8bf6&w=1800",
        EventVideo: "https://img.freepik.com/free-photo/different-moments-theater-class_23-2151104259.jpg?t=st=1740912510~exp=1740916110~hmac=aed3a2435a5b72942fcedbaf70cd777a3a1e768052dc56ea4b2578f657794c68&w=1800",
        SpeakerOne: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        SpeakerTwo: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        // SpeakerThree: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        TotalSpeakers: "2",
        title: "Happy Ramadan Day",
        date: "July 20, 2025",
        content: "Discover the beauty of the Holy Ramadan with a one-of-a-kind event."
    },
    {
        PrimaryImage: "https://img.freepik.com/free-photo/glowing-stage-light-illuminates-cheering-rock-fans-generated-by-ai_188544-37983.jpg?t=st=1740912705~exp=1740916305~hmac=b4c3733e3cc65996a47c1aa8754912979e52d0b89f53621f66fc518d6a877a5b&w=2000",
        SecondaryImage: "https://img.freepik.com/free-photo/different-moments-theater-class_23-2151104266.jpg?t=st=1740912775~exp=1740916375~hmac=d1187c4a0fefe41a2af97b667b261fc355c1e79fe37df9b580c3276a63f92323&w=1800",
        EventVideo: "https://img.freepik.com/free-photo/students-rehashing-theater-class_23-2150960327.jpg?t=st=1740912834~exp=1740916434~hmac=5e504686189d955106d2c36b73c3fe3b56c54ac053be4782892a51714f9ea499&w=1800",
        SpeakerOne: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        SpeakerTwo: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        SpeakerThree: "https://img.freepik.com/free-photo/african-rastafarian-singer-male-wearing-blue-shirt-beanie-emotionally-writing-song-recording-studio-isolated-blue-background_613910-2626.jpg?t=st=1740835720~exp=1740839320~hmac=b183687f786fb9af815ce296dc6496911b65ac8e74c0404a4fb29de834931aef&w=1800",
        TotalSpeakers: "4",
        title: "iRisehub's 1st Annual Workshop",
        date: "July 15, 2023",
        content: "Join us for an immersive workshop led by lorem experienced mentors to explore the world of innovation, creativity, and entrepreneurship."
    },
]

function EventUpdate() {
    const [CurrentEvent, setCurrentEvent] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState('right');
    const HandlePrevEvent = () => {
        setCurrentEvent((prev) => (prev - 1 + AllEventsData.length) % AllEventsData.length);
    }
    const HandleNextEvent = () => {
        setCurrentEvent((prev) => (prev + 1) % AllEventsData.length);
    }
    useEffect(() => {
        const Interval = setInterval(() => {
            handleSlide((prev) => (prev + 1) % AllEventsData.length, 'right');
        }, 5000);
        return () => clearInterval(Interval);
    }, []);

    const handleSlide = (newIndex, direction) => {
        setIsSliding(true);
        setSlideDirection(direction);
        setTimeout(() => {
            setCurrentEvent(newIndex);
            setIsSliding(false);
        }, 600);
    };

    const getSlideClass = () => {
        if (!isSliding) return 'translate-x-0';
        return slideDirection === 'right' 
            ? '-translate-x-full' 
            : 'translate-x-full';
    };

    return <div className="bg-orange/10 relative w-full sm:h-[550px] pt-20">
        <div className="sm:flex justify-center gap-20 overflow-hidden">
            <div className={`sm:w-[500px] sm:ml-0 ml-7 w-[200px] relative transition-all duration-600 ease-in-out ${getSlideClass()}`}>
                {/* Top left squared box */}
                <div className="w-[100px]  h-[100px] absolute sm:ml-[-20px] ml-[10px] mt-20 bg-transparent border-3 border-blue/70 rounded-lg"></div>
                {/*  right squared box */}
                <div className="w-[100px]  h-[100px] absolute sm:ml-[320px] ml-[260px] mt-[10px] sm:mt-30 bg-transparent border-3 border-blue/70 rounded-lg"></div>
                {/*  left grey rounded box */}
                <div className="w-[100px]  h-[150px] absolute  sm:ml-[-13px] ml-[20px] mt-30   bg-gray-200 rounded-lg"></div>
                {/* Main/primary Event Image */}
                <div className="sm:w-[380px] w-[300px] h-[300px] sm:ml-0 ml-11 sm:h-[380px] relative z-10">
                    <img className=" object-cover w-full h-full rounded-lg" src={AllEventsData[CurrentEvent].PrimaryImage} alt="" />
                </div>
                {/* Small image in the right side of the main image */}
                <div className="bg-orange s border-4 border-white top-50 rounded-lg z-10 sm:right-12 -right-45 mt-[-80px] sm:mt-[-30px] absolute w-[140px] shadow-lg shadow-gray-500 h-[140px]">
                    <img className="w-full h-full object-cover" src={AllEventsData[CurrentEvent].SecondaryImage} alt="" />
                </div>
                {/* Event Video */}
                <div className="bg-orange border-white top-50 sm:ml-[-50px] ml-[16px]  z-10 mt-[-10px] sm:mt-[30px] absolute w-[150px] shadow-lg h-[100px]">
                    <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/process-creating-stand-up-comedy_23-2151053483.jpg?t=st=1740835185~exp=1740838785~hmac=022b52df30150dce3fc106ecad618a898ccf118ff085aece23d19e4efc49e531&w=1800" alt="" />
                    <FaCirclePlay className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"     />
                </div>
            </div> 
            <div className="absolute   flex justify-between sm:px-22 px-10 gap-5 w-full top-6">
                <FaChevronLeft onClick={HandlePrevEvent} className="cursor-pointer text-[30px] text-orange hover:text-blue" />
                <FaChevronCircleRight onClick={HandleNextEvent} className="cursor-pointer text-[30px] text-orange hover:text-blue" />
            </div>
            <div className={`sm:w-[500px] sm:px-0 px-[20px] w-[355px] mt-16 font-poppins transition-all duration-600 ease-in-out ${getSlideClass()}`}>
                <h3 className=" font-medium">{AllEventsData[CurrentEvent].date}</h3>
                <h1 className="text-[25px] mt-1 font-semibold"> {AllEventsData[CurrentEvent].title} </h1>
                <p className="mt-1"> {AllEventsData[CurrentEvent].content}</p>
                <div className="w-[400px] flex items-center gap-2 mt-5 overflow-hidden">
                    <div className="flex">
                    <img className="w-[40px] h-[40px] border-white border-3  object-cover rounded-full " src={AllEventsData[CurrentEvent].SpeakerOne} alt="" />
                    <img className="w-[40px] h-[40px] border-white border-3  ml-[-15px] object-cover rounded-full " src={AllEventsData[CurrentEvent].SpeakerTwo} alt="" />
                    <img className="w-[40px] h-[40px] border-white border-3  ml-[-15px] object-cover rounded-full " src={AllEventsData[CurrentEvent].SpeakerThree} alt="" />
                        <div className="w-[40px] h-[40px] border-white border-3 bg-orange ml-[-15px] object-cover text-white text-md flex justify-center items-center  rounded-full "> {AllEventsData[CurrentEvent].TotalSpeakers}+</div>
                    </div>
                    <h1 className="text-sm font-medium"> Speakers </h1>
                </div>
            </div>
        </div>
        {/* All Sliding Events Dots */}
        <div className="flex gap-2 justify-center absolute bottom-8 sm:bottom-10 items-center w-full">
            {AllEventsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                        const direction = index > CurrentEvent ? 'right' : 'left';
                        handleSlide(index, direction);
                    }}
                    className={`w-[10px] h-[10px] rounded-full duration-300 ${
                        index === CurrentEvent 
                            ? 'bg-orange ' 
                            : 'bg-transparent border-2 border-orange hover:bg-orange/50'
                    }`}
                ></button>
            ))}
        </div>
        <div className="flex justify-center items-center gap-6 mt-13">
          
        </div>
        
    </div>
}
export default EventUpdate