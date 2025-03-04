import { Link } from "react-router";

/**
 * AdvSyn component that displays the Advanced Synthesis page.
 *
 * This component provides navigation links to the Ligand Synthesis and Precatalyst Synthesis pages.
 * It uses absolute positioning and specific CSS classes to achieve the desired layout and styling.
 *
 * The `Link` component from `react-router` is used to create navigation links that allow
 * users to navigate to different pages within the application without causing a full page reload.
 * Here it is used to navigate to the Ligand Synthesis and Precatalyst Synthesis pages.
 * 
 * @returns {JSX.Element} The rendered AdvSyn page.
 */
export default function AdvSyn() {
  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <div className="absolute top-[831px] flex space-x-[76px] w-[1920px] justify-center">
        <Link
          to="/lig-syn"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Ligand
          <br />
          Synthesis
        </Link>
        <Link
          to="/pre-cat"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Precatalyst
          <br />
          Synthesis
        </Link>
      </div>
      <h1 className="absolute text-[#A5C882] text-[270px] font-bold left-[320px] top-[230px] leading-[260px] text-center ">
        Advanced
        <br />
        Synthesis
      </h1>
    </main>
  );
}
