import SummitBg from "../Images/Book Page/EventBookBg.jpg";
import safiir from "../Images/Home-Pages-images/safiir.png";

function BookNow() {
  return (
    <div className="relative w-full sm:h-[500px] h-[750px] rounded-lg">
      {/* Background image */}
      <img className="w-full h-full object-cover rounded-lg" src={SummitBg} alt="Event Background" />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-orange/70 sm:flex justify-around items-center">
        {/* Left text content */}
        <div className="text-white mt-10 font-poppins max-w-[450px] space-y-4 p-4">
          <h1 className="text-[32px] font-bold leading-tight">
            AMBASSADOR RICHARD H. RILEY
          </h1>
          <h2 className="text-[20px] font-semibold">
            <span className="font-bold text-orange-200">Topic:</span> Understanding Somalia-US Relations: The Way Forward
          </h2>
          <p className="text-[18px]">
            <span className="font-bold text-orange-200">Location:</span> Mogadishu, Somalia
          </p>
          <button className="bg-blue-600 w-[160px] h-[45px] text-white hover:bg-white hover:text-blue-600 font-semibold rounded-full transition duration-300 shadow-lg">
            Book Now
          </button>
        </div>

        {/* Right image section */}
        <div className="relative sm:w-[400px] w-[350px] sm:mt-0 mt-5 sm:h-[400px] sm:ml-0 ml-5 h-[350px] overflow-hidden rounded-lg shadow-lg">
          <img className="w-full h-full object-cover" src={safiir} alt="Ambassador Richard H. Riley" />
          <div className="absolute transform rotate-45 text-center flex items-center justify-center bg-blue-600 top-3 right-[-35px] w-[160px] h-[30px] shadow-md">
            <h1 className="text-white font-poppins  pl-5 text-[12px]">Dec 12-2025</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
