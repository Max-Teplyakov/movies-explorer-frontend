import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login() {
  const { handleChange, errors } = useFormAndValidation();

  return (
    <>
      <main className="login">
        <section className="login__section">
          <Link className="login__logo-link" to="/">
            <img src={logo} alt="логотип Сайта" className="login__logo" />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <form className="login__form">
            <label className="login__label" htmlFor="email-input">
              E-mail
              <input
                type="email"
                name="email"
                className="login__input"
                id="login-email-input"
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
            </label>
            <span className="login__input-error email-input-error">
              {errors.email}
            </span>
            <label
              className="login__label login__label-password"
              htmlFor="password-input"
            >
              Пароль
              <input
                type="password"
                name="password"
                className="login__input"
                id="login-password-input"
                placeholder="Пароль"
                minLength={8}
                maxLength={30}
                onChange={handleChange}
                required
              />
            </label>
            <span className="login__input-error password-input-error">
              {errors.password}
            </span>
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
      </main>
    </>
  );
}

export default Login;
