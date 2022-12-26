import React from "react";

interface Props {
  children: React.ReactNode;
}

function Footer({ children }: Props) {
  return (
    <div className="fixed bottom-0 bg-slate-900 w-full h-20 p-2 ">
      <div>
        <p className="text-purple-200">
          © 2018 All rights reserved. | Tomás Falchini Portfolio
        </p>
      </div>
      <div className="flex justify-center m-2">{children}</div>
    </div>
  );
}

export default Footer;
