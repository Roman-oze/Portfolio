import html from "../assets/image/html.png";
import css from "../assets/image/CSS3_logo.svg.png";
import bootstrap from "../assets/image/Bootstrap_logo.svg.png";
import javascript from "../assets/image/js.png";
import tailwind from "../assets/image/tailwind.png";
import react from "../assets/image/React.webp";
import nextjs from "../assets/image/next.png";
import php from "../assets/image/php.png";
import laravel from "../assets/image/laravel.png";
import mysql from "../assets/image/database.png";

export default function Feature() {
  const expert = [
    { id: 1, name: "HTML", imgSrc: html, link: "#" },
    { id: 2, name: "CSS", imgSrc: css, link: "#" },
    { id: 3, name: "Bootstrap", imgSrc: bootstrap, link: "#" },
    { id: 4, name: "Tailwind", imgSrc: tailwind, link: "#" },
    { id: 5, name: "JavaScript", imgSrc: javascript, link: "#" },
    { id: 6, name: "React", imgSrc: react, link: "#" },
    { id: 7, name: "Next.js", imgSrc: nextjs, link: "#" },
    { id: 9, name: "php", imgSrc: php, link: "#" },
    { id: 10, name: "laravel", imgSrc: laravel, link: "#" },
    { id: 11, name: "MysQL", imgSrc: mysql, link: "#" },
    // { id: 12, name: "Git & GitHub", imgSrc: git, link: "#" },
  ];

  return (
    <div className="bg-secondary py-16 px-4 ">
      <div className="max-w-9xl mx-auto text-center  section-title ">
        <h1 className="text-4xl font-bold text-white mb-4">Expertise</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 ">
          I specialize in designing responsive, user-friendly websites.
          Experienced in SEO and accessibility standards.
        </p>

        <div className="flex flex-wrap justify-center gap-8 ">
          {expert.map(({ id, name, imgSrc, link }) => (
            <a
              key={id}
              href={link}
className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-gray-800 hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl cursor-pointer"
            >
              <div className="rounding-container">
                <img
                  src={imgSrc}
                  alt={name}
                  className="w-20 h-20 object-contain rounding-image "
                />
              </div>
              <span className="text-white text-lg font-semibold">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
