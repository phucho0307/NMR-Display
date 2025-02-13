// import { useState } from "react";

export default function Diagram() {
  // 3 divs aligned horizontally
  // div 1 + 3 are the buttons on the left and right
  // the buttons center aligned horizontally each with the different positions
  // diagram in the middle

  // const [response, setResponse] = useState(null);

  const handleClick = async () => {};

  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <div className="absolute w-full h-[900px] flex items-center justify-center">
        <img
          src="/public/images/NMRDiagramPlaceholder.png"
          alt="NMR diagram"
          className="h-[873.8px] w-[530.4px]"
        ></img>
      </div>
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        Diagram of Components
      </h1>


      <div>
        <button
          onClick={handleClick}
          className="absolute top-[220px] left-[170px] bg-[#080821] text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          All Components
        </button>

        <button
          onClick={handleClick}
          className="absolute top-[420px] left-[170px] bg-[#080821] text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          The Magnet
        </button>
         
        <button
          onClick={handleClick}
          className="absolute top-[620px] left-[170px] bg-[#080821] text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          Liquid Nitrogen
        </button>

        <button
          onClick={handleClick}
          className="absolute top-[820px] left-[170px] bg-[#080821] text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          Liquid Helium
        </button>

        <button
          onClick={handleClick}
          className="absolute top-[220px] left-[1450px] bg-[#080821] text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          The Sample
        </button>

        <button
          onClick={handleClick}
          className="absolute top-[420px] left-[1450px] bg-[#080821] text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          Mylar
        </button>

        <button
          onClick={handleClick}
          className="absolute top-[620px] left-[1450px] bg-[#080821] text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          Shim Colis
        </button>

        <button
          onClick={handleClick}
          className="absolute top-[820px] left-[1450px] bg-[#080821] text-[#FEFCFC] font-semibold text-[36px] px-10 py-6 rounded"
        >
          The Pulse
        </button>
      </div>
    </main>
  );
}
