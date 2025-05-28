import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/image/dp - Copy.jpg"; // replace with your actual logo path

const Footer = () => {
  return (
    <section id="contact" className="bg-primary text-white section-title">
      <footer className=" pt-10 pb-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Social Icons */}
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto h-20 object-contain border-b border-gray-700 pb-2 shadow-md transition duration-300 rounded-full"
            />

            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:+8801759676488"
                    className="flex items-center gap-2 hover:text-green-400"
                  >
                    <FaPhoneAlt /> +8801759676488
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rumuislam202@gmail.com"
                    className="flex items-center gap-2 hover:text-green-400"
                  >
                    <FaEnvelope /> rumuislam202@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-green-400"
                  >
                    <FaMapMarkerAlt /> Tajmohal Road, Mohammadpur, Dhaka 🇧🇩
                  </a>
                </li>
              </ul>
            </div>

            {/* About Me */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About Me</h4>
              <p className="text-sm text-gray-300">
                I am a passionate web developer with experience in creating
                responsive and dynamic websites.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-8 text-sm text-gray-400">
            &copy; 2025 <span className="text-green-500">Roman-oze</span>. All
            rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
