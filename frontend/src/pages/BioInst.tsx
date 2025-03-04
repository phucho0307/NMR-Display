import { Link } from "react-router";

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
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <div className="absolute top-[831px] flex space-x-[76px] w-[1920px] justify-center">
        <Link
          to="/yeast"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Yeast
          <br />
          Fermentation
        </Link>
        {/* Here it is used to link to the Yeast Fermentation page */}
        <Link
          to="/nucl-prot"
          className="flex font-semibold items-center justify-center text-[32px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Nucleotide Protonation
          <br />
          State and Metal Binding
        </Link>
        {/* Here it is used to link to the Nucleotide Protonation State and Metal Binding page */}
        <Link
          to="/det-rate"
          className="flex font-semibold items-center justify-center text-[30px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Rate Constant for Proton
          <br />
          Exchange in Thiamine
        </Link>
        {/* Here it is used to link to the Rate Constant for Proton Exchange in Thiamine page */}
      </div>
      <h1 className="absolute text-[#A5C882] text-[200px] font-bold left-[240px] top-[230px] leading-[260px] text-center ">
        Biological
        <br />
        Instrumentation
      </h1>
    </main>
  );
}
