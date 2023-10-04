function MoviesCard({ movieData }) {
  return (
    <li className="movie-card">
      <div className="movie-card__block">
        <img
          className="movie-card__img"
          src={movieData.link}
          alt={movieData.name}
        />
        <div className="movie-card__container">
          <div className="movie-card__conrainer-text">
            <h2 className="movie-card__text">{movieData.name}</h2>
            <p className="movie-card__time">1ч 42м</p>
          </div>
          <button
            className={`movie-card__like ${movieData.like} ${movieData.delete}`}
            type="button"
          ></button>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
