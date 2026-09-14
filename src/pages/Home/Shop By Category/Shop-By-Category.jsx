import "./Shop-By-Category.css";
import { v4 as uuidv4 } from "uuid";

import img1 from "../../../assets/Shop By Category/01-women.png";
import img2 from "../../../assets/Shop By Category/02-men.png";
import img3 from "../../../assets/Shop By Category/03-electronics.png";
import img4 from "../../../assets/Shop By Category/04-sports.png";
import img5 from "../../../assets/Shop By Category/05-beauty.png";
import img10 from "../../../assets/Shop By Category/06-travel.png";
import img6 from "../../../assets/Shop By Category/07-kids.png";
import img7 from "../../../assets/Shop By Category/08-home-kitchen.png";
import img8 from "../../../assets/Shop By Category/09-accessories.png";
import img9 from "../../../assets/Shop By Category/10-shoes.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const card = [
  {
    id: uuidv4(),
    img: img1,
    title: "Women",
    text: "Collection",
    category: "womens-dresses",
  },
  {
    id: uuidv4(),
    img: img2,
    title: "Men",
    text: "Collection",
    category: "mens-shirts",
  },
  {
    id: uuidv4(),
    img: img3,
    title: "Electronics",
    text: "Collection",
    category: "smartphones",
  },
  {
    id: uuidv4(),
    img: img4,
    title: "Sports",
    text: "Collection",
    category: "sports-accessories",
  },
  {
    id: uuidv4(),
    img: img5,
    title: "Beauty",
    text: "Collection",
    category: "beauty",
  },
  {
    id: uuidv4(),
    img: img6,
    title: "Kids",
    text: "Collection",
    category: "mens-shirts",
  },
  {
    id: uuidv4(),
    img: img7,
    title: "Home & Kitchen",
    text: "Collection",
    category: "kitchen-accessories",
  },
  {
    id: uuidv4(),
    img: img8,
    title: "Accessories",
    text: "Collection",
    category: "womens-bags",
  },
  {
    id: uuidv4(),
    img: img9,
    title: "Shoes",
    text: "Collection",
    category: "mens-shoes",
  },
  {
    id: uuidv4(),
    img: img10,
    title: "Travel",
    text: "Collection",
    category: "sunglasses",
  },
];

function ShopByCategory() {
  const navigate = useNavigate();

  const handleCategory = (category) => navigate(`/shop?category=${category}`);

  const card2 = card.map((e) => {
    return (
      <SwiperSlide
        className="card"
        key={e.id}
        onClick={() => handleCategory(e.category)}
      >
        <img className="w-50" src={e.img} alt={e.title} />

        <h4 className=" fs-5">{e.title}</h4>

        <p className="text-black-50">{e.text}</p>
      </SwiperSlide>
    );
  });

  return (
    <div className="shop-by-category py-3">
      <div className="container ">
        <h2>Shop By Category</h2>
        <Swiper
          className="shop-by-category pt-3 text-center"
          modules={[Grid]}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={15}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 13,
            },
            576: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {card2}
        </Swiper>
      </div>
    </div>
  );
}

export default ShopByCategory;
