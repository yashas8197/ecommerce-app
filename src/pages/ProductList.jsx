import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import useFetch from "../utils/useFetch";
import { ALL_PRODUCT_API } from "../utils/constants";

const ProductList = () => {
  const { productCat } = useParams();
  const [selectedCategory, setSelectedCategory] = useState([productCat]);
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [productsData, setProductsData] = useState([]);

  const { data, loading, error } = useFetch(ALL_PRODUCT_API);

  useEffect(() => {
    setProductsData(data?.product);
  }, [data]);

  const maxValue = data?.product.reduce(
    (acc, curr) => (parseInt(curr.price) > acc ? parseInt(curr.price) : acc),
    0,
  );

  const [priceRange, setPriceRange] = useState(maxValue);

  const filterByCategory = (e) => {
    const { value } = e.target;

    if (selectedCategory.includes(value)) {
      setSelectedCategory(
        selectedCategory.filter((category) => category !== value),
      );
    } else {
      setSelectedCategory([...selectedCategory, value]);
    }
  };

  const filterByRating = (e) => {
    const { value } = e.target;
    setSelectedRating(value);
  };

  const filterByPriceRange = (e) => {
    const { value } = e.target;
    setSelectedPriceRange(value);
    setPriceRange(value);
  };

  const filterByPrice = (e) => {
    const { value } = e.target;
    setSelectedSort(value);
  };

  const filteredDataByFilter =
    productsData &&
    productsData.filter((product) => {
      const matchesCategory =
        selectedCategory.includes(product.category) ||
        selectedCategory.length === 0;
      const matchesRating =
        selectedRating === "" || product.rating >= +selectedRating;
      const matchedPriceRange =
        selectedPriceRange === "" || product.price <= +selectedPriceRange;
      return matchesCategory && matchesRating && matchedPriceRange;
    });

  if (selectedSort === "Low to High") {
    productsData.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "High to Low") {
    productsData.sort((a, b) => b.price - a.price);
  } else {
    productsData;
  }

  const clearFilters = () => {
    setSelectedCategory([productCat]);
    setSelectedRating(null);
    setSelectedPriceRange("");
    setPriceRange(maxValue);
    setSelectedSort("");
  };

  return (
    <div className="d-flex">
      {!data ? (
        <div className="d-flex justify-content-center align-items-center vh-100 w-100">
          <div className="spinner-border text-info m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <FilterPanel
            selectedCategory={selectedCategory}
            filterByCategory={filterByCategory}
            filterByRating={filterByRating}
            selectedRating={selectedRating}
            filterByPriceRange={filterByPriceRange}
            priceRange={priceRange}
            maxValue={maxValue}
            clearFilters={clearFilters}
            filterByPrice={filterByPrice}
            selectedSort={selectedSort}
          />
          <div className="my-4 px-4 w-75">
            <div className=" mb-3 mt-1">
              <h5 className="d-inline ">Showing All Products</h5>
              <span className="mx-3">
                <small className="text-secondary ">
                  ( Showing{" "}
                  {filteredDataByFilter && filteredDataByFilter.length}{" "}
                  products)
                </small>
              </span>
            </div>
            <ProductCard productsData={filteredDataByFilter} />
          </div>
        </>
      )}
    </div>
  );
};
export default ProductList;
