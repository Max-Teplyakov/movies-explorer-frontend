import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__block">
        <div className="about-me__block-text">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__proffesion">
            Фронтенд-разработчик, 29 лет
          </p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__github"
            href="https://github.com/Max-Teplyakov"
            target="_blanck"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photo} alt="фото Виталия"/>
      </div>
    </section>
  );
}

export default AboutMe;
