import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function Yeast() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Biological Instrumentation
      </h1>

      <img
        src="/public/images/cermak_student_140421_0073.png"
        alt="yeast fermentation"
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
            Yeast <br />
            Fermentation
            <br />
            <br />
            In this experiment, students use 13C NMR spectroscopy to follow the
            formation of the fermentation products over time.
          </p>
        </div>
      </div>
    </main>
  );
}
