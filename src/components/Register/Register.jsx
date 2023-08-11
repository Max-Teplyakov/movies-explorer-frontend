import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register() {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  return (
    <>
      <section className="register">
        <img src={logo} alt="логотип" className="register__logo" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <div className="register__block">
            <label className="register__label" htmlFor="register-name-input">
              Имя
            </label>
            <input
              type="name"
              name="name"
              className="register__input"
              id="register-name-input"
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              required
            />
            <span className="register__input-error name-input-error">
              {errors.name}
            </span>
          </div>
          <div className="register__block">
            <label
              className="register__label register__label-indent"
              htmlFor="register-email-input"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="register__input"
              id="register-email-input"
              onChange={handleChange}
              required
            />
            <span className="register__input-error email-input-error">
              {errors.email}
            </span>
          </div>
          <div className="register__block">
            <label
              className="register__label register__label-indent"
              htmlFor="register-password-input"
            >
              Пароль
            </label>
            <input
              type="password"
              name="password"
              className="register__input"
              id="register-password-input"
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
            <span className="register__input-error password-input-error">
              Что то пошло не так
            </span>
          </div>
          <button type="submit" className="register__btn-registration">
            Зарегистрироваться
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
