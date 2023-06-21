import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country, isLight }) => {
  return (
    <Link
      to={`/country-details/${country.numericCode}`}
      className={`country ${isLight ? "light-mode" : "dark-mode"}`}
    >
      <img src={country.flag} alt="" />
      <div className="country__info">
        <h3>{country.name}</h3>
        <div className="pop__reg__cap">
          <p>Population:{parseInt(country.population).toLocaleString()}</p>
          <p>Region:{country.region}</p>
          <p>capital:{country.capital} </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
