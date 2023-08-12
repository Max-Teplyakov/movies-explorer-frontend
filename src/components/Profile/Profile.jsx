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
      <section className="profile">
        <h2 className="profile__form-title">Привет, Виталий!</h2>
        <div className="profile__name-block">
          <label className="profile__form-label" htmlFor="name-input">
            Имя
          </label>
          <input
            className="profile__form-input"
            type="text"
            name="name"
            id="name-input"
            placeholder="Имя"
            value="Виталий"
            disabled
          />
        </div>
        <div className="profile__email-block">
          <label className="profile__form-label" htmlFor="email-input">
            E-mail
          </label>
          <input
            className="profile__form-input"
            type="email"
            name="email"
            id="email-input"
            placeholder="E-mail"
            value="pochta@yandex.ru"
            disabled
          />
        </div>
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
      </section>
    </>
  );
}

export default Profile;
