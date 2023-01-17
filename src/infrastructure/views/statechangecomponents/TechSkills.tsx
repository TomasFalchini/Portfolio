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
  return (
    <div className="w-full scale-75 sm:scale-100 flex justify-center  ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <div className=" min-w-max ml-0 md:ml-6 p-2 md:p-6 border-4 border-solid border-slate-100">
          <div className="relative p-20 sm:p-12 md:p-16 min-w-max bg-slate-900">
            <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 min-w-max">
              {AllSkills.map((el) => {
                return (
                  <div className="scale-75 xl:scale-90 flex flex-col w-32 h-32 p-2 m-4 xl:m-10 justify-center items-center">
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

export default TechSkills;
