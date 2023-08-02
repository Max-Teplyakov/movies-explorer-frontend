import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__form-title">Привет, Максим!</h2>
        <div className="profile__name-block">
          <div className="profile__field-name">Имя</div>
          <div className="profile__name">Максим</div>
        </div>
        <div className="profile__email-block">
          <div className="profile__field-email">E-mail</div>
          <div className="profile__email">Max-tepl@mail.ru</div>
        </div>
        <button type="button" className="profile__btn-edit">
          Редактировать
        </button>
        <button type="button" className="profile__btn-exit">
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
