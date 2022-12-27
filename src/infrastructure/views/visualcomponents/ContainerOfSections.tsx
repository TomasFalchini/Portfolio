import React from "react";

interface Props {
  children: React.ReactNode;
  imgback: string;
  id: string;
  setColor: (id: string) => void;
}

function ContainerOfSections({ children, imgback, id, setColor }: Props) {
  const divRef = React.useRef(null);

  React.useEffect(() => {
    if (!!divRef.current) {
      const { offsetTop } = divRef.current;
      console.log(offsetTop);
    }

    const handleScroll = () => {
      if (window.scrollY && !!divRef.current) {
        const { offsetTop } = divRef.current;
        if (
          window.scrollY - 50 < offsetTop &&
          offsetTop < window.scrollY + 50
        ) {
          setColor(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={divRef}
      id={id}
      className={`${imgback} flex justify-between relative m-0 bg-slate-800 w-screen  p-16 z-40`}
    >
      {children}
    </div>
  );
}

export default ContainerOfSections;
