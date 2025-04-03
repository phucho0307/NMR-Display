import { Link } from "react-router";
import { useLocation } from "react-router";

/**
 * Renders the navigation bar for the application.
 * Displays navigation links to different sections and dynamically updates the title based on the current route.
 *
 * @component
 * @return {React.ReactElement} The JSX code for the Navbar component.
 */
export default function Navbar(): React.ReactElement {
  const location1 = useLocation();

  const Location1 = [
    {
      title: "Biological Instrumentation",
      path: "/yeast",
    },
    {
      title: "Biological Instrumentation",
      path: "/nucl-prot",
    },
    {
      title: "Biological Instrumentation",
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
    {
      title: "Basic Aspects",
      path: "/symmetry",
    },
    {
      title: "Basic Aspects",
      path: "/chemical-shift",
    },
    {
      title: "Basic Aspects",
      path: "/integration",
    },
    {
      title: "Basic Aspects",
      path: "/splitting",
    },
  ];

  return (
    <nav className="w-full h-[158px] bg-[#0C0C31] border-b-[4px] border-[#536365]/70 fixed flex items-center justify-between px-10">
      <Link to="/" className="text-[#FEFCFC]">
        <img
          src="/images/NMR-Logo.png"
          alt="NMR LOGO"
          className="border-[4px] border-[#A5C882] w-[100px] h-auto"
        />
      </Link>

      <h1 className="text-[60px] font-bold text-[#A5C882] absolute top-8 left-40">
        {Location.find((item) => item.path === location.pathname)?.title ?? ""}
      </h1>
      <h1 className="text-[55px] font-bold text-[#A5C882] absolute top-9 left-40">
        {Location1.find((item) => item.path === location1.pathname)?.title ??
          ""}
      </h1>

      <div className="flex space-x-2 gap-1 text-[28px] leading-tight rounded">
        <Link
          to="/how-it-works"
          className={`flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-8 py-2 bg-[#536365]/35 ${
            location.pathname === "/how-it-works"
              ? "bg-[#536365]/80 text-white"
              : "bg-[#536365]/35 "
          }`}
        >
          How It
          <br />
          Works
        </Link>
        <Link
          to="/nmr-fundamentals"
          className={`flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-8 py-2 bg-[#536365]/35 ${
            location.pathname === "/nmr-fundamentals"
              ? "bg-[#536365]/80 text-white "
              : "bg-[#536365]/35 "
          }`}
        >
          NMR
          <br />
          Fundamentals
        </Link>
        <Link
          to="/course-usage"
          className={`flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-8 py-2 bg-[#536365]/35 ${
            location.pathname === "/course-usage"
              ? "bg-[#536365]/80 text-white "
              : "bg-[#536365]/35 "
          }`}
        >
          Course
          <br />
          Usage
        </Link>
        <Link
          to="/faculty-research"
          className={`flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-8 py-2 bg-[#536365]/35 ${
            location.pathname === "/faculty-research"
              ? "bg-[#536365]/80 text-white "
              : "bg-[#536365]/35 "
          }`}
        >
          Faculty
          <br />
          Research
        </Link>
        <Link
          to="/about-project"
          className={`flex flex-col flex-wrap justify-center items-center font-semibold rounded text-[#A5C882] text-center px-8 py-2 bg-[#536365]/35 ${
            location.pathname === "/about-project"
              ? "bg-[#536365]/80 text-white "
              : "bg-[#536365]/35 "
          }`}
        >
          About this
          <br />
          Project
        </Link>
      </div>
    </nav>
  );
}
