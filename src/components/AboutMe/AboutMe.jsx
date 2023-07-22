import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__block">
        <div className="about-me__block-text">
          <div className="about-me__name">Максим Тепляков</div>
          <div className="about-me__proffesion">
            Фронтенд-разработчик, 29 лет
          </div>
          <div className="about-me__description">
            Я родился и живу в Самаре, закончил факультет экономики
            Юриспруденции. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. В 2022 поступил на курс Веб Разработка от
            Яндекс Практикума. Собираюсь сменить сферу деятельности.
          </div>
          <a className="about-me__github" href="#">
            GitHub
          </a>
        </div>
        <img className="about-me__photo" src={photo} />
      </div>
    </section>
  );
}

export default AboutMe;
