import React from "react";

import fotocarnet from "../../../images/FOTOCARNET.jpg";

function AboutHero() {
  return (
    <section className="bg-slate-700 dark:bg-gray-900">
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden  w-3/4 min-h-screen bg-slate-900 dark:bg-gray-800 lg:block"></div>

        <div className="container flex flex-col  justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-3xl font-semibold text-lime-50/90  lg:text-4xl font-serif dark:text-white">
            What you have to know about me
          </h1>

          <div className="mt-10 font-sans flex flex-col   2xl:flex-row lg:mt-20 lg:flex xl:justify-between lg:items-center">
            <img
              className="object-cover mb-4 transition hover:blur-sm duration-500 object-center w-full xl:max-w-[28rem] lg:w-[32rem] rounded-lg h-96"
              src={fotocarnet}
              alt=""
            />

            <div className="mt-8 lg:px-10 lg:mt-0 xl:flex xl:flex-col xl:items-center 2xl:mr-12">
              <h1 className="text-2xl font-semibold text-white dark:text-white xl:w-96 lg:w-72">
                I'm Tomás, a Junior Software Developer taking his first steps
                into the tech World.
              </h1>

              <p className="max-w-lg mt-6 text-gray-50/90 dark:text-gray-400">
                “I'm a passionate about technology, exploring the world of
                development. I like to create new things, and I know that
                learning is a never-ending road of discovery, challenge and
                inspiration, so I'm always learning. In this profile you can
                find all the proyects I have been working on.”
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
