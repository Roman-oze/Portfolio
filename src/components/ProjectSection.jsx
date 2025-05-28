// import { FaEye } from "react-icons/fa";
// import task from "../assets/image/Task-Management.jpeg";
// import food from "../assets/image/Food-Prortal.jpeg";
// import itm from "../assets/image/Screenshot_8-1-2025_13338_www.diu-itm.sglglobalsoft.com.jpeg";
// import Restaurant from "../assets/image/rest-web.png";
// import e_commerce from "../assets/image/e-commerce.png";
// import GARS from "../assets/image/Gars.JPG";
// import { FaStar, FaClock } from "react-icons/fa"; // Add this at top if not imported
// import { VscPassFilled } from "react-icons/vsc";


// const projects = [
//   {
//     id: 1,
//     title: "Task Management App",
//     image: task,
//     description:
//       "A responsive and interactive task management system built with React and Tailwind CSS. Includes features like task editing, deletion, priority tagging, and favorites.",
//     link: "https://task-management-gamma-flax.vercel.app/", // update to your real link
//     theme: "success",
//   },
//   {
//     id: 2,
//     title: "Online Food Portal",
//     image: food,
//     description:
//       "A modern online food ordering platform built with React and Tailwind CSS. Showcases product listings, responsive UI, and user-friendly design for browsing and ordering food items.",
//     link: "https://food-order-dashboard-sage.vercel.app/", // update to your real link
//     theme: "success",
//   },
//   {
//     id: 3,
//     title: "ITM Website",
//     image: itm,
//     description:
//       "An advanced university departmental website built for DIU ITM using Laravel and MySQL.",
//     link: "https://www.diu-itm.sglglobalsoft.com/",
//     theme: "success",
//   },
//   {
//     id: 4,
//     title: "Restaurant Website",
//     image: Restaurant,
//     description:
//       "An online restaurant ordering system with menu, cart, and checkout functionality.",
//     link: "https://github.com/Roman-oze/online_restaurant.git",
//     theme: "success",
//   },
//   {
//     id: 5,
//     title: "E-commerce Website",
//     image: e_commerce,
//     description:
//       "A full-featured e-commerce platform with product listing, cart, and user authentication.",
//     link: "https://github.com/Roman-oze/E-Commerce",
//     theme: "success",
//   },
//   {
//     id: 6,
//     title: "GARS",
//     image: GARS,
//     description:
//       "A government recruitment system for automated application tracking and results.",
//     link: "https://rcslbd.com/",
//     theme: "success",
//   },
// ];

// export default function ProjectList() {
//   return (
// <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-4" id="projects">
//   <div className="max-w-7xl mx-auto text-center">
//     <h1 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
//       Project <span className="text-[#34d399]">Showcase</span>
//     </h1>

//     <div className="grid md:grid-cols-2 gap-12">
//       {projects.map((project, id) => (
//         <div
//           key={project.id}
//           className="relative group overflow-hidden rounded-3xl transition-all duration-500 bg-gradient-to-tr from-[#1a1f2e] to-[#2e3a59] hover:scale-[1.015] hover:shadow-2xl shadow-green-800/20"
//         >
//           {/* Label for New or Latest Project */}
//           {(id === 0 || id === projects.length - 1) && (
//             <div className="absolute top-4 left-4 z-10 px-3 py-1 flex items-center gap-2 text-xs font-semibold text-white bg-green-600/70 backdrop-blur-md border border-white/10 rounded-full shadow-xl ring-2 ring-green-400 animate-pulse">
//               {id === 0 ? (
//                 <>
//                   <VscPassFilled className="text-white text-base" />
//                   <span className="uppercase tracking-wide">New</span>
//                 </>
//               ) : (
//                 <>
//                   <FaStar className="text-yellow-400 text-base" />
//                   <span className="uppercase tracking-wide">Latest</span>
//                 </>
//               )}
//             </div>
//           )}

