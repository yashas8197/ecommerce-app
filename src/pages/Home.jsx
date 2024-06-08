import { Link } from "react-router-dom";

const Home = () => {
  const cardImageStyle = {
    height: "200px", // Adjust this height as needed
    objectFit: "cover",
  };

  const cardStyle = {
    maxWidth: "540px",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <img
          src="https://marketplace.canva.com/EAFWt8Wq208/1/0/1600w/canva-grey-minimalist-special-offer-banner-landscape-tVz4E4KVLgk.jpg"
          className="img-fluid w-100"
        />
      </div>
      <div className="d-inline-block">
        <img
          src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648895557/fashify/0b21bba9-e1e2-4dd9-ac99-4a759abe68801648705771876-Shop-By-Category_w2adx7.webp"
          className="img-fluid"
        />
      </div>
      <div className="d-flex container">
        <Link to="/product/Men" style={cardStyle}>
          <div className="card my-3 mx-2">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://res.cloudinary.com/dlrlwy7hg/image/upload/c_crop,ar_3:4/v1717837965/tq8d4qbrypyyrsackswi.jpg"
                  className="img-fluid rounded-start w-100"
                  alt="..."
                  style={cardImageStyle}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="text-secondary fs-6">NEW ARRIVALS</h5>
                  <h5 className="card-title">Men Collection</h5>
                  <p className="card-text">
                    Explore the latest trends in men's fashion now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/product/Women" style={cardStyle}>
          <div className="card my-3 mx-2">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://res.cloudinary.com/dlrlwy7hg/image/upload/c_crop,ar_3:4/v1717837696/ber5cx7vjzfglltqrclx.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                  style={cardImageStyle}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="text-secondary fs-6">NEW ARRIVALS</h5>
                  <h5 className="card-title">Women Collection</h5>
                  <p className="card-text">
                    Discover the latest trends in women's fashion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/product/Kids" style={cardStyle}>
          <div className="card my-3 mx-2">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1717848030/indsmdz1u3ueekmgtyu9.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                  style={cardImageStyle}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="text-secondary fs-6">NEW ARRIVALS</h5>
                  <h5 className="card-title">Kids Collection</h5>
                  <p className="card-text">
                    Explore adorable styles for the little ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
