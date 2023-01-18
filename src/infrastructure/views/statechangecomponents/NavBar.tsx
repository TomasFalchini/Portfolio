import React, { useEffect, useState } from "react";
import NavButton from "../visualcomponents/NavButton";
import { useScroll, motion } from "framer-motion";

const buttons: Array<string> = [
  "Home",
  "About",
  "Skills",
  "Portfolio",
  "Services",
  "Contact",
];

interface Props {
  positions: Array<number>;
}

function NavBar({ positions }: Props) {
  const { scrollY } = useScroll();
  const [color, setColor] = useState("bg-transparent");

  useEffect(() => {
    const cancelSuscr = scrollY.onChange((listener) => {
      if (positions[0] < listener && listener < positions[1] - 50) {
        setColor("bg-transparent");
      } else if (positions[1] - 50 < listener && listener < positions[2] - 50) {
        setColor("bg-teal-500");
      } else if (positions[2] - 50 < listener && listener < positions[3] - 5) {
        setColor("bg-violet-700");
      } else if (positions[3] - 50 < listener && listener < positions[4] - 50) {
        setColor("bg-sky-500");
      } else if (positions[4] - 50 < listener && listener < positions[5] - 50) {
        setColor("bg-amber-400");
      } else if (positions[5] - 50 < listener) {
        setColor("bg-pink-700");
      }
    });

    return cancelSuscr;
  }, [positions]);

  return (
    <nav
      className={`h-15 z-50 transition ease-in-out delay-50 ${color} ${
        color === "bg-pink-700" || color === "bg-violet-700"
          ? "text-stone-400"
          : "text-stone-700"
      } flex fixed top-0 w-full justify-center items-center shadow-xl font-medium font-serif duration-500`}
    >
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          {buttons.map((el) => {
            return <NavButton text={el.toUpperCase()} />;
          })}
        </div>
      </motion.div>
    </nav>
  );
}

export default NavBar;
