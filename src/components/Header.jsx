import React, { useState } from "react";
import logo from "../assets/image/portfolio-logo-02.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(15, 15, 15, 0.98)] backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
 <a href="#" className="flex items-center">
      <img
        src={logo}
        alt="Logo"
        className="bouncing"
      />
    </a>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-600 border border-green-600 p-2 text-white rounded-md md:hidden"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col text-primary md:flex-row md:space-x-6 mt-4 md:mt-0 items-center ">
            {[
              "Home",
              "Profile",
              "Academic",
              "Certificate",
              "Achievement",
              "Skill",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-green-600 font-semibold text-[1.1rem] tracking-wide py-2  text-primary transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-green-100 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
                >
                  {item}
                </a>
              </li>
            ))}

            <li className="mt-4 md:mt-0">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Roman-oze"
                className="inline-flex items-center px-4 py-2 btn-bs-success  transition-all duration-300 rounded group bouncing"
              >
                <span className="font-semibold text-white/80">Hire Me</span>

                {/* Open Eye (default) */}
                <svg
                  className="w-5 h-5 text-white/70 ml-2 block group-hover:hidden"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M572.52 241.4C518.31 135.5 407.49 64 288 64S57.69 135.5 3.48 241.4a48.35 48.35 0 000 29.2C57.69 376.5 168.51 448 288 448s230.31-71.5 284.52-177.4a48.35 48.35 0 000-29.2zM288 400c-97.05 0-183.75-55.63-232.88-144C104.25 167.63 190.95 112 288 112s183.75 55.63 232.88 144C471.75 344.37 385.05 400 288 400zm0-272a128 128 0 10128 128 128.14 128.14 0 00-128-128zm0 192a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
                </svg>

                {/* Closed Eye (hover) */}
                <svg
                  className="w-5 h-5 text-white ml-2 hidden group-hover:block"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M633.8 458.1L23.1 6.1C17.4 1.8 9.6 3.1 5.3 8.9L.7 15.9c-4.3 5.8-3 13.6 2.8 17.9l52.6 41.9C22.6 111.1 5.1 137.9 0 144.6a47.75 47.75 0 000 22.8C53.8 376.5 166.5 448 288 448c54.7 0 107.2-15.9 152-43.3l103.5 82.4c5.8 4.3 13.6 3 17.9-2.8l4.6-7c4.3-5.8 3-13.6-2.8-17.9zM288 400c-97 0-183.8-55.6-232.9-144C86.3 199.8 178.2 144 288 144c30.3 0 58.8 6.6 84.4 18.1l36.7 29.3A127.87 127.87 0 00416 256a128 128 0 01-128 128zm0-80a48 48 0 01-48-48c0-6.1 1.2-11.9 3.3-17.3l66.7 53.3a47.92 47.92 0 01-21.8 12zM634 241.4C597.5 174.4 537.5 120.8 465.9 93.5c-5.8-2.2-12.2.4-14.4 6.2l-6.6 17.6c-2.2 5.8.4 12.2 6.2 14.4 59.6 22.8 109.1 68.3 137.5 124.4-20.4 36.8-48.4 68.3-81.3 91.4L620.1 456c5.8 4.3 13.6 3 17.9-2.8l4.6-7c4.3-5.8 3-13.6-2.8-17.9l-80.9-63.7C601.6 336.2 625.1 292.3 634 241.4z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
