import React from "react";

interface Props {
  title: string;
  index: string;
  color: string;
}

function DinamicCube({ title, index, color }: Props) {
  return (
    <div
      className={` w-96 h-96 mb-28 self-center lg:self-start order-first lg:order-none sm:scale-75 md:scale-100  relative p-8 border-4 border-solid border-slate-900 lg:sticky top-14`}
    >
      <div
        className={`w-80 h-80 relative z-50 flex flex-col text-8xl font-black font-serif ${color}`}
      >
        <div className="h-72 font-extrabold text-slate-500/80 -indent-8 text-left">
          {index}
        </div>
        <div className="break-all text-right p-2 text-slate-200">{title}</div>
      </div>
    </div>
  );
}

export default DinamicCube;
