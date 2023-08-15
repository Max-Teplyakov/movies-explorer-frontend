import React from "react";
import arrow from "../../images/arrow.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__blocks">
        <li className="portfolio__block-link">
          <a
            className="portfolio__link"
            href="https://max-teplyakov.github.io/russian-travel-yp/"
            target="_blanck"
          >
            <p className="portfolio__subtitle">Статичный сайт</p>
            <img
              className="portfolio__pointer"
              src={arrow}
              alt="стрелка ссылка"
            />
          </a>
        </li>
        <li className="portfolio__block-link">
          <a
            className="portfolio__link"
            href="https://max-teplyakov.github.io/russian-travel-yp/"
            target="_blanck"
          >
            <p className="portfolio__subtitle">Адаптивный сайт</p>
            <img
              className="portfolio__pointer"
              src={arrow}
              alt="стрелка ссылка"
            />
          </a>
        </li>
        <li className="portfolio__block-link">
          <a
            className="portfolio__link"
            href="https://max-teplyakov.github.io/mesto/"
            target="_blanck"
          >
            <p className="portfolio__subtitle">Одностраничное приложение</p>
            <img
              className="portfolio__pointer"
              src={arrow}
              alt="стрелка ссылка"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
