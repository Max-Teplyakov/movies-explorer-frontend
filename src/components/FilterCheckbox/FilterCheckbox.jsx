import { useEffect, useState } from "react";

function FilterCheckbox({ checkboxToggle }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChecboxChange() {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    checkboxToggle(isChecked)
  }, [isChecked])

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChecboxChange}
        />
        <span className="filter-checkbox__slider round"></span>
      </label>
      <div className="filter-checkbox__text">Короткометражки</div>
    </div>
  );
}

export default FilterCheckbox;
