import React from "react";

import Project3Img from "../../assets/pokemon-api.png";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

const Project3 = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="h-full justify-center text-xl lg:text-3xl">
        {/* Header */}
        <div className="flex justify-center py-5 pb-8">POKEMON SEARCH</div>
        {/* Image and Description */}
        <div className="lg:flex justify-center w-full">
          <img
            className="rounded-lg h-[200px] lg:h-[350px] lg:w-[350px]"
            src={Project3Img}
            alt="cakes of paradise"
          />
          <div className="lg:px-8 py-8 text-sm lg:text-xl">
            <div>
              &nbsp;The Pokémon Search website is designed for enthusiasts who
              are passionate about Pokémon and want to explore detailed
              information about each of the 1,025 Pokémon.
            </div>
            <br />
            <div>
              &nbsp;This site provides a comprehensive database where users can
              search for and discover basic data on every Pokémon.
            </div>
            <br />
            <div>
              &nbsp;Whether you're a long-time fan or new to the Pokémon world,
              this website offers a fun and informative way to learn more about
              your favorite creatures. Future upgrades will make the site even
              better.
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <br />
          <br />
        </div>
        {/* Technologies Used */}
        <div className="flex pb-20 justify-center">
          <div className="">Technologies used:</div>
          <div className="">&nbsp;HTML, CSS, JavaScript</div>
        </div>
        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center text-2xl pb-20 lg:gap-5 w-full">
          <button className="flex justify-center my-3 py-1 px-8 dark:bg-gray-100 border dark:border-[2px] dark:border-black rounded-md  dark:hover:text-blue-700 hover:text-teal-700">
            <a
              href="https://github.com/Kavilash-R/pokemon"
              className="flex items-center"
            >
              Github Link &nbsp;
              <FiGithub />
            </a>
          </button>
          <button className="flex justify-center my-3 py-1 px-8 dark:bg-gray-100 border dark:border-[2px] dark:border-black rounded-md  dark:hover:text-blue-700 hover:text-teal-700">
            <a
              href="https://pokemon-uobv.onrender.com/"
              className="flex items-center"
            >
              Live Link &nbsp;
              <RiExternalLinkLine />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project3;
