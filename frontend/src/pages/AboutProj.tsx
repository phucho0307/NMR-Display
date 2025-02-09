import { Link } from "react-router";

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
          to="/credit"
          className="flex font-semibold items-center justify-center  text-[40px]  w-[390px] h-[100px] rounded bg-[#080821] text-center"
        >
          Credit
        </Link>
        <Link
          to="/special-thanks"
          className="flex font-semibold items-center justify-center text-[40px]  w-[390px] h-[100px] rounded bg-[#080821] text-center"
        >
          Special Thanks 
        </Link>
      </div>

      <p className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        About
      </p>
    </main>
  );
}
