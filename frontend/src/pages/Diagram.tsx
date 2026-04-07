import { Link } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Diagram() {
  const CONTROLLER_ID = "pico";
  const API_URL = "http://localhost:8000/lighting-controller/";

  const sendCommand = async (action: string, params: Record<string, unknown> = {}) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ controller_id: CONTROLLER_ID, action, ...params }),
    });
  };

  const handleSegment = async (
    pixel1: number,
    pixel2: number,
    coco: { color: number[]; count: number }[],
  ) => {
    await sendCommand("clear");
    await sendCommand("traverse_segment", { pixel1, pixel2, coco });
  };

  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <div className="absolute w-full h-[900px] flex items-center justify-center">
        <img
          src="/static/images/NMRDiagramPlaceholder.png"
          alt="NMR diagram"
          className="h-[873.8px] w-[530.4px]"
        />
      </div>

      <div className="w-1/3 flex flex-col items-center justify-center gap-[100px] absolute top-[220px] left-[100px]">
        <button
          onClick={() => handleSegment(0, 283, [
            { color: [255, 0, 0], count: 12 },
            { color: [255, 255, 255], count: 1 },
          ])}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          All Components
        </button>

        <button
          onClick={() => handleSegment(178, 190, [
            { color: [255, 0, 0], count: 12 },
            { color: [255, 255, 255], count: 1 },
          ])}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          The Magnet
        </button>

        <button
          onClick={() => handleSegment(60, 115, [
            { color: [0, 255, 0], count: 55 },
            { color: [255, 255, 255], count: 1 },
          ])}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Liquid Nitrogen
        </button>

        <button
          onClick={() => handleSegment(117, 157, [
            { color: [0, 0, 255], count: 40 },
            { color: [255, 255, 255], count: 1 },
          ])}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Liquid Helium
        </button>
      </div>

      <div className="w-1/3 flex flex-col items-center justify-center gap-[100px] absolute top-[220px] right-[100px]">
        <button
          onClick={() => handleSegment(191, 227, [
            { color: [255, 15, 0], count: 36 },
            { color: [255, 255, 255], count: 1 },
          ])}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          The Sample
        </button>

        <button
          onClick={() => handleSegment(0, 59, [
            { color: [44, 17, 79], count: 59 },
            { color: [255, 255, 255], count: 1 },
          ])}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Mylar
        </button>

        <button
          onClick={() => handleSegment(158, 177, [
            { color: [255, 20, 147], count: 19 },
            { color: [255, 255, 255], count: 1 },
          ])}
          className="flex bg-[#536365]/35 text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded cursor-pointer"
        >
          Shim Coils
        </button>

        <button
          onClick={() => handleSegment(228, 283, [
            { color: [255, 255, 0], count: 55 },
            { color: [255, 255, 255], count: 1 },
          ])}
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