import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEARCH_PRODUCT_TITLE_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const getSearchSuggestion = async () => {
    const response = await fetch(SEARCH_PRODUCT_TITLE_API + searchQuery);
    const data = await response.json();
    console.log(data);
    setSuggestions(data?.products);
  };

  useEffect(() => {
    if (searchQuery === "" || searchQuery === null) {
      return;
    }
    console.log(searchQuery);
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /* 
  key press - r
  - render the component
  - useEffect()
  - start timer => make api call after 200ms

  key press - ro
  - re-render the component
  - useEffect()
  - start timer => makes api call after 200ms

  It creates new state variable after every re-render. so clear old setTimeout timer using clearTimer()
  
*/

  const handleOnBlur = () => {
    setShowSuggestion(false);
    setSearchQuery("");
    setSuggestions([]);
  };

  const handleOnFocus = () => {
    setShowSuggestion(true);
  };

  return (
    <>
      <div className="bg-body-tertiary position-sticky w-100">
        <nav className="navbar navbar-expand-lg container d-flex justify-content-between">
          <Link style={{ textDecoration: "none" }} to="/">
            <h1 className="navbar-brand">Mytra.dev</h1>
          </Link>
          <div
            style={{ width: "45vw", position: "relative" }}
            className="d-flex"
          >
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchQuery}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-secondary mx-3">Login</button>
            <div className="mx-3">
              <Heart />
            </div>
            <div className="mx-3">
              <ShoppingCart />
            </div>
          </div>
        </nav>
      </div>
      {showSuggestion && searchQuery !== "" && (
        <div
          style={{
            position: "absolute",
            marginLeft: "23rem",
            zIndex: 2000,
          }}
          className="position-absolute"
        >
          <ul className="list-group" style={{ width: "44vw" }}>
            {suggestions.map((suggestion) => (
              <li key={suggestion._id} className="list-group-item">
                {suggestion.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
