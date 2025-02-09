import { Link } from "react-router";

export default function Home() {
  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <p className="text-[#0C0C31]">hi, used to "create" the page</p>
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[340px] left-[265px]">
        NUCLEAR
      </p>
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[509px] left-[440px]">
        MAGNETIC
      </p>
      <p className="absolute text-[#A5C882] text-[210px] font-bold top-[676px] left-[170px]">
        RESONACE
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[340px] left-[265px]">
        N
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[509px] left-[440px]">
        M
      </p>
      <p className="absolute text-[#FEFCFC] text-[210px] font-bold top-[676px] left-[170px]">
        R
      </p>
      <Link to="/how-it-works">
        <img
          src="/src/assets/start.svg"
          alt="start"
          className="absolute top-[540px] left-[1560px]"
        ></img>
      </Link>
      <p className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        HEADING
      </p>
    </main>
  );
}
