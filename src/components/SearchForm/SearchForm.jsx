import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
      <form className="search-form__container">
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
          required
        ></input>
        <button type="submit" className="search-form__btn"></button>
      </form>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
