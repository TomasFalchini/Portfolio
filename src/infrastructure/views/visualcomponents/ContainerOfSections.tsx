import React from "react";

interface Props {
  children: React.ReactNode;
  imgback: string;
}

function ContainerOfSections({ children, imgback }: Props) {
  return (
    <div
      className={`${imgback} flex justify-between absolute m-0 bg-slate-800 w-screen h-screen p-16 z-40`}
    >
      {children}
    </div>
  );
}

export default ContainerOfSections;
