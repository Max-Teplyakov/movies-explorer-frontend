import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import { dataSaveMovies } from "../../utils/data.js";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <main className="saved-movies">
      <Header />
      <SearchForm />
      <MoviesCardList dataMovies={dataSaveMovies} />
      <Footer />
    </main>
  );
}

export default SavedMovies;
