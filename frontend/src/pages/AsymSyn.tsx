import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * AsymSyn component renders the page for the asymmetric synthesis project.
 *
 * This component displays information about the asymmetric synthesis of camphor-based
 * sulfonyl imines and ketones. It includes a title, an image, a description, and a link
 * to navigate back to the previous page.
 *
 * @returns {JSX.Element} The JSX code for the AsymSyn page.
 */
export default function AsymSyn() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute top-[50px] left-[220px] text-[#A5C882] text-[50px] font-semibold">
        Dr. Diana Cermak
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/Student_1.png"
            alt=""
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[65px] font-bold text-[#A5C882] leading-[100px]">
            Asymmetric synthesis of camphor-based sulfonyl <br /> imines and
            ketones
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              This project focuses on the asymmetric synthesis of camphor-based
              sulfonyl imines and ketones. These molecules can be converted to
              oxaziridines, an asymmetric, electrophilic oxygen source, or to
              sulfonylamines, which have potential use as a chiral auxiliary—a
              molecule which can transfer chirality to an achiral molecule.
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
