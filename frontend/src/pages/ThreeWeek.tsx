import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function ThreeWeek() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Organic Chemistry
      </h1>

      <img
        src="/public/images/chemistry.png"
        alt="spectrsocopy unknown lab"
        className="abosolute h-full"
      ></img>

<Link to="/org-chem" className="absolute top-[1000px] left-[1400px]"> <ArrowBackIcon /></Link>

      <div className="flex absolute top-[430px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            3 Week <br />
            Synthesis
            <br />
            <br />
            1H and 13C NMR spectroscopy are used to characterize three reaction
            products during a 3-week synthesis project which culminates in the
            synthesis of 5, 5-diphenyl-4-penten-2-one.
          </p>
        </div>
      </div>
    </main>
  );
}
