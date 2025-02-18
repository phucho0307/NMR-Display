interface SymentryObject {
  title: string;
  description: string;
}

type SymentryType = SymentryObject[];

export const SymentryData: SymentryType = [
  {
    title: "Symentry",
    description: `
      <p>With NMR, every peak (or cluster of peaks) corresponds to a unique type of atom being analyzed.</p>
      <p>This <button id="component-btn" data-id="1" class="underline inline text-[#A5C882]">spectrum of Ethanol has three clusters of peaks</button>, indicating that there are three distinct types of hydrogens in the molecule, with three unique chemical environments:</p>
      <ul class="flex gap-[130px] w-full items-center justify-center">
        <li><button id="component-btn" data-id="2" class="underline inline text-[#A5C882]">CH<sub>2</sub></button></li>
        <li><button id="component-btn" data-id="3" class="underline inline text-[#A5C882]">OH</button></li>
        <li><button id="component-btn" data-id="4" class="underline inline text-[#A5C882]">CH<sub>3</sub></button></li>
      </ul>
      <p>In <sup>1</sup>H NMR spectroscopy, most often every hydrogen on a particular carbon will be identical to the others on the same carbon.</p>
      <p>Let’s again consider the molecular structure of <button id="component-btn" data-id="5" class="underline inline text-[#A5C882]">Ethanol</button>. Here we have <button id="component-btn" data-id="6" class="underline inline text-[#A5C882]">two hydrogens attached to the same carbon (CH<sub>2</sub>).</button> These two hydrogens have an equivalent chemical environment.</p>
      <p>We also have <button id="component-btn" data-id="7" class="underline inline text-[#A5C882]">three hydrogens attached to the other carbon (CH<sub>3</sub>)</button> and these hydrogens share an equivalent environment.</p>
      <p>But the chemical environments of the hydrogens in <button id="component-btn" data-id="8" class="underline inline text-[#A5C882]">CH<sub>2</sub> are different from the hydrogens in CH<sub>3</sub></button>, and the remaining hydrogen attached to oxygen in <button id="component-btn" data-id="9" class="underline inline text-[#A5C882]">OH</button> has a chemical environment different from either of them.</p>
      <p>Again, each of these three unique chemical environments are shown in the <sup>1</sup>H NMR spectrum for Ethanol as <button id="component-btn" data-id="10" class="underline inline text-[#A5C882]">three separate clusters of peaks</button> identifying the presence of hydrogen in our sample, but in three unique chemical environments (CH<sub>2</sub>, OH, and CH<sub>3</sub>).</p>
      <p><button id="component-btn" data-id="11" class="underline inline text-[#A5C882]">Because all three chemical environments are different,</button> there is no symentry.</p>
      <p>If we look at the <sup>1</sup>H NMR spectrum for <button id="component-btn" data-id="12" class="underline inline text-[#A5C882]">diethyl ether</button>, we see two of the same three peaks we saw in ethanol:</p>
      <p class="flex gap-2.5 w-full items-center justify-center"><button id="component-btn" data-id="13" class="underline inline text-[#A5C882]">CH<sub>2</sub></button> and <button id="component-btn" data-id="14" class="underline inline text-[#A5C882]">CH<sub>3</sub></button></p>
      <p>But here, the peaks are showing two groups of CH<sub>2</sub><sub> </sub>and two groups of CH<sub>3</sub><sub> </sub>on either side of the central oxygen.</p>
      <p class="flex gap-[130px] w-full items-center justify-center">The result?</p>
      <p class="flex gap-[130px] w-full items-center justify-center">Symentry!</p>
    `,
  },
];
