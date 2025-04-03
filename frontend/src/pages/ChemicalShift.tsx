import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState, useEffect } from "react";
import { ChemicalShiftData } from "../data/ChemicalShiftData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Ethanol from "../components/Ethanol";
import Shielded from "../components/Shielded";
import Deshielded from "../components/Deshielded";
import PurpleCH3 from "../components/PurpleCH3";
import PinkCH2 from "../components/PinkCH2";

export default function ChemicalShift() {
  interface ComponentMappingObject {
    id: number;
    component: React.ReactNode; // Fix: Use React.ReactNode for JSX components
  }

  type ComponentMappingType = ComponentMappingObject[];

  const [showComponent, setShowComponent] = useState(false);
  const [componentNumber, setComponentNumber] = useState<number | null>(null);
  const currentItem = ChemicalShiftData[0];

  const componentMapping: ComponentMappingType = [
    { id: 1, component: <Ethanol /> },
    { id: 2, component: <Shielded /> },
    { id: 3, component: <Deshielded /> },
    { id: 4, component: <PurpleCH3 /> },
    { id: 5, component: <PinkCH2 /> },
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
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    const componentId = 2;

    if (componentId) {
      const selectedIndex = Number(componentId);

      // Navigate to Interpreting component with query params
      navigate(`/interpreting?layer=3&index=${selectedIndex}`);
    }
  };

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

        <div className="w-1/2 flex flex-col items-start justify-center h-full">
          <div>
            <h2 className="text-[55px] font-bold px-4 pt-10 pb-4">
              Chemical Environments of Hydrogen
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
