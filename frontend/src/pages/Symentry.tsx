import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useState, useEffect } from "react";
import { SymentryData } from "../data/SymentryData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Ethanol from "../components/Ethanol";
import CH2 from "../components/CH2";
import OH from "../components/OH";
import CH3 from "../components/CH3";
import EthanolStructure from "../components/EthanolStructure";
import TwoHydrogenAttachedToCarbon from "../components/TwoHydrogenAttachedToCarbon";
import ThreeHydrogenAttachedToCarbon from "../components/ThreeHydrogenAttachedToCarbon";
import CH2VSCH3 from "../components/CH2VSCH3";
import OHStructure from "../components/OHStructure";
import ThreeSeperateClustersOfPeaks from "../components/ThreeSeperateClustersOfPeaks";
import ThreeChemicalEnviroment from "../components/ThreeChemicalEnviroment";
import DiethylEther from "../components/DiethlyEther";
import CH2Graph from "../components/CH2Graph";
import CH3Graph from "../components/CH3Graph";

/**
 * @fileoverview
 * The `Symentry` component is responsible for displaying NMR symmetry-related
 * information, allowing users to toggle between different chemical components.
 *
 * @component
 * @returns {JSX.Element} The Symentry page with interactive elements.
 */
export default function Symentry(): JSX.Element {
  /**
   * @typedef {Object} ComponentMappingObject
   * @property {number} id - Unique identifier for the component.
   * @property {React.ReactNode} component - The corresponding React component.
   */
  interface ComponentMappingObject {
    id: number;
    component: React.ReactNode; // JSX element representation
  }

  /** @typedef {ComponentMappingObject[]} ComponentMappingType */
  type ComponentMappingType = ComponentMappingObject[];

  /** @state {boolean} showComponent - Controls visibility of selected component. */
  const [showComponent, setShowComponent] = useState(false);
  /** @state {number | null} componentNumber - Stores the selected component ID. */
  const [componentNumber, setComponentNumber] = useState<number | null>(null);

  /** @constant {Object} currentItem - The default data object displayed initially. */
  const currentItem = SymentryData[0];

  /**
   * @constant {ComponentMappingType} componentMapping
   * - Stores mappings between component IDs and their corresponding React components.
   */
  const componentMapping: ComponentMappingType = [
    { id: 1, component: <Ethanol /> },
    { id: 2, component: <CH2 /> },
    { id: 3, component: <OH /> },
    { id: 4, component: <CH3 /> },
    { id: 5, component: <EthanolStructure /> },
    { id: 6, component: <TwoHydrogenAttachedToCarbon /> },
    { id: 7, component: <ThreeHydrogenAttachedToCarbon /> },
    { id: 8, component: <CH2VSCH3 /> },
    { id: 9, component: <OHStructure /> },
    { id: 10, component: <ThreeSeperateClustersOfPeaks /> },
    { id: 11, component: <ThreeChemicalEnviroment /> },
    { id: 12, component: <DiethylEther /> },
    { id: 13, component: <CH2Graph /> },
    { id: 14, component: <CH3Graph /> },
  ];

  /**
   * Finds the corresponding React component for the selected `componentNumber`.
   * @constant {ComponentMappingObject | undefined} currentComponent
   */
  const currentComponent = componentMapping.find(
    (item) => item.id === componentNumber
  );

  /**
   * Attaches event listeners to dynamically handle button clicks
   * that set the selected component.
   */
  useEffect(() => {
    const buttons = document.querySelectorAll("#component-btn");

    /**
     * Handles click event for component selection.
     * @param {Event} event - The event object.
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
  }, []);

  const navigate = useNavigate();

  /**
   * Handles navigation to the Interpreting component with query parameters.
   */
  const handleNavigate = () => {
    const componentId = 2;

    if (componentId) {
      const selectedIndex = Number(componentId);

      // Navigate to Interpreting component with query parameters
      navigate(`/interpreting?layer=3&index=${selectedIndex}`);
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
              Number of <br />
              Peaks
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
