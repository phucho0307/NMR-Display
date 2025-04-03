import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * DetRate component renders the page for the rate constant determination project.
 *
 * This component displays information about determining the rate constant for proton
 * exchange in Thiamine. It includes a title, an image, a description, and a link
 * to navigate back to the previous page.
 *
 * @returns {JSX.Element} The JSX code for the DetRate page.
 */
export default function DetRate() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/chemistry-lab-41277.png"
            alt="nucleotide protonation"
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[80px] font-bold text-[#A5C882] leading-[100px]">
            Determining the Rate Constant for Proton <br /> Exchange in Thiamine
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              In this experiment students use <sup>1</sup>H NMR to study the rate of proton
              exchange with deuterium in Thiamine.
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
