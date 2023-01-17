import React from "react";

interface Props {
  text: string;
  children: React.ReactNode;
}

function ServicesOffered({ text, children }: Props) {
  return (
    <div className="flex items-center rounded-lg  px-4 py-2 text-gray-100">
      {children}
      <span className="ml-3 text-sm font-medium"> {text} </span>
    </div>
  );
}

export default ServicesOffered;
