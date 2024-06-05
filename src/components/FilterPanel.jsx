const FilterPanel = ({
  filterByRating,
  selectedRating,
  filterByCategory,
  selectedCategory,
  filterByPriceRange,
  priceRange,
  maxValue,
  clearFilters,
}) => {
  function isCategoryExist(cat) {
    return selectedCategory.includes(cat);
  }

  return (
    <div className="w-25 mx-2 border-end">
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
              checked={isCategoryExist("Men")}
              onChange={filterByCategory}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Men
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Women"
              checked={isCategoryExist("Women")}
              onChange={filterByCategory}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Women
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Kids"
              checked={isCategoryExist("Kids")}
              onChange={filterByCategory}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
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
                checked={selectedRating === "4"}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled"
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
                checked={selectedRating === "3"}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled"
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
                checked={selectedRating === "2"}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled"
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
                checked={selectedRating === "1"}
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled"
              >
                1 stars & Above
              </label>
            </div>
          </form>
        </div>
        <div className="my-4">
          <h5>Sort by</h5>

          <form>
            <div className="form-check">
              <input
                className="form-check-input"
                value="Low to High"
                type="radio"
                name="sort"
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled"
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
              />
              <label
                className="form-check-label text-secondary "
                htmlFor="flexRadioDisabled"
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
