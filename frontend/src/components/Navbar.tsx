import { Link } from "react-router";
import { useLocation } from "react-router";

/**
 * Navbar component renders the navigation bar for the application.
 *
 * This component displays the navigation links to different sections of the application.
 * It also dynamically updates the title based on the current route.
 *
 * @returns {JSX.Element} The JSX code for the Navbar component.
 */
export default function Navbar() {
  const location1 = useLocation();

  const Location1 = [
    {
      title: "Biochemical Instrumentation",
      path: "/yeast",
    },
    {
      title: "Biochemical Instrumentation",
      path: "/nucl-prot",
    },
    {
      title: "Biochemical Instrumentation",
      path: "/det-rate",
    },
    {
      title: "Interpreting NMR Spectrum",
      path: "/interpreting",
    },
    {
      title: "Diagram of Components",
      path: "/diagram",
    },
  ];

  const location = useLocation();
  const Location = [
    {
      title: "How It Works",
      path: "/how-it-works",
    },
    {
      title: "NMR Fundamentals",
      path: "/nmr-fundamentals",
    },
    {
      title: "Course Usage",
      path: "/course-usage",
    },
    {
      title: "Faculty Research",
      path: "/faculty-research",
    },
    {
      title: "About this Project",
      path: "/about-project",
    },
    {
      title: "NMR Instrumentation",
      path: "/nmr-instrumentation",
    },
    {
      title: "General Chemistry",
      path: "/gen-chem",
    },
    {
      title: "Organic Chemistry",
      path: "/spec-lab",
    },
    {
      title: "Organic Chemistry",
      path: "/3-week",
    },
    {
      title: "Organic Chemistry",
      path: "/stereo",
    },

    {
      title: "Advanced Synthesis",
      path: "/lig-syn",
    },
    {
      title: "Advanced Synthesis",
      path: "/pre-cat",
    },
    {
      title: "Dr. Katie Adelsberger",
      path: "/katie",
    },
    {
      title: "Dr. Diana Cermak",
      path: "/asym-syn",
    },
    {
      title: "Dr. Diana Cermak",
      path: "/syn-pho",
    },
    {
      title: "Dr. Helen Hoyt",
      path: "/helen",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Credits",
      path: "/credits",
    },
    {
      title: "Special Thanks",
      path: "/special-thanks",
    },
  ];

  return (
    <nav className="w-full h-[158px] bg-[#0C0C31] border-b-[4px] border-[#010005] fixed flex items-center justify-between px-10">
      <Link to="/" className="text-[#FEFCFC]">
        <img
          src="/images/NMR-Logo.png"
          alt="NMR LOGO"
          className="border-[4px] border-[#A5C882] w-[100px] h-auto"
        />
      </Link>

      <h1 className="text-[70px] font-bold text-[#A5C882] absolute top-8 left-42">
        {Location.find((item) => item.path === location.pathname)?.title ?? ""}
      </h1>
      <h1 className="text-[55px] font-bold text-[#A5C882] absolute top-12 left-42">
        {Location1.find((item) => item.path === location1.pathname)?.title ??
          ""}
      </h1>

      <div className="flex space-x-6 gap-2 text-[30px]">
        <Link
          to="/how-it-works"
          className=" h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-4 py-2"
        >
          How It
          <br />
          Works
        </Link>
        <Link
          to="/nmr-fundamentals"
          className=" h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-4 py-2"
        >
          NMR
          <br />
          Fundamentals
        </Link>
        <Link
          to="/course-usage"
          className=" h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-4 py-2"
        >
          Course
          <br />
          Usage
        </Link>
        <Link
          to="/faculty-research"
          className=" h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-4 py-2"
        >
          Faculty
          <br />
          Research
        </Link>
        <Link
          to="/about-project"
          className="w-[180px] h-[80px] flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-4 py-2"
        >
          About this
          <br />
          Project
        </Link>
      </div>
    </nav>
  );
}
