import React, { useState } from "react";
import IconsForSkills from "../visualcomponents/IconsForSkills";
import SkillIcon from "../visualcomponents/SkillIcon";
import { motion } from "framer-motion";

interface State {
  see: boolean;
}

const Stars: string[] = ["React", "TypeScript", "MongoDB", "ExpressJs"];
const AllSkills: string[] = [
  "React",
  "TypeScript",
  "MongoDB",
  "ExpressJs",
  "NodeJs",
  "Firebase",
  "Tailwind",
  "PostgreSQL",
  "Redux",
  "Jest",
  "JavaScript",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
];

function TechSkills() {
  const [seeMore, setSeeMore] = useState<State["see"]>(false);

  const handleOpen = () => {
    setSeeMore(!seeMore);
  };

  if (!seeMore) {
    return (
      <div className="w-full max-w-sm sm:max-w-none flex justify-center ">
        <div className="min-w-max  lg:ml-20  p-6 border-4 border-solid border-slate-100">
          <div className="relative p-20 min-w-max bg-slate-900">
            <div className="grid grid-cols-2 min-w-max">
              {Stars.map((el) => {
                return (
                  <div className="flex flex-col w-32 h-32 p-4 m-4 justify-center items-center">
                    <IconsForSkills link={el.toLowerCase()} />
                    <h3 className="font-bold text-xl m-4 text-violet-100">
                      {el}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="bg-violet-700 hover:bg-violet-400 text-slate-100 font-bold py-2 px-4 border-b-4 border-violet-900 hover:border-violet-600 hover:text-slate-900 rounded mt-4"
                onClick={handleOpen}
              >
                See All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-center  ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          <div className="min-w-max ml-6  p-6 border-4 border-solid border-slate-100">
            <div className="relative p-20 min-w-max bg-slate-900">
              <div>
                <button
                  className="bg-violet-700 hover:bg-violet-400 text-slate-100 font-bold py-2 px-4 border-b-4 border-violet-900 hover:border-violet-600 hover:text-slate-900 rounded mt-4 "
                  onClick={handleOpen}
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-3 min-w-max">
                {AllSkills.map((el) => {
                  return (
                    <div className="scale-90 flex flex-col w-32 h-32 p-4 m-10 justify-center items-center">
                      <IconsForSkills link={el.toLowerCase()} />
                      <h3 className="font-bold text-xl m-4 text-violet-100">
                        {el}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default TechSkills;
