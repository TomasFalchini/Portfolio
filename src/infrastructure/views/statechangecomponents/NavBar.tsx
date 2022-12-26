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

function NavBar() {
  const [color, setColor] = useState("bg-lime-400");
  const changeColorAndSection = () => {};

  return (
    <nav
      className={`h-15 z-50 ${color} flex fixed top-0 w-full justify-center items-center shadow-xl font-medium font-serif`}
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
