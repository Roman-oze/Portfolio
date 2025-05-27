import React from "react";

const skills = [
  { name: "HTML", imgSrc: "../assets/image/Bootstrap_logo.svg.png", link: "#" },
  { name: "CSS", imgSrc: "/CSS3_logo.svg.png", link: "#" },
  { name: "Bootstrap", imgSrc: "/Bootstrap_logo.svg.png", link: "#" },
  { name: "JavaScript", imgSrc: "/js.png", link: "#" },
  { name: "Laravel", imgSrc: "/laravel.png", link: "#" },
  { name: "Database", imgSrc: "/database.png", link: "#" },
];

export default function Feature() {
  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Expertise</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I specialize in designing responsive, user-friendly websites. Experienced in SEO and accessibility standards.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map(({ name, imgSrc, link }) => (
            <a
              key={name}
              href={link}
              className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-gray-800 hover:bg-green-600 transition-colors duration-300 cursor-pointer"
              // You can add onClick handlers here if needed instead of inline HTML onclick
            >
              <img
                src={imgSrc}
                alt={name}
                className="w-20 h-20 object-contain"
              />
              <span className="text-white text-lg font-semibold">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
