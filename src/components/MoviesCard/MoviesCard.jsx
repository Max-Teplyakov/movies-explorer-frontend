import { durationFormula } from "../../utils/utils";

function MoviesCard({ movieData }) {
  const { nameRU, duration, trailerLink, image } = movieData;
  return (
    <li className="movie-card">
      <div className="movie-card__block">
        <a className="movie-card__link-img" href={trailerLink} target="_blank">
          <img
            className="movie-card__img"
            src={`https://api.nomoreparties.co${image.url}`}
            alt={nameRU}
          />
        </a>
        <div className="movie-card__container">
          <div className="movie-card__conrainer-text">
            <h2 className="movie-card__text">{nameRU}</h2>
            <p className="movie-card__time">{durationFormula(duration)}</p>
          </div>
          <button
            className="movie-card__like"
            type="button"
          ></button>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
