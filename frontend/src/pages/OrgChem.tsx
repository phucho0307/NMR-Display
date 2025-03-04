import { Link } from "react-router";

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
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <div className="absolute top-[831px] flex space-x-[76px] w-[1920px] justify-center">
        <Link
          to="/spec-lab"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Spectroscopy
          <br />
          Unknown Lab
        </Link>
        {/* Here it is used to link to the Spectroscopy Unknown Lab page */}
        <Link
          to="/3-week"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          3-Week Lab
          <br />
          Synthesis Project
        </Link>
        {/* Here it is used to link to the 3-Week Lab Synthesis Project page */}
        <Link
          to="/stereo"
          className="flex font-semibold items-center justify-center text-[35px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Stereoselective <br /> Reduction of Camphor
        </Link>
        {/* Here it is used to link to the Stereoselective Reduction of Camphor page */}
      </div>
      <h1 className="absolute text-[#A5C882] text-[270px] font-bold left-[320px] top-[230px] leading-[260px] text-center ">
        Organic
        <br />
        Chemistry
      </h1>
    </main>
  );
}
