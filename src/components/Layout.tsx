import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen pb-20 w-full bg-gradient-to-t from-slate-700 to-slate-800 text-zinc-100">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
