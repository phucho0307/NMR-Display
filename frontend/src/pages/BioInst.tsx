/**
 * BioInst Component
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
 * BioInst component renders the page for the biological instrumentation projects.
 *
 * This component displays a title and several links to different biological instrumentation
 * projects. Each link navigates to a specific project page.
 *
 * @returns {JSX.Element} The JSX code for the BioInst page.
 */
export default function BioInst() {
  return (
    <main className="bg-[#0C0C31] flex flex-col items-center px-4">
      {/* Title Section */}
      <div className="w-full text-left pt-15 pb-10 h-[640px]">
        <h1 className="text-[#A5C882] text-[240px] font-bold leading-[210px] text-center items-center justify-center pt-20">
          Biological
          <br />
          Instrumentation
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/yeast"
          className="flex flex-col items-center justify-center font-bold text-[35px] w-[395px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          Yeast
          <br />
          Fermentation
        </Link>
        {/* Here it is used to link to the Yeast Fermentation page */}
        <Link
          to="/nucl-prot"
          className="flex flex-col items-center justify-center font-bold text-[30px] w-[395px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          Nucleotide Protonation
          <br />
          State and Metal Binding
        </Link>
        {/* Here it is used to link to the Nucleotide Protonation State and Metal Binding page */}
        <Link
          to="/det-rate"
          className="flex flex-col items-center justify-center font-bold text-[30px] w-[395px] h-[140px] rounded bg-[#536365]/35 text-center p-4"
        >
          Rate Constant for Proton
          <br />
          Exchange in Thiamine
        </Link>
        {/* Here it is used to link to the Rate Constant for Proton Exchange in Thiamine page */}
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
