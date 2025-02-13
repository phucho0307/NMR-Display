import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function Diana() {
  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <Link
        to="/faculty-research"
        className="absolute top-[1000px] left-[1400px]"
      >
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="absolute top-[831px] flex space-x-[76px] w-[1920px] justify-center">
        <Link
          to="/asym-syn"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Asymmetric Synthesis
        </Link>
        <Link
          to="/syn-pho"
          className="flex font-semibold items-center justify-center text-[40px]  w-[395px] h-[140px] rounded bg-[#080821] text-center"
        >
          Synthesis of
          <br />
          Phosphorus Derivatives
        </Link>
      </div>
      <h1 className="absolute text-[#A5C882] text-[200px] font-bold left-[200px] top-[380px] leading-[260px] text-center ">
        Dr. Diana Cermak
      </h1>
    </main>
  );
}
