import { Button, Typography } from "@material-tailwind/react";
import { HiArrowNarrowRight } from "react-icons/hi";
import footerImg from "../../assets/Images/Image2.png";

import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#FFAE00] py-8 ">
      <div className="max-w-screen-xl lg:mx-auto mx-2">
        <div className="flex justify-center ">
          <div className="flex flex-col items-center w-full">
            <div className="relative w-full lg:mr-20 md:w-3/5 py-10 ">
              <input
                placeholder="Enter Your Email"
                className="text-black text-sm py-2.5 p-2 rounded-xl pr-10 w-full"
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
            <div className="flex flex-col-reverse md:flex-row  w-full text-center md:text-left md:justify-around items-center">
              <div className="py-10 lg:pt-16 ">
                <Typography
                  as="a"
                  href="#"
                  variant="h6"
                  className="mr-4 ml-2 font-Baloo text-2xl font-extrabold cursor-pointer py-1.5"
                >
                  pti<span className="text-red-500">.</span>
                </Typography>
                <Typography
                  variant="p"
                  className="mr-4 ml-2 font-bold cursor-pointer py-1.5"
                >
                  Copyright © Tripp.All right Reserved
                </Typography>
              </div>
              <div className="flex gap-4 pt-10 lg:pt-16">
              <figure className="relative object-cover object-center !rounded-full w-11 h-11 flex items-center justify-center  bg-[#ff5600] md:bg-gray-300">
            <FaGoogle className="text-xl text-white md:text-[#ff5600]" />
          </figure>
              <figure className="relative object-cover object-center !rounded-full w-11 h-11 flex items-center justify-center bg-[#ff5600] md:bg-gray-300">
            <FaTwitter className="text-xl text-white md:text-[#ff5600]" />
          </figure>
              <figure className="relative object-cover object-center !rounded-full w-11 h-11 flex items-center justify-center bg-[#ff5600] md:bg-gray-300">
            <FaInstagram className="text-xl text-white md:text-[#ff5600]" />
          </figure>
              </div>
            </div>
          </div>
          <div className="w-2/6 lg:w-2/6 hidden  md:block mb-4 ">
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
