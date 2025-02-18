interface NMRSpectrum {
  title: string;
  extraTitle: string;
  description: string;
}

type NMRSpectrumType = NMRSpectrum[]; // Define it as an array of NMRSpectrumType

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
          The aspects of the spectra are dependent upon the type of NMR experiment you are running. </p>
          
          <p>Most experiments will provide at least two of these aspects, but one will always produce all four: 1H NMR Spectroscopy.</p>

          <p>Let’s focus on 1H NMR Spectroscopy to learn about all four aspects.</p>
                  `,
  },
  {
    title: `4 Basic <br /> Aspects`,
    extraTitle: "",
    description: `
      <ol class="list-decimal pl-20 text-[40px] text-[#FEFCFC] flex flex-col gap-10">
        <li><a href="/symentry" class="underline text-[#A5C882] pl-3">Symentry<a /></li>
        <li><a class="underline text-[#A5C882] pl-3">Chemical Shift<a /></li>
        <li><a class="underline text-[#A5C882] pl-3">Iintegration<a /></li>
        <li><a class="underline text-[#A5C882] pl-3">Splitting<a /></li>
      </ol>
            
        `,
  },
];
