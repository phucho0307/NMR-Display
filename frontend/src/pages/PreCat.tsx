import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function DetRate() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute top-[50px] left-[220px] text-[#A5C882] text-[50px] font-semibold">
        Advanced Synthesis
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/4e2 - Precatalyst Synthesis - DS mesparent timelapse images 1.png"
            alt="precatalyst synthesis"
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[80px] font-bold text-[#A5C882] leading-[100px]">
            Precatalyst <br />
            Synthesis
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              Students bind their synthesized ligands to the iron(II) bromide to
              form precatalysts that are paramagnetic, which are then identified
              in part of 1H NMR spectroscopy using modified parameters to
              accommodate the magnetism from the metal center.
            </p>
          </div>
          <div className="flex gap-10 items-left w-full self-end justify-self-end">
            <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
              <Link to="/adv-syn">
                <ArrowBackIosIcon sx={{ fontSize: 55 }} />
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



