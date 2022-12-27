import { Link } from "react-router-dom";

interface Props {
  text: string;
}

function NavButton({ text }: Props) {
  return (
    <a href={`#${text.toLowerCase()}`}>
      <button className="transition ease-in-out delay-50 p-2 m-3 text-stone-800/60 text-md hover:text-stone-100 hover:underline decoration-stone-100/30 duration-500 tracking-widest">
        {text}
      </button>
    </a>
  );
}

export default NavButton;
