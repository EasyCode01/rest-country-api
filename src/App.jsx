import { useEffect, useState } from "react";
import Country from "./Components/Country";
import FilterCountry from "./Components/FilterCountry";
import Navbar from "./Components/Navbar";
import SearchCountry from "./Components/SearchCountry";
import data from "./data/data.json";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";

const Home = ({ isLight }) => {
  const [countries, setCountries] = useState(data);
  const [searchCountries, setSearchCountries] = useState("");
  const [filterby, setFilterBy] = useState("");

  const handleFilterByChange = (e) => {
    setFilterBy(e.target.value);
  };

  const handleSearchCountryChange = (e) => {
    setSearchCountries(e.target.value);
  };

  useEffect(() => {
    performSearch();
  }, [searchCountries]);

  useEffect(() => {
    performFilter();
  }, [filterby]);

  const performFilter = () => {
    const filteredResults = data.filter((item) =>
      item.region.toLowerCase().includes(filterby.toLowerCase())
    );
    setCountries(() => filteredResults);
  };

  const performSearch = () => {
    if (searchCountries.trim() === "") {
      setCountries(() => data);
      console.log("Empty");
    } else {
      const filteredResults = countries.filter((item) =>
        item.name.toLowerCase().includes(searchCountries.toLowerCase())
      );
      setCountries(() => filteredResults);
    }
  };

  return (
    <div className="country__wrapper container">
      <div className="country__header">
        <SearchCountry
          isLight={isLight}
          handleSearchCountryChange={handleSearchCountryChange}
        />
        <FilterCountry handleFilterByChange={handleFilterByChange} />
      </div>
      <div className="countries__list">
        {countries.length > 0 ? (
          countries.map((item) => (
            <Country key={item.numericCode} isLight={isLight} country={item} />
          ))
        ) : (
          <div>No results Found</div>
        )}
      </div>
    </div>
  );
};

function App() {
  const [isLight, setIsLight] = useState(true);

  const handleThemeMode = () => {
    setTimeout(() => {
      setIsLight(!isLight);
    }, 200);
  };
  return (
    <Router>
      <div className={`app ${isLight ? "light-mode" : "dark-mode"}`}>
        <Navbar isLight={isLight} handleThemeMode={handleThemeMode} />
        <Routes>
          <Route path="/" exact element={<Home isLight={isLight} />} />
          <Route path="/country-details/:id" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
