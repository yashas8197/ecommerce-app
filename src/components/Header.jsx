import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEARCH_PRODUCT_TITLE_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();

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
    setTimeout(() => {
      setShowSuggestion(false);
    }, 200);
  };

  const handleOnFocus = () => {
    setShowSuggestion(true);
  };

  const onClickHandler = (productId) => {
    navigate(`/productDetials/${productId}`);
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
          className="position-absolute "
        >
          <ul
            className="list-group overflow-auto"
            style={{ width: "44vw", height: "50vh" }}
          >
            {suggestions.map((suggestion) => (
              <li
                onMouseDown={() => onClickHandler(suggestion._id, suggestion)}
                style={{ cursor: "pointer" }}
                key={suggestion._id}
                className="list-group-item d-flex justify-content-between"
              >
                <div className="w-50">
                  <img
                    src={suggestion.image}
                    className="img-fluid w-50 rounded "
                  />
                </div>
                <div className="w-75">
                  <p className="display-6">{suggestion.title}</p>
                  <p className="fs-7">{suggestion.description}</p>
                  <span className="fw-bold">₹{suggestion.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
