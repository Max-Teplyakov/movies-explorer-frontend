import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies({
  isMovies,
  handleSearchMovies,
  isPreloader,
  moviesSave,
  checkboxToggle,
}) {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          checkboxToggle={checkboxToggle}
        />
        {isPreloader ? <Preloader /> : <></>}
        <MoviesCardList isMovies={isMovies} moviesSave={moviesSave} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
