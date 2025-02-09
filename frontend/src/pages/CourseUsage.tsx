import { Link } from "react-router";

export default function CourseUsage() {
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
          to="/gen-chem"
          className="flex font-semibold text-[40px] px-15 py-[10px] justify-between rounded bg-[#080821] text-center"
        >
          General
          <br />
          Chemistry
        </Link>
        <Link
          to="/org-chem"
          className="flex font-semibold text-[40px] px-15 py-[10px] justify-between rounded bg-[#080821] text-center"
        >
          Organic
          <br />
          Chemistry
        </Link>
        <Link
          to="/biological"
          className="flex font-semibold text-[40px] px-[60px] py-[8px] justify-between rounded bg-[#080821] text-center"
        >
          Biological <br /> Instrumentation
        </Link>
        <Link
          to="/adv-syn"  
          className="flex font-semibold text-[40px] px-15 py-[8px] justify-between rounded bg-[#080821] text-center"
        >
          Advanced <br /> Synthesis
        </Link>
      </div>

      <p className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Course Usage
      </p>
    </main>
  );
}
