import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import React from "react";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isBurger, setIsBurger] = React.useState(false);

  function handleOpenBurger() {
    setIsBurger(!isBurger);
  }

  return (
    <div className={isLoggedIn ? "header" : "header-auth"}>
      <Link className="header__logo-link" to="/">
        <img src={logo} alt="логотип Сайта" className="header__logo" />
      </Link>
      <div
        className={`header__burger ${isBurger ? "visible" : ""}`}
        onClick={handleOpenBurger}
      >
        <span className="header__burger-span"></span>
      </div>
      {!isLoggedIn ? (
        <>
          <nav className={`header-nav ${isBurger ? "visible" : ""}`}>
            <Link className="header__home" to="/">
              Главная
            </Link>
            <div className="header__movies">
              <Link
                className="header__movies-link header__link-active"
                to="/movies"
              >
                Фильмы
              </Link>
              <Link className="header__movies-save" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </div>
            <div className="header__account">
              <Link className="header__account-link" to="/profile">
                <div className="header__account-text">Аккаунт</div>
                <div className="header__account-container">
                  <div className="header__account-img"></div>
                </div>
              </Link>
            </div>
          </nav>
        </>
      ) : (
        <>
          <div className="header__auth">
            <Link className="header__registration" to="/signup">
              Регистрация
            </Link>
            <Link className="header__login" to="/signin">
              Войти
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
