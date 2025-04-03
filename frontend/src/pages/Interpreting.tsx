/**
 * Interpreting Component
 *
 * This React component displays an interactive guide for interpreting NMR (Nuclear Magnetic Resonance) spectroscopy data.
 * It allows users to navigate through different descriptions and titles related to NMR instrumentation.
 *
 * Features:
 * - Dynamically loads content based on query parameters in the URL.
 * - Allows navigation through different NMR-related topics using next/previous buttons.
 * - Includes a back button to return to the NMR Fundamentals page.
 */

import { useState } from "react";
import { useLocation } from "react-router";
import { NMRSpectrum } from "../data/NMRSpectrum";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router";

export default function Interpreting() {
  /**
   * Extracts query parameters from the URL to determine the initial state.
   * - `layer`: Determines the depth or level of navigation.
   * - `index`: Specifies the initial index to be displayed.
   */
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const layer = params.get("layer");
  const passedIndex = params.get("index");

  /**
   * State: `currentIndex`
   * Determines the currently displayed item in the NMRSpectrum data array.
   * If `layer` is "3" and `index` is provided, it initializes with `index`, else defaults to 0.
   */
  const [currentIndex, setCurrentIndex] = useState(
    layer === "3" && passedIndex ? Number(passedIndex) : 0,
  );

  /** Retrieves the current item from the NMRSpectrum data array */
  const currentItem = NMRSpectrum[currentIndex];

  /**
   * Handles navigation to the next item in the NMRSpectrum array.
   * Loops back to the start when reaching the last item.
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % NMRSpectrum.length);
  };

  /**
   * Handles navigation to the previous item in the NMRSpectrum array.
   * Loops back to the last item when at the beginning.
   */
  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + NMRSpectrum.length) % NMRSpectrum.length,
    );
  };

  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px] flex flex-col items-center">

      {/* Main content section */}
      <div className="flex justify-center items-center w-full p-10 h-[790px]">
        {/* Title Section */}
        <div className="w-1/2 flex items-center justify-center h-full">
          <h2
            className="text-[100px] font-bold text-[#A5C882] text-left leading-[100px]"
            dangerouslySetInnerHTML={{ __html: currentItem.title }}
          />
        </div>

        {/* Description Section */}
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

      {/* Navigation Controls */}
      <div className="flex gap-10 items-center justify-between w-full px-24">
        {/* Back Button */}
        <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
          <Link to="/nmr-fundamentals">
            <ArrowBackIosIcon sx={{ fontSize: 55 }} />
            <span>Back</span>
          </Link>
        </div>

        {/* Next and Previous Buttons */}
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

          {/* Page Counter */}
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
