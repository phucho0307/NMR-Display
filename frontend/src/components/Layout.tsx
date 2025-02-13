import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <main className="">
      <Navbar />
      <main className="bg-[#0C0C31] h-screen pt-[158px] text-[#FEFCFC] ">
        <Outlet />
      </main>
    </main>
  );
}
