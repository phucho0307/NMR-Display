import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * Stereo component renders the page for the stereoselective reduction of camphor project.
 *
 * This component displays information about the use of 1H NMR spectroscopy to determine
 * the stereoselectivity of the borohydride reduction of camphor. It includes a title, an image,
 * a description, and a link to navigate back to the previous page.
 *
 * @returns {JSX.Element} The JSX code for the Stereo page.
 */
export default function Stereo() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <div className="flex gap-10">
        <img
          src="/images/chemistry-lab-40156.png"
          alt="spectrsocopy unknown lab"
          className="h-[830px]"
        ></img>

        <div className="flex flex-col items-start justify-evenly">
          <h2 className="text-[100px] font-bold text-[#A5C882] leading-[100px]">
            Stereoselective <br />
            Reduction of Camphor
          </h2>
          <p className="font-serif text-[36px]  text-[#FEFCFC]">
            1H NMR spectroscopy is used to determine the stereoselectivity of
            the borohydride reduction of camphor, a chiral ketone, through
            integration of two particular hydrogens in the 1H NMR spectrum of
            the product mixture.
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
