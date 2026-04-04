import { useState } from "react";
import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Diagram() {
  const CONTROLLER_ID = "pico";
  const API_URL = "http://localhost:8000/lighting-controller/";

  const [activeButtons, setActiveButtons] = useState<Record<string, boolean>>(
    {},
  );

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
        action: "dragon",
        pixel1,
        pixel2,
        rgb,
      }),
    });
  };

  const turnOff = async (pixel1: number, pixel2: number) => {
    const states: Record<string, number[]> = {};
    for (let i = pixel1; i <= pixel2; i++) {
      states[i.toString()] = [0, 0, 0];
    }
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        controller_id: CONTROLLER_ID,
        action: "update_all_lights",
        states,
      }),
    });
  };

  const handleToggle = async (
    name: string,
    pixel1: number,
    pixel2: number,
    rgb: number[],
  ) => {
    const isActive = activeButtons[name];
    if (isActive) {
      await turnOff(pixel1, pixel2);
    } else {
      await dragonTraverse(pixel1, pixel2, rgb);
    }
    setActiveButtons((prev) => ({ ...prev, [name]: !isActive }));
  };

  const handleAllComponentClick = async () => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        controller_id: CONTROLLER_ID,
        action: "fill",
        rgb: [128, 0, 128],
      }),
    });
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
          onClick={() => handleToggle("magnet", 178, 190, [0, 255, 0])}
          className={`flex ${activeButtons["magnet"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          The Magnet
        </button>

        <button
          onClick={() => handleToggle("nitrogen", 60, 115, [255, 0, 0])}
          className={`flex ${activeButtons["nitrogen"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          Liquid Nitrogen
        </button>

        <button
          onClick={() => handleToggle("helium", 117, 157, [0, 0, 255])}
          className={`flex ${activeButtons["helium"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          Liquid Helium
        </button>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center gap-[100px] absolute top-[220px] right-[100px]">
        <button
          onClick={() => handleToggle("sample", 158, 177, [0, 128, 128])}
          className={`flex ${activeButtons["sample"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          The Sample
        </button>

        <button
          onClick={() => handleToggle("airlift", 191, 227, [255, 255, 255])}
          className={`flex ${activeButtons["airlift"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          Air Lift
        </button>

        <button
          onClick={() => handleToggle("probe", 228, 283, [69, 139, 19])}
          className={`flex ${activeButtons["probe"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
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
