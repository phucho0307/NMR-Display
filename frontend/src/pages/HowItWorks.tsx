import { useState, useEffect } from "react";
import { HowItWorks } from "../data/HowItWorks";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Metahnol from "../assets/Methanol";
import Intensity from "../assets/Intensity";
import OneAttachedToOxygen from "../assets/OneAttachedToOxygen";
import OthersAttahcedToCarbon from "../assets/OthersAttahcedToCarbon";
import PPM from "../assets/PPM";
import SingleHydrogen from "../assets/SingleHydrogen";
import ThreeHydrogens from "../assets/ThreeHydrogens";
import NMRSpectrumOfMethanol from "../assets/NMRSpectrumOfMethanol";
import TwoPeaks from "../assets/TwoPeaks";
import ShorterPeaks from "../assets/ShorterPeaks";
import TallerPeaks from "../assets/TallerPeaks";

export default function HowItWorksComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showComponent, setShowComponent] = useState(false); // Track whether to show the component
  const [componentNumber, setComponentNumber] = useState(0);
  const currentItem = HowItWorks[currentIndex];

  const handleNext = () => {
    setShowComponent(false); // Reset image state when navigating
    setCurrentIndex((prev) => (prev + 1) % HowItWorks.length);
  };

  const handlePrev = () => {
    setShowComponent(false); // Reset image state when navigating
    setCurrentIndex((prev) => (prev - 1 + HowItWorks.length) % HowItWorks.length);
  };

  // Handle Methanol button click
  const handleButtonClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // Check if the target element has the id "component-btn"
    if (target.id === "component-btn") {
      setShowComponent(true);
    }
  
    // Retrieve the 'data-id' attribute or any other relevant attribute from the button
    const componentId = target.getAttribute("data-id");
  
    if (componentId) {
      // Convert the 'data-id' attribute to a number and update component number
      setComponentNumber(Number(componentId));
      console.log(componentNumber)
    }
  };

  // Component mapping based on the id
  const componentMapping = [
    { id: 1, component: <Metahnol /> },
    { id: 2, component: <OneAttachedToOxygen /> },
    { id: 3, component: <OthersAttahcedToCarbon /> },
    { id: 4, component: <Intensity /> },
    { id: 5, component: <PPM /> },
    { id: 6, component: <Metahnol /> },
    { id: 7, component: <SingleHydrogen /> },
    { id: 8, component: <ThreeHydrogens /> },
    { id: 9, component: <NMRSpectrumOfMethanol /> },
    { id: 10, component: <TwoPeaks /> },
    { id: 11, component: <ShorterPeaks /> },
    { id: 12, component: <TallerPeaks /> },
  ];

  // Get the component based on the currentItem's id
  const currentComponent = componentMapping.find((item) => item.id === componentNumber);

  useEffect(() => {
    document.addEventListener("click", handleButtonClick);
    return () => document.removeEventListener("click", handleButtonClick);
  }, []);

  return (
    <div className="flex flex-col gap-2 items-center bg-[#0C0C31] h-full">
      <div className="flex justify-center items-center gap-10 w-full px-10 h-[700px]">
        {/* Left - Title or Image */}
        <div className="w-1/2 flex items-center justify-center h-full">{showComponent ? currentComponent : <div className="text-[100px] font-bold text-[#A5C882] text-left" dangerouslySetInnerHTML={{ __html: currentItem.title }} />}</div>

        {/* Right - Description with proper scrolling */}
        <div className="w-1/2 flex items-center justify-center h-full">
          <div
            className="text-[25px] text-[#FEFCFC] leading-relaxed flex flex-col gap-[30px] max-h-[500px] overflow-y-auto px-4 scrollbar-custom"
            dangerouslySetInnerHTML={{
              __html: currentItem.description,
            }}
          />
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-10 items-center">
        <button onClick={handlePrev} className="hover:scale-110 transition-transform">
          <NavigateBeforeIcon sx={{ fontSize: 80 }} className="text-[#A5C882]" />
        </button>

        {/* Page Number Indicator */}
        <span className="text-[#A5C882] text-[25px] font-bold">
          {currentIndex + 1} / {HowItWorks.length}
        </span>

        <button onClick={handleNext} className="hover:scale-110 transition-transform">
          <NavigateNextIcon sx={{ fontSize: 80 }} className="text-[#A5C882]" />
        </button>
      </div>
    </div>
  );
}
