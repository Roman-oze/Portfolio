import React from 'react';
import {
  FaBookOpenReader,
  FaLightbulb,
  FaCircleInfo,
  FaPersonRays,
} from 'react-icons/fa6';

const experiences = [
  {
    id :1,
    title: 'Leadership',
    description: 'I know how to lead in teamwork and organizational settings.',
    icon: <FaBookOpenReader className="text-5xl text-green-400 drop-shadow-md" />,
  },
  {
    id :2,
    title: 'Creativity',
    description: 'When needed, I can quickly generate innovative concepts.',
    icon: <FaLightbulb className="text-5xl text-yellow-400 drop-shadow-md" />,
  },
  {
    id :3,
    title: 'IT Support',
    description: 'I handle technical tools and techniques on a daily basis.',
    icon: <FaCircleInfo className="text-5xl text-blue-400 drop-shadow-md" />,
  },
  {
    id :4,
    title: 'HR',
    description: 'I focus on talent, performance, and innovation in any organization.',
    icon: <FaPersonRays className="text-5xl text-red-400 drop-shadow-md" />,
  },
];

export default function Experience() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-noise" />

      <div className="text-center mb-16 px-4 section-title">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Experience
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Explore key strengths I bring through real-world involvement and practical roles.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {experiences.map(({ id ,title, description, icon }) => (
          <div
            key={id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/10"
          >
            <div className="flex justify-center mb-5 rounding-container">
              <div className="bg-white/10 p-4 rounded-full rounding-image">
                {icon}
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-3">{title}</h4>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
