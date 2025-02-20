import { Link } from "react-router";

export default function Navbar() {

  return (
    <nav className="nav w-full h-[158px] bg-[#0C0C31] border-b-[4px] border-[#010005] fixed">
      <Link
        to="/"
        className="logo absolute top-[38px] left-[59px] text-[#FEFCFC]"
      >
        <img
          src="/images/NMR-Logo.png"
          alt="NMR LOGO"
          className="border-[4px] border-[#A5C882]"
        ></img>
      </Link>
      
      <div className="text-[#FEFCFC]">
        <Link
          to="/nmr-fundamentals"
          className="absolute left-[886px] top-[26px] w-[240px] h-[110px] font-semibold text-[24px] px-15 py-5 rounded bg-[#080821] text-center"
        >
          NMR
          <br />
          Fundamentals
        </Link>
        <Link
          to="/course-usage"
          className="absolute left-[1134px] top-[26px] w-[240px] h-[110px] font-semibold text-[24px] px-15 py-5 rounded bg-[#080821] text-center"
        >
          Course Usage
        </Link>
        <Link
          to="/faculty-research"
          className="absolute left-[1382px] top-[26px] w-[240px] h-[110px] font-semibold text-[24px] px-15 py-5 rounded bg-[#080821] text-center"
        >
          Faculty Research
        </Link>
        <Link
          to="/about-project"
          className="absolute left-[1630px] top-[26px] w-[240px] h-[110px] font-semibold text-[24px] px-15 py-5 rounded bg-[#080821] text-center"
        >
          About this
          <br />
          Project
        </Link>
      </div>
    </nav>
  );
}
