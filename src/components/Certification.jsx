import React, { useState } from "react";
import { TbAward } from "react-icons/tb";

import vp from "../assets/image/vp.jpg";
import leadership from "../assets/image/leadership.png";
import positivity from "../assets/image/positivity.png";
import ChineseLang from "../assets/image/ChineseLang.jpg";
import LogosMarquee from "./LogoMarquee";

const certificates = [
  {
    id: 1,
    title: "Vice-President",
    image: vp,
    description:
      "I'm VP of ITMClub, organizing activities and managing club members.",
    issued: "Issued on March 25, 2024",
  },
  {
    id: 2,
    title: "Leadership",
    image: leadership,
    description:
      "I have honed my skills to lead and maintain any situation with precision.",
    issued: "Issued on March 25, 2024",
  },
  {
    id: 3,
    title: "Positivity",
    image: positivity,
    description: "Received for demonstrating responsibility at my university.",
    issued: "Issued on March 25, 2024",
  },
  {
    id: 4,
    title: "Chinese Course",
    image: ChineseLang,
    description:
      "I completed 6th month Chinese language course from YTBU in China.",
    issued: "Issued on March 25, 2024",
  },
];

const CertificateSection = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section
      id="certificate"
      className="bg-primary py-12 text-white section-title"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex justify-center items-center gap-2">
            <TbAward className="text-[#198654] text-4xl" /> Certification
          </h1>
          <p className="text-gray-400">
            I specialize in designing responsive, user-friendly websites, with
            expertise in SEO and accessibility standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {certificates.map(({ id, title, image, description, issued }) => (
            <div
              key={id}
              className="bg-secondary rounded-3xl  overflow-hidden transform transition duration-300 hover:scale-105  cursor-pointer shadow-xl hover:shadow-teal-500/40 transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") openModal(image);
              }}
            >
              <img
                src={image}
                alt={`${title} Certificate`}
                className="w-full h-48 object-cover"
                loading="lazy"
                onClick={() => openModal(image)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{description}</p>
                <p className="text-green-400 text-xs tracking-wide">{issued}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={modalImage}
            alt="Certificate Preview"
            className="max-w-4xl max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          />
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-green-400 transition"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      )}

      {/* import LogosMarquee  */}
      <div className="mt-30 bg-secondary">
        <LogosMarquee />
      </div>
    </section>
  );
};

export default CertificateSection;
