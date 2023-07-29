import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { dataMovies } from "../../utils/data";

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList dataMovies={dataMovies} />
      <Footer />
    </>
  );
}

export default Movies;
