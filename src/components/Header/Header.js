import logo from "../../images/header__logo.svg";

function Header() {
  return (
    <section className="header header_shift_down header_shift_up">
      <img src={logo} alt="Логотип" className="header__logo" />
    </section>
  );
}

export default Header;
