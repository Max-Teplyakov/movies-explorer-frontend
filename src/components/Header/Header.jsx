import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const loggedIn = false;
  return (
    <NavLink
      to="/"
      className={({ isActive }) => `${isActive ? "header" : "header-auth"}`}
    >
      <Link className="header__logo-link" to="/">
        <img src={logo} alt="логотип Сайта" className="header__logo" />
      </Link>
      {loggedIn ? (
        <>
          <div className="header__movies">
            <Link className="header__movies" to="/movies">
              Фильмы
            </Link>
            <Link className="header__movies-save" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </div>
          <div className="header__account">
            <Link className="header__account-link" to="/saved-movies">
              <div className="header__account-text">Аккаунт</div>
              <div className="header__account-container">
                <div className="header__account-img"></div>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <div className="header__auth">
          <Link className="header__registration" to="/signup">
            Регистрация
          </Link>
          <Link className="header__login" to="/signin">
            Войти
          </Link>
        </div>
      )}
    </NavLink>
  );
}

export default Header;
