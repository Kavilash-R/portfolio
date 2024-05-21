import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="border-b border-neutral-900 pb-4 lg:mb-[140px] mt-[80px]"
    >
      <div className="flex flex-wrap">
        <div className="w-full  lg:w-[60%]">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" font-sans pb-10 lg:pb-15 text-5xl font-thin tracking-wider lg:mt-16 lg:text-7xl"
            >
              KAVILASH R
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-4xl lg:text-6xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-wide text-transparent"
            >
              {" "}
              Full Stack Developer
            </motion.span>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="my-2 lg:text-xl  py-14 font-light tracking-wide"
            >
              A zealous full stack developer, constantly seeking to delve into
              new technologies to craft cutting-edge and transformative web
              applications.
            </motion.p>
          </div>
        </div>
        {/* <div className="  hidden lg:block">
          <div className="flex w-1/2 flex-col justify-end ">
            <div>gi</div>
            <div>li</div>
          </div>
        </div> */}
        <div className="hidden lg:block w-full lg:w-[40%] lg:p-8">
          <div className="flex flex-col h-full  items-end justify-center gap-5">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <a href="https://github.com/Kavilash-R">
                <FiGithub className="size-7 cursor-pointer dark:hover:text-blue-700  hover:text-teal-700" />
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <a href="https://www.linkedin.com/in/kavilash-ravi-2b5020234/">
                <FaLinkedin className="size-7 cursor-pointer dark:hover:text-blue-700 hover:text-teal-700" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
