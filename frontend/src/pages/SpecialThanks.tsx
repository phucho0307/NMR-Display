import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router";

// needs a scroll bar + links to memebers
export default function SpecialThanks() {
  return (
    <main className="bg-[#0C0C31]  w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        About this Project
      </h1>

      <h2 className="text-[150px] font-bold text-[#A5C882] absolute top-[430px] left-[130px]">
        With many
        <br />
        thanks to
      </h2>

      <Link to="/about-project" className="absolute top-[1000px] left-[1400px]">
        {" "}
        <ArrowBackIcon />
      </Link>

      <div className="flex absolute top-[280px] left-[130px] space-x-6">
        <div className="w-[960px]"></div>
        <div className="w-[730px] font-serif text-[36px] text-[#FEFCFC]">
          <p>
            Gregory Akerman, Ameritac, Inc. - for cutting open our retired NMR
            instrument.
            <br />
            <br />
            Dr. Laura Behling, Dean of the College (2013-2017) - for seeing the
            vision and securing the funding necessary to cut open the retired
            instrument.
            <br />
            <br />
            Dr. Steven Cermak, USDA-ARS - for transporting and coordinating the
            cutting of the instrument by Greg Akerman in Peoria, Illinois.
            <br />
            <br />
            Steve Davis - for headshots, group photos of contributors, and
            action photography. <br />
            <br />
            Fisk Design Group - for providing ongoing design work, editing, and
            project management long after completion of Kelly Fisk’s senior
            capstone project. <br />
            <br />
            Alex Fluegel - for help with getting the Raspberry Pi, website and
            display up and running initially and for advising Philip Griffin on
            how best to use these components.
            <br />
            <br /> Dr. Gregory Gilbert, Professor of Art History & Museum
            Studies - for facilitating connections to interactive designers in
            museums. <br />
            <br />
            Holabird & Root Architects - for accommodating a last-minute
            redesign of SMC A-core to house and display the retired instrument.{" "}
            <br />
            <br />
            Mark Holmes, Professor of Art - for designing and building custom
            enclosures for electrical components. <br />
            <br />
            Bradley McKinney, Lead Interactive Technology Instructional Designer
            at The Children’s Museum of Indianapolis - for providing very
            insightful guidance related to interactive displays in the earliest
            design stages. <br />
            <br />
            Levi Morgan - for securely mounting the Raspberry Pi. <br />
            <br />
            Matt Reed - for audio/visual support. <br />
            <br />
            Donna Robinson - for administrative support.
            <br />
            <br /> Dr. Mike Schneider, Provost and Dean of Knox College - for
            financial support of the student programming team. <br />
            <br />
            Dr. Mark Shroyer, Professor of Physics - for content editing and
            contributions. <br />
            <br />
            Tim Stedman, Associate Professor of Art - for design mentorship and
            supervision of Kelly Fisk’s capstone project.
            <br />
            <br /> Dr. Karl Vermillion, USDA-ARS - for inspiration and content
            editing.
            <br />
            <br />
            Carla Wehmeyer - for in-class and field research photography of
            students and faculty.
          </p>
        </div>
      </div>
    </main>
  );
}
