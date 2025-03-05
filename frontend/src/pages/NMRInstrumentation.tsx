import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router";

/**
 * NMRInstrumentation component renders the page for NMR instrumentation.
 *
 * This component displays information about the NMR instruments, including their
 * size and magnet strength. It includes a title, an image, a description, and a link
 * to navigate back to the previous page. The component also has a button to toggle
 * the display of an image of the current NMR instrument.
 *
 * @returns {JSX.Element} The JSX code for the NMRInstrumentation page.
 */
export default function NMRInstrumentation() {
  const [showImage, setShowImage] = useState(false);

  /**
   * Handles the button click event to toggle the display of the current NMR instrument image.
   */
  function handleShowImage() {
    setShowImage(!showImage);
  }

  return (
    <main className="bg-[#0C0C31] w-full h-[922px] flex flex-col p-8">
      <h1 className="absolute text-[#A5C882] text-[60px] font-semibold top-[38px] left-[237px]">
        NMR Instrumentation
      </h1>
      <div className="flex">
        <div className="w-1/2 flex items-center">
          {showImage ? (
            <img
              src="/images/CurrentInstrument.png"
              alt="/the current NMR instruments"
              className="h-[800px] self-start"
            />
          ) : (
            <h2 className="text-[130px] font-bold text-[#A5C882] w-full text-center">
              Size Matter
            </h2>
          )}
          <div className="flex items-center justify-start text-[#A5C882] text-[30px] font-bold absolute z-[1000000px] bottom-8 left-34">
            <Link to="/nmr-fundamentals">
              <ArrowBackIosIcon sx={{ fontSize: 55 }} />
              <span>Back</span>
            </Link>
            {/* Here it is used to link to the NMR Fundamentals page */}
          </div>
        </div>
        <div className="top-[180px] text-[34px] text-[#FEFCFC] p-8 w-1/2">
          <p className="font-serif">
            NMR instruments vary in size according to magnet strength, reported
            in megahertz (MHz).
            <br />
            <br />
            Our old instrument is a 270 MHz instrument, while{" "}
            <button
              onClick={handleShowImage}
              className="text-[#A5C882] underline"
            >
              our current operating instrument
            </button>{" "}
            is a 400 MHz instrument, located in the basement of the C Wing of
            this building.
            <br />
            <br />
            There are tabletop NMR instruments that fit on a lab bench all the
            way to instruments that are taller than an average person and take
            up their own special room.
            <br />
            <br />
            These instruments are expensive and delicate, so the operator must
            stay focused and follow all operating instructions.
          </p>
        </div>
      </div>
    </main>
  );
}
