import Header from "../Header/Header";
import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ signOut, handleUpdateUser }) {
  const [isActive, setIsActive] = React.useState(true);

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const currentUser = useContext(CurrentUserContext);

  function handleRedactProfile() {
    setIsActive(!isActive);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name } = values;
    console.log(values);
    handleUpdateUser({ email, name });
  };

  useEffect(() => {
    setValues({
      currentName: currentUser.name,
      currentEmail: currentUser.email,
    });
  }, [setValues, currentUser]);

  return (
    <>
      <Header />
      <main className="profile">
        <section className="profile__section">
          <h1 className="profile__form-title">Привет, Виталий!</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <label
              className="profile__form-label profile__form-border"
              htmlFor="name-input"
            >
              Имя
              <input
                className="profile__form-input"
                type="text"
                name="name"
                id="name-input"
                placeholder="Имя"
                minLength={2}
                maxLength={30}
                value={values.currentName || ""}
                onChange={handleChange}
              />
            </label>
            <span className="profile__input-error name-input-error">
              {errors.name}
            </span>
            <label className="profile__form-label" htmlFor="email-input">
              E-mail
              <input
                className="profile__form-input"
                type="email"
                name="email"
                id="email-input"
                placeholder="E-mail"
                onChange={handleChange}
                value={values.currentEmail || ""}
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
              <button type="submit" className="profile__btn-save">
                Сохранить
              </button>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
