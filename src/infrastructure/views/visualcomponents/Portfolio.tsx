import React from "react";
import PortfolioGallery from "./PortfolioGallery";
import PortfolioLinks from "./PortfolioLinks";

function Portfolio() {
  return (
    <div className="mr-6">
      <PortfolioLinks />
      <PortfolioGallery />
    </div>
  );
}

export default Portfolio;
