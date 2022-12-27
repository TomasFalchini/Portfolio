import React from "react";

interface Props {
  children: React.ReactNode;
}

function SectionSideForCube({ children }: Props) {
  return (
    <section className="mt-6 w-80">
      <div>{children}</div>
    </section>
  );
}

export default SectionSideForCube;
