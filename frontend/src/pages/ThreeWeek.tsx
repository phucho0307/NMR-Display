import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * ThreeWeek component renders the page for the 3-week synthesis project.
 *
 * This component displays information about the use of 1H and 13C NMR spectroscopy
 * to characterize reaction products during a 3-week synthesis project. It includes
 * a title, an image, a description, and a link to navigate back to the previous page.
 *
 * @returns {JSX.Element} The JSX code for the ThreeWeek page.
 */
export default function ThreeWeek() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <div className="flex gap-10">
        <img
          src="/static/images/chemistry.png"
          alt="spectrsocopy unknown lab"
          className="h-[830px]"
        ></img>

        <div className="flex flex-col items-start justify-evenly">
          <h2 className="text-[100px] font-bold text-[#A5C882] leading-[100px]">
            3 Week <br />
            Synthesis
          </h2>
          <p className="font-serif text-[36px]  text-[#FEFCFC]">
          <sup>1</sup>H and <sup>13</sup>C NMR spectroscopy are used to characterize three reaction
            products during a 3-week synthesis project which culminates in the
            synthesis of 5, 5-diphenyl-4-penten-2-one.
          </p>
          <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
            <Link to="/org-chem" className="">
              <ArrowBackIosIcon sx={{ fontSize: 55 }} />
              <span>Back</span>
            </Link>
            {/* Here it is used to link to the Organic Chemistry page */}
          </div>
        </div>
      </div>
    </main>
  );
}
