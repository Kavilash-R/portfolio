import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import Image from "../assets/cop-ss.png";
import Project2 from "../assets/chat-app.png";
import Project3 from "../assets/pokemon-api.png";
import Project4 from "../assets/portfolio1.png";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-800  ">
      <div className="h-full w-full flex gap-5  my-14 lg:px-10  text-center flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="  h-[300px] w-full md:w-[40%] mx-5 my-10 rounded-md"
        >
          <img
            className="h-[80%] w-full rounded-md shadow-lg"
            src={Image}
            alt=" cakes of paradise "
          />
          <br />
          <div className="flex justify-between">
            <div className="flex justify-start ">CAKES OF PARADISE</div>
            <div className="flex items-end justify-end  gap-4">
              <a href="https://github.com/Kavilash-R/cakes-of-paradise">
                <FiGithub className=" dark:hover:text-blue-700 hover:text-teal-700 size-6" />
              </a>
              <a href="https://kavilash-r.github.io/cakes-of-paradise/">
                <RiExternalLinkLine className="dark:hover:text-blue-700 hover:text-teal-600 size-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="  h-[300px] w-[90%] md:w-[40%] mx-5  my-10 rounded-md"
        >
          <img
            className="h-[80%] w-full rounded-md shadow-lg"
            src={Project2}
            alt=" cakes of paradise "
          />
          <br />
          <div className="flex justify-between">
            <div className="flex justify-start ">CHATTING-APP</div>
            <div className="flex items-end justify-end  gap-4">
              <a href="https://github.com/Kavilash-R/chating">
                <FiGithub className="dark:hover:text-blue-700 hover:text-teal-700 size-6" />
              </a>
              <a href="https://chating-app-mern.onrender.com">
                <RiExternalLinkLine className=" dark:hover:text-blue-700 hover:text-teal-600 size-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="  h-[300px] w-[90%] md:w-[40%] mx-5 my-10 rounded-md"
        >
          <img
            className="h-[80%] w-full rounded-md shadow-lg"
            src={Project3}
            alt=" cakes of paradise "
          />
          <br />
          <div className="flex justify-between">
            <div className="flex justify-start ">POKEMON SEARCH</div>
            <div className="flex items-end justify-end  gap-4">
              <a href="https://github.com/Kavilash-R/pokemon">
                <FiGithub className="dark:hover:text-blue-700 hover:text-teal-700 size-6" />
              </a>
              <a href="https://pokemon-uobv.onrender.com/">
                <RiExternalLinkLine className="dark:hover:text-blue-700 hover:text-teal-600 size-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="  h-[300px] w-[90%] md:w-[40%] m-5 my-10 rounded-md"
        >
          <img
            className="h-[80%] w-full rounded-md shadow-lg"
            src={Project4}
            alt=" cakes of paradise "
          />
          <br />
          <div className="flex justify-between">
            <div className="flex justify-start ">MY PORTFOLIO</div>
            <div className="flex items-end justify-end  gap-4">
              <a href="https://github.com/Kavilash-R/portfolio">
                <FiGithub className="dark:hover:text-blue-700 hover:text-teal-700 size-6" />
              </a>
              <a href="https://kavilash-r.onrender.com/">
                <RiExternalLinkLine className="dark:hover:text-blue-700 hover:text-teal-600 size-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
