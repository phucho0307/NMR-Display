import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

export default function NuclProt() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Biological Instrumentation
      </h1>

      <img
        src="/public/images/chemistry-lab-71371.png"
        alt="nucleotide protonation"
        className="abosolute h-full "
      ></img>

      <Link to="/bio-inst" className="absolute top-[1000px] left-[1400px]">
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[430px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Nucleotide Protonation <br />
            State and Metal Binding
            <br />
            <br />
            Students use 31P NMR spectroscopy to study how the protonation state
            of the ATP nucleotide influences the binding of Magnesium Cation.
          </p>
        </div>
      </div>
    </main>
  );
}
