function aboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__block">
          <h3 className="about-project__description">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__block">
          <h3 className="about-project__description">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__container-skill">
        <div className="about-project__block">
          <p className="about-project__date about-project__date_green">
            1 неделя
          </p>
          <p className="about-project__skill">Back-end</p>
        </div>
        <div className="about-project__block">
          <p className="about-project__date about-project__date_grey">
            4 недели
          </p>
          <p className="about-project__skill">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default aboutProject;
