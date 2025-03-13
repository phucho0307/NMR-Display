/**
 * AboutProj Component
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
 * AboutProj component that displays the main project about page.
 *
 * This component provides a brief introduction to the NMR project with large, bold text
 * and navigation links to other sections of the project. It uses absolute positioning
 * and specific CSS classes to achieve the desired layout and styling.
 *
 * The `Link` component from `react-router` is used to create navigation links that allow
 * users to navigate to different pages within the application without causing a full page reload.
 * Here it is used to navigate to the About, Credits, and Special Thanks pages.
 *
 * @returns {JSX.Element} The rendered AboutProj page.
 */
export default function AboutProj() {
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
          to="/about"
          className="flex flex-col items-center justify-center font-bold text-[40px] w-[400px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          About
        </Link>
        <Link
          to="/credits"
          className="flex flex-col items-center justify-center font-bold text-[40px] w-[400px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          Credits
        </Link>
        <Link
          to="/special-thanks"
          className="flex flex-col items-center justify-center font-bold text-[40px] w-[400px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          Special Thanks
        </Link>
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
