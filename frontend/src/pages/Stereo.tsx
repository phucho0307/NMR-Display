import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function Stereo() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Organic Chemistry
      </h1>

      <img
        src="/public/images/chemistry-lab-40156.png"
        alt="steroselective lab"
        className="abosolute h-full"
      ></img>
      <Link to="/org-chem" className="absolute top-[1000px] left-[1400px]">
        {" "}
        <ArrowBackIcon />
      </Link>
      <div className="flex absolute top-[430px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Steroselective <br />
            Reduction of Camphor
            <br />
            <br />
            1H NMR spectroscopy is used to determine the stereoselectivity of
            the borohydride reduction of camphor, a chiral ketone, through
            integration of two particular hydrogens in the 1H NMR spectrum of
            the product mixture.
          </p>
        </div>
      </div>
    </main>
  );
}
