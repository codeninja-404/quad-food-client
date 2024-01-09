import bannerImg from "../../assets/Images/Image1.png";
const Banner = () => {
  return (
    <div className="mx-auto max-w-screen-xl ">
        <div className="flex mx-2 my-16 md:my-24  flex-col lg:flex-row items-center justify-between px-4  bg-none lg:bg-[#FFAE00] rounded-3xl">
      
      <div className="lg:w-1/2 px-4 lg:text-white md:pl-14 text-center lg:text-left">
        <h1 className="text-xl lg:text-4xl font-bold mb-4">Deliver Food To Your Door Step |</h1>
        <p className="text-sm md:text-lg ">
         Authentic Food|, Quick Service, Fast Delivery
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col mb-4 ite lg:mb-0  relative">
        <img className="w-full z-20 h-auto" src={bannerImg} alt="Banner Photo" />
        <div className="h-32 rounded-3xl md:h-52 lg:hidden w-full lg:mb-0 bg-[#EC7C53]  absolute bottom-0  z-10">

        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
