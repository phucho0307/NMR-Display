// must change the h of the paragraph to leave space for the back button
// must also add the link to add picture
//  would it be better to just format it like that from the start?

export default function NMRInstrumentation() {
  return (
    <main className="bg-[#0C0C31] w-[1920px] h-[922px]">
      <p className="text-[#0C0C31]">hi, used to "create" the page</p>
      <h1 className="absolute text-[#A5C882] text-[70px] font-semibold top-[35px] left-[237px]">
        NMR Instrumentation
      </h1>

      <div className=" w-[960px] ">
        <h2 className="absolute top-[490px] left-[170px] text-[130px] font-bold text-[#A5C882]">
          Size Matter
        </h2>
      </div>
      <div className=" absolute w-[940px] top-[240px] left-[980px] font-serif text-[36px] text-[#FEFCFC]">
        <p>
          NMR instruments vary in size according to magnet strength, reported in
          megahertz (MHz).
           <br /> 
           <br /> 
           Our old instrument is a 270 MHz instrument,
          while our current operating instrument is a 400 MHz instrument,
          located in the basement of the C Wing of this building. 
          <br /> 
          <br /> 
          There are tabletop NMR instruments that fit on a lab bench all the way to
          instruments that are taller than an average person and take up their
          own special room.
          <br />
          <br />
           These instruments are expensive and delicate, so the operator
          must stay focused and follow all operating instructions.
        </p>
      </div>
    </main>
  );
}
