import "./BestSellers.css";

import { MdOutlineTrendingFlat } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import { useContext } from "react";

import { ProductContext } from "../../../Context/ProductContext";
import { WishlistContext } from "../../../Context/WishlistContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Link } from "react-router-dom";

function BestSellers() {
  const category = ["vehicle", "sunglasses", "skin-care", "mens-watches"];

  // Products
  const { products } = useContext(ProductContext);

  // Wishlist
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  // Get products from categories
  const category1 = category
    .map((category) =>
      products.find((product) => product.category === category),
    )
    .filter(Boolean);

  // Check wishlist
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Add / Remove wishlist
  const handleWishlist = (product) => {
    if (isProductInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Cards
  const card = category1.map((product) => (
    <SwiperSlide className="py-2" key={product.id}>
      <div className="card position-relative py-2">
        {/* Rating + Wishlist */}
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
            <button type="button" onClick={() => handleWishlist(product)}>
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
              ? product.title.slice(0, 25) + "..."
              : product.title}
          </h5>

          <p className="card-text text-black-50">
            {product.description.length > 30
              ? product.description.slice(0, 30) + "..."
              : product.description}
          </p>

          <h6 className="pt-2">$ {product.price}</h6>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="best-sellers py-3">
      <div className="container">
        {/* Header */}
        <div className="row header">
          <div className="col">
            <h2>Best Sellers</h2>
          </div>

          <div className="col d-flex align-items-center justify-content-end">
            <Link to="/shop" className="d-flex">
              <h4>View All</h4>

              <span className="ps-1 d-flex">
                <MdOutlineTrendingFlat />
              </span>
            </Link>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {card}
        </Swiper>
      </div>
    </div>
  );
}

export default BestSellers;
