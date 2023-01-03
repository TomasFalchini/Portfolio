import React from "react";
import ServicesLinks from "./ServicesLinks";
import ServicesResume from "./ServicesResume";
import ServicesStatistics from "./ServicesStatistics";

function Services() {
  return (
    <div className="m-6 min-w-min z-10 flex flex-col justify-center items-center">
      <ServicesResume />

      <div className="mt-4 grid grid-cols-3">
        <ServicesLinks
          link={"completar"}
          image={"https://source.unsplash.com/random/200x200/?56"}
        />
        <ServicesLinks
          link={"completar"}
          image={"https://source.unsplash.com/random//200x200/?17"}
        />
        <ServicesLinks
          link={"completar"}
          image={"https://source.unsplash.com/random//200x200/?13"}
        />
      </div>
      {/* <ServicesStatistics /> */}
    </div>
  );
}

export default Services;
