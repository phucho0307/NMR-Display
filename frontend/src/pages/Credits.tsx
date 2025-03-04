import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Credits component renders the page for the project credits.
 *
 * This component displays information about the people involved in the project.
 * It includes a title, an image, a description, and a link to navigate back to the
 * previous page. The component uses an accordion to display detailed information
 * about each person or group of people.
 *
 * @returns {JSX.Element} The JSX code for the Credits page.
 */
export default function Credits() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [imageSrc, setImageSrc] = useState("/images/NMR-large.png");

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleImageChange = (image?: string) => {
    setImageSrc(image || "/images/NMR-large.png");
  };

  const accordionData = [
    {
      title: "Project Director/ Founder",
      name: "Dr. Diana Cermak",
      details: "Professor of Chemistry",
      content:
        "Dr. Cermak has been working on this project since 2014. She had the all-important initial vision of bringing the old instrument back to life and the tenacity and patience to find the resources and people necessary to make it all happen. She wrote the overwhelming majority of content, including the NMR story - how it works and what the data tells us. See the “About this Project” section for the full story.",
      image: "/images/diana_cermak.png",
    },
    {
      title: "Designer/ Project Manager",
      name: "Kelly Fisk, class of ‘22",
      details:
        "Major: (self-designed) Graphic & Interactive Design for Art & Business",
      content:
        "For her senior capstone project, Kelly took everything that Philip and Dr. Cermak had built and designed a clean, modern user interface prioritizing the best user experience for various audiences and objectives. She also worked closely with Dr. Cermak to build and refine the technical prose and illustrations. She conducted user experience research and testing along the way, reported research findings, and developed countless design iterations to get to what we have before us today. She also recruited and managed all of the computer science students in an Agile work environment.",
      image: "/images/kelly_fisk.png",
    },
    {
      title: "Hardware and Light Design/Phase I Programming",
      name: "Philip Griffin, class of ‘20",
      details: "Majors: Chemistry & Physics",
      content:
        "Philip worked closely with Dr. Cermak to bring her ideas to life by designing the overall strategy to use a Raspberry Pi, HTML & CSS to display all of the NMR written material on a touchscreen display. He also designed and implemented the hard wiring of RGB LED strips within the instrument and wrote the Python code necessary to communicate the lighting commands from the display to the lights. Philip’s role in getting all of the moving parts of this project off the ground cannot be understated. Philip would like to specifically thank Alex Fluegel, class of ‘19, for helping to get the Pi, website, and display up and running initially, as well as advising on how best to use these components. “I could not have gotten as far as I did without his help.”",
      image: "/images/philip_griffin.png",
    },
    {
      title: "Phase II Programming Lead",
      name: "An Trieu, class of ‘24",
      details:
        "Major: Computer Science | Minors: Music Theory/Composition & Graphic Design",
      content:
        "An has been our lead programmer for the final stages of this project. He led a team of computer science students to update the code into React.js, incorporating and troubleshooting the Python coding used for lighting the RGB strips inside the instrument, and has made himself available for countless resets, updates, and changes over the course of this project. He is also in the process of developing our web version of the project that will be available to audiences near and far.",
      image: "/images/an_trieu.png",
    },
    {
      title: "Additional Programming Support",
      people: [
        {
          name: "Thy Le, class of ‘24",
          details: "Majors: Biochemistry & Computer Science",
          image: "/images/thy_le.png",
        },
        {
          name: "Jessi Quach, class of '24",
          details: "Major: Computer Science",
        },
        {
          name: "Adam Brohl, class of ‘24",
          details: "Major: Computer Science",
          image: "/images/adam_brohl.png",
        },
      ],
    },
    {
      title: "Illustrations",
      people: [
        {
          name: "James Adamson, class of ‘23",
          details:
            "Major: Studio Art | Minor: Graphic Design & Computer Science",
        },
        {
          name: "Kelly Fisk, class of ‘22",
          details:
            "Major: Graphic & Interactive Design for Art & Business (self-designed)",
          image: "/images/kelly_fisk.png",
        },
      ],
    },
  ];

  return (
    <main className="bg-[#0C0C31] w-full h-full p-10 text-white">
      <h1 className="absolute top-[50px] left-[220px] text-[#A5C882] text-[60px] font-semibold">
        About this Project
      </h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <img
            src={imageSrc}
            alt="Project Visual"
            className="h-[840px] w-full rounded-lg shadow-lg object-contain"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-10 items-start justify-evenly">
          <div className="left-[1050px] font-serif text-[42px] text-[#FEFCFC] overflow-y-auto px-4 scrollbar-custom flex flex-col gap-8 h-[600px]">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-500 pb-4">
                <button
                  className="text-[48px] flex justify-between items-center w-full text-left text-[#A5C882] hover:text-white transition-all duration-300"
                  onClick={() => handleClick(index)}
                >
                  {item.title}
                  <span className="text-[36px]">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden text-[34px] mt-2"
                >
                  <p
                    className="underline text-[#A5C882] cursor-pointer"
                    onClick={() => handleImageChange(item.image)}
                  >
                    {item.name}
                  </p>
                  <p>{item.details}</p>
                  {item.content && <p>{item.content}</p>}
                  {item.people &&
                    item.people.map((person, i) => (
                      <div key={i} className="mt-2">
                        <p
                          className="underline text-[#A5C882] cursor-pointer"
                          onClick={() => handleImageChange(person.image)}
                        >
                          {person.name}
                        </p>
                        <p>{person.details}</p>
                      </div>
                    ))}
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex gap-10 items-left w-full self-end justify-self-end">
            <div className="flex items-center text-[#A5C882] text-[36px] font-bold justify-self-start">
              <Link
                to="/about-project"
                className="flex items-center gap-2 hover:text-white transition-all duration-300"
              >
                <ArrowBackIosIcon sx={{ fontSize: 60 }} />
                <span>Back</span>
              </Link>
              {/* Here it is used to link to the About Project page */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
