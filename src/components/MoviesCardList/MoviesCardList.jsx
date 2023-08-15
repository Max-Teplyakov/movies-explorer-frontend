import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ dataMovies }) {
  const location = useLocation();
  const moviesClass = `${
    location.pathname === "/saved-movies" ? "movies-card-list_save" : ""
  }`;
  return (
    <>
      <ul className={`movies-card-list ${moviesClass}`}>
        {dataMovies.map((movieItem) => (
          <MoviesCard key={movieItem.movieId} movieData={movieItem} />
        ))}
      </ul>
      {dataMovies.length > 15 ? (
        <button type="button" className="button-next">
          Ещё
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;
