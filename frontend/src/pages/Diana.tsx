import { Link } from "react-router";

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
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <div className="absolute top-[831px] flex space-x-[76px] w-[1920px] justify-center">
        <Link
          to="/asym-syn"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Asymmetric Synthesis
        </Link>
        {/* Here it is used to link to the Asymmetric Synthesis page */}
        <Link
          to="/syn-pho"
          className="flex font-semibold items-center justify-center text-[32px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Synthesis of
          <br />
          Phosphorus Derivatives
        </Link>
        {/* Here it is used to link to the Synthesis of Phosphorus Derivatives page */}
      </div>
      <h1 className="absolute text-[#A5C882] text-[200px] font-bold left-[200px] top-[380px] leading-[260px] text-center ">
        Dr. Diana Cermak
      </h1>
    </main>
  );
}
