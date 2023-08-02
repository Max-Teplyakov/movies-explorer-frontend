import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a className="portfolio__link" src="#">
        <p className="portfolio__subtitle">Статичный сайт</p>
        <div className="portfolio__pointer">↗</div>
      </a>
      <a className="portfolio__link" src="#">
        <p className="portfolio__subtitle">Адаптивный сайт</p>
        <div className="portfolio__pointer">↗</div>
      </a>
      <a className="portfolio__link" src="#">
        <p className="portfolio__subtitle">Одностраничное приложение</p>
        <div className="portfolio__pointer">↗</div>
      </a>
    </section>
  );
};

export default Portfolio;
