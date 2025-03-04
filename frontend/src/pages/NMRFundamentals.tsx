import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function NMRFundamentals() {
  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
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
          to="/nmr-instrumentation"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          NMR
          <br />
          Instrumentation
        </Link>
        <Link
          to="/interpreting"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Interpreting
          <br />
          NMR Spectrum
        </Link>
        <Link
          to="/diagram"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Diagram of <br /> Componets
        </Link>
      </div>
      {/* Navigation buttons */}
      <div className="flex gap-10 items-center w-full px-20">
        <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start mr-145">
          <Link to="/">
            <ArrowBackIosIcon sx={{ fontSize: 55 }} />
            <span>Back</span>
          </Link>
        </div>
      </div>
      <h1 className="absolute text-[#A5C882] text-[65px] font-semibold top-[35px] left-[230px]">
        NMR Fundamentals
      </h1>
    </main>
  );
}
