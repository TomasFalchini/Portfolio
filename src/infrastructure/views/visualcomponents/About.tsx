import React from "react";
import AboutHero from "./AboutHero";
import AboutTimeline from "./AboutTimeline";

function About() {
  return (
    <div className="m-6 z-10 grid grid-cols-1 gap-6 p-4">
      <AboutHero />
      <AboutTimeline />
    </div>
  );
}

export default About;
