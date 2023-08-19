import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({isMovies}) {
  const location = useLocation();
  const moviesClass = `${
    location.pathname === "/saved-movies" ? "movies-card-list_save" : ""
  }`;

  return (
    <section className="movies-cards">
      <ul className={`movies-card-list ${moviesClass}`}>
        {isMovies.map((movieItem) => (
          <MoviesCard key={movieItem.id} movieData={movieItem} />
        ))}
      </ul>
      {isMovies.length > 15 ? (
        <button type="button" className="button-next">
          Ещё
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;
