import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-body-tertiary">
      <nav className="navbar navbar-expand-lg container d-flex justify-content-between">
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="navbar-brand">Mytra.dev</h1>
        </Link>
        <form className="d-flex w-25">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
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
  );
};

export default Header;
