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
          <Route path="spec-lab" element={<SpecLab/>} />
          <Route path="3-week" element={<ThreeWeek/>} />
          <Route path="stereo" element={<Stereo/>} />
          <Route path="how-it-works" element={<HowItWorksComponent />} />
          <Route path="nmr-fundamentals" element={<NMRFundamentals />} />
          <Route path="course-usage" element={<CourseUsage />} />
          <Route path="faculty-research" element={<FacultyResearch />} />
          <Route path="about-project" element={<AboutProj />} />
          <Route path="nmr-instrumentation" element={<NMRInstrumentation />} />
          <Route path="interpreting" element={<Interpreting />} />
          <Route path="diagram" element={<Diagram />} />
          <Route path="gen-chem" element={<GenChem />} />
          <Route path="org-chem" element={<OrgChem />} />
          <Route path="biological" element={<Biological />} />
          <Route path="adv-syn" element={<AdvSyn />} />
          <Route path="katie" element={<Katie />} />
          <Route path="diana" element={<Diana />} />
          <Route path="helen" element={<Helen />} />
          <Route path="about" element={<About />} />
          <Route path="credits" element={<Credits />} />
          <Route path="special-thanks" element={<SpecialThanks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
