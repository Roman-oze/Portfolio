import { FaEye } from "react-icons/fa";
import itm from "../assets/image/Screenshot_8-1-2025_13338_www.diu-itm.sglglobalsoft.com.jpeg";
import Restaurant from "../assets/image/rest-web.png";
import e_commerce from "../assets/image/e-commerce.png";
import GARS from "../assets/image/Gars.JPG";

const projects = [
  {
    id: 1,
    title: "ITM Website",
    image: itm,
    description:
      "An advanced university departmental website built for DIU ITM using Laravel and MySQL.",
    link: "https://www.diu-itm.sglglobalsoft.com/",
    theme: "success",
  },
  {
    id: 2,
    title: "Restaurant Website",
    image: Restaurant,
    description:
      "An online restaurant ordering system with menu, cart, and checkout functionality.",
    link: "https://github.com/Roman-oze/online_restaurant.git",
    theme: "success",
  },
  {
    id: 3,
    title: "E-commerce Website",
    image: e_commerce,
    description:
      "A full-featured e-commerce platform with product listing, cart, and user authentication.",
    link: "https://github.com/Roman-oze/E-Commerce",
    theme: "success",
  },
  {
    id: 4,
    title: "GARS",
    image: GARS,
    description:
      "A government recruitment system for automated application tracking and results.",
    link: "https://rcslbd.com/",
    theme: "success",
  },
];

export default function ProjectList() {
  return (
    <section className="bg-primary text-white py-16 px-4" id="projects">
      <div className="max-w-7xl mx-auto text-center section-title">
        <h1 className="text-4xl font-bold mb-12 text-white">
          {" "}
          Project <span className="text-[#198654]">Showcase</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-tr from-[#1a1f2e] to-[#2e3a59]"
            >
              {/* Wrapper to control layout */}
              <div className="flex flex-col sm:flex-row h-full">
                {/* Image Section */}
                <div className="w-full sm:w-2/5 h-60 sm:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                  />
                </div>

                {/* Text Content */}
                <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center bg-white/5 text-white backdrop-blur-md">
                  <h4 className="text-2xl font-bold mb-2 text-green-300 group-hover:text-green-500 transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-sm text-gray-300 mb-4">
                    {project.description.toLowerCase()}
                  </p>

                  <div className="flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-start px-4 py-2 text-sm font-medium text-green-300 border border-green-500 rounded-lg hover:text-white hover:bg-green-500 transition-all duration-300"
                    >
                      Watch Live <FaEye className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
