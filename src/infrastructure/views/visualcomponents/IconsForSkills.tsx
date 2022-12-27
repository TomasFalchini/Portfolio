import React from "react";

interface Props {
  link: string;
}

function IconsForSkills({ link }: Props) {
  return (
    <img
      className="w-20 h-20 hover:saturate-200 hover:scale-105"
      src={`https://skillicons.dev/icons?i=${link}`}
      alt={`icon ${link}`}
    />
  );
}

export default IconsForSkills;
