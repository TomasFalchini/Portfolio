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
      className={`${imgback} flex justify-between flex-col lg:flex-row relative m-0 w-screen  p-16 z-40`}
    >
      <div className="absolute inset-0  bg-gradient-to-t  backdrop-saturate-150  from-slate-900 via-slate-900/95 to-slate-900/50"></div>
      {children}
    </div>
  );
}

export default ContainerOfSections;
