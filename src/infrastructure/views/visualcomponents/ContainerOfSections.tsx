import { useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  imgback: string;
  id: string;
}

function ContainerOfSections({ children, imgback, id }: Props) {
  return (
    <div
      id={id}
      className={`${imgback} flex justify-between relative m-0 bg-slate-800 w-screen  p-16 z-40`}
    >
      {children}
    </div>
  );
}

export default ContainerOfSections;
