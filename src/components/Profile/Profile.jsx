import Header from "../Header/Header";
import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [isActive, setIsActive] = React.useState(true);

  function handleRedactProfile() {
    setIsActive(!isActive);
  }

  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__form-title">Привет, Виталий!</h1>
        <form className="profile__form">
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
              value="Виталий"
              disabled
            />
          </label>
          <label className="profile__form-label" htmlFor="email-input">
            E-mail
            <input
              className="profile__form-input"
              type="email"
              name="email"
              id="email-input"
              placeholder="E-mail"
              value="pochta@yandex.ru"
              disabled
            />
          </label>
          {isActive ? (
            <>
              <button
                type="button"
                className="profile__btn-edit"
                onClick={handleRedactProfile}
              >
                Редактировать
              </button>
              <Link className="profile__btn-exit" to="/">
                Выйти из аккаунта
              </Link>
            </>
          ) : (
            <button
              type="button"
              className="profile__btn-save"
              onClick={handleRedactProfile}
            >
              Сохранить
            </button>
          )}
        </form>
      </main>
    </>
  );
}

export default Profile;
