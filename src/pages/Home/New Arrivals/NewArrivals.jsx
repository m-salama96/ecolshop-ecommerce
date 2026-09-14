import "./NewArrivals.css";
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

import { FaTruck } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa";

import { Link } from "react-router-dom";

// featuers

const featuers = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Free Shipping",
    text: "On orders over $50",
  },
  {
    id: 2,
    icon: <MdOutlineCurrencyExchange />,
    title: "Money Guarantee",
    text: "30 days money back",
  },
  {
    id: 3,
    icon: <FiHeadphones />,
    title: "Online Support",
    text: "24/7 dedicated support",
  },
  {
    id: 4,
    icon: <FaRegCreditCard />,
    title: "Flexible Payment",
    text: "Pay with multiple cards",
  },
];

// featuers ###

function NewArrivals() {
  const category = ["beauty", "fragrances", "furniture", "home-decoration"];

  const { products } = useContext(ProductContext);

  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const handleWishlist = (product) => {
    if (isProductInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const category1 = category
    .map((category) =>
      products.find((product) => product.category === category),
    )
    .filter(Boolean);

  const card = category1.map((product) => (
    <SwiperSlide className="py-2" key={product.id}>
      <div className="card position-relative py-2">
        <div className="row rating-wish d-flex position-absolute w-100">
          <div className="col">
            <button>
              <FaStar className="raiting-icon me-1" />
              <p>{product.rating}</p>
            </button>
          </div>
          <div className="col">
            <button type="button" onClick={() => handleWishlist(product)}>
              {isProductInWishlist(product.id) ? (
                <FaHeart className="fs-3 color-red" />
              ) : (
                <FaRegHeart className="fs-3" />
              )}
            </button>
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            className="card-img-top"
            alt={product.title}
          />
        </Link>
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

  // featuers
  const featuers2 = featuers.map((e) => (
    <div className="col-3 " key={e.id}>
      <div className="cardfea d-flex align-items-center">
        <div className="icon m-lg-3">{e.icon}</div>
        <div className="text">
          <h5>{e.title}</h5>
          <p className=" text-black-50">{e.text}</p>
        </div>
      </div>
    </div>
  ));

  // featuers ###

  return (
    <div className="new-arrivals py-3">
      <div className="container">
        {/* header  */}
        <div className="row header">
          <div className="col">
            <h2>New Arrivals</h2>
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
        {/* header ## */}

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
        <div className="featuers ">
          <div className="container">
            <div className="row g-1 p-1">{featuers2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
