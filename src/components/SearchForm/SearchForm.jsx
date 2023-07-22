function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Фильм"
        className="search-form__input"
      ></input>
      <div className="search-form__btn"></div>
    </form>
  );
}

export default SearchForm;
