import { Link } from "react-router";

/**
 * Home component renders the home page for the NMR project.
 *
 * This component displays the title "Nuclear Magnetic Resonance" and a link
 * to navigate to the "How It Works" page. The link is represented by an image.
 *
 * @returns {JSX.Element} The JSX code for the Home page.
 */
export default function Home() {
  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[300px] left-[170px]">
        NUCLEAR
      </p>
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[490px] left-[300px]">
        MAGNETIC
      </p>
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[676px] left-[80px]">
        RESONANCE
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[300px] left-[170px]">
        N
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[490px] left-[300px]">
        M
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[676px] left-[80px]">
        R
      </p>
      <Link to="/how-it-works">
        <img
          src="/images/start.svg"
          alt="start"
          className="absolute top-[540px] left-[1560px]"
        />
      </Link>
      {/* Here it is used to link to the How It Works page */}
    </main>
  );
}
