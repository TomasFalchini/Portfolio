import React from "react";

function PortfolioLinks() {
  return (
    <section className="p-2 bg-slate-900 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-72 dark:bg-gray-500 aspect-video"
          />
          <div className="h-72 flex flex-col justify-center flex-1 p-4 dark:bg-gray-900">
            <h3 className="text-2xl text-sky-400/80 font-bold font-serif">
              CALATHEA MARKET
            </h3>
            <p className="my-6  text-gray-50 font-serif dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button
              type="button"
              className="rounded bg-sky-500/90 hover:bg-sky-500 px-4 py-1 self-center text-gray-50 font-semibold font-serif"
            >
              Go to page
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-72 dark:bg-gray-500 aspect-video"
          />
          <div className="h-72 flex flex-col justify-center flex-1 p-4 dark:bg-gray-900">
            <h3 className="text-2xl text-sky-400/80 font-bold font-serif">
              META APP
            </h3>
            <p className="my-6  text-gray-50 font-serif dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button
              type="button"
              className="rounded bg-sky-500/90 hover:bg-sky-500 px-4 py-1 self-center text-gray-50 font-semibold font-serif"
            >
              Go to page
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?3"
            alt=""
            className="h-72 dark:bg-gray-500 aspect-video"
          />
          <div className="h-72 flex flex-col justify-center flex-1 p-4 dark:bg-gray-900">
            <h3 className="text-2xl text-sky-400/80 font-bold font-serif">
              FOOD APP
            </h3>
            <p className="my-6  text-gray-50 font-serif dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button
              type="button"
              className="rounded bg-sky-500/90 hover:bg-sky-500 px-4 py-1 self-center text-gray-50 font-semibold font-serif"
            >
              Go to page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioLinks;
