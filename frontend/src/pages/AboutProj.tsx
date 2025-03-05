import { Link } from "react-router";

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

      <div className="absolute top-[831px] flex space-x-[76px] w-[1920px] justify-center">
        <Link
          to="/about"
          className="flex font-semibold items-center justify-center text-[40px] w-[390px] h-[100px] rounded bg-[#080821] text-center"
        >
          About
        </Link>
        <Link
          to="/credits"
          className="flex font-semibold items-center justify-center  text-[40px]  w-[390px] h-[100px] rounded bg-[#080821] text-center"
        >
          Credits
        </Link>
        <Link
          to="/special-thanks"
          className="flex font-semibold items-center justify-center text-[40px]  w-[390px] h-[100px] rounded bg-[#080821] text-center"
        >
          Special Thanks
        </Link>
      </div>
    </main>
  );
}
