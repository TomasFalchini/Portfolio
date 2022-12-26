import Logo from "./Logo";
import s from "../styles/ForImages.module.css";

function Landing() {
  return (
    <div className={s.images}>
      <div
        className={`opacity-100 bg-gradient-to-b from-transparent via-transparent to-lime-800 w-screen m-0 p-0 h-screen flex flex-col justify-center items-center  z-10`}
      >
        <div className={`opacity-100`}>
          <Logo />
        </div>
        <div className="flex justify-center">
          <h2 className="z-10 opacity-100 text-lime-100 text-4xl w-3/4 font-extrabold">
            Bringing To Life Awesome Web And Graphic Design Solutions
          </h2>
        </div>
      </div>
      <section className={s.skewed}></section>
    </div>
  );
}

export default Landing;
