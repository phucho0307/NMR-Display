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
  /**
   * Handles the button click event to send an API request.
   *
   * @async
   */
  const CONTROLLER_ID = "controller_1";
  const API_URL = "http://localhost:8000/lighting-controller/";

  const setLight = async (light_id: number) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ controller_id: CONTROLLER_ID, action: "set_light_state", light_id, state: [1] }),
    });
  };

  const handleAllComponentClick = async () => {
    // Turn on all lights (IDs 0–6)
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        controller_id: CONTROLLER_ID,
        action: "update_all_lights",
        states: { "0": [1], "1": [1], "2": [1], "3": [1], "4": [1], "5": [1], "6": [1] },
      }),
    });
  };

  const handleTheMagnetClick = async () => {
    await setLight(0); // light 0 = The Magnet
  };

  const handleLiquidNitrogenClick = async () => {
    await setLight(1); // light 1 = Liquid Nitrogen
  };

  const handleLiquidHeliumClick = async () => {
    await setLight(2); // light 2 = Liquid Helium
  };

  const handleTheSampleClick = async () => {
    await setLight(3); // light 3 = The Sample
  };

  const handleMylarClick = async () => {
    await setLight(4); // light 4 = Mylar
  };

  const handleShimCoilsClick = async () => {
    await setLight(5); // light 5 = Shim Coils
  };

  const handleThePulseClick = async () => {
    await setLight(6); // light 6 = The Pulse
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

      <div className="w-1/3 flex flex-col items-center justify-center gap-[100px] absolute top-[220px] left-[100px]">
        <button
          onClick={handleAllComponentClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          All Components
        </button>
        {/* Here it is used to send an API request for all components */}

        <button
          onClick={handleTheMagnetClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          The Magnet
        </button>
        {/* Here it is used to send an API request for the magnet component */}

        <button
          onClick={handleLiquidNitrogenClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Liquid Nitrogen
        </button>
        {/* Here it is used to send an API request for the liquid nitrogen component */}

        <button
          onClick={handleLiquidHeliumClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Liquid Helium
        </button>
        {/* Here it is used to send an API request for the liquid helium component */}
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center gap-[100px] absolute top-[220px] right-[100px]">
        <button
          onClick={handleTheSampleClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          The Sample
        </button>
        {/* Here it is used to send an API request for the sample component */}

        <button
          onClick={handleMylarClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Mylar
        </button>
        {/* Here it is used to send an API request for the mylar component */}

        <button
          onClick={handleShimCoilsClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Shim Coils
        </button>
        {/* Here it is used to send an API request for the shim coils component */}

        <button
          onClick={handleThePulseClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
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
