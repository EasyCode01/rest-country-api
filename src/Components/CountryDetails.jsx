import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const [single, setSingle] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const seletedCountry = data.filter((item) => item.numericCode === id);
    setSingle(seletedCountry[0]);
  }, [id]);
  console.log(single);
  return (
    <div className="country__details container">
      <Link to={"/"} className="country__details__btn">
        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
            />
          </svg>
          Back
        </button>
      </Link>
      <div className="country__flag__info">
        <img src={single.flag} alt="flag" />
        <div className="country__flag__info__right">
          <div className="info__top">
            <h2>{single.name}</h2>
            <div className="info__top__extra">
              <div className="info__top__extra__left">
                <p>Native Name:{single.nativeName}</p>
                <p>Polulation:{parseInt(single.population).toLocaleString()}</p>
                <p>Region:{single.region}</p>
                <p>Sub Region: {single.subregion}</p>
                <p>Capital: {single.capital}</p>
              </div>
              <div className="info__top__extra__right">
                <p>Top Level Domain: {single.topLevelDomain}</p>
                <p>Currencies:{single?.cioc}</p>
                <p>Languages:{single?.demonym}</p>
              </div>
            </div>
          </div>
          <div className="info__bottom">
            <span>Border Countries:</span>
            <div className="border__countries">
              {single?.borders?.length > 0 &&
                single.borders.map((item) => {
                  return (
                    <span className="border__country" key={item}>
                      {item}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
