import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../util/constants";
import { NavLink } from "react-router-dom";

const NavBar = (): JSX.Element => {
  const [mobileNavigationShown, setMobileNavigationShown] =
    useState<boolean>(false);

  return (
    <div className="flex h-16 w-full items-center justify-between border-b border-b-slate-900 bg-slate-800 px-4 text-zinc-500">
      <div>
        <h1 className="ml-2 font-logo text-2xl text-zinc-100">Ingo Krumbein</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="cursor-pointer px-4 font-medium capitalize text-zinc-100 duration-200 hover:scale-105"
          >
            <NavLink
              to={link}
              className={({ isActive }) => (isActive ? "underline" : undefined)}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="z-30 flex items-center gap-5 md:hidden">
        <div
          onClick={() => setMobileNavigationShown(!mobileNavigationShown)}
          className="z-10 cursor-pointer pr-4 text-zinc-500"
        >
          {mobileNavigationShown ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {mobileNavigationShown && (
        <ul className="absolute top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center bg-white bg-gradient-to-t from-slate-800 to-slate-900 text-zinc-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 text-4xl capitalize duration-200 hover:scale-105"
            >
              <NavLink
                onClick={() => setMobileNavigationShown(!mobileNavigationShown)}
                to={link}
                className={({ isActive }) =>
                  isActive ? "underline" : undefined
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
