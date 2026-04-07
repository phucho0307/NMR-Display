import { useState } from "react";
import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Diagram() {
  const CONTROLLER_ID = "pico";
  const API_URL = "http://localhost:8000/lighting-controller/";

  const [activeButtons, setActiveButtons] = useState<Record<string, boolean>>(
    {},
  );

  const traverseSegment = async (
    pixel1: number,
    pixel2: number,
    coco: { color: number[]; count: number }[],
    flash_max: number = 20,
    on_max: number = 30,
    shift: number = 1,
    delay: number = 0.05,
  ) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        controller_id: CONTROLLER_ID,
        action: "traverse_segment",
        pixel1,
        pixel2,
        coco,
        flash_max,
        on_max,
        shift,
        delay,
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
        action: "set_line",
        states,
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
        rgb: [128, 0, 128],
      }),
    });
  };


  const handleToggleSegment = async (
    name: string,
    pixel1: number,
    pixel2: number,
    coco: { color: number[]; count: number }[],
    flash_max: number = 5,
    on_max: number = 7,
    shift: number = 1,
    delay: number = 0.1,
  ) => {
    const isActive = activeButtons[name];
    if (isActive) {
      await turnOff(pixel1, pixel2);
    } else {
      await traverseSegment(pixel1, pixel2, coco, flash_max, on_max, shift, delay);
    }
    setActiveButtons((prev) => ({ ...prev, [name]: !isActive }));
  };

  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <div className="absolute w-full h-[900px] flex items-center justify-center">
        <img
          src="/static/images/NMRDiagramPlaceholder.png"
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
          onClick={() => handleToggleSegment("magnet", 178, 190, [{"color": [255, 0, 0], "count": 12},
    {"color": [255, 255, 255], "count": 1}])}
          className={`flex ${activeButtons["magnet"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          The Magnet
        </button>

        <button
          onClick={() => handleToggleSegment("nitrogen", 60, 115, [{"color": [0, 255, 0], "count": 55},
    {"color": [255, 255, 255], "count": 1}])}
          className={`flex ${activeButtons["nitrogen"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          Liquid Nitrogen
        </button>

        <button
          onClick={() => handleToggleSegment("helium", 117, 157, [{"color": [0, 0, 255], "count": 40},
    {"color": [255, 255, 255], "count": 1}])}
          className={`flex ${activeButtons["helium"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          Liquid Helium
        </button>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center gap-[100px] absolute top-[220px] right-[100px]">
        <button
          onClick={() => handleToggleSegment("sample", 158, 177, [{"color": [255, 15, 0], "count": 19},
    {"color": [255, 255, 255], "count": 1}])} //orange red
          className={`flex ${activeButtons["sample"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          The Sample
        </button>

        <button
          onClick={() => handleToggleSegment("mylar", 191, 227, [{"color": [44,17,79], "count": 1}, {"color": [255, 255, 255], "count": 36}])}
          className={`flex ${activeButtons["mylar"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          Mylar
        </button>

        <button
          onClick={() => handleToggleSegment("shimcoils", 191, 227, [{"color": [255, 20, 147], "count": 1}, {"color": [255, 255, 255], "count": 36}])}
          className={`flex ${activeButtons["shimcoils"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
        >
          Shim Coils
        </button>

        <button
          onClick={() => handleToggleSegment("pulse", 228, 283, [{"color": [255, 255, 0], "count": 55},
    {"color": [255, 255, 255], "count": 1}])}
          className={`flex ${activeButtons["pulse"] ? "bg-[#536365]/70" : "bg-[#536365]/35"} text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer`}
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
