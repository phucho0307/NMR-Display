import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * SpecialThanks component renders the page for acknowledging contributors to the project.
 *
 * This component displays a list of people and organizations who contributed to the project.
 * It includes a title, a description, and a link to navigate back to the previous page.
 *
 * @returns {JSX.Element} The JSX code for the SpecialThanks page.
 */
export default function SpecialThanks() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <div className="flex gap-10">
        <div className="w-1/2">
          <h2 className="text-[150px] font-bold text-[#A5C882] absolute top-[430px] left-[130px] leading-[130px]">
            With many
            <br />
            thanks to
          </h2>
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start pt-10">
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC] overflow-y-auto px-4 scrollbar-custom flex flex-col gap-16 h-[700px]">
            <p>
              <span className="font-bold  text-[#A5C882]">
                Gregory Akerman, Ameritac, Inc.
              </span>{" "}
              - for cutting open our retired NMR instrument.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Dr. Laura Behling, Dean of the College (2013-2017)
              </span>{" "}
              - for seeing the vision and securing the funding necessary to cut
              open the retired instrument.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Dr. Steven Cermak, USDA-ARS{" "}
              </span>
              - for transporting and coordinating the cutting of the instrument
              by Greg Akerman in Peoria, Illinois.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Steve Davis</span> -
              for headshots, group photos of contributors, and action
              photography.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Fisk Design Group
              </span>{" "}
              - for providing ongoing design work, editing, and project
              management long after completion of Kelly Fisk’s senior capstone
              project.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Alex Fluegel</span> -
              for help with getting the Raspberry Pi, website and display up and
              running initially and for advising Philip Griffin on how best to
              use these components.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Dr. Gregory Gilbert, Professor of Art History & Museum Studies
              </span>{" "}
              - for facilitating connections to interactive designers in
              museums.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Holabird & Root Architects
              </span>{" "}
              - for accommodating a last-minute redesign of SMC A-core to house
              and display the retired instrument.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Mark Holmes, Professor of Art
              </span>{" "}
              - for designing and building custom enclosures for electrical
              components.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Bradley McKinney, Lead Interactive Technology Instructional
                Designer at The Children’s Museum of Indianapolis
              </span>{" "}
              - for providing very insightful guidance related to interactive
              displays in the earliest design stages.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Levi Morgan</span> -
              for securely mounting the Raspberry Pi.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Matt Reed</span> - for
              audio/visual support.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Donna Robinson</span> -
              for administrative support.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Dr. Mike Schneider, Provost and Dean of Knox College
              </span>{" "}
              - for financial support of the student programming team.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Dr. Mark Shroyer, Professor of Physics
              </span>{" "}
              - for content editing and contributions.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Tim Stedman, Associate Professor of Art
              </span>{" "}
              - for design mentorship and supervision of Kelly Fisk’s capstone
              project.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">
                Dr. Karl Vermillion, USDA-ARS
              </span>{" "}
              - for inspiration and content editing.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Carla Wehmeyer</span> -
              for in-class and field research photography of students and
              faculty.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Tioluwani Enoch</span>{" "}
              - for enhancing the backend functionality, refining frontend
              components, and ensuring seamless integration across the NMR
              display project.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Nour Kamel</span> - for
              enhancing the frontend of the NMR display site, ensuring a
              polished and user-friendly interface.
            </p>
            <p>
              <span className="font-bold text-[#A5C882]">Saleshma Dahal</span> -
              for createing a terminal-controlled Python LED controller for the
              Raspberry Pi Pico that sends RGB data over USB.
            </p>
          </div>

          <div className="flex gap-10 items-left w-full self-end justify-self-end">
            <div className="flex items-center text-[#A5C882] text-[30px] font-bold justify-self-start">
              <Link to="/about-project">
                <ArrowBackIosIcon sx={{ fontSize: 55 }} />
                <span>Back</span>
              </Link>
              {/* Here it is used to link to the About Project page */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
