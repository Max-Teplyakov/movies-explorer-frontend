import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import * as auth from "../../utils/auth";

function Register({handleRegistration}) {
  let navigate = useNavigate();

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email, name } = values;
    handleRegistration(password, email, name);
  };
  return (
    <>
      <main className="register">
        <section className="register__section">
          <Link className="register__logo-link" to="/">
            <img src={logo} alt="логотип Сайта" className="register__logo" />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form" onSubmit={handleSubmit}>
            <label className="register__label" htmlFor="register-name-input">
              Имя
              <input
                type="name"
                name="name"
                className="register__input"
                id="register-name-input"
                placeholder="Имя"
                minLength={2}
                maxLength={30}
                onChange={handleChange}
                required
              />
            </label>
            <span className="register__input-error name-input-error">
              {errors.name}
            </span>
            <label
              className="register__label register__label-indent"
              htmlFor="register-email-input"
            >
              E-mail
              <input
                type="email"
                name="email"
                className="register__input"
                id="register-email-input"
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
            </label>
            <span className="register__input-error email-input-error">
              {errors.email}
            </span>
            <label
              className="register__label register__label-indent"
              htmlFor="register-password-input"
            >
              Пароль
              <input
                type="password"
                name="password"
                className="register__input"
                id="register-password-input"
                placeholder="Пароль"
                minLength={8}
                maxLength={30}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </label>
            <span className="register__input-error password-input-error">
              {errors.password}
            </span>
            <button
              type="submit"
              className={`register__btn-registration ${isValid ? "" : "register__btn-registration_inactive"}`}
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
            <div className="register__text">
              Уже зарегистрированы?
              <Link className="register__btn-register" to="/signin">
                Войти
              </Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
