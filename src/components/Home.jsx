import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";

const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-[140px] mt-[80px]">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className=" font-sans pb-10 lg:pb-15 text-5xl font-thin tracking-wider lg:mt-16 lg:text-7xl">
              KAVILASH R
            </h1>
            <span className="text-xl lg:text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-wide text-transparent">
              {" "}
              Full Stack Developer
            </span>
            <p className="my-2  py-6 font-light tracking-wide">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex  justify-center ">
            <img src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
