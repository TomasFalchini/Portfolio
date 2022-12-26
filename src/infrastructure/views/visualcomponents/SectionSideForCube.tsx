import React from "react";

interface Props {
  children: React.ReactNode;
}

function SectionSideForCube({ children }: Props) {
  return (
    <section className="w-80 bg-blue-100 mt-60">
      <div>{children}</div>
    </section>
  );
}

export default SectionSideForCube;
