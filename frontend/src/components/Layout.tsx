import Navbar from "./Navbar"
import { Outlet } from "react-router"

export default function Layout() {
      return (
            <main className="bg-[#0C0C31] text-[#FEFCFC]">
                  <Navbar />
                  <Outlet />
            </main>
      )
}
