import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

/**
 * About component that displays information about the NMR project.
 *
 * This component provides a detailed description of the NMR project, including its history,
 * the people involved, and the purpose of the project. It uses various HTML elements and
 * CSS classes to structure and style the content.
 *
 * The `Link` component from `react-router-dom` is used to create navigation links that allow
 * users to navigate to different pages within the application without causing a full page reload.
 * Here it is used to navigate back to the About Project page.
 *
 * @returns {JSX.Element} The rendered About page.
 */
export default function About() {
  return (
    <main className="bg-[#0C0C31] w-full h-full p-10">
      <div className="flex gap-10">
        <div className="w-1/2 h-[840px] flex items-center justify-center">
          <img
            src="/images/NMR-large.png"
            alt="Project Visual"
            className=" w-full shadow-lg object-contain  border-10 border-[#A5C882]"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <p className="p-4 text-[55px] font-bold">by Dr. Diana Cermark</p>
          <div className="left-[1050px] font-serif text-[36px] text-[#FEFCFC] overflow-y-auto px-4 scrollbar-custom flex flex-col gap-16 h-[600px]">
            <p>
              The seed for this project was planted in 2014, soon after we were
              notified that our National Science Foundation proposal for a new
              NMR spectrometer would be funded. Once our new instrument was
              delivered, our old one would become a piece of scrap metal…unless
              it could somehow be given a new life. I have been taking my
              Advanced Organic Chemistry students on a tour of the USDA-ARS
              Research Lab in Peoria, Illinois for many years, and one stop on
              our tour is always the NMR facility. Dr. Karl Vermillion, the
              lab’s NMR specialist, has a display of an old NMR spectrometer
              that is cut open to show the inner workings of the instrument, and
              this stop is always a highlight for our students—what is actually
              INSIDE the metal can that is the NMR spectrometer? So, instead of
              sending our instrument away for scrap, I knew exactly what I
              wanted to do with it—cut it open and make our OWN display, but
              take it one step further and make it interactive. I knew exactly
              what I wanted—a touch-screen display that would trigger lighting
              inside the instrument to guide the audience through all of the
              parts that make it an NMR spectrometer. The Dean of the College in
              2014, Dr. Laura Behling, approved our request to begin the project
              by cutting open our old NMR spectrometer. My husband, Steven
              Cermak, and I hauled our old instrument to Greg Akerman in Peoria
              who had cut open the USDA NMR spectrometer. Greg cut open ours and
              we hauled it back to Knox, where it sat in the basement of the
              Chemistry wing in SMC (for years), waiting for its new life. I
              knew I could not take on this project by myself, so I had to find
              a team to help me build my vision. Along came Philip Griffin, a
              Chemistry and Physics double-major who took Organic Chemistry with
              me in the Fall and Winter Terms of the 2018-19 academic year.
              Philip took great interest in NMR Spectroscopy when we covered it
              in class, and I thought he might be the right student to bring
              onto this project. Boy, was I right! Philip came on to the project
              in 2019 and built a prototype with a touch screen display, powered
              by a Raspberry Pi that activated RGB light strips with electrical
              wiring and a variety of programming languages. Incredible
              progress! Then COVID-19 hit and the project came to a brief halt.
              The SMC A-core renovation was happening around this same time,
              and, with a little prodding of the architects in charge of the
              project, a new home for the NMR spectrometer was designed. The NMR
              was (literally) dusted off, hauled out of the SMC basement, and
              hoisted back onto its legs in its permanent location here, outside
              of the SMC Library. Next came the collaboration with Kelly Fisk,
              our design expert. Kelly came onto the project in 2021 and made
              the final design of the touchscreen interface her senior capstone
              design project. Kelly synthesized Diana’s vision and Philip’s
              technical work into an interface that prioritizes the best user
              experience for a variety of audiences that includes current and
              prospective students, faculty, and campus visitors. Her ability to
              take what Philip and I were describing and make it a reality has
              enhanced this project into something we were absolutely unable to
              do without her. I really think it is a BEAUTIFUL design—most
              definitely NOT something two chemists could create! Finally, we
              needed a team of computer programmers to put all of these ideas
              together into one final product, which you see before you today.
              From 2022 - 2023, Kelly managed a team of Knox student developers,
              led by An Trieu to adapt all of my ideas, Philip’s early coding,
              lighting, and electrical work, and Kelly’s designs into what you
              see today—an interactive, museum-quality NMR spectroscopy display
              that can be used in a variety of ways: as a teaching tool to
              enhance our Chemistry curriculum; an explanation of one of
              Chemistry’s most impactful pieces of instrumentation and how the
              data it provides guides chemists; and a view into how this
              instrument is used at Knox College in our teaching and research
              lab. Though it has taken many years to come to fruition, what our
              team has created is EXACTLY what I envisioned all those years
              ago—turning our scrap metal into an awesome display of NMR
              spectroscopy. Please—enjoy this creation, interact with it, and
              discover what this incredible piece of technology can do!
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
