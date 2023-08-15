import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { dataMovies } from "../../utils/data";

function Movies() {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList dataMovies={dataMovies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
