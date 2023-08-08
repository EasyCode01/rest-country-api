import React from "react";

const FilterCountry = ({ handleFilterByChange }) => {
  return (
    <div className="filter__wrapper">
      <select
        onChange={(e) => handleFilterByChange(e)}
        className="filter__country"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterCountry;
