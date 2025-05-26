import React from "react";
import doneLogo from "../assets/image/verify.png";
import coverPhoto from "../assets/image/formal.png";
import { TypeAnimation } from "react-type-animation";
// import { FaGithub } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="w-full min-h-[75vh] bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 flex flex-col lg:flex-row items-center">
        {/* Left Column */}
        <div className="lg:w-1/2 w-full p-5">
          <div className="top">
            <h1 className="text-white/50 text-4xl mb-2 ">Hello!</h1>
            <h3 className="text-3xl font-semibold flex items-center space-x-2">
              <span>I'm Roman Oze</span>
              <img src={doneLogo} alt="Verified" className="w-10 h-10" />
            </h3>
            <h2 className="text-2xl mt-2 text-green-400">
              <TypeAnimation
                sequence={["Web Developer", 2000, "Laravel Developer", 2000,"Full Stack Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-green-400 font-bold mt-3"
              />
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full text-center mt-6 lg:mt-0">
          <div className="inline-block">
            <img
              src={coverPhoto}
              alt="Roman Oze"
className="max-w-full max-h-[690px] rounded-lg shadow-lg object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
