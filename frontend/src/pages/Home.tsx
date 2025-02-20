import { Link } from "react-router";

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
          RESONACE
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
    </main>
  );
}
