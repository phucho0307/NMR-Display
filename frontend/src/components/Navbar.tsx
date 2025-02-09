import { Link } from "react-router";
//import { Link, useLocation } from "react-router";
//import { useState, useEffect } from "react";

// interface Props {
//   initialVisibility?: boolean;
//   headng: string;
// }

//const [isHeaderVisible, setIsHeaderVisible] = useState(true)

export default function Navbar() {
  // const location = useLocation(); // Get the current location
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // useEffect(() => {
  //   // Array of paths where you want the header to be hidden
  //   const hiddenPaths = ["/", "/"]; // Add your paths

  //   // Check if the current path is in the hiddenPaths array
  //   const shouldHideHeader = hiddenPaths.includes(location.pathname);

  //   setIsHeaderVisible(!shouldHideHeader); // Set visibility based on path
  // }, [location]); // Re-run effect when location changes

  return (
    <nav className="nav w-[1920px] h-[158px] bg-[#0C0C31] border-b-[4px] border-[#010005]">
      <Link
        to="/"
        className="logo absolute top-[38px] left-[59px] text-[#FEFCFC]"
      >
        <img
          src="/src/assets/NMR-Logo.png"
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
