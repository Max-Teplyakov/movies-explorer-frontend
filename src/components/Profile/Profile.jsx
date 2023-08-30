import Header from "../Header/Header";
import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  signOut,
  handleUpdateUser,
  isErrorMessage,
  isSuccessMesage,
  isSuccess,
}) {
  const [isActive, setIsActive] = useState(true);
  const [previousStateValues, setPreviousStateValues] = useState([]);

  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormAndValidation();

  const currentUser = useContext(CurrentUserContext);

  function handleRedactProfile() {
    setIsActive(!isActive);
    setPreviousStateValues(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name } = values;
    handleUpdateUser({ email, name });
    setIsActive(!isActive);
  };

  useEffect(() => {
    const { name, email } = currentUser;
    setValues({
      name: name,
      email: email,
    });
  }, [setValues, currentUser]);

  useEffect(() => {
    if (
      values.name === previousStateValues.name &&
      values.email === previousStateValues.email
    ) {
      setIsValid(false);
    }
  }, [values, previousStateValues, setIsValid]);

  return (
    <>
      <Header />
      <main className="profile">
        <section className="profile__section">
          <h1 className="profile__form-title">Привет, {currentUser.name} !</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__form-label" htmlFor="name-input">
              Имя
              <input
                className="profile__form-input"
                type="text"
                name="name"
                id="name-input"
                placeholder="Имя"
                minLength={2}
                maxLength={30}
                disabled={isActive}
                value={values.name || ""}
                onChange={handleChange}
              />
            </label>
            <span className="profile__input-error name-input-error">
              {errors.name}
            </span>
            <hr className="profile__form-line"></hr>
            <label className="profile__form-label" htmlFor="email-input">
              E-mail
              <input
                className="profile__form-input"
                type="email"
                name="email"
                id="email-input"
                placeholder="E-mail"
                disabled={isActive}
                onChange={handleChange}
                value={values.email || ""}
              />
            </label>
            <span className="profile__input-error email-input-error">
              {errors.email}
            </span>
            {isActive ? (
              <>
                <button
                  type="button"
                  className="profile__btn-edit"
                  onClick={handleRedactProfile}
                >
                  Редактировать
                </button>
                <Link className="profile__btn-exit" to="/" onClick={signOut}>
                  Выйти из аккаунта
                </Link>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className={
                    isValid
                      ? "profile__btn-save"
                      : "profile__btn-save profile__btn-save_disabled"
                  }
                  disabled={!isValid}
                >
                  Сохранить
                </button>
              </>
            )}
            {isSuccess ? (
              <span className="profile__btn-success">{isSuccessMesage}</span>
            ) : (
              <span className="profile__btn-error">{isErrorMessage}</span>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
