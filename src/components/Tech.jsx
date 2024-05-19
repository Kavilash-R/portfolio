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

import htmlIcon from "../assets/HTML5-logo.png";
import cssIcon from "../assets/css-logo.svg";
import javascriptIcon from "../assets/JavaScript-logo.png";
import javaIcon from "../assets/p-java.webp";
import mySql from "../assets/mysql-logo.png";
import { animate, motion } from "framer-motion";

const Tech = () => {
  const iconvariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7 }}
        className=" my-20 text-center text-4xl"
      >
        Techs that I use{" "}
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <FaHtml5 className="text-7xl text-orange-500" /> */}
          <img className=" size-[70px]" src={htmlIcon} alt="logo" />
        </motion.div>
        <motion.div
          variants={iconvariants(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <FaCss3Alt className="text-7xl text-cyan-400" /> */}
          <img className=" size-[70px]" src={cssIcon} alt="logo" />
        </motion.div>
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <IoLogoJavascript className="text-7xl text-yellow-300" /> */}
          <img className=" size-[70px]" src={javascriptIcon} alt="logo" />
        </motion.div>
        <motion.div
          variants={iconvariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <FaJava className="text-7xl text-orange-400" /> */}
          <img className=" size-[70px]" src={javaIcon} alt="logo" />
        </motion.div>
        <motion.div
          variants={iconvariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconvariants(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconvariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconvariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <SiMongodb className="text-7xl text-green-500" /> */}
          <img className=" size-[70px]" src={mySql} alt="logo" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
