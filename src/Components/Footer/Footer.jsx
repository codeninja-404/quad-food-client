import { Button } from "@material-tailwind/react";
import { HiArrowNarrowRight } from "react-icons/hi";
import footerImg from "../../assets/Images/Image2.png";
const Footer = () => {
  return (
    <footer className="bg-[#FFAE00] py-8 ">
      <div className="max-w-screen-xl lg:mx-auto mx-2">
        <div className="flex justify-center ">
          <div className="relative w-full md:w-7/12 py-10 ">
            <input
              placeholder="Enter Your Email"
              className="text-black p-2 rounded-xl pr-10 w-full"
              type="text"
            />
            <Button
              size="sm"
              className="!absolute normal-case rounded-xl bg-transparent md:bg-[#FF7400] shadow-none right-1 top-11 text-[#FF7400] md:text-[#ffffff] flex justify-center items-center gap-2 px-8 py-1.5 "
            >
              Subscribe
              <HiArrowNarrowRight className="text-xl" />
            </Button>
          </div>
          <div className="lg:w-2/6 hidden  md:block mb-4 ">
            <img
              className="w-full  h-auto"
              src={footerImg}
              alt="Banner Photo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
