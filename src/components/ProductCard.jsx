import { useState } from "react";

const ProductCard = ({ productsData }) => {
  const [fav, setFav] = useState({});

  const handleOnClick = (e) => {
    // Event bubbling jargon
    const cardElement = e.target.closest("[data-id]");
    const cardId = cardElement?.getAttribute("data-id");
    if (cardId) {
      setFav((prevFavStatus) => ({
        ...prevFavStatus,
        [cardId]: !prevFavStatus[cardId],
      }));
    }
  };

  return (
    <div className="row bg-body-tertiary rounded ">
      {productsData?.map((product) => (
        <div key={product._id} className="col-sm-4 my-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="position-relative">
              <div style={{ overflow: "hidden", maxHeight: "300px" }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="product"
                />
              </div>
              <div
                className="position-absolute top-0 end-0 px-2 py-1 rounded-circle bg-primary"
                onClick={handleOnClick}
                data-id={product._id}
              >
                {!fav[product._id] ? (
                  <i
                    className="fa-regular fa-heart"
                    style={{ color: "#fafafa" }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-heart"
                    style={{ color: "#a80505" }}
                  ></i>
                )}
              </div>
              <div
                style={{ background: "#D97706" }}
                className="position-absolute top-0 start-0 rounded"
              >
                <p className="fw-bold text-white px-2 mb-0">
                  {product?.trending ? "Trending" : ""}
                </p>
              </div>
              <div className="position-absolute bottom-0 start-0 rounded bg-primary">
                <p className="fw-bold text-white px-2 mb-0">
                  ⭐{product.rating} |{product?.reviews}
                </p>
              </div>
              <div
                style={{ background: "#D97706" }}
                className="position-absolute bottom-0 end-0 rounded "
              >
                <p className="fw-bold text-white px-2 mb-0">{product.size}</p>
              </div>
            </div>
            <div className="card-body">
              <p className="fs-6">{product.title}</p>
              <span className="fs-6 fw-bold">₹{product.price}</span>
              <span className="text-secondary mx-2 text-decoration-line-through">
                ₹{product.original_price}
              </span>
              <span className="fw-bold">
                {Math.floor(
                  ((product.original_price - product.price) /
                    product.original_price) *
                    100,
                )}
                % OFF
              </span>
              <button className="btn btn-primary w-100">
                <i className="fas fa-shopping-cart"></i>Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
