import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function NuclProt() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Advanced Synthesis
      </h1>

      <img
        src="/public/images/4e2 - Precatalyst Synthesis - DS mesparent timelapse images 1.png"
        alt="precatalyst synthesis"
        className=" h-full "
      ></img>

      <Link to="/adv-syn" className="absolute top-[1000px] left-[1400px]">
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[430px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Precatalyst <br />
            Synthesis
            <br />
            <br />
            Students bind their synthesized ligands to the iron(II) bromide to
            form precatalysts that are paramagnetic, which are then identified
            in part of 1H NMR spectroscopy using modified parameters to
            accommodate the magnetism from the metal center.
          </p>
        </div>
      </div>
    </main>
  );
}
