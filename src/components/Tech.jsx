import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

import htmlIcon from "../assets/html-logo.png";
import cssIcon from "../assets/css-logo.svg";
import javascriptIcon from "../assets/JavaScript-logo.png";
import javaIcon from "../assets/p-java.webp";
import mySql from "../assets/mysql-logo.png";

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          {/* <FaHtml5 className="text-7xl text-orange-500" /> */}
          <img className=" size-[70px]" src={htmlIcon} alt="logo" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          {/* <FaCss3Alt className="text-7xl text-cyan-400" /> */}
          <img className=" size-[70px]" src={cssIcon} alt="logo" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          {/* <IoLogoJavascript className="text-7xl text-yellow-300" /> */}
          <img className=" size-[70px]" src={javascriptIcon} alt="logo" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          {/* <FaJava className="text-7xl text-orange-400" /> */}
          <img className=" size-[70px]" src={javaIcon} alt="logo" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          {/* <SiMongodb className="text-7xl text-green-500" /> */}
          <img className=" size-[70px]" src={mySql} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
