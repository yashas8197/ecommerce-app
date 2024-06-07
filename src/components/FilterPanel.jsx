const FilterPanel = ({
  filterByRating,
  selectedRating,
  filterByCategory,
  selectedCategory,
  filterByPriceRange,
  priceRange,
  maxValue,
  clearFilters,
  filterByPrice,
  selectedSort,
}) => {
  function isCategoryExist(cat) {
    return selectedCategory.includes(cat);
  }

  return (
    <div className="w-25 mx-2 border-end ">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3">
          <h5>Filters</h5>
          <span
            onClick={() => clearFilters()}
            className="fs-5 text-secondary"
            style={{ cursor: "pointer" }}
          >
            <u>Clear</u>
          </span>
        </div>
        <div className="my-4">
          <h5>Price</h5>
          <div className="row">
            <span className="col text-secondary">0</span>
            <span className="col text-secondary">{maxValue / 2}</span>
            <span className="col text-secondary">{maxValue}</span>
          </div>
          <input
            type="range"
            className="w-75"
            value={priceRange}
            max={maxValue}
            min="0"
            onChange={filterByPriceRange}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="my-4">
          <h5>Category</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Men"
              id="flexCheckDefault1"
              checked={isCategoryExist("Men")}
              onChange={filterByCategory}
              style={{ cursor: "pointer" }}
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault1"
              style={{ cursor: "pointer" }}
            >
              Men
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Women"
              id="flexCheckDefault2"
              checked={isCategoryExist("Women")}
              onChange={filterByCategory}
              style={{ cursor: "pointer" }}
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault2"
              style={{ cursor: "pointer" }}
            >
              Women
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Kids"
              id="flexCheckDefault3"
              checked={isCategoryExist("Kids")}
              onChange={filterByCategory}
              style={{ cursor: "pointer" }}
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault3"
              style={{ cursor: "pointer" }}
            >
              Kids
            </label>
          </div>
        </div>
        <div className="my-4">
          <h5>Rating</h5>
          <form onChange={filterByRating}>
            <div className="form-check">
              <input
                className="form-check-input"
                value={4}
                type="radio"
                name="rating"
                id="flexRadioDisabled1"
                checked={selectedRating === "4"}
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled1"
                style={{ cursor: "pointer" }}
              >
                4 stars & Above
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={3}
                name="rating"
                id="flexRadioDisabled2"
                checked={selectedRating === "3"}
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled2"
                style={{ cursor: "pointer" }}
              >
                3 stars & Above
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                value={2}
                type="radio"
                name="rating"
                id="flexRadioDisabled3"
                checked={selectedRating === "2"}
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled3"
                style={{ cursor: "pointer" }}
              >
                2 stars & Above
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                name="rating"
                value={1}
                type="radio"
                id="flexRadioDisabled4"
                checked={selectedRating === "1"}
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled4"
                style={{ cursor: "pointer" }}
              >
                1 stars & Above
              </label>
            </div>
          </form>
        </div>
        <div className="my-4">
          <h5>Sort by</h5>

          <form onChange={filterByPrice}>
            <div className="form-check">
              <input
                className="form-check-input"
                value="Low to High"
                type="radio"
                name="sort"
                id="flexRadioDisabled0"
                checked={selectedSort === "Low to High"}
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled0"
                style={{ cursor: "pointer" }}
              >
                Price - Low to High
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                value="High to Low"
                type="radio"
                name="sort"
                id="flexRadioDisabled23"
                checked={selectedSort === "High to Low"}
                style={{ cursor: "pointer" }}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled23"
                style={{ cursor: "pointer" }}
              >
                Price - High to Low
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
