import React from "react";
import foodapp from "../../../images/foodapp.png";
import calathea from "../../../images/calathea.jpg";
import metaapp from "../../../images/meta app.jpg";

function PortfolioLinks() {
  const GoToPage = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section className="p-2 bg-slate-900/80 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col rounded-md shadow-sm xl:flex-row">
          <img
            src={calathea}
            alt=""
            className="h-72  xl:w-96 2xl:w-auto dark:bg-gray-500 aspect-video"
          />
          <div className="h-72  flex flex-col lg:items-center justify-center flex-1 p-4 dark:bg-gray-900">
            <h3 className="text-2xl text-sky-400/80 font-bold font-serif">
              CALATHEA MARKET
            </h3>
            <p className="my-6 w-full  2xl:w-96  text-gray-50 font-serif dark:text-gray-400">
              E-commerce application with User management, Google Auth, Mailing,
              Payment methods, Sending features and Admin dashboard.
            </p>
            <button
              onClick={() => {
                GoToPage("https://api-plants-b6153.web.app/");
              }}
              type="button"
              className="rounded bg-sky-500/90 hover:bg-sky-500 px-4 py-1 self-center text-gray-50 font-semibold font-serif"
            >
              Go to page
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-md shadow-sm xl:flex-row xl:flex-row-reverse">
          <img
            src={metaapp}
            alt=""
            className="h-72  xl:w-96 2xl:w-auto dark:bg-gray-500 aspect-video"
          />
          <div className="h-72 flex flex-col lg:items-center justify-center flex-1 p-4 dark:bg-gray-900">
            <h3 className="text-2xl text-sky-400/80 font-bold font-serif">
              META APP
            </h3>
            <p className="my-6 w-full  2xl:w-96  text-gray-50 font-serif dark:text-gray-400">
              Chat applicattion similar to Messenger of Meta. It was developed
              with Next.js. I have aplied Clean Architectures and SOLID
              principles.
            </p>
            <button
              onClick={() => {
                GoToPage(
                  "https://github.com/TomasFalchini/MetaApp-with-Next-13-TS"
                );
              }}
              type="button"
              className="rounded bg-sky-500/90 hover:bg-sky-500 px-4 py-1 self-center text-gray-50 font-semibold font-serif"
            >
              Go to page
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-md shadow-sm xl:flex-row">
          <img
            src={foodapp}
            alt=""
            className="h-72  xl:w-96 2xl:w-auto dark:bg-gray-500 aspect-video"
          />
          <div className="h-72 flex flex-col lg:items-center  justify-center flex-1 p-4 dark:bg-gray-900">
            <h3 className="text-2xl text-sky-400/80 font-bold font-serif">
              FOOD APP
            </h3>
            <p className="my-6 w-full  2xl:w-96  text-gray-50 font-serif dark:text-gray-400">
              Recipes applicattion which consumes the SPONACULAR API, where you
              can search more than 5000 recipes.
            </p>
            <button
              onClick={() => {
                GoToPage("https://food-e8ce9.web.app/home/recipes");
              }}
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
