import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ handleSearchMovies, handleChecboxChange, checkbox }) {
  const { values, handleChange, isValid, setValues } = useFormAndValidation();
  const location = useLocation();
  const [isValidSearch, setIsValidSearch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { searchfilm } = values;
    handleSearchMovies(searchfilm);
    if (!searchfilm) {
      setIsValidSearch(true);
    } else setIsValidSearch(false);
  };

  useEffect(() => {
    if (location.pathname === "/movies") {
      setValues({
        searchfilm: JSON.parse(localStorage.getItem("SearchForm")),
      });
    }
  }, [setValues]);

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__container">
          <input
            type="text"
            name="searchfilm"
            id="search-film"
            placeholder="Фильм"
            className="search-form__input"
            value={values.searchfilm || ""}
            required
            onChange={handleChange}
          ></input>
          <button type="submit" className="search-form__btn"></button>
        </div>
      </form>
      {isValidSearch ? (
        <span className="search-form__error">Нужно ввести ключевое слово!</span>
      ) : (
        ""
      )}
      <FilterCheckbox
        checkbox={checkbox}
        handleChecboxChange={handleChecboxChange}
      />
    </section>
  );
}

export default SearchForm;
