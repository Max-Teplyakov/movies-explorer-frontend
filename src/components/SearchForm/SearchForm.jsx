function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
        ></input>
        <div className="search-form__btn"></div>
      </div>
    </form>
  );
}

export default SearchForm;
