import React from "react";

import fotocarnet from "../../../images/FOTOCARNET.jpg";

function AboutHero() {
  return (
    <section className="min-h-fit bg-slate-900 ">
      <div className="relative flex min-h-min">
        <div className="min-h-min 2xl:w-1/3"></div>
        <div className="hidden h-full  w-3/4 min-h-screen bg-slate-800 2xl:block"></div>

        <div className=" flex flex-col  justify-center  min-h-min h-full px-6 py-10 mx-auto 2xl:absolute  lg:inset-x-0">
          <h1 className="text-3xl font-semibold text-lime-50/90  lg:text-4xl font-serif ">
            What you have to know about me
          </h1>

          <div className="mt-10 font-sans flex flex-col   2xl:flex-row lg:mt-20 lg:flex xl:justify-between lg:items-center">
            <img
              className="object-cover mb-4 transition hover:blur-sm duration-500 object-center w-full xl:max-w-[28rem] lg:w-[32rem] rounded-lg h-96"
              src={fotocarnet}
              alt=""
            />

            <div className="mt-8 flex flex-col items-center justify-center lg:px-10 lg:mt-0 xl:flex xl:flex-col xl:items-center 2xl:mr-12">
              <h1 className="text-2xl font-semibold text-white xl:w-96 lg:w-72">
                I'm Tomás, a Junior Software Developer taking his first steps
                into the tech World.
              </h1>

              <p className="max-w-lg mt-6 text-gray-50/90 ">
                “I'm a passionate about technology, exploring the world of
                development. I like to create new things, and I know that
                learning is a never-ending road of discovery, challenge and
                inspiration, so I'm always learning. In this profile you can
                find all the proyects I have been working on.”
              </p>

              <h3 className="mt-6 text-lg font-medium text-lime-500">
                Tomás Falchini
              </h3>
              <p className="text-gray-600 ">
                Front End Developer at{" "}
                <span className="text-lime-500/70 ">Fiverr</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
