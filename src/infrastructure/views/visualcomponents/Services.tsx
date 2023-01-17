import React from "react";
import ServicesLinks from "./ServicesLinks";
import ServicesResume from "./ServicesResume";
import ServicesStatistics from "./ServicesStatistics";

function Services() {
  return (
    <div className="m-6 min-w-min z-10 flex flex-col justify-center items-center">
      <ServicesResume />

      <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2 lg:grid-cols-1 xl:mt-8 xl:gap-12 xl:grid-cols-2 2xl:grid-cols-3">
        <ServicesLinks
          link={"https://www.fiverr.com/tomsfalchini?public_mode=true"}
          service={"Fiverr"}
          image={
            "https://fiverr-res.cloudinary.com/npm-assets/layout-server/fiverr-og-logo.5fd6463.png"
          }
        />
        <ServicesLinks
          link={
            "https://www.upwork.com/freelancers/~01d4c08e57a1578650?viewMode=1"
          }
          service={"Upwork"}
          image={
            "https://play-lh.googleusercontent.com/x5OixHQbVrbTt1QcY7BD6Fab_RyEj3x3WDpgWAgIivA44o0mI1mDiROdqztgV7PYhVw"
          }
        />
        <ServicesLinks
          link={"#"}
          service={"Freelancer"}
          image={
            "https://www.f-cdn.com/assets/img/facebook/default-04d56222.jpg"
          }
        />
      </div>
      {/* <ServicesStatistics /> */}
    </div>
  );
}

export default Services;
