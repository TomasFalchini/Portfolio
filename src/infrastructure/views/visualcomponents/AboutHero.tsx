import React from "react";

import fotocarnet from "../../../images/FOTOCARNET.jpg";

function AboutHero() {
  return (
    <section className="bg-slate-700 dark:bg-gray-900">
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-slate-900 dark:bg-gray-800 lg:block"></div>

        <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-3xl font-semibold text-lime-50/90  lg:text-4xl font-serif dark:text-white">
            What you have to know about me
          </h1>

          <div className="mt-10 font-sans lg:mt-20 lg:flex lg:items-center">
            <img
              className="object-cover transition hover:blur-sm duration-500 object-center w-full lg:w-[32rem] rounded-lg h-96"
              src={fotocarnet}
              alt=""
            />

            <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-2xl font-semibold text-white dark:text-white lg:w-72">
                Help us improve our productivity
              </h1>

              <p className="max-w-lg mt-6 text-gray-50/90 dark:text-gray-400">
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
              </p>

              <h3 className="mt-6 text-lg font-medium text-lime-500">
                Tomás Falchini
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Front End Developer at{" "}
                <span className="text-lime-500/70 dark:text-gray-300">
                  Fiverr
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
