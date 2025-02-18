import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router";

export default function NMRInstrumentation() {
  const [showImage, setShowImage] = useState(false);

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
              className="h-[740px]"
            />
          ) : (
            <h2 className="text-[130px] font-bold text-[#A5C882] w-full text-center">
              Size Matter
            </h2>
          )}
        </div>
        <div className="top-[190px] text-[36px] text-[#FEFCFC] p-8 w-1/2">
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
      <div className="flex items-center justify-start text-[#A5C882] text-[30px] font-bold pl-32">
        <Link to="/nmr-fundamentals">
          <ArrowBackIosIcon sx={{ fontSize: 55 }} />
          <span>Back</span>
        </Link>
      </div>
    </main>
  );
}
