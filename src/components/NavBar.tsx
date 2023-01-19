import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { links } from "../util/constants";

const NavBar = (): JSX.Element => {
  const [mobileNavigationShown, setMobileNavigationShown] =
    useState<boolean>(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-zinc-500 bg-slate-800 fixed border-b-slate-900 border-b">
      <div>
        <h1 className="text-2xl font-logo ml-2 text-zinc-100">Ingo Krumbein</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-zinc-100"
          >
            <Link to={link} smooth duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex md:hidden gap-5 items-center">
        <div
          onClick={() => setMobileNavigationShown(!mobileNavigationShown)}
          className="cursor-pointer pr-4 z-10 text-zinc-500"
        >
          {mobileNavigationShown ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {mobileNavigationShown && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white bg-gradient-to-t from-slate-800 to-slate-900 text-zinc-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setMobileNavigationShown(!mobileNavigationShown)}
                to={link}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
