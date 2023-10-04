import logo from "../../images/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import React from "react";

function Header({ loggedIn }) {
  const location = useLocation();
  const [isBurger, setIsBurger] = React.useState(false);

  function handleOpenBurger() {
    setIsBurger(!isBurger);
  }

  return (
    <>
      {!loggedIn ? (
        <header
          className={`header header-landing ${
            location.pathname === "/" ? "header_color_blue" : ""
          }`}
        >
          <Link className="header__logo-link" to="/">
            <img src={logo} alt="логотип Сайта" className="header__logo" />
          </Link>

          <nav className={`header-nav ${isBurger ? "visible" : ""}`}>
            <div className="overlay"></div>
            <Link className="header__home" to="/">
              Главная
            </Link>
            <ul className="header__movies">
              <li className="header__movies-item">
                <NavLink
                  className={({ isActive }) =>
                    `header__movies-link ${
                      isActive ? "header__link-active" : ""
                    }`
                  }
                  to="/movies"
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="header__movies-item">
                <NavLink
                  className={({ isActive }) =>
                    `header__movies-save ${
                      isActive ? "header__link-active" : ""
                    }`
                  }
                  to="/saved-movies"
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <div className="header__account">
              <Link className="header__account-link" to="/profile">
                <div className="header__account-text">Аккаунт</div>
                <div className="header__account-container">
                  <div className="header__account-img"></div>
                </div>
              </Link>
            </div>
          </nav>
          <button
            className={`header__burger ${isBurger ? "visible" : ""}`}
            type="button"
            onClick={handleOpenBurger}
          >
            <span className="header__burger-span"></span>
          </button>
        </header>
      ) : (
        <header className="header">
          <Link className="header__logo-link" to="/">
            <img src={logo} alt="логотип Сайта" className="header__logo" />
          </Link>
          <nav className="header__auth">
            <Link className="header__registration" to="/signup">
              Регистрация
            </Link>
            <Link className="header__login" to="/signin">
              Войти
            </Link>
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
