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
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default Movies;
