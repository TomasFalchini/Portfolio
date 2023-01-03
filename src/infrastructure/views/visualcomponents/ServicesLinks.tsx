import React from "react";

interface Props {
  link: string;
  image: string;
}

function ServicesLinks({ link, image }: Props) {
  return (
    <div className="max-w-xs mx-1 overflow-hidden bg-slate-900/50 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-2xl font-semibold text-amber-300 font-serif mt-2 uppercase dark:text-white">
          LANDING PAGE
        </h1>
        <p className="mt-1 text-sm text-gray-100 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </p>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={image}
        alt="NIKE AIR"
      />

      <div className="flex items-end justify-end px-4 py-2 bg-gray-900">
        <button className="px-2 py-1 text-sm font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-amber-400/90 rounded hover:bg-amber-400 hover:saturation-200  focus:outline-none">
          Go to page
        </button>
      </div>
    </div>
  );
}

export default ServicesLinks;
