import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login() {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  return (
    <>
      <section className="login">
        <Link className="login__logo-link" to="/">
          <img src={logo} alt="логотип Сайта" className="login__logo" />
        </Link>
        <h2 className="login__form__title">Рады видеть!</h2>
        <form className="login__form" novalidate>
          <div className="login__block">
            <label className="login__label" htmlFor="email-input">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="login__input"
              id="login-email-input"
              onChange={handleChange}
              required
            />
          </div>
          <span className="login__input-error email-input-error">
            {errors.email}
          </span>
          <div className="login__block">
            <label
              className="login__label login__label-password"
              htmlFor="password-input"
            >
              Пароль
            </label>
            <input
              type="password"
              name="password"
              className="login__input"
              id="login-password-input"
              onChange={handleChange}
              required
            />
            <span className="login__input-error password-input-error">
              {errors.password}
            </span>
          </div>
          <button type="submit" className="login__btn-registration">
            Войти
          </button>
          <div className="login__text">
            Ещё не зарегистрированы?
            <Link className="login__btn-login" to="/signup">
              Регистрация
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
