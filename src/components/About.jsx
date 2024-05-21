import React from "react";
import aboutImg from "../assets/bw image.avif";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h1 className=" my-20 text-center text-4xl">
        About
        <span className=" text-teal-500"> Me</span>
      </h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className=" rounded-2xl " src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 "
        >
          <div className=" flex justify-center  lg:justify-start">
            <p className="my-2 lg:text-xl lg:tracking-wider max-w-xl py-6">
              I am a passionate and dedicated full stack developer, driven by a
              desire to master the art of web development. Constantly exploring
              new tools and frameworks, I strive to build innovative and
              efficient web applications. Beyond my technical interests, I love
              playing video games, drawing, and watching anime, which inspire my
              creativity and problem-solving abilities. I am excited to embark
              on this professional journey and contribute to impactful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
