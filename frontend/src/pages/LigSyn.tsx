import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function LigSyn() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute top-[50px] left-[220px] text-[#A5C882] text-[50px] font-semibold">
        Advanced Synthesis
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/Rectangle 93.png"
            alt="a student preparing for a ligand synthesis"
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[80px] font-bold text-[#A5C882] leading-[100px]">
            Ligand <br />
            Synthesis
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              Students prepare new compounds to bind to and support transition
              metal catalysts, using 1D (1H, 13C, DEPT-135), and 2D (HSQC, HMBC)
              NMR experiments to identify the new products they have formed.
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
