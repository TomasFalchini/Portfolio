import React from "react";
import nasa from "../../../images/nasa.png";
import mmo2 from "../../../images/mmo2.png";
import mmo from "../../../images/mmoreac.png";
import calathea from "../../../images/calathea3.png";
import contacts from "../../../images/contacts.png";

function PortfolioGallery() {
  return (
    <section className="py-6 bg-slate-900/80 mt-6 ">
      <h3 className="font-serif m-4 text-sky-50 font-extrabold text-3xl">
        More projects
      </h3>
      <div className="container grid grid-cols-2 gap-6 p-4 mx-auto md:grid-cols-4">
        <img
          src={mmo}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 0 aspect-square"
          src={nasa}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
          src={calathea}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
          src={contacts}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
          src={mmo2}
        />
      </div>
    </section>
  );
}

export default PortfolioGallery;
