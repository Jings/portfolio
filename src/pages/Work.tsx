import { AnimatedPage } from "../components/AnimatedPage";
import { works } from "../util/constants";

const Work = () => {
  return (
    <AnimatedPage>
      <div>
        <p className="text-2xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Work examples
        </p>
        <p className="py-6">Some work examples to checkout</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-0">
        {works.map(({ id, src, sourceCode, link, name }) => (
          <div
            key={id}
            className="max-w-sm p-5 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col"
          >
            <h5 className="mb-5 text-lg tracking-tight">{name}</h5>
            <img
              src={src}
              alt=""
              className="rounded-sm duration-200 hover:scale-110"
            />
            <div className="flex items-end justify-center h-full gap-3 mt-5">
              {link && (
                <a
                  className="text-zinc-200 focus:outline-none focus:ring-4 font-medium rounded-sm text-sm px-5 py-2.5 bg-slate-700 hover:bg-slate-600 focus:ring-slate-600 border-slate-600"
                  href={link}
                  target="_blank"
                >
                  Demo
                </a>
              )}

              {sourceCode && (
                <a
                  className="text-zinc-200 focus:outline-none focus:ring-4 font-medium rounded-sm text-sm px-5 py-2.5 bg-slate-700 hover:bg-slate-600 focus:ring-slate-600 border-slate-600"
                  href={sourceCode}
                  target="_blank"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Work;
