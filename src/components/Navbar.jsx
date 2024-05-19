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
    <div className="lg:fixed z-10 w-full px-8 md:px-14  top-0  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
      <nav className=" h-14 lg:h-[68px] flex items-center justify-between   ">
        <div className=" flex flex-shrink-0 items-center  text-2xl hover:text-teal-200 bg-gray-700 px-2 rounded-sm">
          <Link to="/">K</Link>
        </div>
        <div className="text-xl w-full flex justify-end gap-4 lg:gap-7 items-center ">
          <Link
            to="/"
            className="hover:text-teal-200 hover:-translate-y-[0.100rem] hidden lg:block cursor-pointer"
          >
            Home
          </Link>
          <div className="hover:text-teal-200 hover:-translate-y-[0.100rem] hidden lg:block cursor-pointer">
            About
          </div>
          <a
            id="proj-nav"
            href="#projects"
            className=" scroll-smooth hover:text-teal-200 hover:-translate-y-[0.100rem] hidden lg:block cursor-pointer"
          >
            Projects
          </a>
          <div className="hover:text-teal-200 hover:-translate-y-[0.100rem] hidden lg:block cursor-pointer">
            Contact
          </div>
          <MdOutlineLightMode className=" cursor-pointer size-5" />
          <IoMenu className=" cursor-pointer size-6 block lg:hidden" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
