import { durationFormula } from "../../utils/utils";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesCard({ movieData, moviesSave, deleteMovies, isSaveMovies }) {
  const { nameRU, duration, trailerLink, image, id, movieId } = movieData;
  const location = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (
        isSaveMovies.find(
          (item) => item.movieId === id || item.movieId === movieId
        )
      ) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  }, [isLiked, isSaveMovies]);

  const moviesLocation = `${
    location.pathname === "/movies"
      ? `https://api.nomoreparties.co${image.url}`
      : image
  }`;

  const moviesLikeAcived = isLiked
    ? "movie-card__like_active"
    : "movie-card__like";

  const moviesLikeToggleClass = `${
    location.pathname === "/movies" ? moviesLikeAcived : "movie-card__delete"
  }`;
  const moviesLikeToggle =
    location.pathname === "/movies" ? handleMoviesSave : handleDeleteMovie;

  function handleDeleteMovie() {
    deleteMovies(movieData._id);
  }
  const savedMovie = isSaveMovies && isSaveMovies.find((i) => i.movieId === id);
  function handleMoviesSave() {
    if (savedMovie) {
      deleteMovies(savedMovie._id);
    } else {
      moviesSave(movieData);
    }
  }

  return (
    <li className="movie-card">
      <div className="movie-card__block">
        <a className="movie-card__link-img" href={trailerLink} target="_blank">
          <img className="movie-card__img" src={moviesLocation} alt={nameRU} />
        </a>
        <div className="movie-card__container">
          <div className="movie-card__conrainer-text">
            <h2 className="movie-card__text">{nameRU}</h2>
            <p className="movie-card__time">{durationFormula(duration)}</p>
          </div>
          <button
            className={moviesLikeToggleClass}
            type="button"
            onClick={moviesLikeToggle}
          ></button>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
