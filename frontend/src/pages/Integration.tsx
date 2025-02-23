import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useState, useEffect } from "react";
import { IntegrationData } from "../data/IntegrationData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Ethanol from "../components/Ethanol";
import SpectrumDiethlyEther from "../components/SpectrumDiethlyEther";
import MolecularStructure from "../components/MolecularStructure";
import AreaUnderPeak from "../components/AreaUnderPeak";

/**
 * Integration Component
 *
 * This component provides an interactive explanation of integration in spectroscopy.
 * Users can view different components dynamically and navigate to another page with query parameters.
 *
 * @component
 * @returns {React.ReactElement} The Integration component with interactive content.
 */
export default function Integration(): React.ReactElement {
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

  // State to control visibility of selected component
  const [showComponent, setShowComponent] = useState(false);
  const [componentNumber, setComponentNumber] = useState<number | null>(null);
  const currentItem = IntegrationData[0]; // Fetch current data item

  /**
   * Maps numeric IDs to corresponding React components.
   * Used to dynamically render different sections of the tutorial.
   */
  const componentMapping: ComponentMappingType = [
    { id: 1, component: <Ethanol /> },
    { id: 2, component: <AreaUnderPeak /> },
    { id: 3, component: <SpectrumDiethlyEther /> },
    { id: 4, component: <MolecularStructure /> },
  ];

  // Finds the current component based on componentNumber.
  const currentComponent = componentMapping.find(
    (item) => item.id === componentNumber,
  );

  /**
   * Attaches event listeners to buttons for dynamically displaying components.
   * Removes event listeners when the component unmounts.
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
        button.removeEventListener("click", handleClick),
      );
    };
  }, []);

  const navigate = useNavigate();

  /**
   * Handles navigation to the "Interpreting" page with query parameters.
   * Navigates to `/interpreting?layer=3&index=2`
   */
  const handleNavigate = () => {
    const componentId = 2;
    if (componentId) {
      navigate(`/interpreting?layer=3&index=${componentId}`);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center bg-[#0C0C31] h-full">
      <div className="flex justify-center items-center w-full px-10 h-[790px]">
        <h1 className="text-[70px] font-bold text-[#A5C882] absolute top-12 left-64">
          How it Works
        </h1>
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

        <div className="w-1/2 flex flex-col items-start justify-center h-full">
          <div>
            <h2 className="text-[52px] px-4 pt-10 pb-4">
              How Many of <br /> Each Type <br /> of Hydrogen
            </h2>
          </div>
          <div
            className="text-[36px] text-[#FEFCFC] leading-relaxed flex flex-col gap-[50px] max-h-[700px] overflow-y-auto px-4 scrollbar-custom font-serif"
            dangerouslySetInnerHTML={{
              __html: currentItem.description,
            }}
          />
        </div>
      </div>

      {/* Navigation Button */}
      <div className="flex gap-10 items-left w-full px-48">
        <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
          <button onClick={handleNavigate}>
            <ArrowBackIosIcon sx={{ fontSize: 55 }} />
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
