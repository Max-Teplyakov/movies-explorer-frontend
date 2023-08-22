import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({isSaveMovies, deleteMovies}) {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList isMovies={isSaveMovies} deleteMovies={deleteMovies}/>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
