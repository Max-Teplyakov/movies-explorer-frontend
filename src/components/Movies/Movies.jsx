import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({isMovies}) {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList isMovies={isMovies}/>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
