import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function LigSyn() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Advanced Synthesis
      </h1>

      <img
        src="/public/images/Rectangle 93.png"
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
            Ligand <br />
            Synthesis
            <br />
            <br />
            Students prepare new compounds to bind to and support transition
            metal catalysts, using 1D (1H, 13C, DEPT-135), and 2D (HSQC, HMBC)
            NMR experiments to identify the new products they have formed.
          </p>
        </div>
      </div>
    </main>
  );
}
