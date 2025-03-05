/**
 * CourseUsage Component
 *
 * This component renders a responsive page for the "NMR Fundamentals" section.
 * It dynamically adjusts to different screen sizes using Tailwind CSS.
 *
 * Key Features:
 * - Uses `flexbox` for layout responsiveness.
 * - Adjusts text sizes and spacing for different screen sizes.
 * - Provides navigation links to related sections.
 * - Includes a back button for easy navigation.
 */
import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * CourseUsage component renders the page for the course usage projects.
 *
 * This component displays a title and several links to different course usage
 * projects. Each link navigates to a specific project page.
 *
 * @returns {JSX.Element} The JSX code for the CourseUsage page.
 */
export default function CourseUsage() {
  return (
    <main className="bg-[#0C0C31] flex flex-col items-center px-4">
      {/* Title Section */}
      <div className="w-full text-left pt-15 pb-10">
        <p className="text-[#A5C882] font-bold text-[200px] leading-45 ml-120">
          <span className="text-white">N</span>
          UCLEAR
        </p>
        <p className="text-[#A5C882] font-bold text-[200px] leading-45 ml-55 text-center">
          <span className="text-white">M</span>
          AGNETIC
        </p>
        <p className="text-[#A5C882] font-bold text-[200px] leading-45 text-center">
          <span className="text-white">R</span>
          ESONANCE
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/gen-chem"
          className="flex flex-col items-center justify-center font-bold text-[5vw] md:text-[40px] w-[80%] md:w-[395px] h-[100px] md:h-[140px] rounded bg-[#080821] text-center p-4"
        >
          General
          <br />
          Chemistry
        </Link>
        {/* Here it is used to link to the General Chemistry page */}
        <Link
          to="/org-chem"
          className="flex flex-col items-center justify-center font-bold text-[5vw] md:text-[40px] w-[80%] md:w-[395px] h-[100px] md:h-[140px] rounded bg-[#080821] text-center p-4"
        >
          Organic
          <br />
          Chemistry
        </Link>
        {/* Here it is used to link to the Organic Chemistry page */}
        <Link
          to="/bio-inst"
          className="flex flex-col items-center justify-center font-bold text-[5vw] md:text-[40px] w-[80%] md:w-[395px] h-[100px] md:h-[140px] rounded bg-[#080821] text-center p-4"
        >
          Biologoical
          <br />
          Instrumentation
        </Link>
        {/* Here it is used to link to the Biological Instrumentation page */}
        <Link
          to="/adv-syn"
          className="flex flex-col items-center justify-center font-bold text-[5vw] md:text-[40px] w-[80%] md:w-[395px] h-[100px] md:h-[140px] rounded bg-[#080821] text-center p-4"
        >
          Advanced
          <br />
          Synthesis
        </Link>
        {/* Here it is used to link to the Advanced Synthesis page */}
      </div>
      {/* Back Button */}
      <div className="flex items-center justify-center w-full mt-10">
        <Link
          to="/"
          className="flex items-center text-[#A5C882] text-[5vw] md:text-[30px] font-bold"
        >
          <ArrowBackIosIcon sx={{ fontSize: 55 }} />
          <span>Back</span>
        </Link>
      </div>
    </main>
  );
}
