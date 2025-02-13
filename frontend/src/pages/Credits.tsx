import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

// needs a scroll bar + links to memebers
export default function Credits() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        About this Project
      </h1>

      <img
        src="/public/images/NMR-large.png"
        alt="nmr-logo"
        className="absolute top-[350px] left-[120px] border-[8px] border-[#A5C882] jusitfy-center  w-[800px] "
      ></img>

      <Link to="/about-project" className="absolute top-[1000px] left-[1400px]">
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[280px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Project Director/ Founder
            <br />
            Dr. Diana Cermak,
            <br />
            Professor of Chemistry
            <br />
            <br />
            Designer/ Project Manager
            <br />
            Kelly Fisk, class of‘22
            <br />
            Major: (self-designed) Graphic & Interactive
            <br />
            Design for Art & Business
            <br />
            <br />
            Hardware and Light
            <br />
            Design/Phase I Programming
            <br />
            Philip Griffin, class of ‘20
            <br />
            Majors: Chemistry & Physics
            <br />
            <br />
            Phase II Programming Lead
            <br />
            An Trieu, class of ‘24
            <br />
            Major: Computer Science
            <br />
            Minors: Music Theory/Composition & Graphic Design
            <br />
            <br />
            Additional Programming Support
            <br />
            Thy Le, class of ‘24
            <br />
            Majors: Biochemistry & Computer Science
            <br />
            <br />
            Jessi Quach, class of '24
            <br />
            Major: Computer Science
            <br />
            <br />
            Adam Brohl, class of ‘24
            <br />
            Major: Computer Science
            <br />
            <br />
            Illustrations
            <br />
            James Adamson, class of ‘23
            <br />
            Major: Studio Art
            <br />
            Minor: Graphic Design & Computer Science
            <br />
            <br />
            Kelly Fisk, class of ‘22
            <br />
            Major: Graphic & Interactive Design for Art
            <br />& Business (self-designed)
            <br />
            Course Research Content Contributors
            <br />
            <br />
            Dr. Helen Hoyt
            <br />
            Professor of Chemistry
            <br />
            <br />
            Dr. Katherine Adelsberger
            <br />
            Professor of Environmental Studies
            <br />
            <br />
            Dr. Andrew Mehl
            <br />
            Professor of Chemistry & Biochemistry
          </p>
        </div>
      </div>
    </main>
  );
}
