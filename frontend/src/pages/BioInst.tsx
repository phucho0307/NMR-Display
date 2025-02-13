import { Link } from "react-router";

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
        <Link
          to="/nucl-prot"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Nucleotide Protonation
          <br/>
          State and Metal Binding
        </Link>
        <Link
          to="/det-rate"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Rate Constant for Proton 
          <br/>
          Exchange in Thiamine
        </Link>
      </div>
      <h1 className="absolute text-[#A5C882] text-[200px] font-bold left-[240px] top-[230px] leading-[260px] text-center ">
        Biological 
        <br/>
        Instrumentation
      </h1>
    </main>
  );
}
