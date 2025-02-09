import { useState } from "react";
import { HowItWorks } from "../data/HowItWorks";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function HowItWorksComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = HowItWorks[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HowItWorks.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + HowItWorks.length) % HowItWorks.length
    );
  };

  return (
    <div className="py-10 flex flex-col gap-14 items-center bg-[#0C0C31] h-full ">
      <div className="flex justify-center items-center gap-10 w-full px-10 border border-red-500 h-[1500px] overflow-scroll">
        {/* Left - Title */}
        <div className="w-1/2 flex items-center justify-center h-full border border-red-500">
          <div className="text-[150px] font-bold text-[#A5C882]" dangerouslySetInnerHTML={{ __html: currentItem.title }} />
        </div>

        {/* Right - Description */}
        <div className="w-1/2 flex items-center justify-center h-full border border-red-500 overflow-scroll">
          <div
            className="text-[30px] text-[#FEFCFC] leading-relaxed flex flex-col gap-[50px] overflow-scroll overflow-x-hidden"
            dangerouslySetInnerHTML={{ __html: currentItem.description }}
          />
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-10 items-center border border-red-500">
        <button
          onClick={handlePrev}
          className="hover:scale-110 transition-transform"
        >
          <NavigateBeforeIcon
            sx={{ fontSize: 100 }}
            className="text-[#A5C882]"
          />
        </button>

        {/* Page Number Indicator */}
        <span className="text-[#A5C882] text-[25px] font-bold">
          {currentIndex + 1} / {HowItWorks.length}
        </span>

        <button
          onClick={handleNext}
          className="hover:scale-110 transition-transform"
        >
          <NavigateNextIcon sx={{ fontSize: 100 }} className="text-[#A5C882]" />
        </button>
      </div>
    </div>
  );
}
