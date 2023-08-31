import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ handleSearchMovies, handleChecboxChange, checkbox }) {
  const { values, handleChange, isValid, setValues } = useFormAndValidation();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { searchfilm } = values;
    handleSearchMovies(searchfilm);
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
          <button
            type="submit"
            className="search-form__btn"
            disabled={!isValid}
          ></button>
        </div>
      </form>
      <FilterCheckbox
        checkbox={checkbox}
        handleChecboxChange={handleChecboxChange}
      />
    </section>
  );
}

export default SearchForm;
