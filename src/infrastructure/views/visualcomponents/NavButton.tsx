interface Props {
  text: string;
}

function NavButton({ text }: Props) {
  return (
    <button className="transition ease-in-out delay-50 p-2 m-3 text-stone-800/60 text-md hover:text-stone-100 hover:underline decoration-stone-100/30 duration-500 tracking-widest">
      {text}
    </button>
  );
}

export default NavButton;
