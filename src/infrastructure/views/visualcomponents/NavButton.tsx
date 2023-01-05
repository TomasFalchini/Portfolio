import { Link } from "react-router-dom";

interface Props {
  text: string;
}

function NavButton({ text }: Props) {
  return (
    <a href={`#${text.toLowerCase()}`}>
      <button className="transition ease-in-out delay-50 px-1 sm:p-2 mx-0 md:m-3 text-stone-500 text-xs sm:text-sm  md:text-lg hover:text-stone-100 hover:underline decoration-stone-100/30 duration-500 tracking-widest">
        {text}
      </button>
    </a>
  );
}

export default NavButton;
