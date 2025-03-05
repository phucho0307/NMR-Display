import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * NuclProt component renders the page for the nucleotide protonation state and metal binding project.
 *
 * This component displays information about how the protonation state of the ATP nucleotide influences
 * the binding of Magnesium Cation. It includes a title, an image, a description, and a link to navigate
 * back to the previous page.
 *
 * @returns {JSX.Element} The JSX code for the NuclProt page.
 */
export default function NuclProt() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute top-[50px] left-[220px] text-[#A5C882] text-[50px] font-semibold">
        Biological Instrumentation
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/chemistry-lab-71371.png"
            alt="general chemistry"
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[100px] font-bold text-[#A5C882] leading-[100px]">
            Nucleotide Protonation <br />
            State and Metal Binding
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              Students use 31P NMR spectroscopy to study how the protonation
              state of the ATP nucleotide influences the binding of Magnesium
              Cation.
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
