import "./ProductsGrid.css";

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { WishlistContext } from "../../../Context/WishlistContext";

export default function ProductsGrid({ products }) {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  // Check if product is already in wishlist
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Add / Remove product from wishlist
  const handleWishlist = (product) => {
    if (isProductInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="products-grid py-3">
      <div className="container">
        <div className="row g-2">
          {products.map((product) => (
            <div className="col-6 col-lg-3 col-md-4" key={product.id}>
              <div className="card position-relative py-2 p-2">
                {/* Rating & Wishlist */}
                <div className="row rating-wish d-flex position-absolute w-100">
                  {/* Rating */}
                  <div className="col">
                    <button type="button">
                      <FaStar className="raiting-icon me-1" />
                      <p>{product.rating}</p>
                    </button>
                  </div>

                  {/* Wishlist */}
                  <div className="col">
                    <button
                      type="button"
                      onClick={() => handleWishlist(product)}
                    >
                      {isProductInWishlist(product.id) ? (
                        <FaHeart className="fs-5 color-red" />
                      ) : (
                        <FaRegHeart className="fs-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Product Image */}
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>

                {/* Product Info */}
                <div className="card-body">
                  <p className="text-black-50">{product.category}</p>
                  <h5 className="card-title">
                    {product.title.length > 10
                      ? product.title.slice(0, 16) + "..."
                      : product.title}
                  </h5>
                  <p className="card-text text-black-50">
                    {product.description.length > 17
                      ? product.description.slice(0, 25) + "..."
                      : product.description}
                  </p>
                  <h6 className="pt-2">$ {product.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
