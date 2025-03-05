import { Link } from "react-router";

/**
 * FacultyResearch component renders the page for faculty research projects.
 *
 * This component displays a title and several links to different faculty research
 * projects. Each link navigates to a specific faculty member's research page.
 *
 * @returns {JSX.Element} The JSX code for the FacultyResearch page.
 */
export default function FacultyResearch() {
  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <p className="text-[#0C0C31]">hi, used to "create" the page</p>
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[190px] left-[430px]">
        NUCLEAR
      </p>
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[359px] left-[605px]">
        MAGNETIC
      </p>
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[526px] left-[335px]">
        RESONACE
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[190px] left-[430px]">
        N
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[359px] left-[605px]">
        M
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[526px] left-[335px]">
        R
      </p>

      <div className="absolute top-[831px] flex space-x-[70px] w-[1920px] justify-center">
        <Link
          to="/katie"
          className="flex font-semibold items-center justify-center text-[40px]  w-[460px] h-[140px] rounded bg-[#080821] text-center"
        >
          Katie Adelsberger, PhD
        </Link>
        {/* Here it is used to link to the Katie Adelsberger page */}
        <Link
          to="/diana"
          className="flex font-semibold items-center justify-center text-[40px]  w-[460px] h-[140px] rounded bg-[#080821] text-center"
        >
          Diana Cermak, PhD
        </Link>
        {/* Here it is used to link to the Diana Cermak page */}
        <Link
          to="/helen"
          className="flex font-semibold items-center justify-center text-[40px]  w-[460px] h-[140px] rounded bg-[#080821] text-center"
        >
          Helen Hoyt, PhD
        </Link>
        {/* Here it is used to link to the Helen Hoyt page */}
      </div>
    </main>
  );
}
