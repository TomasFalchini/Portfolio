import logohero from "../../../images/logo con fondo bien.jpg";

function Logo() {
  return (
    <div className="h-36 w-36 backdrop-filter-none">
      <img src={logohero} alt="logoHero" />
    </div>
  );
}

export default Logo;
