import { Link } from "react-router";

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
        <Link
          to="/3-week"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          3-Week Lab
          <br />
          Synthesis Project
        </Link>
        <Link
          to="/stereo"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Stereoselective <br /> Reduction of Camphor
        </Link>
      </div>
      <h1 className="absolute text-[#A5C882] text-[270px] font-bold left-[320px] top-[230px] leading-[260px] text-center ">
        Organic 
        <br/>
        Chemistry
      </h1>
    </main>
  );
}
