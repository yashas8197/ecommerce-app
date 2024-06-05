import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
        <Link
          to="/product/Men"
          style={{
            maxWidth: "540px",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <div
            className="card my-3 mx-2"
            onClick={(e) => console.log(e.currentTarget)}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648896074/fashify/e3220043-d4db-4c8a-9a5e-80459db0aae31648190230381-Roadster-_HL_fan7lo.webp"
                  className="img-fluid rounded-start"
                  alt="..."
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
        <Link
          to="/product/Women"
          style={{
            maxWidth: "540px",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <div className="card my-3 mx-2">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648896554/fashify/4f54b81d-51ca-4526-bab3-04066d977f5a1648368745195-Levis_keqmez.webp"
                  className="img-fluid rounded-start"
                  alt="..."
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
        <Link
          to="/product/Kids"
          style={{
            maxWidth: "540px",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <div className="card my-3 mx-2">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648516936/fashify/67b2f5d2-3064-4389-98e4-8ce05b4c354f1647513608806-Allen-Solly-Junior-Boys-Navy-Blue-Slim-Fit-Geometric-Print-P-1_ecyumj.webp"
                  className="img-fluid rounded-start"
                  alt="..."
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
