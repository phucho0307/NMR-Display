import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function GenChem() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute top-[10px] left-[200px] text-[#A5C882] text-[70px] font-semibold">
        General Chemistry
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/cermak-student.png"
            alt="general chemistry"
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[100px] font-bold text-[#A5C882] leading-[100px]">
            Carbon-13 NMR
            <br />
            Spectroscopy
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              13C NMR spectroscopy is used to distinguish the number of types of
              carbon atoms among a set of isomer compounds with the same
              molecular formula but different structures.
            </p>
          </div>
          <div className="flex gap-10 items-left w-full self-end justify-self-end">
            <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
              <Link to="/course-usage">
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
