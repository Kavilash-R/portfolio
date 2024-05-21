import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { MdHome } from "react-icons/md";
import {
  Link as Linked,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nave, setNave] = useState(true);
  const handleNav = () => {
    setNave(!nave);
  };
  const [dark, setdark] = useState(true);
  const handleDark = () => {
    setdark(!dark);
  };

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="dark:bg-gray-200 lg:fixed z-10 w-full px-8 md:px-14  top-0  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
      <nav className=" h-14 lg:h-[68px] flex items-center justify-between   ">
        <div className="dark:bg-gray-300 flex flex-shrink-0 items-center  text-2xl hover:text-teal-200 bg-gray-700 px-2 rounded-sm">
          <Link to="/">K</Link>
        </div>
        <div className="text-xl w-full flex justify-end gap-4 lg:gap-7 items-center ">
          <div className="nav-item">
            <Linked
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="dark:hover:text-blue-700 hover:text-teal-200 hover:-translate-y-[0.100rem] hidden lg:block cursor-pointer"
            >
              Home
            </Linked>
          </div>

          <div className="nav-item">
            <Linked
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="dark:hover:text-blue-700 hover:text-teal-200 hover:-translate-y-[0.100rem] hidden lg:block cursor-pointer"
            >
              About
            </Linked>
          </div>

          <div className="nav-item">
            <Linked
              to="projects"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className=" scroll-smooth dark:hover:text-blue-700 hover:text-teal-200 hover:-translate-y-[0.100rem] hidden lg:block cursor-pointer"
            >
              Projects
            </Linked>
          </div>

          <div className="nav-item">
            <Linked
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className="hover:text-teal-200 dark:hover:text-blue-700 hover:-translate-y-[0.100rem] hidden lg:block cursor-pointer"
            >
              Contact
            </Linked>
          </div>

          {/* <MdOutlineLightMode className=" cursor-pointer size-5" /> */}
          <div onClick={toggleTheme} className="pt-2">
            <button onClick={handleDark} className="px-3">
              {!dark ? (
                <MdOutlineDarkMode size={20} />
              ) : (
                <MdOutlineLightMode size={20} />
              )}
            </button>
          </div>
          {/* <IoMenu className=" cursor-pointer size-6 block lg:hidden" /> */}
          <div onClick={handleNav} className=" cursor-pointer block lg:hidden ">
            {!nave ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              !nave
                ? "w-[40%]  h-full fixed left-0 top-0 dark:bg-white bg-gray-950 ease-in-out duration-500 z-10 lg:hidden"
                : "fixed left-[-100%] lg:hidden"
            }
          >
            <div className=" ">
              {" "}
              <Linked className=" flex justify-center  font-bold py-5 text-2xl underline">
                Portfolio
                <AiOutlineClose
                  className="flex ml-5 mt-2 cursor-pointer"
                  size={20}
                  onClick={handleNav}
                />
              </Linked>
            </div>

            <ul className="p-4 h-[80%] flex flex-col  justify-center items-center">
              <Linked
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="p-6 text-center cursor-pointer dark:border-b-white border-b border-black hover:underline">
                  Home
                </li>
              </Linked>
              <Linked
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="p-6 text-center cursor-pointer  dark:border-b-white  border-b  border-black hover:underline">
                  About
                </li>
              </Linked>
              <Linked
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="p-6 text-center cursor-pointer  dark:border-b-white  border-b  border-black hover:underline">
                  Projects
                </li>
              </Linked>

              <Linked
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="p-6 text-center cursor-pointer  dark:border-b-white  border-b  border-black hover:underline">
                  Contact
                </li>
              </Linked>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
