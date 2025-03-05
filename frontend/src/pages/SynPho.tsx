import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * SynPho component renders the page for the synthesis of phosphorus derivatives project.
 *
 * This component displays information about the synthesis of phosphorus derivatives of castor
 * and lesquerella oils. It includes a title, an image, a description, and a link to navigate back
 * to the previous page.
 *
 * @returns {JSX.Element} The JSX code for the SynPho page.
 */
export default function SynPho() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/Student_2.png"
            alt=""
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[65px] font-bold text-[#A5C882] leading-[100px]">
            Synthesis of phosphorus <br /> derivatives of castor and <br />
            lesquerella oils
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              This project is a collaboration with chemists at the U.S.
              Department of Agriculture, Agricultural Research Service
              (USDA-ARS), Bio-Oils Research (BOR) Group in Peoria, IL, dealing
              with the synthesis of phosphorus derivatives of castor and
              lesquerella oils.
            </p>
          </div>
          <div className="flex gap-10 items-left w-full self-end justify-self-end">
            <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
              <Link to="/diana">
                <ArrowBackIosIcon sx={{ fontSize: 55 }} />
                <span>Back</span>
              </Link>
              {/* Here it is used to link to the Diana page */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
