import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function SynPho() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Faculty Research
      </h1>

      <img
        src="/public/images/Student_2.png"
        alt="soil"
        className=" h-full "
      ></img>

      <Link to="/diana" className="absolute top-[1000px] left-[1400px]">
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[430px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Synthesis of phosphorus <br /> derivatives of castor and <br />{" "}
            lesquerella oils
            <br />
            <br />
            This project is a collaboration with chemists at the U.S. Department
            of Agriculture, Agricultural Research Service (USDA-ARS), Bio-Oils
            Research (BOR) Group in Peoria, IL, dealing with the synthesis of
            phosphorus derivatives of castor and lesquerella oils.
          </p>
        </div>
      </div>
    </main>
  );
}
