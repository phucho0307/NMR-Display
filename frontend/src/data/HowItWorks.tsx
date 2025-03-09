/**
 * Represents a section in the "How It Works" guide.
 * Each object contains a title and a description related to an aspect of the technology.
 *
 * @interface HowItWorksObject
 * @property {string} title - The title of the section, describing a key concept.
 * @property {string} description - The detailed explanation of the concept, which may include HTML for rich formatting.
 */

/**
 * An array of `HowItWorksObject` describing various components of the NMR technology.
 * Each item represents a section with a title and a detailed explanation.
 *
 * @type {HowItWorksType}
 * @example
 * const exampleHowItWorks = [
 *   {
 *     title: "The Technology",
 *     description: "Detailed explanation of the technology..."
 *   }
 * ]
 */

interface HowItWorksObject {
  title: string;
  description: string;
}

type HowItWorksType = HowItWorksObject[]; // Define it as an array of HowItWorksObject

export const HowItWorks: HowItWorksType = [
  {
    title: "The Technology",
    description: `
      <p>Have you ever had an MRI?</p> <p>NMR spectroscopy uses the same technology.</p>
      <p>Particular nuclei, magnetic fields, and radio waves are combined to study the environments at the atomic/molecular level.</p>
      <p>An MRI specifically looks at the hydrogen nuclei in water molecules in your bodily tissues to produce an image that doctors use to understand what’s happening in your body.</p>
      <p>NMR spectroscopy uses the same technology. Chemists use an NMR spectrum to understand the chemical structure of a molecule.</p>
    `,
  },
  {
    title: "The Magnet",
    description: `
      <p>Just like an MRI, the heart of the NMR spectrometer is a superconducting magnet.</p> 
      <p>As long as it is kept sufficiently cold, the electricity flowing in the superconducting wire (and the magnetic field it creates) will continue forever. No batteries or external power required!</p>
      <p>The magnet field strength of this instrument is 6.3 tesla. That’s about 200,000 times more powerful than the magnetic field of the earth!</p>
    `,
  },
  {
    title: "The Temperature",
    description: `
      <p>In order for our magnet to be superconducting it needs to be at a very cold temperature.</p> 
      <p>The superconducting magnet is cooled by liquid helium, which provides this low temperature (4K / -452℉/ -269℃).</p>
      <p>The liquid helium will evaporate over time. To slow down this evaporation, the (expensive) liquid helium is kept cold by a separate layer of (cheap) liquid nitrogen (77K, -196℃ / -320℉).</p>
      <p>The outside layer of the can is insulated by a vacuum and with Mylar, to help keep the magnet cold.</p> 
      <p>Basically, the entire metal can is like a Yeti - an excellent thermos!</p>
    `,
  },
  {
    title: "The Sample",
    description: `
      <p>If you’ve ever had an MRI, you were the sample. With NMR, a sample is made of your compound of interest and a deuterated NMR solvent.</p>
      <p>Then, the sample is lowered into the hollow center of the magnet where the magnetic field is strongest and most uniform.</p>
    `,
  },
  {
    title: "The Field",
    description: `
      <p>An optimum spectrum is collected in a uniform magnetic field. Though quite good, a magnetic field might not be uniform due to imperfections in the magnet and changes caused by the sample itself.</p>
      <p>Shim coils are small electromagnets that are able to add/subtract a little bit of magnetic field in various directions (the X, Y, and Z planes). By “shimming”, the magnetic field is made uniform and the spectrum is optimized.</p>
    `,
  },
  {
    title: "The Nuclei",
    description: `
      <p>Only certain elements can be observed by NMR spectroscopy.</p>
      <p>An isotope of an element is NMR active if it has a 'nuclear spin' magnitude greater than 1/2.</p>
      <p>This spin is a weird, spooky, quantum mechanical property, and it is not the physical spinning of a particle.  The mathematics of the quantum mechanical spin number and a physically spinning object are very similar, which is how it got its name.</p>
      <p>When a nucleus with a non-zero nuclear spin is placed in a magnetic field, it precesses around the magnetic field axis just like how a gyroscope or a top precesses under the influence of gravity.  This precession of the nucleus can be detected as radio waves.</p>
      <p>All nuclei of a given isotope precess at the exact same rate when in the exact same magnetic field, and hence are detected at the same radio frequency.  But in a molecule, the magnetic field can and does vary by a 'small' amount depending on the chemical bonding and environment.</p>
      <p>This small variation in the frequency of the radio signals is called 'chemical shift', and gives us a useful tool to peer inside a molecule.</p>
    `,
  },
  {
    title: "The Four Standard Nuclei",
    description: `
    <p>
      Depending on the nucleus of interest you’ve selected, the magnetic moment varies and thus the resonant frequency varies.
    </p>
    <p>
      The four standard NMR-active nuclei are isotopes of hydrogen, carbon, fluorine, and phosphorus.
    </p>
    <div class="flex justify-center text-[30px] gap-6">
      <p><sup>1</sup>H</p>
      <p><sup>13</sup>C</p>
      <p><sup>19</sup>F</p>
      <p><sup>31</sup>P</p>
    </div>
  `,
  },
  {
    title: `The <sup>1</sup>H Nuclei`,
    description: `
      <p>Let's consider 1H nuclei. It is an excellent choice for three reasons:</p>
      <ol class="list-decimal pl-6 text-[30px] text-[#FEFCFC]">
        <li>It has a very large magnetic moment.</li>
        <li>Its natural abundance is 99.98%.</li>
        <li>Hydrogen is fantastically important in many types of chemistry, especially organic chemistry.</li>
      </ol>
      <p><sup>1</sup>H nuclei have a resonant frequency with this instrument of 270 MHz.</p>
    `,
  },
  {
    title: "The Pulse",
    description: `
      <p>The instrument is tuned to the specific resonant or precession frequency of the nuclei of interest.</p>
      <p>This means that we need to tune the instrument to different resonant frequencies within the radio frequency (RF) range.</p>
      <p>These are the resonant frequencies for the four standard nuclei:</p>
      <div class="w-full text-center flex flex-col gap-[100px]">
        <ul>
          <li><sup>1</sup>H {270 MHz}</li>
          <li><sup>13</sup>C {68 MHz}</li>
          <li><sup>19</sup>F {254 MHz}</li>
          <li><sup>31</sup>P {109 MHz}</li>
        </ul>
      </div>
    `,
  },
  {
    title: "The Acquisition",
    description: `
      <p>This part of the process can take some time, depending on what information we need and what kind of sample we have.  Here we collect the NMR data.</p>
      <p>After we tune the spectrometer to a particular nucleus and shim the magnetic field, the sample is pulsed with radio waves at the resonant frequency to initiate precession.</p>
      <p>All these little magnets precessing together add up to create a bigger oscillating magnetic field. It is measured through magnetic induction (exactly like how the antenna of a radio picks up radio signals).</p>
      <p>Once the pulse has ended, the nuclei initially precess together and this yields an NMR signal that is recorded in a computer.</p>
      <p>Very shortly after the pulse, the nuclei stop precessing together (stop being in phase). The nuclei get out of sync for two main reasons:</p>
      <ol class="list-decimal pl-6 text-[30px] text-[#FEFCFC] flex flex-col gap-10">
        <li>
          <p>1. The nuclei within a molecule are in slightly different magnetic environments and so precess at slightly different frequencies.</p>
          <p>For example, consider the two different hydrogen environments in <button data-id="1" id="component-btn" class="underline text-[#A5C882]">methanol:</button></p>
          <p><button data-id="2" id="component-btn" class="underline text-[#A5C882]">one is attached to oxygen</button> and <button data-id="3" id="component-btn" class="underline text-[#A5C882]">the others are attached to carbon.</button></p>
        </li>
        <li>2. The nuclei gradually “relax” back to equilibrium.</li>
      </ol>
      <p>As the nuclei stop precessing in sync, the strength of the magnetic induction decreases.  One can observe this magnetic induction decay over time.  This is called the Free Induction Decay (FID).</p>
      <p>If an FID signal is weak, the experiment can be repeated and added together in order to improve the signal to noise. The number of scans needed depends on the type of experiment, the amount of sample you have, and the problem you're trying to solve.</p>
    `,
  },
  {
    title: "The Transformation",
    description: `
      <p>While acquisitions can take anywhere from seconds to hours, the “transformation” takes only seconds.</p>
      <p>Imagine a short burst of sound from an orchestra played through a speaker.  The oscillations of the speaker representing all those superimposed sounds are like the FID described above.</p>
      <p>But when we listen to an orchestra, we can pick out different notes/frequencies even though all the notes are played at the same time.</p>
      <p>Analogously, using math and a computer, we can convert all of the precessions (sounds) from the NMR acquisition into their corresponding frequencies (notes).</p>
      <p>That type of math is called the Fourier Transform of the FID and with it we can see at what slightly different frequencies the nuclei are precessing and how many nuclei are precessing at each of these frequencies.</p>
      <P>From this information, chemists can  understand the sample's chemical structure.</p>
    `,
  },
  {
    title: "The Spectrum",
    description: `
      <p>A plot of the precession frequencies versus their intensity is called an NMR spectrum.</p>
      <p>The small variations in the precession frequency between the different nuclei in a molecule are called “chemical shift”, and it offers clues about the molecular structure. The range of chemical shift frequencies is typically very small - so small that the amount of change is measured in parts per million.</p>
      <p>A spectrum is usually presented as <button data-id="4" id="component-btn" class="underline text-[#A5C882]">Intensity</button> vs. <button data-id="5" id="component-btn" class="underline text-[#A5C882]">parts-per-million (PPM)</button>.</p>
      <p>We see the spectrum as a graphical representation of lines that allow a trained scientist to “see” a chemical structure.</p>
      <p>Often, more than one type of NMR spectrum  is needed to identify a chemical compound. There are many different types of NMR experiments.</p>
      <p>Let’s assume that we have performed enough experiments and gathered enough data to know that we are working with a sample of Methanol.</p>
      <p>If we recall the molecular structure of <button data-id="1" id="component-btn" class="underline text-[#A5C882]">Methanol</button>, we know that it's composed of <button data-id="7" id="component-btn" class="underline text-[#A5C882]">a single hydrogen</button> attached to oxygen and <button data-id="8" id="component-btn" class="underline text-[#A5C882]">three hydrogens</button> attached to a carbon.</p>
      <p>In this <button data-id="9" id="component-btn" class="underline text-[#A5C882]"><sup>1</sup>H NMR spectrum of Methanol</button> we see <button data-id="10" id="component-btn" class="underline text-[#A5C882]">two peaks</button> that further validate the different chemical environments of hydrogen within the sample.</p>
      <p>The <button data-id="11" id="component-btn" class="underline text-[#A5C882]">shorter peak</button> at 4.8 ppm is the single hydrogen attached to the oxygen. The <button data-id="12" id="component-btn" class="underline text-[#A5C882]">taller peak</button> at 3.6 ppm are the three hydrogens attached to the carbon.</p>
    `,
  },
  {
    title: "The Bigger Picture",
    description: `
      <p>NMR spectroscopy is a powerful tool that can identify chemical compounds and measure many types of chemical reactions.</p>
      <p>It works best with small amounts (1 to 100 milligrams) of a pure, or mostly pure, compound.</p>
      <p>Nuclear Magnetic Resonance spectroscopy is a key technique in the discovery of new medicines and industrial processes.</p>
    `,
  },
];