//           {/* Wrapper to control layout */}
//           <div className="flex flex-col sm:flex-row h-full">
//             {/* Image Section */}
//             <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none"
//               />
//             </div>

//             {/* Text Content */}
//             <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center bg-white/5 text-white backdrop-blur-lg">
//               <h4 className="text-2xl font-bold mb-3 text-green-300 group-hover:text-green-400 transition-colors duration-300">
//                 {project.title}
//               </h4>
//               <p className="text-sm text-gray-300 mb-5 leading-relaxed">
//                 {project.description.toLowerCase()}
//               </p>

//               <div className="flex justify-start">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold shadow-md transition-all duration-300"
//                 >
//                   Watch Live <FaEye />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// }
import { useState, useEffect } from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { VscPassFilled } from "react-icons/vsc";
import task from "../assets/image/Task-Management.jpeg";
import food from "../assets/image/Food-Prortal.jpeg";
import itm from "../assets/image/Screenshot_8-1-2025_13338_www.diu-itm.sglglobalsoft.com.jpeg";
import Restaurant from "../assets/image/rest-web.png";
import e_commerce from "../assets/image/e-commerce.png";
import GARS from "../assets/image/Gars.JPG";

const projects = [
  {
    id: 1,
    title: "Task Management App",
    image: task,
    description:
      "A responsive and interactive task management system built with React and Tailwind CSS. Includes features like task editing, deletion, priority tagging, and favorites.",
    link: "https://task-management-gamma-flax.vercel.app/",
    theme: "success",
  },
  {
    id: 2,
    title: "Online Food Portal",
    image: food,
    description:
      "A modern online food ordering platform built with React and Tailwind CSS. Showcases product listings, responsive UI, and user-friendly design for browsing and ordering food items.",
    link: "https://food-order-dashboard-sage.vercel.app/",
    theme: "success",
  },
  {
    id: 3,
    title: "ITM Website",
    image: itm,
    description:
      "An advanced university departmental website built for DIU ITM using Laravel and MySQL.",
    link: "https://www.diu-itm.sglglobalsoft.com/",
    theme: "success",
  },
  {
    id: 4,
    title: "Restaurant Website",
    image: Restaurant,
    description:
      "An online restaurant ordering system with menu, cart, and checkout functionality.",
    link: "https://github.com/Roman-oze/online_restaurant.git",
    theme: "success",
  },
  {
    id: 5,
    title: "E-commerce Website",
    image: e_commerce,
    description:
      "A full-featured e-commerce platform with product listing, cart, and user authentication.",
    link: "https://github.com/Roman-oze/E-Commerce",
    theme: "success",
  },
  {
    id: 6,
    title: "GARS",
    image: GARS,
    description:
      "A government recruitment system for automated application tracking and results.",
    link: "https://rcslbd.com/",
    theme: "success",
  },
];

export default function ProjectList() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="bg-primary text-white py-16 px-4" id="projects">
      <div className="max-w-7xl mx-auto text-center section-title">
        <h1 className="text-4xl font-bold mb-12 text-white">
          Project <span className="text-[#198654]">Showcase</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {projects.map((project, id) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-tr from-[#1a1f2e] to-[#2e3a59]"
            >
              {(id === 0 || id === projects.length - 1) && (
                <div className="absolute top-3 left-3 z-10 px-3 py-1 flex items-center gap-1 text-xs font-semibold text-white backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg ring-1 ring-green-400/40">
                  {id === 0 ? (
                    <>
                      <VscPassFilled className="text-green-500 text-xl" />
                      NEW
                    </>
                  ) : (
                    <>
                      <FaStar className="text-yellow-300 text-xl" />
                      LATEST
                    </>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row h-full">
                <div
                  className="w-full sm:w-2/5 h-60 sm:h-auto cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                  />
                </div>

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

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={closeModal}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-full rounded-lg shadow-2xl border border-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
