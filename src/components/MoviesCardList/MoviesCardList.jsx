import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ dataMovies }) {
  return (
    <div className="movies-card-list">
      {dataMovies.map((movieItem) => (
        <MoviesCard movieData={movieItem} />
      ))}
      <button type="button" className="button-next">
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
