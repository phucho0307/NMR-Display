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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router";

/**
 * Renders the "How It Works" interactive component with navigation controls.
 * Users can navigate through steps and interact with visual components.
 *
 * @component
 * @returns {React.ReactElement} The HowItWorksComponent with navigation and dynamic content.
 */
export default function HowItWorksComponent(): React.ReactElement {
  /**
   * Represents an object mapping an ID to a JSX component.
   * @typedef {Object} ComponentMappingObject
   * @property {number} id - The unique identifier for the component.
   * @property {React.ReactNode} component - The corresponding JSX component.
   */
  interface ComponentMappingObject {
    id: number;
    component: React.ReactNode;
  }

  /** @typedef {ComponentMappingObject[]} ComponentMappingType */
  type ComponentMappingType = ComponentMappingObject[];

  // State to track the current index in the HowItWorks data array.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Controls whether a component should be displayed.
  const [showComponent, setShowComponent] = useState(false);

  // Stores the currently selected component ID.
  const [componentNumber, setComponentNumber] = useState<number | null>(null);

  // Retrieves the current item from HowItWorks data.
  const currentItem = HowItWorks[currentIndex];

  /**
   * Advances to the next step in the HowItWorks data array.
   */
  const handleNext = () => {
    setShowComponent(false);
    setCurrentIndex((prev) => (prev + 1) % HowItWorks.length);
  };

  /**
   * Goes back to the previous step in the HowItWorks data array.
   */
  const handlePrev = () => {
    setShowComponent(false);
    setCurrentIndex(
      (prev) => (prev - 1 + HowItWorks.length) % HowItWorks.length
    );
  };

  /**
   * Maps numeric IDs to corresponding React components.
   * Used to dynamically render different sections of the tutorial.
   */
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

  // Finds the current component based on the componentNumber.
  const currentComponent = componentMapping.find(
    (item) => item.id === componentNumber
  );

  /**
   * Attaches event listeners to buttons for dynamically displaying components.
   * Removes event listeners when the component unmounts or the index changes.
   */
  useEffect(() => {
    const buttons = document.querySelectorAll("#component-btn");

    /**
     * Handles click events for dynamically showing components.
     * @param {Event} event - The button click event.
     */
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
      <div className="flex justify-center items-center w-full px-10 h-[790px]">
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
            className="text-[36px] text-[#FEFCFC] leading-relaxed flex flex-col gap-[30px] max-h-[700px] overflow-y-auto px-4 scrollbar-custom font-serif"
            dangerouslySetInnerHTML={{
              __html: currentItem.description,
            }}
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-10 items-center w-full px-20">
        <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start mr-145">
          <Link to="/">
            <ArrowBackIosIcon sx={{ fontSize: 55 }} />
            <span>Back</span>
          </Link>
        </div>
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
