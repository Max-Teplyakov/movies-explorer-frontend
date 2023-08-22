import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({handleSearchMovies, checkboxToggle}) {
  const location = useLocation();

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();
  const inputError = errors.searchfilm ? "search-form__input-error_active" : "";
  useEffect(() => {
    if (location.pathname === "/movies") {
      setValues({
        searchfilm: JSON.parse(localStorage.getItem("SearchForm")),
      });
    }

  }, [setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {searchfilm} = values;
    handleSearchMovies(searchfilm)
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
            value={values.searchfilm || ""}
            required
            onChange={handleChange}
          ></input>
          <button type="submit" className="search-form__btn"></button>
        </div>
        <span className={`search-form__input-error ${inputError}`}>
          Нужно ввести ключевое слово
        </span>
      </form>
      <FilterCheckbox checkboxToggle={checkboxToggle}/>
    </section>
  );
}

export default SearchForm;
