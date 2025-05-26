import React, { useState } from "react";
import logo from "../assets/image/portfolio-logo-02.png"







export default function Header(){
  const [isOpen, setIsOpen] = useState(false);
    return (
       <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(15, 15, 15, 0.98)] backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-600 border border-green-600 p-2 rounded-md md:hidden"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>

        {/* Links */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 items-center ">
            {['Home', 'Profile', 'Academic', 'Certificate', 'Achievement', 'Skill', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-green-600 font-semibold text-[1.1rem] tracking-wide py-2  text-primary transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-green-100 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="mt-4 md:mt-0 animate-pulse">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Roman-oze"
                className="bg-green-600 text-white px-4 py-2 rounded border border-white hover:bg-green-700 transition-all duration-300"
              >
                Hire Me <i className="fas fa-eye ml-2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}