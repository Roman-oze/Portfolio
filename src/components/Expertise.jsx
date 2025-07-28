import { ExpertDataList } from "../data/expertData";
export default function Expertise({title})  {
  return (
    <div className="bg-secondary py-16 px-4 ">
      <div className="max-w-9xl mx-auto text-center  section-title ">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 ">
          I specialize in designing responsive, user-friendly websites.
          Experienced in SEO and accessibility standards.
        </p>

        <div className="flex flex-wrap justify-center gap-8 ">
          {ExpertDataList.map(({ id, name, imgSrc, link }) => (
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
