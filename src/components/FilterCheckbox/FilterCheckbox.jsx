function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input type="checkbox" />
        <span className="filter-checkbox__slider round"></span>
      </label>
      <div className="filter-checkbox__text">Короткометражки</div>
    </div>
  );
}

export default FilterCheckbox;
