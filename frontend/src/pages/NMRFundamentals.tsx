import { Link } from "react-router";

export default function NMRFundamentals() {
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

      <div className="text-[#FEFCFC]">
        <Link
          to="/nmr-instrumentation"
          className="absolute w-[395px] h-[130px] left-[298px] top-[831px] font-semibold text-[40px] px-15 py-5 rounded bg-[#080821] text-center"
        >
          NMR
          <br />
          Instrumentation
        </Link>
        <Link
          to="/course-usage"
          className="absolute w-[395px] h-[130px] left-[768px] top-[831px] font-semibold text-[40px] px-[60px] py-5 rounded bg-[#080821] text-center"
        >
          Interpreting<br/>NMR Spectrum
        </Link>
        < Link
          to="/faculty-research"
          className="absolute  w-[395px] h-[130px] left-[1234px] top-[831px] font-semibold text-[40px] px-15 py-5 rounded bg-[#080821] text-center"
        >
          Diagram <br/> of Componets
        </Link>
      </div>
    </main>
  );
}
