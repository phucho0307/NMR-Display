import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function DetRate() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Biological Instrumentation
      </h1>

      <img
        src="/public/images/chemistry-lab-41277.png"
        alt="nucleotide protonation"
        className="abosolute h-full "
      ></img>

      <Link to="/bio-inst" className="absolute top-[1000px] left-[1400px]">
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[430px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Determining the Rate <br /> Constant for Proton <br /> Exchange in
            Thiamine
            <br />
            <br />
            In this experiment students use 1H NMR to study the rate of proton
            exchange with deuterium in Thiamine.
          </p>
        </div>
      </div>
    </main>
  );
}
