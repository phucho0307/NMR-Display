import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * Katie component renders the page for Dr. Katie Adelsberger's research.
 *
 * This component displays information about Dr. Adelsberger's research on soil phosphorus.
 * It includes a title, an image, a description, and a link to navigate back to the
 * previous page.
 *
 * @returns {JSX.Element} The JSX code for the Katie page.
 */
export default function Katie() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">

      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/static/images/soil.png"
            alt="Katie Adelsberger, PhD at green oaks"
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[100px] font-bold text-[#A5C882] leading-[100px]">
            Soil Phosphorus
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
            <p>
              Professor Adelsberger's research focuses on the characterization
              of soil phosphorus in prairie soils in order to determine the
              primary controls on phosphorus availability. Available forms may
              be affected by processes such as prairie burns, erosion, and
              animal manuring. Here, we see a student taking a core sample. This
              graph shows the phosphorus results from samples captured from
              different prairies at Green Oaks. As you can see, all levels of
              phosphorus are the same for each prairie.
            </p>
          </div>
          <div className="flex gap-10 items-left w-full self-end justify-self-end">
            <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
              <Link to="/faculty-research">
                <ArrowBackIosIcon sx={{ fontSize: 55 }} />
                <span>Back</span>
              </Link>
              {/* Here it is used to link to the Faculty Research page */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
