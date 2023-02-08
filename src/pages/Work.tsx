import AnimatedPage from "../components/AnimatedPage";
import { works } from "../util/constants";

export default function Work() {
  return (
    <AnimatedPage>
      <div>
        <p className="inline border-b-4 border-gray-500 p-2 text-2xl font-bold md:text-4xl">
          Work examples
        </p>
        <p className="py-6">Some work examples to checkout</p>
      </div>

      <div className="grid gap-8 px-0 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {works.map(({ id, src, sourceCode, link, name }) => (
          <div
            key={id}
            className="flex max-w-sm flex-col rounded-lg border border-gray-700 bg-gray-800 p-5 shadow"
          >
            <h5 className="mb-5 text-lg tracking-tight">{name}</h5>
            <img
              src={src}
              alt=""
              className="rounded-sm duration-200 hover:scale-110"
            />
            <div className="mt-5 flex h-full items-end justify-center gap-3">
              {link && (
                <a
                  className="rounded-sm border-slate-600 bg-slate-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}

              {sourceCode && (
                <a
                  className="rounded-sm border-slate-600 bg-slate-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600"
                  href={sourceCode}
                  target="_blank"
                  rel="noreferrer"
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
}
