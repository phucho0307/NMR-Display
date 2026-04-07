import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * Yeast component renders the page for the yeast fermentation project.
 *
 * This component displays information about the use of 13C NMR spectroscopy to follow
 * the formation of fermentation products over time. It includes a title, an image,
 * a description, and a link to navigate back to the previous page.
 *
 * @returns {JSX.Element} The JSX code for the Yeast page.
 */
export default function Yeast() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">

      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/static/images/cermak_student_140421_0073.png"
            alt="general chemistry"
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[100px] font-bold text-[#A5C882] leading-[100px]">
            Yeast <br />
            Fermentation
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              In this experiment, students use <sup>13</sup>C NMR spectroscopy to follow
              the formation of the fermentation products over time.
            </p>
          </div>
          <div className="flex gap-10 items-left w-full self-end justify-self-end">
            <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
              <Link to="/bio-inst">
                <ArrowBackIosIcon sx={{ fontSize: 55 }} />
                <span>Back</span>
              </Link>
              {/* Here it is used to link to the Biological Instrumentation page */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
