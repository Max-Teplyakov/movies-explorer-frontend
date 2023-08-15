import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import { dataSaveMovies } from "../../utils/data.js";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList dataMovies={dataSaveMovies} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
