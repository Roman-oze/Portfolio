import { useState } from "react";
import cvFile from "../assets/image/CV.pdf";
import profileImg from "../assets/image/graduate.png";

import { AboutDataList } from "../data/aboutData";
import { FaDownload, FaEye } from "react-icons/fa"; // Import the icons

export default function AboutMe({ title }) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [bioVisible, setBioVisible] = useState(false);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const handleTouch = () => {
    setBioVisible(!bioVisible);
  };

  return (
    <section id="profile" className="bg-primary py-16 px-4 section-title">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">{title}</h1>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="relative max-w-sm w-full border border-white/10 rounded-2xl hover:shadow-[0_15px_35px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-auto object-cover rounded-2xl"
            />

            {/* Active Indicator */}
            <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black bg-opacity-70 px-2 py-0.5 rounded-full">
              <span className="w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
              <span className="text-sm text-white">Active</span>
            </div>
          </div>

          {/* Profile Info Card */}
          <div className="bg-secondary border border-white/10 backdrop-blur-md p-6 rounded-2xl w-full md:w-3/5">
            <div className="space-y-2 text-gray-200 text-base md:text-lg leading-relaxed">
              {AboutDataList.map((item) => (
                <div key={item.id} className="border border-white/10 rounded-lg">
                  <button
                    className="flex items-center w-full px-4 py-3 text-left hover:bg-white/10 transition"
                    onClick={() => toggleAccordion(item.id)} // Toggle by id
                  >
                    {item.icon}
                    <span className="text-white font-medium">{item.title}:</span>
                    <span className="ml-2 text-white">
                      {item.content.split(" ")[0]}
                    </span>
                    <span className="ml-auto text-sm text-white">
                      {activeAccordion === item.id ? "−" : "+"} {/* Compare by id */}
                    </span>
                  </button>
                  {activeAccordion === item.id && (
                    <div className="px-4 pb-4 text-white">{item.content}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Bio / Touch Info */}
            {bioVisible && (
              <p className="text-white mt-4">
                A passionate and detail-oriented Junior Web Developer with over
                three years of experience in creating dynamic, responsive, and
                user-friendly web applications. Proficient in HTML, CSS,
                JavaScript, PHP, and Laravel, with a strong foundation in MySQL
                database management and API integration. Known for delivering
                innovative solutions, debugging complex issues, and
                collaborating effectively in team environments. Seeking an
                opportunity to contribute technical expertise and grow in a
                challenging and fast-paced development role.
              </p>
            )}

            {/* Buttons */}
            <div className="flex justify-center text-center">
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bs-success hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center justify-center shadow hover:shadow-lg transition"
                >
                  <FaDownload className="mr-2" /> Download CV
                </a>
                <button
                  onClick={handleTouch}
                  className="border border-white/30 text-white hover:bg-white hover:text-black px-6 py-2 rounded-lg font-semibold flex items-center justify-center transition"
                >
                  {bioVisible ? "Hide Bio" : "Touch me"} <FaEye className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
