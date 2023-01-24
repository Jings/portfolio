import { AnimatedPage } from "../components/AnimatedPage";
import { technologies } from "../util/constants";

const Experience = () => {
  return (
    <AnimatedPage>
      <div>
        <p className="inline border-b-4 border-gray-500 p-2 text-2xl font-bold md:text-4xl">
          Technologies
        </p>
        <p className="py-6">Technologies i work with on a daily basis</p>
      </div>

      <div className="grid w-full grid-cols-2 gap-8 py-8 px-0 text-center md:grid-cols-3 xl:grid-cols-4">
        {technologies.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
          >
            <img src={src} alt="" className="mx-auto w-20" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Experience;
