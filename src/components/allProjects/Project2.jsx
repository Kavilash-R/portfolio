import React from "react";

import Imagecop from "../../assets/cop-ss.png";
import Project2Img from "../../assets/chat-app.png";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

const Project2 = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="h-full justify-center text-xl lg:text-3xl">
        {/* Header */}
        <div className="flex justify-center py-5 pb-8">CHATTING APP</div>
        {/* Image and Description */}
        <div className="lg:flex justify-center w-full">
          <img
            className="rounded-lg h-[200px] lg:h-[350px] lg:w-[350px]"
            src={Project2Img}
            alt="cakes of paradise"
          />
          <div className="lg:px-8 py-8 text-sm lg:text-xl">
            <div>
              &nbsp;"chating App" is a real-time chat application which is built
              using the MERN stack (MongoDB, Express.js, React, and Node.js).
              This web app allows registered users to communicate privately with
              each other.
            </div>
            <br />
            <div>
              &nbsp;To provide a seamless real-time chat experience, the app
              leverages the Socket.io package. Additionally, several other
              packages are used to enhance functionality and security, including
              bcrypt.js for password hashing and Mongoose for managing MongoDB
              data models.
            </div>
            <br />
            <div>
              &nbsp;This chat app offers a secure, efficient, and interactive
              platform for users to connect and communicate in real-time.
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
            &nbsp;JavaScript, Tailwind CSS, React JS, Node JS, Express JS
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center text-2xl pb-20 lg:gap-5 w-full">
          <button className="flex justify-center my-3 py-1 px-8 dark:bg-gray-100 border dark:border-[2px] dark:border-black rounded-md  dark:hover:text-blue-700 hover:text-teal-700">
            <a
              href="https://github.com/Kavilash-R/chating"
              className="flex items-center"
            >
              Github Link &nbsp;
              <FiGithub />
            </a>
          </button>
          <button className="flex justify-center my-3 py-1 px-8 dark:bg-gray-100 border dark:border-[2px] dark:border-black rounded-md  dark:hover:text-blue-700 hover:text-teal-700">
            <a
              href="https://chating-app-mern.onrender.com"
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

export default Project2;
