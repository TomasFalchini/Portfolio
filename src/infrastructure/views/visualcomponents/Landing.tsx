import Logo from "./Logo";
import s from "../styles/ForImages.module.css";
import { motion } from "framer-motion";

function Landing() {
  return (
    <section
      className={`relative bg-[url(https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2078&q=80)] h-screen bg-cover bg-center bg-no-repeat flex justify-around items-center flex-col`}
    >
      <div className="absolute inset-0 backdrop-filter -backdrop-hue-rotate-90 bg-gradient-to-l backdrop-opacity-50 backdrop-saturate-150  from-slate-900/75 to-slate-900/50"></div>

      <div className="z-20 mb-20 relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <motion.div
          initial={{ translateX: -2000 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
              Rediscover
              <strong className="block font-extrabold text-sky-800">
                Your Web
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl text-white sm:leading-relaxed">
              Bringing To Life Awesome Web And Graphic Design Solutions
            </p>
          </div>
        </motion.div>
      </div>
      <section className={s.skewed}></section>
    </section>
  );
}

/* 


*/
export default Landing;
