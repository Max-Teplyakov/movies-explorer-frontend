import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <section className="register">
        <img src={logo} alt="логотип" className="register__logo"/>
        <h2 className="register__form__title">Добро пожаловать!</h2>
        <form className="register__form">
        <div className="register__block">
            <span className="register__span">Имя</span>
            <input
              type="name"
              name="name"
              className="register__input"
              id="name-register-input"
              required
            />
          </div>
          <div className="register__block">
            <span className="register__span">E-mail</span>
            <input
              type="email"
              name="email"
              className="register__input"
              id="email-register-input"
              required
            />
          </div>
          <div className="register__block">
            <span className="register__span">Пароль</span>
            <input
              type="password"
              name="password"
              className="register__input"
              id="register-password-input"
              required
            />
          </div>
          <button type="submit" className="register__btn-registration">
            Войти
          </button>
          <div className="register__text">
          Уже зарегистрированы?
            <Link className="register__btn-register" to="/sign-up">
              Войти
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
