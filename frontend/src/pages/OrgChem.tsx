/**
 * OrgChem Component
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
 * OrgChem component renders the page for the organic chemistry projects.
 *
 * This component displays a title and several links to different organic chemistry
 * projects. Each link navigates to a specific project page.
 *
 * @returns {JSX.Element} The JSX code for the OrgChem page.
 */
export default function OrgChem() {
  return (
    <main className="bg-[#0C0C31] flex flex-col items-center px-4">
      {/* Title Section */}
      <div className="w-full text-left pt-15 pb-10">
        <h1 className="text-[#A5C882] text-[270px] font-bold leading-[260px] text-center ">
          Organic
          <br />
          Chemistry
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/spec-lab"
          className="flex flex-col items-center justify-center font-bold text-[35px] w-[395px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          Spectroscopy
          <br />
          Unknown Lab
        </Link>
        {/* Here it is used to link to the Spectroscopy Unknown Lab page */}
        <Link
          to="/3-week"
          className="flex flex-col items-center justify-center font-bold text-[35px] w-[395px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          3-Week Lab
          <br />
          Synthesis Project
        </Link>
        {/* Here it is used to link to the 3-Week Lab Synthesis Project page */}
        <Link
          to="/stereo"
          className="flex flex-col items-center justify-center font-bold text-[32px] w-[395px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          Stereoselective <br /> Reduction of Camphor
        </Link>
        {/* Here it is used to link to the Stereoselective Reduction of Camphor page */}
      </div>

      {/* Back Button */}
      <div className="flex items-center justify-center w-full mt-10">
        <Link
          to="/course-usage"
          className="flex items-center text-[#A5C882] text-[5vw] md:text-[30px] font-bold"
        >
          <ArrowBackIosIcon sx={{ fontSize: 55 }} />
          <span>Back</span>
        </Link>
      </div>
    </main>
  );
}
