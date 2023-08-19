import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useState } from "react";
// thumbnial =>images=>formats, и movieId  а в базе id
function SearchForm() {


  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();
  const inputError = errors.searchfilm ? "search-form__input-error_active" : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name} = values;
    // findMovie(name);
  };

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <input
            type="text"
            name="searchfilm"
            id="search-film"
            minLength={2}
            placeholder="Фильм"
            className="search-form__input"
            required
            onChange={handleChange}
          ></input>
          <button type="submit" className="search-form__btn"></button>
        </div>
        <span className={`search-form__input-error ${inputError}`}>
          Нужно ввести ключевое слово
        </span>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
