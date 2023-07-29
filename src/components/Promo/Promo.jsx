import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <div className="promo-container">
        <h1 className="promo__title">
          Учебный проект студента
          факультета&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link className="promo__link" to="/">
          Узнать больше
        </Link>
      </div>
      <div className="promo__img"></div>
    </section>
  );
}

export default Promo;
