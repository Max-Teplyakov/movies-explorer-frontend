import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип Сайта" className="header__logo" />
      <div className="header__auth">
        <Link className="header__registration" to="/signup">
          Регистрация
        </Link>

        <Link className="header__login" to="/signin">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
