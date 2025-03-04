import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full h-[158px] bg-[#0C0C31] border-b-[4px] border-[#010005] fixed flex items-center justify-between px-10">
      <Link to="/" className="text-[#FEFCFC]">
        <img
          src="/images/NMR-Logo.png"
          alt="NMR LOGO"
          className="border-[4px] border-[#A5C882] w-[100px] h-auto"
        />
      </Link>

      <div className="flex space-x-6">
        <Link
          to="/how-it-works"
          className="w-[180px] h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold text-[24px] rounded bg-[#080821] text-[#FEFCFC] text-center px-4 py-2"
        >
          How It Works
        </Link>
        <Link
          to="/nmr-fundamentals"
          className="w-[180px] h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold text-[24px] rounded bg-[#080821] text-[#FEFCFC] text-center px-4 py-2"
        >
          NMR Fundamentals
        </Link>
        <Link
          to="/course-usage"
          className="w-[180px] h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold text-[24px] rounded bg-[#080821] text-[#FEFCFC] text-center px-4 py-2"
        >
          Course Usage
        </Link>
        <Link
          to="/faculty-research"
          className="w-[180px] h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold text-[24px] rounded bg-[#080821] text-[#FEFCFC] text-center px-4 py-2"
        >
          Faculty Research
        </Link>
        <Link
          to="/about-project"
          className="w-[180px] h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold text-[24px] rounded bg-[#080821] text-[#FEFCFC] text-center px-4 py-2"
        >
          About this Project
        </Link>
      </div>
    </nav>
  );
}
