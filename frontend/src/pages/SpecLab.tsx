import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * SpecLab component renders the page for the spectroscopy unknown lab project.
 *
 * This component displays information about the use of 13C NMR spectroscopy
 * in distinguishing the number of types of carbon atoms among isomer compounds.
 * It includes a title, an image, a description, and a link to navigate back to the
 * previous page.
 *
 * @returns {JSX.Element} The JSX code for the SpecLab page.
 */
export default function SpecLab() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <div className="flex gap-10">
        <img
          src="/images/Spectroscopy Unknown Lab.jpg"
          alt="spectrsocopy unknown lab"
          className="h-[830px]"
        ></img>

        <div className="flex flex-col items-start justify-evenly">
          <h2 className="text-[100px] font-bold text-[#A5C882] leading-[100px]">
            Spectroscopy <br />
            Unknown Lab
          </h2>
          <p className="font-serif text-[36px]  text-[#FEFCFC]">
            13C NMR spectroscopy is used to distinguish the number of types of
            carbon atoms among a set of isomer compounds with the same molecular
            formula but different structures.
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
