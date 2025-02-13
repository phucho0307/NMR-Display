import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

// needs a scroll bar
export default function Helen() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Faculty Research
      </h1>

      <img
        src="/public/images/4e2 - Precatalyst Synthesis - DS mesparent timelapse images 1.png"
        alt="precatalyst synthesis"
        className=" h-full "
      ></img>

      <Link
        to="/faculty-research"
        className="absolute top-[1000px] left-[1400px]"
      >
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[200px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Green <br />
            Chemistry
            <br />
            <br />
            SDr. Hoyt’s research resides primarily in the area of Green
            Chemistry by synthesis of Inorganic / Organometallic catalysts to
            form desirable Organic products. 
            <br/>
            <br/>
            The Hoyt research group focuses on
            catalyst design, following a green chemistry approach of
            incorporating abundant and nontoxic metals (iron & copper) into
            strategically designed compounds to catalyze the formation of
            important organic chemical products. In our work, we prepare
            catalysts that have never before been made, and we collect data (NMR
            spectroscopy included) to solve the puzzles of their structure,
            properties, and reactivity.
          </p>
        </div>
      </div>
    </main>
  );
}
