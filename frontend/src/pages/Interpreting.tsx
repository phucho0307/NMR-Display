import { useState } from "react";
import { useLocation } from "react-router";
import { NMRSpectrum } from "../data/NMRSpectrum";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router";

export default function Interpreting() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const layer = params.get("layer");
  const passedIndex = params.get("index");
  
  const [currentIndex, setCurrentIndex] = useState(
    layer === "3" && passedIndex ? Number(passedIndex) : 0
  );
  
  const currentItem = NMRSpectrum[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % NMRSpectrum.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + NMRSpectrum.length) % NMRSpectrum.length
    );
  };

  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px] flex flex-col items-center">
      <h1 className="absolute text-[#A5C882] text-[60px] font-semibold top-[40px] left-[240px]">
        NMR Instrumentation
      </h1>

      <div className="flex justify-center items-center w-full p-10 h-[790px]">
        <div className="w-1/2 flex items-center justify-center h-full">
          <h2
            className="text-[100px] font-bold text-[#A5C882] text-left"
            dangerouslySetInnerHTML={{ __html: currentItem.title }}
          />
        </div>

        <div className="w-1/2 flex flex-col items-start justify-center gap-6 h-full">
          <div
            className="text-[55px] font-bold"
            dangerouslySetInnerHTML={{ __html: currentItem.extraTitle }}
          />
          <div
            className="text-[36px] text-[#FEFCFC] leading-relaxed flex flex-col gap-[30px] max-h-[700px] overflow-y-auto scrollbar-custom font-serif self-center"
            dangerouslySetInnerHTML={{ __html: currentItem.description }}
          />
        </div>
      </div>

      <div className="flex gap-10 items-center justify-between w-full px-24">
        <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
          <Link to="/nmr-fundamentals">
            <ArrowBackIosIcon sx={{ fontSize: 55 }} />
            <span>Back</span>
          </Link>
        </div>

        <div className="flex items-center justify-center mr-[800px]">
          <button
            onClick={handlePrev}
            className="hover:scale-110 transition-transform"
          >
            <NavigateBeforeIcon
              sx={{ fontSize: 80 }}
              className="text-[#A5C882]"
            />
          </button>

          <span className="text-[#A5C882] text-[25px] font-bold">
            {currentIndex + 1} / {NMRSpectrum.length}
          </span>

          <button
            onClick={handleNext}
            className="hover:scale-110 transition-transform"
          >
            <NavigateNextIcon
              sx={{ fontSize: 80 }}
              className="text-[#A5C882]"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
