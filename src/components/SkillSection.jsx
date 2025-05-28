import web from "../assets/image/website-icon.png";
import app from "../assets/image/android-studio-icon.webp";
import project from "../assets/image/project-management.png";
import WordPress from "../assets/image/wordpress1.png";

export default function Skill() {
  const skillList = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Full Stack Web development including modern design & responsive layout.",
      image: web,
    },
    {
      id: 2,
      title: "App Development",
      description:
        "Design and develop user-friendly mobile apps for Android and iOS.",
      image: app,
    },
    {
      id: 3,
      title: "WordPress",
      description:
        "Effectively manage projects using modern tools and collaborative strategies.",
      image: WordPress,
    },
    {
      id: 4,
      title: "Project Management",
      description:
        "Effectively manage projects using modern tools and collaborative strategies.",
      image: project,
    },
  ];

  return (
    <div className="bg-primary py-16 px-4 section-title">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white mb-10 tracking-wide">
          Academic Skills
        </h1>

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 ">
          {skillList.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="bg-white/10 mt-6 text-white rounded-2xl  p-6 transform hover:scale-105  shadow-xl hover:shadow-teal-500/40 transition-all duration-300 "
            >
              <div className="flex justify-center mb-5 rounding-container ">
                <img
                  src={image}
                  alt={title}
                  className="w-13 h-13  object-contain rounding-image "
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
