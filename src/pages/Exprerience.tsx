import { AnimatedPage } from "../components/AnimatedPage";
import { technologies } from "../util/constants";

const Experience = () => {
  return (
    <AnimatedPage>
      <div>
        <p className="text-2xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Technologies
        </p>
        <p className="py-6">Technologies i work with on a daily basis</p>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8 px-0">
        {technologies.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Experience;
