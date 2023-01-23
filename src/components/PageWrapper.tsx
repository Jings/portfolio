import { FunctionComponent, ReactNode } from "react";
import { Element } from "react-scroll";

type PageWrapperProps = {
  name: string;
  classString?: string;
  children: ReactNode;
};

export const PageWrapper: FunctionComponent<PageWrapperProps> = ({
  name,
  classString,
  children,
}): JSX.Element => {
  return (
    <Element name={name}>
      <div
        className={`min-h-screen w-full bg-gradient-to-t from-slate-700 to-slate-800 text-zinc-100`}
      >
        {children}
      </div>
    </Element>
  );
};
