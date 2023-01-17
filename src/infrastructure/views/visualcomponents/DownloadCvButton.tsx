import React from "react";

function DownloadCvButton() {
  return (
    <a
      className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
      href="./Resume.pdf"
      target="_blank"
    >
      <span className="absolute inset-0 border border-lime-600 group-active:border-lime-500"></span>
      <span className="block border border-lime-600 bg-lime-600 px-12 py-3 transition-transform active:border-lime-500 active:bg-lime-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
        See Resume
      </span>
    </a>
  );
}

export default DownloadCvButton;
