import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * Diana component renders the page for Dr. Diana Cermak's projects.
 *
 * This component displays a title and several links to different projects
 * led by Dr. Diana Cermak. Each link navigates to a specific project page.
 *
 * @returns {JSX.Element} The JSX code for the Diana page.
 */
export default function Diana() {
  return (
    <main className="bg-[#0C0C31] flex flex-col items-center px-4">
      {/* Title Section */}
      <div className="w-full text-left pt-15 pb-10">
        <h1 className="text-[#A5C882] text-[200px] font-bold leading-[260px] text-center ">
          Biological
          <br />
          Instrumentation
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/asym-syn"
          className="flex flex-col items-center justify-center font-bold text-[30px] w-[395px] h-[140px] rounded bg-[#080821] text-center p-4"
        >
          Asymmetric Synthesis
        </Link>
        {/* Here it is used to link to the Asymmetric Synthesis page */}
        <Link
          to="/syn-pho"
          className="flex flex-col items-center justify-center font-bold text-[30px] w-[395px] h-[140px] rounded bg-[#080821] text-center p-4"
        >
          Synthesis of
          <br />
          Phosphorus Derivatives
        </Link>
        {/* Here it is used to link to the Synthesis of Phosphorus Derivatives page */}
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