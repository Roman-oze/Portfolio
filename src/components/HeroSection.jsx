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
                sequence={[
                  "Web Developer",
                  2000,
                  "Laravel Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-green-400 font-bold mt-3"
              />
            </h2>
          </div>
<div className="mt-7 mb-6">
  <a
    target="_blank"
    href="https://github.com/Roman-oze"
    className="inline-flex items-center px-4 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 rounded"
  >
    GitHub
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5 ml-2 text-white"
    >
      <path
        fillRule="evenodd"
        d="M12 0C5.37 0 0 5.373 0 12a12.01 12.01 0 008.205 11.386c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.086 1.84 1.239 1.84 1.239 1.07 1.836 2.807 1.306 3.492.998.11-.776.42-1.306.763-1.607-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.467-2.382 1.236-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.487 11.487 0 016 0c2.29-1.553 3.297-1.23 3.297-1.23.653 1.652.24 2.873.117 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.805 5.625-5.475 5.922.432.372.816 1.104.816 2.226v3.297c0 .32.216.694.825.576A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</div>

        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full text-center mt-6 lg:mt-0">
          <div className="inline-block">
            <img
              src={coverPhoto}
              alt="Roman Oze"
              className="max-w-full max-h-[690px] rounded-lg  object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
