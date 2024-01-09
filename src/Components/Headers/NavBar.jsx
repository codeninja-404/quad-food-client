import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-auto bg-transparent border-none shadow-none  max-w-screen-xl px-4 py-3">
      <div className="flex text-black items-center justify-between gap-y-4 ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          pti.
        </Typography>

        <div className=" flex w-full gap-2 ">
          <div className="flex justify-center gap-3 w-full ">
            <div className="relative w-7/12 ">
              <input
                placeholder="Search AudioBook..."
                className="text-black p-2 rounded pl-10 w-full"
                type="text"
              />
              <IconButton
                size="sm"
                className="!absolute bg-transparent shadow-none left-1 top-1 rounded text-[#ff6500]  "
              >
                <IoSearchSharp className="text-xl" />
              </IconButton>
            </div>
            <div>
              <div className="relative inline-block text-left">
                <Button
                  onClick={toggleDropdown}
                  className="flex justify-between gap-7 items-center p-3 rounded-md bg-white font-bold  text-black   active:bg-gray-50 shadow-none w-30 md:w-40"
                >
                  Menu
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={` text-[#ff5600] h-3 w-3 transition-transform  ${
                      isOpen ? "-rotate-180" : ""
                    }`}
                  />
                </Button>

                {isOpen && (
                  <div className="relative w-40 z-10 mt-2  shadow-lg">
                    {/* Dropdown content goes here */}
                    <ul className="!absolute left-1 py-4 bg-white border rounded-md">
                      <li className="px-2 py-1 text-sm text-gray-700 hover:bg-[#D5D5D5] hover:text-[#ff6500]">
                        <NavLink className="p-2  ">Home</NavLink>
                      </li>
                      <li className="px-2 py-1 text-sm text-gray-700 hover:bg-[#D5D5D5] hover:text-[#ff6500]">
                        <NavLink className="p-2  ">Details</NavLink>
                      </li>
                      <li className="px-2 py-1 text-sm text-gray-700 hover:bg-[#D5D5D5] hover:text-[#ff6500]">
                        <NavLink className="p-2  ">Category</NavLink>
                      </li>
                      <li className="px-2 py-1 text-sm text-gray-700 hover:bg-[#D5D5D5] hover:text-[#ff6500]">
                        <NavLink className="p-2  ">My Favorites</NavLink>
                      </li>
                      <li className="px-2 py-1 text-sm text-gray-700 hover:bg-[#D5D5D5] hover:text-[#ff6500]">
                        <NavLink className="p-2  ">Profile</NavLink>
                      </li>
                      <li className="px-2 py-1 text-sm text-gray-700 hover:bg-[#D5D5D5] hover:text-[#ff6500]">
                        <NavLink className="p-2  ">Log in/Sign up</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block  w-full gap-2 md:w-max">
          <figure className="relative object-cover object-center !rounded-full w-12 h-12 flex items-center justify-center bg-[#ff5600]">
            <LuUser className="text-xl text-white" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
