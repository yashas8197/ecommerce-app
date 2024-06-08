import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { GET_PRODUCT_ID } from "../utils/constants";
import { useState } from "react";

const ProductDetail = () => {
  const [fav, setFav] = useState({});
  const { productId } = useParams();

  const { data, loading, error } = useFetch(GET_PRODUCT_ID + productId);
  console.log(data);

  const handleOnClick = (e) => {
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
    <>
      {data ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card mb-3" style={{ maxWidth: "1000px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <div>
                  <img
                    src={data?.product?.image}
                    className="img-fluid rounded"
                    alt="product"
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover"
                    }}
                  />

                  <div
                    className="position-absolute top-0  px-2 py-1 rounded-circle bg-primary"
                    onClick={handleOnClick}
                    data-id={data?.product?._id}
                  >
                    {!fav[data?.product?._id] ? (
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
                  <div className="position-absolute bottom-0 start-0 rounded bg-primary">
                    <p className="fw-bold text-white px-2 mb-0">
                      ⭐{data?.product?.rating} | {data?.product?.reviews}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{data?.product?.title}</h3>
                  <p>{data?.product?.reviews} reviews</p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span className=" fw-bold display-6">
                        ₹{data?.product.price}
                      </span>
                      <span className="text-secondary display-6 mx-4 text-decoration-line-through">
                        ₹{data?.product.original_price}
                      </span>
                    </div>
                    <span className="fw-bold display-6">
                      {Math.floor(
                        ((data?.product.original_price - data?.product.price) /
                          data?.product.original_price) *
                          100,
                      )}
                      % OFF
                    </span>
                  </div>
                  <hr />
                  <div className="">
                    <p className="card-text fs-5">
                      <strong>Availability: </strong>
                      {data?.product.in_stock ? "In Stock" : "Out of Stock"}
                    </p>
                    <p className="card-text fs-5">
                      <strong>Description: </strong>
                      {data?.product.description}
                    </p>
                    <p className="card-text fs-5">
                      <strong>Size: </strong>
                      {data?.product.size}
                    </p>
                    <p className="card-text fs-5">
                      <strong>Delivery: </strong>
                      in {data?.product.delivery_time} days
                    </p>
                  </div>
                  <hr/>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100 w-100">
          <div className="spinner-border text-info m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
