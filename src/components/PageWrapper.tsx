import { ReactNode } from "react";
import { Element } from "react-scroll";

type PageWrapperProps = {
  name: string;
  children: ReactNode;
};

export default function PageWrapper({ name, children }: PageWrapperProps) {
  return (
    <Element name={name}>
      <div className="min-h-screen w-full bg-gradient-to-t from-slate-700 to-slate-800 text-zinc-100">
        {children}
      </div>
    </Element>
  );
}
