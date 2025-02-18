import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ThreeWeek() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Organic Chemistry
      </h1>
      <div className="flex gap-10">
        <img
          src="/images/chemistry.png"
          alt="spectrsocopy unknown lab"
          className="h-[830px]"
        ></img>

        <div className="flex flex-col items-start justify-evenly">
          <h2 className="text-[100px] font-bold text-[#A5C882] leading-[100px]">
            3 Week <br />
            Synthesis
          </h2>
          <p className="font-serif text-[36px]  text-[#FEFCFC]">
            1H and 13C NMR spectroscopy are used to characterize three reaction
            products during a 3-week synthesis project which culminates in the
            synthesis of 5, 5-diphenyl-4-penten-2-one.
          </p>
          <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
            <Link to="/org-chem" className="">
              <ArrowBackIosIcon sx={{ fontSize: 55 }} />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

