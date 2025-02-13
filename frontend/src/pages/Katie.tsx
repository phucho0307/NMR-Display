import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

// needs a scroll bar
export default function Katie() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Faculty Research
      </h1>

      <img src="/public/images/soil.png" alt="soil" className=" h-full "></img>

      <Link
        to="/faculty-research"
        className="absolute top-[1000px] left-[1400px]"
      >
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[200px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Soil Phosphorus
            <br />
            <br />
            Professor Adelsberger's research focuses on the characterization of
            soil phosphorus in prairie soils in order to determine the primary
            controls on phosphorus availability. Available forms may be affected
            by processes such as prairie burns, erosion, and animal manuring.
            Here, we see a student taking a core sample.This graph shows the
            phosphorus results from samples captured from different prairies at
            Green Oaks. As you can see, all levels of phosphorus are the same
            for each prairie.
          </p>
        </div>
      </div>
    </main>
  );
}
