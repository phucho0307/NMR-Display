/**
 * @interface SplittingObject
 * Represents an object containing the title and description for an NMR splitting concept.
 */
interface SplittingObject {
  /** The title of the concept */
  title: string;
  /** The HTML formatted description explaining the concept */
  description: string;
}

/**
 * @typedef {SplittingObject[]} SplittingType
 * Defines an array of splitting data objects.
 */
type SplittingType = SplittingObject[];

/**
 * @constant {SplittingType} SplittingData
 * Stores information about ¹H NMR splitting (or coupling), explaining how neighboring hydrogens affect peaks in an NMR spectrum.
 * It includes interactive components represented by buttons with `data-id` attributes, likely corresponding to UI elements that dynamically render content based on user interaction.
 */
export const SplittingData: SplittingType = [
  {
    title: "Splitting",
    description: `
      <p>A very cool thing about ¹H NMR spectroscopy is that hydrogens on neighboring carbons have an impact on each other.</p>
      <p>This is a feature called splitting (or coupling) and will turn a peak in a ¹H NMR spectrum into a set of peaks that often has predictable patterns.</p>
      <p>How a peak splits, where one peak (a singlet) becomes two (a doublet) or three (a triplet) or more, is a direct outcome of how many neighboring hydrogens are present.</p>
      <p>For example, in this <button id="component-btn" data-id="1" class="underline inline text-[#A5C882]">spectrum of Ethanol</button>, we see a <button id="component-btn" data-id="2" class="underline inline text-[#A5C882]">singlet for the OH in orange</button>, a <button id="component-btn" data-id="3" class="underline inline text-[#A5C882]">triplet for CH₃ in purple</button>, and a <button id="component-btn" data-id="4" class="underline inline text-[#A5C882]">quartet for the CH₂ in pink</button>. </p>
      <p>While integration measures how many hydrogens contribute to a specific peak, splitting shows how many other hydrogens are neighboring.</p>
      <p>Splitting works best with hydrogens on carbons and follows the N+1 rule: N is the number of neighboring hydrogens and the peak is split into N+1 lines. So, if the hydrogen has three neighboring hydrogens (N = 3), then N + 1 = 4 and the peak is split into <button id="component-btn" data-id="5" class="underline inline text-[#A5C882]">four lines, called a quartet, as we see in pink (CH₂).</button> If the hydrogen has two neighboring hydrogens (N = 2), then N + 1 = 3 and the peak will be split into <button id="component-btn" data-id="6" class="underline inline text-[#A5C882]">three lines, called a triplet, as we see in purple (CH₃)</button>.</p>
      <p>The <button id="component-btn" data-id="7" class="underline inline text-[#A5C882]">orange peak (OH) is a singlet</button> because it is attached to an oxygen and does not participate in splitting like hydrogens on carbons do.</p>
      <p>Another common splitting pattern is a doublet, where a hydrogen would neighbor 1 hydrogen.</p>
      <p>Finally, sometimes the pattern is very complicated, or overlapping with other patterns. This is given the term multiplet.</p>
      <p>When figuring out splitting, every neighboring hydrogen counts—even if those hydrogens are identical. The patterns seen in a ¹H NMR spectrum follow <button id="component-btn" data-id="8" class="underline inline text-[#A5C882]">Pascal’s Triangle.</button></p> 
      <p>When a splitting pattern does NOT fit the N + 1 rule (a predictable pattern), it is called a multiplet—this is very common for aromatic hydrogens.</p>
    `,
  },
];
