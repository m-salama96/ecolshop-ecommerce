import "./CategoryName.css";
import { v4 as uuidv4 } from "uuid";

import {
  FaPumpSoap,
  FaSprayCan,
  FaChair,
  FaShoppingBasket,
  FaLaptop,
  FaCar,
  FaMotorcycle,
  FaMobileAlt,
  FaGlasses,
  FaTruck,
} from "react-icons/fa";

const category = [
  { id: uuidv4(), icon: <FaChair />, title: "All Products" },
  { id: uuidv4(), icon: <FaShoppingBasket />, title: "Groceries" },
  { id: uuidv4(), icon: <FaLaptop />, title: "Laptops" },
  { id: uuidv4(), icon: <FaCar />, title: "Vehicle" },
  { id: uuidv4(), icon: <FaSprayCan />, title: "Fragrances" },
  { id: uuidv4(), icon: <FaMotorcycle />, title: "Motorcycle" },
  { id: uuidv4(), icon: <FaMobileAlt />, title: "Smartphones" },
  { id: uuidv4(), icon: <FaPumpSoap />, title: "Beauty" },
  { id: uuidv4(), icon: <FaGlasses />, title: "Sunglasses" },
  { id: uuidv4(), icon: <FaTruck />, title: "tops" },
];

export default function CategoryName({
  setSelectedCategory,
  setSearchValue,
  setCurrentPage,
}) {
  const category2 = category.map((e) => (
    <div
      className="col"
      key={e.id}
      onClick={() => {
        setSelectedCategory(e.title);
        setSearchValue("");
        setCurrentPage(1);

        if (e.title === "All Products") {
          window.location.href = "/shop";
        } else {
          window.location.href = `/shop?category=${e.title.toLowerCase()}`;
        }
      }}
    >
      <div className="category d-flex p-1">
        <div className="icon p-2 me-2">{e.icon}</div>
        <h4 className="fs-5">{e.title}</h4>
      </div>
    </div>
  ));

  return (
    <div className="category-name py-3">
      <div className="container">
        <h2>Category Name</h2>
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-2  pt-4 pb-2">
          {category2}
        </div>
      </div>
    </div>
  );
}
