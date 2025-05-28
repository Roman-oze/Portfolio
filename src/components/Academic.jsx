import { useState } from "react";
import {
  FaSchool,
  FaBuildingColumns,
  FaGraduationCap,
} from "react-icons/fa6";

const academicInfo = [
  {
    id :1 ,
    icon: <FaSchool className="text-3xl text-blue-300" />,
    level: "School",
    institute: "People's Standard High School",
    description: "Completed SSC in Science group.",
    cgpa: "GPA: 4.63 / 5.00",
  },
  {
    id :2,
    icon: <FaBuildingColumns className="text-3xl text-yellow-300" />,
    level: "College",
    institute: "Dhanmondi Ideal College",
    description: "Completed HSC in Science group.",
    cgpa: "GPA: 4.42 / 5.00",
  },
  {
    id :3 ,
    icon: <FaGraduationCap className="text-3xl text-green-300" />,
    level: "University",
    institute: "Daffodil International University",
    description: "Bachelor of Science in ITM.",
    cgpa: "CGPA: 3.66 / 4.00",
  },
];

export default function Academic() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
   <section id="academic" className="py-16 px-4 section-title bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Academic Journey</h1>
        <p className="text-gray-400">My education milestones</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {academicInfo.map(({id ,icon , level ,institute , description,cgpa }) => (
          <div
            key={id}
            className="bg-secondary backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-xl hover:shadow-teal-500/40 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-3">{icon}</div>
              <h2 className="text-xl font-bold text-white font-semibold">{level}</h2>
              <p className="text-gray-300 mt-1">{institute}</p>

              {activeIndex === id && (
                <div className="text-gray-400 mt-4 space-y-1 transition-all">
                  <h5>{description}</h5>
                  <b className="text-primary">{cgpa}</b>
                </div>
              )}

              <button
                onClick={() => setActiveIndex(activeIndex === id ? null : id)}
                className="mt-4 px-4 py-2 rounded-full border border-gray-500 text-white hover:bg-white hover:text-black transition"
              >
                {activeIndex === id ? "Hide Details" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
