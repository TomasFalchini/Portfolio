import React from "react";
import PortfolioGallery from "./PortfolioGallery";
import PortfolioLinks from "./PortfolioLinks";

function Portfolio() {
  return (
    <div className="mr-6 z-10 flex flex-col w-full ">
      <PortfolioLinks />
      <PortfolioGallery />
    </div>
  );
}

export default Portfolio;
