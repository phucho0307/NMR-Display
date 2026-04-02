import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Diagram() {
  const CONTROLLER_ID = "pico";
  const API_URL = "http://localhost:8000/lighting-controller/";

  const dragonTraverse = async (
    pixel1: number,
    pixel2: number,
    rgb: number[],
  ) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        controller_id: CONTROLLER_ID,
        action: "dragon_traverse",
        pixel1,
        pixel2,
        rgb,
      }),
    });
  };

  const handleAllComponentClick = async () => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        controller_id: CONTROLLER_ID,
        action: "traverse_rainbow",
      }),
    });
  };

  const handleLiquidNitrogenClick = () => dragonTraverse(60, 115, [0, 255, 0]);
  const handleLiquidHeliumClick = () => dragonTraverse(117, 157, [0, 0, 255]);
  const handleTheSampleClick = () => dragonTraverse(158, 177, [128, 0, 128]);
  const handleTheMagnetClick = () => dragonTraverse(178, 190, [255, 0, 0]);
  const handleAirLiftClick = () => dragonTraverse(191, 227, [255, 255, 255]);
  const handleTheProbeClick = () => dragonTraverse(228, 283, [139, 69, 19]);

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
          onClick={handleAirLiftClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Air Lift
        </button>

        <button
          onClick={handleTheProbeClick}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          The Probe
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
