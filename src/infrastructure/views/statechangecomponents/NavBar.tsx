import React, { useState } from "react";
import NavButton from "../visualcomponents/NavButton";

const buttons: Array<string> = [
  "Home",
  "About",
  "Skills",
  "Portfolio",
  "Services",
  "Contact",
];

/* 
const ScrollDemo = () => {
   const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView()    
   // run this function from an event handler or an effect to execute scroll 

   return (
      <> 
         <div ref={myRef}>Element to scroll to</div> 
         <button onClick={executeScroll}> Click to scroll </button> 
      </>
   )
}

*/

//violet-700
//pink-600
//sky-500
//amber-400

interface Props {
  color: string;
}

function NavBar({ color }: Props) {
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
