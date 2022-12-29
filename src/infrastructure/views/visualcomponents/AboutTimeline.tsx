import React from "react";

function AboutTimeline() {
  return (
    <ul className=" font-sans p-4 lg:p-8 bg-slate-900 dark:bg-slate-100 dark:text-gray-100">
      <li>
        <article>
          <div className="grid p-4  overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
            <h3 className="mb-1 ml-8 text-lime-400/90 font-bold  md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
              Earum at ipsa aliquid quis, exercitationem est.
            </h3>
            <time
              dateTime=""
              className=" row-start-1 mb-1 font-semibold text-slate-50 md:col-start-1 xl:col-span-2 dark:text-gray-400"
            >
              Feb 02, 2017
            </time>
            <p className=" p-4 ml-8 text-justify text-gray-50 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique saepe exercitationem numquam, labore necessitatibus
              deleniti quasi. Illo porro nihil necessitatibus debitis delectus
              aperiam, fuga impedit assumenda odit, velit eveniet est.
            </p>
          </div>
        </article>
      </li>
      <li>
        <article>
          <div className="grid p-4  overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
            <h3 className="mb-1 ml-8 text-lime-400/90 font-bold  md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
              Earum at ipsa aliquid quis, exercitationem est.
            </h3>
            <time
              dateTime=""
              className=" row-start-1 mb-1 font-semibold text-slate-50 md:col-start-1 xl:col-span-2 dark:text-gray-400"
            >
              Jul 20, 2021
            </time>
            <p className=" p-4 ml-8 text-justify text-gray-50 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique saepe exercitationem numquam, labore necessitatibus
              deleniti quasi. Illo porro nihil necessitatibus debitis delectus
              aperiam, fuga impedit assumenda odit, velit eveniet est.
            </p>
          </div>
        </article>
      </li>
      <li>
        <article>
          <div className="grid p-4  overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
            <h3 className="mb-1 ml-8 text-lime-400/90 font-bold  md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
              Start Henry Bootcamp and my Freelance Career
            </h3>
            <time
              dateTime=""
              className=" row-start-1 mb-1 font-semibold text-slate-50 md:col-start-1 xl:col-span-2 dark:text-gray-400"
            >
              Aug 01, 2022
            </time>
            <p className=" p-4 ml-8 text-justify text-gray-50 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique saepe exercitationem numquam, labore necessitatibus
              deleniti quasi. Illo porro nihil necessitatibus debitis delectus
              aperiam, fuga impedit assumenda odit, velit eveniet est.
            </p>
          </div>
        </article>
      </li>
    </ul>
  );
}

export default AboutTimeline;
