import { useEffect, useState } from "react";
import Country from "./Components/Country";
import FilterCountry from "./Components/FilterCountry";
import Navbar from "./Components/Navbar";
import SearchCountry from "./Components/SearchCountry";
import data from "./data/data.json";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";
import ScrollToTopButton from "./Components/ScrollToTopButton";

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
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [scrollTopPos, setScrollTopPos] = useState(window.pageYOffset);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  const handleIsScrollTop = () => {
    const current = window.pageYOffset;
    if (current > 400) {
      setIsScrollTopVisible(true);
      setScrollTopPos(current);
    } else {
      setIsScrollTopVisible(false);
      setScrollTopPos(current);
    }

    console.log(isScrollTopVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsScrollTop);

    return () => removeEventListener("scroll", handleIsScrollTop);
  }, [scrollTopPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos < prevScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  let timeout = null;

  const handleThemeMode = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsLight(!isLight);
    }, 100);
  };

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Router>
      <div className={`app ${isLight ? "light-mode" : "dark-mode"}`}>
        <Navbar
          visible={visible}
          setVisible={setVisible}
          isLight={isLight}
          handleThemeMode={handleThemeMode}
        />
        <Routes>
          <Route path="/" exact element={<Home isLight={isLight} />} />
          <Route path="/country-details/:id" element={<CountryDetails />} />
        </Routes>
        <ScrollToTopButton isScrollTopVisible={isScrollTopVisible} />
      </div>
    </Router>
  );
}

export default App;
