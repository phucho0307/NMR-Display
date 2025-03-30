import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import NMRFundamentals from "./pages/NMRFundamentals";
import CourseUsage from "./pages/CourseUsage";
import FacultyResearch from "./pages/FacultyResearch";
import AboutProj from "./pages/AboutProj";
import NMRInstrumentation from "./pages/NMRInstrumentation";
import Interpreting from "./pages/Interpreting";
import Diagram from "./pages/Diagram";
import GenChem from "./pages/GenChem";
import OrgChem from "./pages/OrgChem";
import BioInst from "./pages/BioInst";
import AdvSyn from "./pages/AdvSyn";
import Katie from "./pages/Katie";
import Diana from "./pages/Diana";
import Helen from "./pages/Helen";
import About from "./pages/About";
import Credits from "./pages/Credits";
import SpecialThanks from "./pages/SpecialThanks";
import SpecLab from "./pages/SpecLab";
import Stereo from "./pages/Stereo";
import ThreeWeek from "./pages/ThreeWeek";
import Yeast from "./pages/Yeast"; // Why: Yeast-related project page.
import NuclProt from "./pages/NuclProt";
import DetRate from "./pages/DetRate";
import LigSyn from "./pages/LigSyn";
import Symentry from "./pages/Symentry";
import PreCat from "./pages/PreCat";
import AsymSyn from "./pages/AsymSyn";
import SynPho from "./pages/SynPho";
import ChemicalShift from "./pages/ChemicalShift";
import Integration from "./pages/Integration";
import Splitting from "./pages/Splitting";
import { InactivityProvider } from "./components/InactivityContext";

/**
 * The main application component that defines routing structure.
 *
 * @component
 * @returns {JSX.Element} The application's routing structure wrapped in `Layout`.
 *
 * Description:
 * - Uses `react-router-dom` for client-side navigation.
 * - Defines all page routes inside a `Layout` wrapper.
 *
 * How to Modify:
 * - To add a new route, import the corresponding page component and add a `<Route>` inside the `Layout`.
 * - To remove a route, delete the corresponding `<Route>` entry.
 * - Ensure all imported page components exist in the `pages` directory to prevent errors.
 */
function App(): JSX.Element {
  return (
    <InactivityProvider>
      <Routes>
        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="nmr-fundamentals" element={<NMRFundamentals />} />
          <Route path="course-usage" element={<CourseUsage />} />
          <Route path="faculty-research" element={<FacultyResearch />} />
          <Route path="about-project" element={<AboutProj />} />
          <Route path="nmr-instrumentation" element={<NMRInstrumentation />} />
          <Route path="interpreting" element={<Interpreting />} />
          <Route path="diagram" element={<Diagram />} />
          <Route path="gen-chem" element={<GenChem />} />
          <Route path="org-chem" element={<OrgChem />} />
          <Route path="bio-inst" element={<BioInst />} />
          <Route path="adv-syn" element={<AdvSyn />} />
          {/* Individual People Pages */}
          <Route path="katie" element={<Katie />} />
          <Route path="diana" element={<Diana />} />
          <Route path="helen" element={<Helen />} />
          {/* General Information Pages */}
          <Route path="about" element={<About />} />
          <Route path="credits" element={<Credits />} />
          <Route path="special-thanks" element={<SpecialThanks />} />
          {/* Specialized Laboratory & Research Topics */}
          <Route path="spec-lab" element={<SpecLab />} />
          <Route path="stereo" element={<Stereo />} />
          <Route path="3-week" element={<ThreeWeek />} />
          <Route path="yeast" element={<Yeast />} />{" "}
          {/* Yeast-related research page */}
          <Route path="nucl-prot" element={<NuclProt />} />
          <Route path="det-rate" element={<DetRate />} />
          <Route path="pre-cat" element={<PreCat />} />
          <Route path="asym-syn" element={<AsymSyn />} />
          <Route path="syn-pho" element={<SynPho />} />
          <Route path="symentry" element={<Symentry />} />
          {/* Chemistry-Specific Topics */}
          <Route path="chemical-shift" element={<ChemicalShift />} />
          <Route path="integration" element={<Integration />} />
          <Route path="splitting" element={<Splitting />} />
          <Route path="lig-syn" element={<LigSyn />} />
        </Route>
      </Routes>
    </InactivityProvider>
  );
}

export default App;
