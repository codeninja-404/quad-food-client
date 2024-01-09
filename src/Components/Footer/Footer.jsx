import { Button } from '@material-tailwind/react';
import { HiArrowNarrowRight } from "react-icons/hi";
const Footer = () => {
    return (
        <footer className='bg-[#FFAE00] '>
            <div className='max-w-screen-xl mx-auto'>
            <div className="relative w-7/12  ">
              <input
                placeholder="Search AudioBook..."
                className="text-black p-2 rounded-xl pr-10 w-full"
                type="text"
              />
              <Button
                size="sm"
                className="!absolute normal-case rounded-xl bg-[#FF7400] shadow-none right-1 top-1 text-[#ffffff]  "
              >Subscribe
                <HiArrowNarrowRight className="text-xl" />
              </Button>
            </div>
            </div>
        </footer>
    );
};

export default Footer;