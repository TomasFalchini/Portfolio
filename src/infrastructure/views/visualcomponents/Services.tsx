import React from "react";
import ServicesLinks from "./ServicesLinks";
import ServicesResume from "./ServicesResume";
import ServicesStatistics from "./ServicesStatistics";

function Services() {
  return (
    <div className="m-6 min-w-min flex flex-col justify-center items-center">
      <ServicesResume />

      <div className="m-6 grid grid-cols-3 gap-6">
        <ServicesLinks
          link={"completar"}
          image={
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          }
        />
        <ServicesLinks
          link={"completar"}
          image={
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          }
        />
        <ServicesLinks
          link={"completar"}
          image={
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          }
        />
      </div>
      <ServicesStatistics />
    </div>
  );
}

export default Services;
