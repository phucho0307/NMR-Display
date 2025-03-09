/**
 * @interface NMRSpectrum
 * Represents an object containing the title, extra title, and description for different aspects of NMR spectroscopy.
 */
interface NMRSpectrum {
  /** The main title of the NMR concept */
  title: string;
  /** An additional title providing more context */
  extraTitle: string;
  /** The HTML formatted description explaining the concept */
  description: string;
}

/**
 * @typedef {NMRSpectrum[]} NMRSpectrumType
 * Defines an array of NMR spectrum data objects.
 */
type NMRSpectrumType = NMRSpectrum[];

/**
 * @constant {NMRSpectrumType} NMRSpectrum
 * Stores information about different aspects of NMR spectroscopy, including interpretation, ¹H NMR Spectroscopy, and the four basic aspects of spectra analysis.
 * The descriptions contain HTML content, with some links directing users to specific topics such as symmetry, chemical shift, integration, and splitting.
 */
export const NMRSpectrum: NMRSpectrumType = [
  {
    title: `Interpreting <br /> NMR Spectrum`,
    extraTitle: `"Seeing" <br /> Chemical <br /> Structures`,
    description: `
      An NMR spectrum doesn’t actually allow us to see a chemical structure, but a trained scientist can elucidate a chemical structure from NMR spectral data.
    `,
  },
  {
    title: `<sup>1</sup>H NMR Spectroscopy`,
    extraTitle: "Different Experiment <br /> Produce Different <br /> Spectra",
    description: `
      <p>There are four main aspects of NMR spectra that give us information about the chemical structure of our sample.</p>
      <p>A variety of experiments can be performed to give us information about nuclei in a molecule.
      The aspects of the spectra are dependent upon the type of NMR experiment you are running.</p>
      <p>Most experiments will provide at least two of these aspects, but one will always produce all four: ¹H NMR Spectroscopy.</p>
      <p>Let’s focus on ¹H NMR Spectroscopy to learn about all four aspects.</p>
    `,
  },
  {
    title: `4 Basic <br /> Aspects`,
    extraTitle: "",
    description: `
      <ol class="list-decimal pl-20 text-[40px] text-[#FEFCFC] flex flex-col gap-10">
        <li><a href="/symentry" class="underline text-[#A5C882] pl-3">Symentry</a></li>
        <li><a href="/chemical-shift" class="underline text-[#A5C882] pl-3">Chemical Shift</a></li>
        <li><a href="/integration" class="underline text-[#A5C882] pl-3">Integration</a></li>
        <li><a href="/splitting" class="underline text-[#A5C882] pl-3">Splitting</a></li>
      </ol>
    `,
  },
];
