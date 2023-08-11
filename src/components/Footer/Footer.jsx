function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__block">
        <p className="footer__year">&#169;2023</p>
        <div className="footer__links">
          <a
            className="footer__company-link"
            href="https://github.com/Max-Teplyakov"
            target="_blanck"
          >
            <p className="footer__company">Яндекс.Практикум</p>
          </a>
          <a
            className="footer__company-link"
            href="https://practicum.yandex.ru/"
            target="_blanck"
          >
            <p className="footer__company">Github</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
