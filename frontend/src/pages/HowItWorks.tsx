import { useState, useEffect } from "react";
import { HowItWorks } from "../data/HowItWorks";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Methanol from "../components/Methanol";
import Intensity from "../components/Intensity";
import OneAttachedToOxygen from "../components/OneAttachedToOxygen";
import OthersAttachedToCarbon from "../components/OthersAttachedToCarbon";
import PPM from "../components/PPM";
import SingleHydrogen from "../components/SingleHydrogen";
import ThreeHydrogens from "../components/ThreeHydrogens";
import NMRSpectrumOfMethanol from "../components/NMRSpectrumOfMethanol";
import TwoPeaks from "../components/TwoPeaks";
import ShorterPeaks from "../components/ShorterPeaks";
import TallerPeaks from "../components/TallerPeaks";

export default function HowItWorksComponent() {
  interface ComponentMappingObject {
    id: number;
    component: React.ReactNode; // Fix: Use React.ReactNode for JSX components
  }

  type ComponentMappingType = ComponentMappingObject[];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const [componentNumber, setComponentNumber] = useState<number | null>(null);
  const currentItem = HowItWorks[currentIndex];

  const handleNext = () => {
    setShowComponent(false);
    setCurrentIndex((prev) => (prev + 1) % HowItWorks.length);
  };

  const handlePrev = () => {
    setShowComponent(false);
    setCurrentIndex(
      (prev) => (prev - 1 + HowItWorks.length) % HowItWorks.length
    );
  };

  const componentMapping: ComponentMappingType = [
    { id: 1, component: <Methanol /> },
    { id: 2, component: <OneAttachedToOxygen /> },
    { id: 3, component: <OthersAttachedToCarbon /> },
    { id: 4, component: <Intensity /> },
    { id: 5, component: <PPM /> },
    { id: 6, component: <Methanol /> },
    { id: 7, component: <SingleHydrogen /> },
    { id: 8, component: <ThreeHydrogens /> },
    { id: 9, component: <NMRSpectrumOfMethanol /> },
    { id: 10, component: <TwoPeaks /> },
    { id: 11, component: <ShorterPeaks /> },
    { id: 12, component: <TallerPeaks /> },
  ];

  // Find the current component based on componentNumber
  const currentComponent = componentMapping.find(
    (item) => item.id === componentNumber
  );
  useEffect(() => {
    const buttons = document.querySelectorAll("#component-btn");

    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      const componentId = target.getAttribute("data-id");
      if (componentId) {
        setShowComponent(true);
        setComponentNumber(Number(componentId));
      }
    };

    buttons.forEach((button) => button.addEventListener("click", handleClick));

    return () => {
      buttons.forEach((button) =>
        button.removeEventListener("click", handleClick)
      );
    };
  }, [currentIndex]);

  return (
    <div className="flex flex-col gap-2 items-center bg-[#0C0C31] h-full">
      <div className="flex justify-center items-center gap-10 w-full px-10 h-[700px]">
        <h1 className="text-[60px] font-bold text-[#A5C882] absolute top-12 left-64">How it Works</h1>
        <div className="w-1/2 flex items-center justify-center h-full">
          {showComponent && currentComponent ? (
            currentComponent.component
          ) : (
            <div
              className="text-[100px] font-bold text-[#A5C882] text-left"
              dangerouslySetInnerHTML={{ __html: currentItem.title }}
            />
          )}
        </div>

        <div className="w-1/2 flex items-center justify-center h-full">
          <div
            className="text-[25px] text-[#FEFCFC] leading-relaxed flex flex-col gap-[30px] max-h-[500px] overflow-y-auto px-4 scrollbar-custom"
            dangerouslySetInnerHTML={{
              __html: currentItem.description,
            }}
          />
        </div>
      </div>

      <div className="flex gap-10 items-center">
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
          {currentIndex + 1} / {HowItWorks.length}
        </span>

        <button
          onClick={handleNext}
          className="hover:scale-110 transition-transform"
        >
          <NavigateNextIcon sx={{ fontSize: 80 }} className="text-[#A5C882]" />
        </button>
      </div>
    </div>
  );
}
