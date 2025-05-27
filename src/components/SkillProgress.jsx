import {
  FaCode,
  FaCss3Alt,
  FaJsSquare,
  FaServer,
  FaDatabase,
  FaFire,
  FaBootstrap,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiLaravel } from "react-icons/si";

const gradientColors = {
  green: "from-emerald-500 to-emerald-700",
  blue: "from-sky-500 to-sky-700",
  cyan: "from-cyan-400 to-cyan-600",
  teal: "from-teal-400 to-teal-600",
  yellow: "from-yellow-400 to-yellow-600",
  purple: "from-purple-500 to-purple-700",
  red: "from-[#EB4D43] to-[#C43A30]", // custom vibrant red-orange gradient
  orange: "from-[#198654] to-[#116d44]", // Custom smooth green
  indigo: "from-indigo-500 to-indigo-700",
  gray: "from-gray-500 to-gray-700",
};

const SkillBar = ({ title, icon, percent, color }) => {
  const gradient = gradientColors[color] || "from-gray-500 to-gray-700";

  return (
    <div className="mb-6 group">
      <div className="flex items-center gap-4 mb-2">
        <div
          className={`text-white text-2xl p-3 rounded-full bg-gradient-to-br ${gradient} shadow-xl group-hover:scale-110 group-hover:shadow-teal-500/30 transition-all duration-300 ease-in-out animate-pulse cursor-pointer`}
          title={title}
        >
          {icon}
        </div>
        <div className="w-full">
          <div className="flex justify-between text-sm text-gray-200 font-medium">
            <span>{title}</span>
            <span className="text-teal-300">{percent}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 mt-1 overflow-hidden">
            <div
              className={`h-3 bg-gradient-to-r ${gradient} transition-all duration-1000 rounded-full flex items-center justify-end pr-1`}
              style={{ width: `${percent}%` }}
            >
              <span className="text-[10px] text-white">
                {percent >= 10 ? `${percent}%` : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillSection = ({ title, skills }) => (
  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-gray-800 shadow-xl hover:shadow-teal-500/40 transition-all duration-300">
    <h3 className="text-xl font-semibold text-center text-teal-300 mb-5 uppercase tracking-wide">
      {title}
    </h3>
    {skills.map((skill, index) => (
      <SkillBar key={index} {...skill} />
    ))}
  </div>
);

export default function SkillsProgress() {
  const frontendSkills = [
    { title: "HTML", icon: <FaCode />, percent: 90, color: "orange" },
    { title: "Bootstrap", icon: <FaBootstrap />, percent: 85, color: "purple" },
    { title: "CSS", icon: <FaCss3Alt />, percent: 75, color: "blue" },
    { title: "Tailwind", icon: <SiTailwindcss />, percent: 60, color: "cyan" },
    { title: "JavaScript", icon: <FaJsSquare />, percent: 50, color: "yellow" },
    { title: "React.js", icon: <FaReact />, percent: 45, color: "cyan" },
  ];

  const backendSkills = [
    { title: "PHP", icon: <FaPhp />, percent: 55, color: "indigo" },
    {
      title: "Database Management",
      icon: <FaServer />,
      percent: 75,
      color: "teal",
    },
    { title: "MySQL", icon: <FaDatabase />, percent: 70, color: "blue" },
    { title: "Firebase", icon: <FaFire />, percent: 50, color: "yellow" },
  ];

  const frameworkSkills = [
    { title: "Next.js", icon: <SiNextdotjs />, percent: 30, color: "gray" },
    { title: "Laravel", icon: <SiLaravel />, percent: 75, color: "red" },
  ];

  return (
    <section
      id="skill"
      className="bg-primary  py-14 px-4  text-white section-title"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">🚀 Skills Overview</h1>
          <p className="text-gray-400">
            Experience earned through real projects
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillSection title="Frontend" skills={frontendSkills} />
          <SkillSection title="Backend" skills={backendSkills} />
          <SkillSection title="Frameworks" skills={frameworkSkills} />
        </div>
      </div>
    </section>
  );
}
