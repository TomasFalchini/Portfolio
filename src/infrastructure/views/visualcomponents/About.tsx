import React from "react";
import AboutHero from "./AboutHero";
import AboutTimeline from "./AboutTimeline";

function About() {
  return (
    <div className="m-6 z-10 flex flex-col min-h-fit p-4">
      <div>
        <AboutHero />
      </div>
      <div>
        <AboutTimeline />
      </div>
    </div>
  );
}

export default About;
