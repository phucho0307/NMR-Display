interface IntegrationObject {
    title: string;
    description: string;
  }
  
  type IntegrationType = IntegrationObject[];
  
  export const IntegrationData: IntegrationType = [
    {
      title: "Integration",
      description: `
        <p>Integration gives information about how many hydrogens are in a molecule (not in an absolute number, but in relative proportion to each other)</p>
        <p>in <button id="component-btn" data-id="1" class="underline inline text-[#A5C882]">this spectrum of Ethanol </button> the three sets of peaks are not equal in size. The <button id="component-btn" data-id="2" class="underline inline text-[#A5C882]"> area under each peak is different</button> and is representative of what proportion of each particular type of hydrogen is present in the molecule.</p>
        <p>Integration is automatically calculated by the NMR software program and expressed as a ratio between peaks in a spectrum.</p>
        <p>In this spectrum of Ethanol, the three peaks represent the three different kinds of hydrogen in the molecule with three distinct chemical shifts.</p>
        <p>The area under each peak is relative in a proportion of 2:1:3. This could mean that the ratio is 2 H for one peak, 1 H for the second peak, and 3 H for the third peak, or  it could be a proportion of 4:2:6, meaning a ratio of 4 H for one peak, 2 H for the second peak, and 6 H for the third peak.</p>
        <p>Symmetry can be observed through integration as well, as seen in this <button id="component-btn" data-id="3" class="underline inline text-[#A5C882]">spectrum of Diethyl ether </button>. Since this molecule is symmetrical, its area is actually a 4:6 ratio, as seen in its <button id="component-btn" data-id="4" class="underline inline text-[#A5C882]">molecular structure</button>, but it could also be correctly reported as a 2:3 ratio, since these are both the relative proportions. Remember: it’s not absolute, but relative.</p>
        <p>This is where information about the chemical structure of the compound (or at least knowing the formula) becomes extremely handy; but even without knowing the chemical formula, integration is a fundamental piece of information provided in a 1H NMR spectrum.</p>
        `,
    },
  ];
  