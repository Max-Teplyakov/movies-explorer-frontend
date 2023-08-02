import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="login">
        <img src={logo} alt="логотип" className="login__logo" />
        <h2 className="login__form__title">Рады видеть!</h2>
        <form className="login__form">
          <div className="login__block">
            <span className="login__span">E-mail</span>
            <input
              type="email"
              name="email"
              className="login__input"
              id="email-login-input"
              required
            />
          </div>
          <div className="login__block">
            <span className="login__span">Пароль</span>
            <input
              type="password"
              name="password"
              className="login__input"
              id="login-password-input"
              required
            />
          </div>
          <button type="submit" className="login__btn-registration">
            Войти
          </button>
          <div className="login__text">
            Ещё не зарегистрированы?
            <Link className="login__btn-login" to="/sign-up">
              Регистрация
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
