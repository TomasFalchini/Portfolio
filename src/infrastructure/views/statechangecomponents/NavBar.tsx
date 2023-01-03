import React, { useEffect, useState } from "react";
import NavButton from "../visualcomponents/NavButton";
import { useScroll } from "framer-motion";

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
      if (positions[0] < listener && listener < positions[1]) {
        setColor("bg-transparent");
      } else if (positions[1] < listener && listener < positions[2]) {
        setColor("bg-lime-400");
      } else if (positions[2] < listener && listener < positions[3]) {
        setColor("bg-violet-700");
      } else if (positions[3] < listener && listener < positions[4]) {
        setColor("bg-sky-500");
      } else if (positions[4] < listener && listener < positions[5]) {
        setColor("bg-amber-400");
      } else if (positions[5] < listener) {
        setColor("bg-pink-700");
      }
    });

    return cancelSuscr;
  }, [positions]);

  return (
    <nav
      className={`h-15 z-50 transition ease-in-out delay-50 ${color} flex fixed top-0 w-full justify-center items-center shadow-xl font-medium font-serif duration-500`}
    >
      <div>
        {buttons.map((el) => {
          return <NavButton text={el.toUpperCase()} />;
        })}
      </div>
    </nav>
  );
}

export default NavBar;
