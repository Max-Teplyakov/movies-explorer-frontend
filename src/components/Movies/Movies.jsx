import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies({
  isMovies,
  isSaveMovies,
  moviesSave,
  deleteMovies,
  handleChecboxChange,
  handleSearchMovies,
  isPreloader,
  checkbox,
  btnAddMovie,
}) {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          handleChecboxChange={handleChecboxChange}
          checkbox={checkbox}
        />
        {isPreloader ? (
          <Preloader />
        ) : (
          <MoviesCardList
            isMovies={isMovies}
            isSaveMovies={isSaveMovies}
            moviesSave={moviesSave}
            deleteMovies={deleteMovies}
            btnAddMovie={btnAddMovie}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default Movies;
