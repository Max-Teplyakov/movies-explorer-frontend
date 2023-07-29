import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import { dataSaveMovies } from "../../utils/data.js";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList dataMovies={dataSaveMovies} />
      <Footer />
    </>
  );
}

export default SavedMovies;
