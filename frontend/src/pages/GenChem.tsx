export default function GenChem() {
  return (
    <main className="bg-[#0C0C31] w-full h-full">
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        General Chemistry
      </h1>
      <img
          src="/public/images/cermak-student.png"
          alt="general chemistry"
          className="h-full "
        ></img>

      <div className=" w-[960px] ">
        <h2 className="absolute top-[350px] left-[1050px] text-[100px] font-bold text-[#A5C882] leading-[100px]">
          Carbon-13 NMR
          <br />
          Spectroscopy
        </h2>
      </div>
      <div className=" absolute w-[810px] top-[585px] left-[1050px] font-serif text-[36px] text-[#FEFCFC]">
        <p>
          13C NMR spectroscopy is used to distinguish the number of types of
          carbon atoms among a set of isomer compounds with the same molecular
          formula but different structures.
        </p>
      </div>
    </main>
  );
}
