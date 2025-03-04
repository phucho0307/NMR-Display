import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * Helen component renders the page for Dr. Helen Hoyt's research.
 *
 * This component displays information about Dr. Hoyt's research in Green Chemistry.
 * It includes a title, an image, a description, and a link to navigate back to the
 * previous page.
 *
 * @returns {JSX.Element} The JSX code for the Helen page.
 */
export default function Helen() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute top-[50px] left-[220px] text-[#A5C882] text-[50px] font-semibold">
        Dr. Helen Hoyt
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/greenchemistry.png"
            alt=""
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <h2 className="text-[80px] font-bold text-[#A5C882] leading-[100px]">
            Green Chemistry
          </h2>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC] overflow-y-auto px-4 scrollbar-custom flex flex-col gap-16 h-[600px]">
            <p>
              Dr. Hoyt’s research resides primarily in the area of Green
              Chemistry by synthesis of Inorganic / Organometallic catalysts to
              form desirable Organic products.
            </p>
            <p>
              The Hoyt research group focuses on catalyst design, following a
              green chemistry approach of incorporating abundant and nontoxic
              metals (iron & copper) into strategically designed compounds to
              catalyze the formation of important organic chemical products. In
              our work, we prepare catalysts that have never before been made,
              and we collect data (NMR spectroscopy included) to solve the
              puzzles of their structure, properties, and reactivity.
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
