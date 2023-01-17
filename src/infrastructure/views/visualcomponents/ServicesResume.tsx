import React from "react";

function ServicesResume() {
  return (
    <section className="bg-slate-900/75 dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-50 capitalize lg:text-4xl dark:text-white">
          What can I offer to you
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-1 xl:mt-8 xl:gap-12 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="flex flex-col items-center p-6 space-y-3 text-center border-4 border-solid border-slate-800 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 hover:saturate-200 hover:bg-amber-400 text-slate-900 bg-amber-400/90 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>

            <h1 className="text-2xl font-bold text-gray-50 capitalize dark:text-white">
              Development & Hosting
            </h1>

            <p className="text-gray-300 dark:text-gray-300">
              I'm a developer with experience in building websites for small and
              medium sized businesses. Whether you're trying to win work, list
              your services or even create a whole online store - I can help!
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center border-4 border-solid border-slate-800 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 hover:saturate-200 hover:bg-amber-400 text-slate-900 bg-amber-400/90 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <h1 className="text-2xl font-bold text-gray-50 capitalize dark:text-white">
              Work by hour or by project
            </h1>

            <p className="text-gray-300 dark:text-gray-300">
              Either building something from scratch, bug fixing, or
              modification in your current project, I can help you with anything
              related to building web apps and produce results which can bring
              long-term benefits for your business.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center border-4 border-solid border-slate-800 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 hover:saturate-200 hover:bg-amber-400 text-slate-900 bg-amber-400/90 rounded-full dark:text-white dark:bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 className="text-2xl font-bold text-gray-50 capitalize dark:text-white">
              Simple & clean designs
            </h1>

            <p className="text-gray-300 dark:text-gray-300">
              I focus on listening & understanding your needs and requirements,
              and developing reliable and outstanding solutions. I don't stop
              till the time you are completely happy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesResume;
