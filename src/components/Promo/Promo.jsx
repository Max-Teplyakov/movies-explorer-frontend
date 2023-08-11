import { Link, NavLink } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <div className="promo-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="#aboutproject" className="promo__link">
          Узнать больше
        </a>
      </div>
      <div className="promo__img"></div>
    </section>
  );
}

export default Promo;
