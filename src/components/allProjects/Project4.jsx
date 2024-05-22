import React from "react";
import Project4Img from "../../assets/portfolio1.png";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

const Project4 = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="h-full justify-center text-xl lg:text-3xl">
        {/* Header */}
        <div className="flex justify-center py-5 pb-8">PORTFOLIO</div>
        {/* Image and Description */}
        <div className="lg:flex justify-center w-full">
          <img
            className="rounded-lg h-[200px] lg:h-[350px] lg:w-[350px]"
            src={Project4Img}
            alt="Portfolio preview"
          />
          <div className="lg:px-8 py-8 text-sm lg:text-xl">
            <p>
              My portfolio website is designed to provide visitors with
              information about me and my projects. It serves as a platform for
              individuals to learn more about my skills, experiences, and
              accomplishments.
            </p>
            <br />
            <p>
              Through this website, visitors can explore the projects I have
              worked on, gaining insights into my work process and the
              technologies I have used.
            </p>
            <br />
            <p>
              Additionally, the website provides links for visitors to easily
              contact me, whether it be for collaboration, job opportunities, or
              simply to connect.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <br />
          <br />
        </div>
        {/* Technologies Used */}
        <div className="flex pb-20 justify-center">
          <span className="font-semibold">Technologies used:</span>
          <span>&nbsp;JavaScript, Tailwind CSS, React JS</span>
        </div>
        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center text-2xl pb-20 lg:gap-5 w-full">
          <button className="flex justify-center my-3 py-1 px-8 dark:bg-gray-100 border dark:border-[2px] dark:border-black rounded-md dark:hover:text-blue-700 hover:text-teal-700">
            <a
              href="https://github.com/Kavilash-R/portfolio"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Link &nbsp;
              <FiGithub />
            </a>
          </button>
          <button className="flex justify-center my-3 py-1 px-8 dark:bg-gray-100 border dark:border-[2px] dark:border-black rounded-md dark:hover:text-blue-700 hover:text-teal-700">
            <a
              href="https://kavilash-r.onrender.com/"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
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

export default Project4;
