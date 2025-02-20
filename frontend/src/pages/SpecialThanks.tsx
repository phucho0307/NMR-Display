import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function SpecialThanks() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute top-[50px] left-[220px] text-[#A5C882] text-[50px] font-semibold">
        About this Project
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <h2 className="text-[150px] font-bold text-[#A5C882] absolute top-[430px] left-[130px]">
            With many
            <br />
            thanks to
          </h2>
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start pt-10">
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC] overflow-y-auto px-4 scrollbar-custom flex flex-col gap-16 h-[700px]">
            <p>
              Gregory Akerman, Ameritac, Inc. - for cutting open our retired NMR
              instrument.
            </p>
            <p>
              Dr. Laura Behling, Dean of the College (2013-2017) - for seeing
              the vision and securing the funding necessary to cut open the
              retired instrument.
            </p>
            <p>
              Dr. Steven Cermak, USDA-ARS - for transporting and coordinating
              the cutting of the instrument by Greg Akerman in Peoria, Illinois.
            </p>
            <p>
              Steve Davis - for headshots, group photos of contributors, and
              action photography.
            </p>
            <p>
              Fisk Design Group - for providing ongoing design work, editing,
              and project management long after completion of Kelly Fisk’s
              senior capstone project.
            </p>
            <p>
              Alex Fluegel - for help with getting the Raspberry Pi, website and
              display up and running initially and for advising Philip Griffin
              on how best to use these components.
            </p>
            <p>
              Dr. Gregory Gilbert, Professor of Art History & Museum Studies -
              for facilitating connections to interactive designers in museums.
            </p>
            <p>
              Holabird & Root Architects - for accommodating a last-minute
              redesign of SMC A-core to house and display the retired
              instrument.
            </p>
            <p>
              Mark Holmes, Professor of Art - for designing and building custom
              enclosures for electrical components.
            </p>
            <p>
              Bradley McKinney, Lead Interactive Technology Instructional
              Designer at The Children’s Museum of Indianapolis - for providing
              very insightful guidance related to interactive displays in the
              earliest design stages.
            </p>
            <p>Levi Morgan - for securely mounting the Raspberry Pi.</p>
            <p>Matt Reed - for audio/visual support.</p>
            <p>Donna Robinson - for administrative support.</p>
            <p>
              Dr. Mike Schneider, Provost and Dean of Knox College - for
              financial support of the student programming team.
            </p>
            <p>
              Dr. Mark Shroyer, Professor of Physics - for content editing and
              contributions.
            </p>
            <p>
              Tim Stedman, Associate Professor of Art - for design mentorship
              and supervision of Kelly Fisk’s capstone project.
            </p>
            <p>
              Dr. Karl Vermillion, USDA-ARS - for inspiration and content
              editing.
            </p>
            <p>
              Carla Wehmeyer - for in-class and field research photography of
              students and faculty.
            </p>
          </div>
          <div className="flex gap-10 items-left w-full self-end justify-self-end">
            <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
              <Link to="/about-project">
                <ArrowBackIosIcon sx={{ fontSize: 55 }} />
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
