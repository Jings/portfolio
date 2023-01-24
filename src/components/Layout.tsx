import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-t from-slate-700 to-slate-800 pb-10 text-zinc-100">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
