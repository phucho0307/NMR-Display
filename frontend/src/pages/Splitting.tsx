import { useNavigate } from "react-router-dom"; // Import navigation hook
import { useState, useEffect } from "react";
import { SplittingData } from "../data/SplittingData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Ethanol from "../components/Ethanol";
import OrangeOH from "../components/OrangeOH";
import TripletPurpleCH3 from "../components/TripletPurpleCH3";
import QuartetCH2 from "../components/QuartetCH2";
import PascalTriangle from "../components/PascalTriangle";

/**
 * Component for displaying the "Splitting" section of the application.
 * This section dynamically renders different components based on user interactions.
 */
export default function Splitting() {
  /**
   * Interface for mapping component data.
   */
  interface ComponentMappingObject {
    id: number;
    component: React.ReactNode; // React component associated with the ID
  }

  /**
   * Type definition for component mapping array.
   */
  type ComponentMappingType = ComponentMappingObject[];

  // State to control which component is shown
  const [showComponent, setShowComponent] = useState(false);
  const [componentNumber, setComponentNumber] = useState<number | null>(null);
  const currentItem = SplittingData[0]; // Default data item

  /**
   * Array mapping component IDs to their respective React components.
   */
  const componentMapping: ComponentMappingType = [
    { id: 1, component: <Ethanol /> },
    { id: 2, component: <OrangeOH /> },
    { id: 3, component: <TripletPurpleCH3 /> },
    { id: 4, component: <QuartetCH2 /> },
    { id: 5, component: <QuartetCH2 /> },
    { id: 6, component: <TripletPurpleCH3 /> },
    { id: 7, component: <OrangeOH /> },
    { id: 8, component: <PascalTriangle /> },
  ];

  // Get the current component based on componentNumber
  const currentComponent = componentMapping.find(
    (item) => item.id === componentNumber
  );

  /**
   * Effect to handle button click events dynamically.
   * This allows users to click on buttons that reveal different components.
   */
  useEffect(() => {
    const buttons = document.querySelectorAll("#component-btn");

    /**
     * Handles button click events to set the component to display.
     * @param event - The event object
     */
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      const componentId = target.getAttribute("data-id");
      if (componentId) {
        setShowComponent(true);
        setComponentNumber(Number(componentId));
      }
    };

    // Attach event listeners
    buttons.forEach((button) => button.addEventListener("click", handleClick));

    // Cleanup event listeners on component unmount
    return () => {
      buttons.forEach((button) =>
        button.removeEventListener("click", handleClick)
      );
    };
  }, []);

  const navigate = useNavigate();

  /**
   * Navigates to the "Interpreting" component with query parameters.
   */
  const handleNavigate = () => {
    const componentId = 2; // Predefined component ID for navigation
    const selectedIndex = Number(componentId);
    navigate(`/interpreting?layer=3&index=${selectedIndex}`);
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
              How Many <br /> Neighboring <br /> Hydrogens
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
