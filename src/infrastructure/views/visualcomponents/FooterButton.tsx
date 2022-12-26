interface Props {
  link: string;
  children: React.ReactNode;
}

function FooterButton({ link, children }: Props) {
  return (
    <a
      className="m-1 text-purple-200/50 hover:text-purple-200 mx-5"
      href={link}
    >
      {children}
    </a>
  );
}

export default FooterButton;
