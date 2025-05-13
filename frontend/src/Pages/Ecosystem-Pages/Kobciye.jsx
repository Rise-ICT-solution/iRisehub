import HeroSection from "../../Components/HeroSection";
import Footer from "../../Components/footer";
function Kobciye() {
  return (
    <div>
      <HeroSection />
      <div className="bg-white px-18 text-gray-800">
      {/* Heading */}
      <div className="text-green-700 text-xl font-bold pt-6">Kobciye</div>

      {/* Video Section */}
      <div className=" mt-4">
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Mec7GgP7rKQ?si=pzl801o3nq7KTut0"
            title="Kobciye Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="text-lg md:text-xl font-bold mt-4">
          We <span className="text-green-700">Empower </span> Entrepreneurs with Knowledge and Investment
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-700">
          We designed and managed a full-fledged incubation and accelerator program for early-stage
          startups, micro-enterprise, SMSs, and corporates to offer business development services
          and support enterprises to become investment-ready.
        </p>

        <div
  className="bg-cover bg-center mt-3 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[200px] xl:h-[500px] w-full"
  style={{
    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(103, 255, 115, 0.99)), url("https://images.pexels.com/photos/29634785/pexels-photo-29634785/free-photo-of-joyful-portrait-of-three-african-women-in-hijabs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
  }}
>
  {/* Waxaad ku dari kartaa qoraal ama button halkan dhexdiisa */}
</div>



        <div>
          <h1 className="text-green-700 mt-2  text-4xl font-bold text-center">Kobciye program</h1>
          <p className="mt-4">We created a system and methodology that enables us to assess their business' current situation through monitoring and evaluation mechanisms. It is a cohort-based program for existing startups and SMEs in Somalia. We have two cohorts of 10 startups each to join the program for a 3-month long investment and access network for life.
          We created a system and methodology that enables us to assess their business' current situation through monitoring and evaluation mechanisms. It is a cohort-based program for existing startups and SMEs in Somalia. We have two cohorts of 10 startups each to join the program for a 3-month long investment and access network for life.
          We created a system and methodology that enables us to assess their business' current situation through monitoring and evaluation mechanisms. It is a cohort-based program for existing startups and SMEs in Somalia. We have two cohorts of 10 startups each to join the program for a 3-month long investment and access network for life.
          </p>
        </div>
        <div className="mt-12">
          <p className="text-2xl">We <span className="text-green-700 font-bold">Empower </span>Entrepreneurs with Knowledge and Investment</p>
        </div>

        <div>
        <div className="w-full mt-4 h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Mec7GgP7rKQ?si=pzl801o3nq7KTut0"
            title="Kobciye Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row text-white mt-10 pb-10 px-4">
  {/* Left Section */}
  <div className="bg-[#5a883c] md:w-[600px] w-full px-6 py-10 mt-3 bg-center">
    <h1 className="text-2xl font-bold">Reach Us!</h1>
    <h1 className="text-3xl mt-2 font-bold">Let's Talk</h1>
    <p className="mt-3">
      Connect with us and find out how our entrepreneurial skill-building and youth
      engagement programs in Somalia can help you deliver impact.
    </p>
  </div>

  {/* Right Section */}
  <div className="mt-4 md:ml-4 mt-3 w-full md:w-auto">
    <label htmlFor="fullName" className="block text-2xl font-semibold text-[#5a883c] mb-3">
      Full Name
    </label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      placeholder="Full Name"
      className="w-full px-5 py-2 bg-[#5a883c] text-white text-lg rounded-md placeholder-white"
    />
  </div>
</div>

        </div>

      </div>

      
    </div>
      <div className="mt-4">

      <Footer />
      </div>
    </div>
  );
}
export default Kobciye;