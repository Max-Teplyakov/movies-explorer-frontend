import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { dataMovies } from "../../utils/data";

function Movies() {
  return (
    <main className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList dataMovies={dataMovies} />
      <Footer />
    </main>
  );
}

export default Movies;
