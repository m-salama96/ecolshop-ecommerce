import "./NavBar.css";

import { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

import { CartContext } from "../../Context/CartConext";
import { WishlistContext } from "../../Context/WishlistContext";

// icon-menu
import { HiMenu } from "react-icons/hi";

// icons
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function NavBar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path, categoryName) => {
    if (location.pathname !== path) {
      return false;
    }

    const currentCategory = new URLSearchParams(location.search).get(
      "category",
    );

    if (categoryName) {
      return currentCategory === categoryName;
    }

    return !currentCategory;
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Cart count
  const cartCont = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

  // Wishlist count
  const wishCont = wishlist.length;

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");

    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container position-relative">
        {/* Brand + Menu */}
        <div className="brand-button">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <HiMenu />
            </span>
          </button>

          <Link className="navbar-brand fw-bold" to="/">
            Ecolshop
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>

            {/* All Products */}
            <li className="nav-item">
              <Link
                to="/shop"
                className={`nav-link ${isActive("/shop") ? "active" : ""}`}
                onClick={closeNavbar}
              >
                All Products
              </Link>
            </li>

            {/* Women */}
            <li className="nav-item">
              <Link
                to="/shop?category=womens-dresses"
                className={`nav-link ${
                  isActive("/shop", "womens-dresses") ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                Women
              </Link>
            </li>

            {/* Man */}
            <li className="nav-item">
              <Link
                to="/shop?category=mens-shirts"
                className={`nav-link ${
                  isActive("/shop", "mens-shirts") ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                Man
              </Link>
            </li>

            {/* Groceries */}
            <li className="nav-item">
              <Link
                to="/shop?category=groceries"
                className={`nav-link ${
                  isActive("/shop", "groceries") ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                Groceries
              </Link>
            </li>

            {/* Electronics */}
            <li className="nav-item">
              <Link
                to="/shop?category=laptops"
                className={`nav-link ${
                  isActive("/shop", "laptops") ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                Electronics
              </Link>
            </li>

            {/* Sports */}
            <li className="nav-item">
              <Link
                to="/shop?category=sports-accessories"
                className={`nav-link ${
                  isActive("/shop", "sports-accessories") ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                Sports
              </Link>
            </li>

            {/* Beauty */}
            <li className="nav-item">
              <Link
                to="/shop?category=beauty"
                className={`nav-link ${
                  isActive("/shop", "Beauty") ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                Beauty
              </Link>
            </li>

            {/* Travel */}
            <li className="nav-item">
              <Link
                to="/shop?category=Fragrances"
                className={`nav-link ${
                  isActive("/shop", "Fragrances") ? "active" : ""
                }`}
                onClick={closeNavbar}
              >
                Fragrances
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar Icons */}
        <div className="nav-icon d-flex">
          {/* Search */}
          <span className="me-1 fs-5">
            <Link to="/shop?search=true">
              <CiSearch className="mb-1" />
            </Link>
          </span>

          {/* User */}
          <span className="me-1 fs-5">
            <CiUser
              onClick={() => {
                if (user) {
                  navigate("/profile");
                } else {
                  navigate("/login");
                }
              }}
            />
          </span>

          {/* Wishlist */}
          <span className="me-1 fs-5 position-relative">
            <Link to="/wishlist">
              <CiHeart className="mb-1" />

              <span className="number">{wishCont}</span>
            </Link>
          </span>

          {/* Cart */}
          <span className="me-1 fs-5 position-relative">
            <Link to="/cart" className="d-flex justify-content-center">
              <IoCartOutline />

              <span className="number">{cartCont}</span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
