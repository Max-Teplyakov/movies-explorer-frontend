import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import React from "react";

function Header() {
  //поменять значения в стэйте isLoggedIn для отображения коректной шапки
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isBurger, setIsBurger] = React.useState(false);

  function handleOpenBurger() {
    setIsBurger(!isBurger);
  }

  return (
    <>
      {!isLoggedIn ? (
        <div className="header header-landing">
          <Link className="header__logo-link" to="/">
            <img src={logo} alt="логотип Сайта" className="header__logo" />
          </Link>
          <nav className={`header-nav ${isBurger ? "visible" : ""}`}>
            <Link className="header__home" to="/">
              Главная
            </Link>
            <div className="header__movies">
              <NavLink
                className={({ isActive }) =>
                  `header__movies-link ${isActive ? "header__link-active" : ""}`
                }
                to="/movies"
              >
                Фильмы
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `header__movies-save ${isActive ? "header__link-active" : ""}`
                }
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
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
          <div
            className={`header__burger ${isBurger ? "visible" : ""}`}
            onClick={handleOpenBurger}
          >
            <span className="header__burger-span"></span>
          </div>
        </div>
      ) : (
        <div className="header">
          <Link className="header__logo-link" to="/">
            <img src={logo} alt="логотип Сайта" className="header__logo" />
          </Link>
          <div className="header__auth">
            <Link className="header__registration" to="/signup">
              Регистрация
            </Link>
            <Link className="header__login" to="/signin">
              Войти
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
