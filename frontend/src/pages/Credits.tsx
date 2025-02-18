import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Credits() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <h1 className="absolute top-[50px] left-[220px] text-[#A5C882] text-[50px] font-semibold">
        About this Project
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src="/images/NMR-large.png"
            alt=""
            className="h-[840px] w-full"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC] overflow-y-auto px-4 scrollbar-custom flex flex-col gap-16 h-[600px]">
            <div className="flex flex-col gap-3">
              <p className="text-[50px]">Project Director/ Founder</p>
              <div>
                <p className="underline text-[#A5C882]">Dr. Diana Cermak,</p>
                <p>Professor of Chemistry</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <p className="text-[50px]">Designer/ Project Manager</p>
                <p className="underline text-[#A5C882]">
                  Kelly Fisk, class of ‘22
                </p>
                <p>
                  Major: (self-designed) Graphic & Interactive Design for Art &
                  Business
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[50px]">
                Hardware and Light Design/Phase I Programming
              </p>
              <p className="underline text-[#A5C882]">
                Philip Griffin, class of ‘20
              </p>
              <p>Majors: Chemistry & Physics</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[50px]">Phase II Programming Lead</p>
              <div>
                <p className="underline text-[#A5C882]">
                  An Trieu, class of ‘24
                </p>
                <p>Major: Computer Science</p>
                <p>Minors: Music Theory/Composition & Graphic Design</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[50px]">Additional Programming Support</p>
              <div>
                <p className="underline text-[#A5C882]">Thy Le, class of ‘24</p>
                <p>Majors: Biochemistry & Computer Science</p>
              </div>
              <div>
                <p className="underline text-[#A5C882]">
                  Jessi Quach, class of '24
                </p>
                <p>Major: Computer Science</p>
              </div>
              <div>
                <p className="underline text-[#A5C882]">
                  Adam Brohl, class of ‘24
                </p>
                <p>Major: Computer Science</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[50px]">Illustrations</p>
              <div>
                <p className="underline text-[#A5C882]">
                  James Adamson, class of ‘23
                </p>
                <p>Major: Studio Art</p>
                <p>Minor: Graphic Design & Computer Science</p>
              </div>

              <div>
                <p className="underline text-[#A5C882]">
                  Kelly Fisk, class of ‘22
                </p>
                <p>
                  Major: Graphic & Interactive Design for Art & Business
                  (self-designed)
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[50px]">
                Course Research Content Contributors
              </p>

              <p className="underline text-[#A5C882]">Dr. Helen Hoyt</p>
              <p>Professor of Chemistry</p>

              <p className="underline text-[#A5C882]">
                Dr. Katherine Adelsberger
              </p>
              <p>Professor of Environmental Studies</p>

              <p className="underline text-[#A5C882]">Dr. Andrew Mehl</p>
              <p>Professor of Chemistry & Biochemistry</p>
            </div>
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
