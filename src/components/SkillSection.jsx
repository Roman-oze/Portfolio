import { skillDataList } from "../data/skillData";
export default function Skill({title}) {

  return (
    <div className="bg-primary py-16 px-4 section-title">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white mb-10 tracking-wide">
          {title}
        </h1>

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 ">
          {skillDataList.map(({ id, title, description, image }) => (
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
