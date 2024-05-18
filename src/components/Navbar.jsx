import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { MdHome } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="">
      <nav className=" h-[73px] flex items-center justify-between  ">
        {/* <div className=" flex flex-shrink-0 items-center  text-2xl bg-purple-600 px-2 rounded-sm">
          <Link to="/">K</Link>
        </div> */}
        <div className="text-xl w-full flex justify-end gap-4 lg:gap-7 items-center ">
          <MdHome className="hover:text-teal-200 hover:-translate-y-[0.100rem] ">
            Home
          </MdHome>
          <div className="hover:text-teal-200 hover:-translate-y-[0.100rem] ">
            About
          </div>
          <div className="hover:text-teal-200 hover:-translate-y-[0.100rem] ">
            Projects
          </div>
          <div className="hover:text-teal-200 hover:-translate-y-[0.100rem] ">
            Contact
          </div>
          <MdOutlineLightMode className=" cursor-pointer size-5" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
