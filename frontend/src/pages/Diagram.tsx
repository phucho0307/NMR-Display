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
  const CONTROLLER_ID = "pico";
  const API_URL = "http://localhost:8000/lighting-controller/";

  const setLight = async (light_id: number) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        controller_id: CONTROLLER_ID,
        action: "set_light_state",
        state: { [light_id]: [1] },
      }),
    });
  };

  const handleAllComponentClick = async () => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        controller_id: CONTROLLER_ID,
        action: "fill",
        rgb: [255, 0, 0],
        brightness: 200
        // states: {
        //   "0": [1],
        //   "1": [1],
        //   "2": [1],
        //   "3": [1],
        //   "4": [1],
        //   "5": [1],
        //   "6": [1],
        // },
      }),
    });
  };

  const handleTheMagnetClick = async () => {
    await setLight(0);
  };

  const handleLiquidNitrogenClick = async () => {
    await setLight(1);
  };

  const handleLiquidHeliumClick = async () => {
    await setLight(2);
  };

  const handleTheSampleClick = async () => {
    await setLight(3);
  };

  const handleMylarClick = async () => {
    await setLight(4);
  };

  const handleShimCoilsClick = async () => {
    await setLight(5);
  };

  const handleThePulseClick = async () => {
    await setLight(6);
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

        <button
          onClick={handleTheMagnetClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          The Magnet
        </button>

        <button
          onClick={handleLiquidNitrogenClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Liquid Nitrogen
        </button>

        <button
          onClick={handleLiquidHeliumClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Liquid Helium
        </button>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center gap-[100px] absolute top-[220px] right-[100px]">
        <button
          onClick={handleTheSampleClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          The Sample
        </button>

        <button
          onClick={handleMylarClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Mylar
        </button>

        <button
          onClick={handleShimCoilsClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Shim Coils
        </button>

        <button
          onClick={handleThePulseClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          The Pulse
        </button>
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
