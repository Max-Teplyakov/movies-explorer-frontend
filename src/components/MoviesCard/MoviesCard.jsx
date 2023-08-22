import { durationFormula } from "../../utils/utils";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({ movieData, moviesSave, deleteMovies }) {
  const { nameRU, duration, trailerLink, image } = movieData;
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  // const isLiked = movieData.likes.some((id) => id === currentUser._id);
  // const cardLikeButtonClassName = `element__btn-like ${
  //   isLiked && "element__btn-like_active"
  // }`;


  // const isOwn = movieData.owner === currentUser._id;
  // const cardDeleteButtonClassName = `element__btn-delete-card ${
  //   isOwn && "element__btn-delete-card_visible"
  // }`;


  const moviesLocation = `${
    location.pathname === "/movies" ? `https://api.nomoreparties.co${image.url}` : image
  }`;
  const moviesLikeToggleClass = `${
    location.pathname === "/movies" ? "movie-card__like" : "movie-card__delete"
  }`;
const moviesLikeToggle = location.pathname === "/movies" ? (handleMoviesSave) : (handleDeleteMovie);

function handleDeleteMovie() {
  deleteMovies(movieData)
}

function handleMoviesSave() {
  moviesSave(movieData, currentUser._id);
}


  return (
    <li className="movie-card">
      <div className="movie-card__block">
        <a className="movie-card__link-img" href={trailerLink} target="_blank">
          <img
            className="movie-card__img"
            src={moviesLocation}
            alt={nameRU}
          />
        </a>
        <div className="movie-card__container">
          <div className="movie-card__conrainer-text">
            <h2 className="movie-card__text">{nameRU}</h2>
            <p className="movie-card__time">{durationFormula(duration)}</p>
          </div>
          {location.pathname === "/movies" ? (<button
            className={moviesLikeToggleClass}
            type="button"
            onClick={moviesLikeToggle}
          ></button>) : ""}

        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
