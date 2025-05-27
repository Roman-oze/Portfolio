import React from 'react';
import { TbAward } from "react-icons/tb";


import vp from '../assets/image/vp.jpg';
import leadership from '../assets/image/leadership.png';
import positivity from '../assets/image/positivity.png';
import ChineseLang from '../assets/image/ChineseLang.jpg';

const certificates = [
  {
    title: "Vice-President",
    image: vp,
    description: "I'm VP of ITMClub, organizing activities and managing club members.",
    issued: "Issued on March 25, 2024",
  },
  {
    title: "Leadership",
    image: leadership,
    description: "I have honed my skills to lead and maintain any situation with precision.",
    issued: "Issued on March 25, 2024",
  },
  {
    title: "Positivity",
    image: positivity,
    description: "Received for demonstrating responsibility at my university.",
    issued: "Issued on March 25, 2024",
  },
  {
    title: "Chinese Course",
    image: ChineseLang,
    description: "I completed 6th month Chinese language course from YTBU in China.",
    issued: "Issued on March 25, 2024",
  },
];

const CertificateSection = () => {
  const openModal = (src) => {
    // You can later implement a modal popup here
    alert(`Preview image: ${src}`);
  };

  return (
    <section id="certificate" className="bg-primary  py-12 text-white section-title">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex justify-center items-center gap-2">
            Certification<TbAward className="text-[#EB4D43] text-4xl" />



          </h1>
          <p className="text-gray-400">
            I specialize in designing responsive, user-friendly websites, with expertise in SEO and accessibility standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden text-gray-800 hover:scale-105 transition-transform"
            >
              <img
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="w-full h-40 object-cover cursor-pointer"
                onClick={() => openModal(cert.image)}
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-1">{cert.title}</h5>
                <p className="text-sm mb-2">{cert.description}</p>
                <p className="text-xs text-green-600">{cert.issued}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
