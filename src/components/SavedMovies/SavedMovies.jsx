import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({
  isSaveMovies,
  handleChecboxSaveChange,
  handleSearchSavedMovies,
  deleteMovies,
  checkboxSave,
}) {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm
          handleChecboxChange={handleChecboxSaveChange}
          handleSearchMovies={handleSearchSavedMovies}
          checkbox={checkboxSave}
        />
        <MoviesCardList
          deleteMovies={deleteMovies}
          isMovies={isSaveMovies}
          isSaveMovies={isSaveMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
