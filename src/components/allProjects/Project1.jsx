import React from "react";

import Imagecop from "../../assets/cop-ss.png";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

const Project1 = () => {
  return (
    
    <div className="min-h-screen w-full overflow-hidden">
      <div className="h-full justify-center text-xl lg:text-3xl">
        {/* Header */}
        <div className="flex justify-center py-5 pb-8">CAKES OF PARADISE</div>
        {/* Image and Description */}
        <div className="lg:flex justify-center w-full">
          <img
            className="rounded-lg h-[200px] lg:h-[350px] lg:w-[350px]"
            src={Imagecop}
            alt="cakes of paradise"
          />
          <div className="lg:px-8 py-8 text-sm lg:text-xl">
            <div>
              &nbsp;"Cakes of Paradise" is a bakery located inside an apartment
              complex. The bakery faced challenges as popular food delivery
              platforms like Swiggy and Zomato weren't available for this nearby
              bakery.
            </div>
            <br />
            <div>
              &nbsp;I designed this application to fill the customers who wish
              to purchase bakery products online, providing them with a
              convenient way to buy bakery food items through the internet.
            </div>
            <br />
            <div>
              &nbsp;This webapp may help the 1300 people who live in the
              apartment complex where the bakery is located.
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
          <div className="">
            &nbsp;JavaScript, Tailwind CSS, React JS, Firebase
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center text-2xl pb-20 lg:gap-5 w-full">
          <button className="flex justify-center my-3 py-1 px-8 dark:bg-gray-100 border dark:border-[2px] dark:border-black rounded-md  dark:hover:text-blue-700 hover:text-teal-700">
            <a
              href="https://github.com/Kavilash-R/cakes-of-paradise"
              className="flex items-center"
            >
              Github Link &nbsp;
              <FiGithub />
            </a>
          </button>
          <button className="flex justify-center my-3 py-1 px-8 dark:bg-gray-100 border dark:border-[2px] dark:border-black rounded-md  dark:hover:text-blue-700 hover:text-teal-700">
            <a
              href="https://kavilash-r.github.io/cakes-of-paradise/"
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

export default Project1;
