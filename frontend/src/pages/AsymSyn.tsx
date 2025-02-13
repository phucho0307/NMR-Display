import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function AsymSyn() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Faculty Research
      </h1>

      <img
        src="/public/images/Student_1.png"
        alt="soil"
        className=" h-full "
      ></img>

      <Link to="/diana" className="absolute top-[1000px] left-[1400px]">
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[280px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Asymmetric synthesis of <br /> camphor-based sulfonyl <br /> imines
            and ketones
            <br />
            <br />
            This project focuses on the asymmetric synthesis of camphor-based
            sulfonyl imines and ketones. These molecules can be converted to
            oxaziridines, an asymmetric, electrophilic oxygen source, or to
            sulfonylamines, which have potential use as a chiral auxiliary—a
            molecule which can transfer chirality to an achiral molecule.
          </p>
        </div>
      </div>
    </main>
  );
}
