/**
 * Diagram component renders the page for the NMR diagram.
 *
 * This component displays a diagram of NMR components and several buttons
 * that send API requests when clicked. Each button corresponds to a different
 * component of the NMR diagram.
 *
 * @returns {JSX.Element} The JSX code for the Diagram page.
 */
import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Diagram() {
  // 3 divs aligned horizontally
  // div 1 + 3 are the buttons on the left and right
  // the buttons center aligned horizontally each with the different positions
  // diagram in the middle

  // const [response, setResponse] = useState(null);

  /**
   * Handles the button click event to send an API request.
   *
   * @async
   */
  const handleClick = async () => {
    // Implement the API request logic here
  };

  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <div className="absolute w-full h-[900px] flex items-center justify-center">
        <img
          src="/images/NMRDiagramPlaceholder.png"
          alt="NMR diagram"
          className="h-[873.8px] w-[530.4px]"
        ></img>
      </div>

      <div>
        <button
          onClick={handleClick}
          className="absolute top-[220px] left-[170px] bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          All Components
        </button>
        {/* Here it is used to send an API request for all components */}

        <button
          onClick={handleClick}
          className="absolute top-[420px] left-[170px] bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          The Magnet
        </button>
        {/* Here it is used to send an API request for the magnet component */}

        <button
          onClick={handleClick}
          className="absolute top-[620px] left-[170px] bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          Liquid Nitrogen
        </button>
        {/* Here it is used to send an API request for the liquid nitrogen component */}

        <button
          onClick={handleClick}
          className="absolute top-[820px] left-[170px] bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          Liquid Helium
        </button>
        {/* Here it is used to send an API request for the liquid helium component */}

        <button
          onClick={handleClick}
          className="absolute top-[220px] left-[1450px] bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          The Sample
        </button>
        {/* Here it is used to send an API request for the sample component */}

        <button
          onClick={handleClick}
          className="absolute top-[420px] left-[1450px] bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          Mylar
        </button>
        {/* Here it is used to send an API request for the mylar component */}

        <button
          onClick={handleClick}
          className="absolute top-[620px] left-[1450px] bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          Shim Coils
        </button>
        {/* Here it is used to send an API request for the shim coils component */}

        <button
          onClick={handleClick}
          className="absolute top-[820px] left-[1450px] bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          The Pulse
        </button>
        {/* Here it is used to send an API request for the pulse component */}
      </div>
      <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start mr-145 absolute bottom-10 left-16">
          <Link to="/nmr-fundamentals">
            <ArrowBackIosIcon sx={{ fontSize: 55 }} />
            <span>Back</span>
          </Link>
        </div>
    </main>
  );
}
