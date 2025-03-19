function OurCommunity (){
    const OuterImages = [
        "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-146189.jpg?t=st=1741256869~exp=1741260469~hmac=73930edbd18e7bca421910a58ab01214f7d1b75849fbe2afab9e82f9420d57d4&w=1380",
        "https://img.freepik.com/free-photo/man-wearing-round-eyeglasses-casual-t-shirt_273609-19641.jpg?t=st=1741256912~exp=1741260512~hmac=1727b43ab60282199c315a1dc97fcda74b69a2aeb802e99d1b4e2937db1d6188&w=1800",
        "https://img.freepik.com/free-photo/portrait-serious-man_23-2148779998.jpg?t=st=1741257327~exp=1741260927~hmac=a9f22c5213e0c1edd7f6867236db83352287d3b6d3a62486a58fa1dcaa5a5b5f&w=740",
        "https://img.freepik.com/free-photo/black-man-posing_23-2148171684.jpg?t=st=1741257366~exp=1741260966~hmac=c86b5303f736dfa9355552834c2d6a759d4f98988afd0b12424d18abd27d7375&w=740",
        "https://img.freepik.com/free-photo/portrait-smiley-male_23-2148467292.jpg?t=st=1741257402~exp=1741261002~hmac=a5f4c7e0a166d794713ec0f5246abdd25a8c1828ec4c08b4218155dca13c850e&w=740",
        "https://img.freepik.com/free-photo/african-american-man-white-t-shirt_273609-14755.jpg?t=st=1741257442~exp=1741261042~hmac=cf6431dc45319d1189696a1eeb910d8ebf6d2badfe047639fca0c7006ca107be&w=1800",
        "https://img.freepik.com/free-photo/close-up-skin-pores-face-care-routine_23-2149383448.jpg?t=st=1741257917~exp=1741261517~hmac=e5078535cd6577fed478e5fb79beafe92f4a0cde2159bc5cc359bd293b17ec91&w=740"
    ]
    return <div className="w-full mt-39 bg-orange/10   p-10 flex justify-around ">
        <div className="w-[250px] mt-35 ">
            <h1 className="text-4xl font-semibold font-poppins text-orange border-b-3 pb-6 text-center border-b-orange"> Join iRisehub Community</h1>
        </div>
        <div className="flex items-center flex-col">
            {/* Outer most circling images  */}
            <div className="relative h-[350px] w-[350px] flex justify-center items-center animate-spin-slow ">
                {
                    Array.from({ length: 15}).map((_, index) => (
                        <img key={index}  
                        className={` absolute w-[50px] h-[50px] object-cover rounded-full`} 
                        style={{
                            transform:  `rotate(${(360/15) * index}deg) translate(150px) rotate(-${(360/15) * index}deg)`,
                            transformOrigin: `center`
                        }}  
                        // src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?t=st=1741089768~exp=1741093368~hmac=b0b14a88c813c09e92b6a9e733ddfffd57e4cf056e1bc20f985fa96825ef7b3a&w=1800" alt="" 
                        src={OuterImages[index % OuterImages.length]} alt=""
                        />
                    ))
                }
            </div>
            <div className="absolute mt-[100px] h-[150px] w-[150px] flex justify-center items-center  ">
                {
                    Array.from({ length: 7}).map((_, index) => (
                        <img key={index}  
                        className={` absolute w-[50px] h-[50px] object-cover rounded-full`} 
                        style={{
                            transform:  `rotate(${(360/7) * index}deg) translate(90px) rotate(-${(360/7) * index}deg)`,
                            transformOrigin: `center`
                        }}
                        src={OuterImages[index % OuterImages.length]} alt="" />
                    ))
                }
            </div>
            <div className="absolute mt-[100px] h-[150px] w-[150px] flex justify-center items-center  ">
                {
                    Array.from({ length: 7}).map((_, index) => (
                        <img key={index}  
                        className={` absolute w-[50px] h-[50px] object-cover rounded-full`} 
                        style={{
                            transform:  `rotate(${(360/7) * index}deg) translate(90px) rotate(-${(360/7) * index}deg)`,
                            transformOrigin: `center`
                        }}
                        src={OuterImages[index % OuterImages.length]} alt="" />
                    ))
                }
            </div>
            <div className="absolute mt-[125px] -ml-[3px] h-[100px] w-[100px] flex justify-center items-center  ">
            
                {
                    Array.from({ length: 7}).map((_, index) => (
                        <img key={index}  
                        className={` absolute w-[30px] h-[30px] object-cover rounded-full`} 
                        style={{
                            transform:  `rotate(${(360/7) * index}deg) translate(40px) rotate(-${(360/7) * index}deg)`,
                            transformOrigin: `center`
                        }}
                        src={OuterImages[index % OuterImages.length]} alt="" />
                    ))
                }
            </div>
            <img className="w-[40px] mt-[155px] -ml-[2px] object-cover h-[40px] absolute rounded-full" src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?t=st=1741089768~exp=1741093368~hmac=b0b14a88c813c09e92b6a9e733ddfffd57e4cf056e1bc20f985fa96825ef7b3a&w=1800" alt="" />
            <div className="flex flex-col gap-3 mt-5 items-center ">
                <div className="bg-orange flex justify-center items-center w-[135px] h-[30px] rounded-[20px]">
                    <h1 className=" font-poppins font-semibold text-[11px] text-white">iRisehub Community</h1>
                </div>
                <div className="bg-orange   w-[140px] h-[30px] rounded-[20px]">
                    <input className="w-full px-2 font-poppins text-white text-[11px] text-center items-center outline-none " placeholder="Your email" type="text"  />
                </div>
                <div className="bg-orange flex justify-center items-center w-[70px] h-[30px] rounded-[20px]">
                    <h1 className="font-poppins font-semibold text-[11px] text-white">Join Us</h1>
                </div>
            </div>
        </div>
    </div>
}
export default OurCommunity