import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import HowItWorks from "./pages/HowItWorks"
import NMRFundamentals from "./pages/NMRFundamentals"
import CourseUsage from "./pages/CourseUsage"
import FacultyResearch from "./pages/FacultyResearch"
import About from "./pages/About"
import NMRInstrumentation from "./pages/NMRInstrumentation"
import Interpreting from "./pages/Interpreting"
import Diagram from "./pages/Diagram"
import GenChem from "./pages/GenChem"
import OrgChem from "./pages/OrgChem"
import Biological from "./pages/Biological"
import AdvSyn from "./pages/AdvSyn"
import Katie from "./pages/Katie"
import Diana from "./pages/Diana"
import Helen from "./pages/Helen"
import Credits from "./pages/Credits"
import AboutProj from "./pages/AboutProj"
import SpecialThanks from "./pages/SpecialThanks"


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="nmr-fundamentals" element={<NMRFundamentals/>} />
          <Route path="course-usage" element={<CourseUsage/>} />
          <Route path="faculty-research" element={<FacultyResearch/>} />
          <Route path="about-project" element={<AboutProj/>} />
          <Route path="nmr-instrumentation" element={<NMRInstrumentation/>} />
          <Route path="interpreting" element={<Interpreting/>} />
          <Route path="diagram" element={<Diagram/>} />
          <Route path="gen-chem" element={<GenChem/>} />
          <Route path="org-chem" element={<OrgChem/>} />
          <Route path="biological" element={<Biological/>} />
          <Route path="adv-syn" element={<AdvSyn/>} />
          <Route path="katie" element={<Katie/>} />
          <Route path="diana" element={<Diana/>} />
          <Route path="helen" element={<Helen/>} />
          <Route path="about" element={<About/>} />
          <Route path="credits" element={<Credits/>} />
          <Route path="special-thanks" element={<SpecialThanks/>} />

        </Route>
      </Routes>
    </>
  )
}

export default App
