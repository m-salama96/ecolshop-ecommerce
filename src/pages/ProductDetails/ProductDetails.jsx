import "./ProductDetails.css";

import { useContext, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { ProductContext } from "../../Context/ProductContext";
import { CartContext } from "../../Context/CartConext";
import { WishlistContext } from "../../Context/WishlistContext";

import Loading from "../../Components/Loading/Loading";

// Icons
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { MdOutlineTrendingFlat } from "react-icons/md";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Context
  const { products, loading } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  // Product
  const product = products.find((item) => item.id === Number(id));

  // Colors
  const colors = [
    {
      name: "Olive Green",
      value: "olive",
    },
    {
      name: "Black",
      value: "black",
    },
    {
      name: "White",
      value: "white",
    },
    {
      name: "Brown",
      value: "brown",
    },
  ];

  // Sizes
  const sizes = ["S", "M", "L", "XL", "XXL"];

  // States
  const [addActive, setAddActive] = useState("add");
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  // Swiper
  const swiperRef = useRef(null);

  // Loading
  if (loading) {
    return <Loading />;
  }

  // Product not found
  if (!product) {
    return <h2 className="text-center">Product not found</h2>;
  }

  // Check if product is in wishlist
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Main product wishlist status
  const isInWishlist = isProductInWishlist(product.id);

  // Price
  const totalPrice = product.price * quantity;

  // You May Also Like
  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  // Buy Now
  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity: Number(quantity),
    });

    navigate("/checkout");
  };

  // Toggle wishlist
  const handleWishlist = (productItem) => {
    if (isProductInWishlist(productItem.id)) {
      removeFromWishlist(productItem.id);
    } else {
      addToWishlist(productItem);
    }
  };

  // Related products cards
  const card = relatedProducts.map((relatedProduct) => {
    const relatedProductInWishlist = isProductInWishlist(relatedProduct.id);

    return (
      <SwiperSlide className="py-2" key={relatedProduct.id}>
        <div className="card position-relative py-2">
          {/* Rating + Wishlist */}
          <div className="row rating-wish d-flex position-absolute w-100">
            {/* Rating */}
            <div className="col px-2">
              <button type="button">
                <FaStar className="raiting-icon me-1" />
                <p>{relatedProduct.rating}</p>
              </button>
            </div>

            {/* Wishlist */}
            <div className="col d-flex justify-content-end px-2">
              <button
                type="button"
                onClick={() => handleWishlist(relatedProduct)}
              >
                {relatedProductInWishlist ? (
                  <FaHeart className="fs-3 color-red" />
                ) : (
                  <FaRegHeart className="fs-3 " />
                )}
              </button>
            </div>
          </div>

          {/* Product Image */}
          <Link to={`/product/${relatedProduct.id}`}>
            <img
              src={relatedProduct.images[0]}
              className="card-img-top"
              alt={relatedProduct.title}
            />
          </Link>

          {/* Product Info */}
          <div className="card-body">
            <h5 className="card-title">
              {relatedProduct.title.length > 10
                ? relatedProduct.title.slice(0, 25) + "..."
                : relatedProduct.title}
            </h5>

            <h6 className="pt-2">$ {relatedProduct.price}</h6>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="product-details py-3">
      <div className="container">
        <div className="row g-3">
          {/* Images  */}
          <div className="col-12 col-lg-8 left">
            <div className="row g-4">
              {/* Small Images */}
              <div className="col-12 col-lg-2 order-1 order-lg-0 img-small">
                <div className="row g-2">
                  {product.images.map((img, index) => (
                    <div className="col-3 col-lg-12" key={index}>
                      <button
                        type="button"
                        className="p-0 border-0 bg-transparent w-100"
                        onClick={() => swiperRef.current?.slideTo(index)}
                      >
                        <div className="card">
                          <img
                            src={img}
                            alt={product.title}
                            className="img-fluid"
                          />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big Image */}
              <div className="col-12 col-lg-10 order-0 order-lg-1 position-relative img-big">
                {/* Rating + Wishlist */}
                <div className="row rating-wish d-flex position-absolute w-100 p-3">
                  {/* Rating */}
                  <div className="col">
                    <button type="button">
                      <FaStar className="raiting-icon me-1 fs-3" />
                      <p>{product.rating}</p>
                    </button>
                  </div>

                  {/* Wishlist */}
                  <div className="col d-flex justify-content-end">
                    <button
                      type="button"
                      onClick={() => handleWishlist(product)}
                    >
                      {isInWishlist ? (
                        <FaHeart className="fs-3 color-red" />
                      ) : (
                        <FaRegHeart className="fs-3" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Swiper */}
                <Swiper
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="big-image-swiper"
                >
                  {product.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="card align-items-center">
                        <img src={img} alt={product.title} className="w-75" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Product Info  */}
          <div className="col-12 col-lg-4 right">
            {/* Product Title */}
            <h2>{product.title}</h2>
            {/* Price */}
            <h4 className="text-danger py-3">
              $ {totalPrice}
              <span className="fs-5 ms-2 text-decoration-line-through text-body-tertiary">
                ${totalPrice + Math.floor(totalPrice * 20) / 100}
              </span>
            </h4>
            {/* Description */}
            <p className="text-black-50">{product.description}</p>
            <hr className="d-none d-lg-block" />

            {/* Color */}

            <div className="color py-2">
              <h6>
                {colors.find((color) => color.value === selectedColor)?.name}
              </h6>

              <div className="d-flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    aria-label={color.name}
                    title={color.name}
                    className={`
                      color-option
                      mt-3
                      color-${color.value}
                      ${selectedColor === color.value ? "active" : ""}
                    `}
                    onClick={() => setSelectedColor(color.value)}
                  />
                ))}
              </div>
            </div>
            {/* Size  */}
            <div className="size py-2">
              <h6>Size: {selectedSize}</h6>

              <div className="d-flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`
                      size-option
                      mt-3
                      ${selectedSize === size ? "active" : ""}
                    `}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Quantity */}
            <div className="quantity-control mt-1">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            {/* Add / Buy  */}
            <div className="add my-3">
              <div className="row text-center g-2">
                {/* Add To Cart */}
                <div className="col-12 col-lg-6">
                  <button
                    type="button"
                    className={`
                      btn
                      btn-light
                      w-100
                      ${addActive === "add" ? "active" : ""}
                    `}
                    onClick={() => {
                      setAddActive("add");

                      addToCart({
                        ...product,
                        quantity: Number(quantity),
                      });
                    }}
                  >
                    Add To Cart
                  </button>
                </div>

                {/* Buy Now */}
                <div className="col-12 col-lg-6">
                  <button
                    type="button"
                    className={`
                      btn
                      btn-light
                      w-100
                      ${addActive === "buy" ? "active" : ""}
                    `}
                    onClick={() => {
                      setAddActive("buy");
                      handleBuyNow();
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like  */}
        <div className="you-may py-3 pt-5">
          <div className="container">
            {/* Header */}
            <div className="row header">
              <div className="col-7">
                <h3 className="fs-5">You May Also Like</h3>
              </div>

              <div className="col-5 d-flex align-items-center justify-content-end">
                <Link
                  to={`/shop?category=${product.category}`}
                  className="d-flex"
                >
                  <h4 className="fs-6">View All</h4>

                  <span className="ps-1 d-flex align-items-center">
                    <MdOutlineTrendingFlat />
                  </span>
                </Link>
              </div>
            </div>

            {/* Products */}
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
      </div>
    </div>
  );
}

export default ProductDetails;
