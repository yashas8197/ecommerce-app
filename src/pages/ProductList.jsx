import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import FilterPanel from "../components/FilterPanel";
import useFetch from "../utils/useFetch";

const ProductList = () => {
  const { productCat } = useParams();
  const [selectedCategory, setSelectedCategory] = useState([productCat]);
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const { data, loading, error } = useFetch(
    "https://af37566b-5685-423d-9575-48ddc8d01c59-00-3ehyq3khp5mt8.kirk.replit.dev/products",
  );

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

  const filteredDataByFilter = data?.product.filter((product) => {
    const matchesCategory =
      selectedCategory.includes(product.category) ||
      selectedCategory.length === 0;
    const matchesRating =
      selectedRating === "" || product.rating >= +selectedRating;
    const matchedPriceRange =
      selectedPriceRange === "" || product.price <= +selectedPriceRange;
    return matchesCategory && matchesRating && matchedPriceRange;
  });

  console.log(filteredDataByFilter);

  const clearFilters = () => {
    setSelectedCategory([productCat]);
    setSelectedRating(null);
    setSelectedPriceRange("");
    setPriceRange(maxValue);
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
          />
          <div className="my-4 px-4 w-75">
            <ProductCard productsData={filteredDataByFilter} />
          </div>
        </>
      )}
    </div>
  );
};
export default ProductList;
