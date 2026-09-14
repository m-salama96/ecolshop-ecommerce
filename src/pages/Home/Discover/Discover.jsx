import "./Discover.css";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const productsInformition = [
  {
    id: 1,
    title: "Explore New Arrivals",
    description: "Shop The From Top Brands",
    category: "laptops",
  },
  {
    id: 2,
    title: "Beauty Collection",
    description: "Gift The Gift Of Choice",
    category: "beauty",
  },
  {
    id: 3,
    title: "Sale Collection",
    description: "Up To 50% Off Items",
    category: "smartphones",
  },
];

function Discover() {
  const { products } = useContext(ProductContext);

  const navigate = useNavigate();

  const handleCategory = (category) => navigate(`/shop?category=${category}`);

  const productscard = productsInformition.map((item) => {
    const product = products.find(
      (product) => product.category === item.category,
    );

    if (!product) return null;

    return (
      <div className="col-12 col-lg-4 col-md-4" key={item.id}>
        <div className="card" onClick={() => handleCategory(item.category)}>
          <div className="img">
            <img className="w-50" src={product.images[0]} alt={product.title} />
          </div>
          <div className="text pt-2">
            <h3 className="fs-4 m-0">{item.title}</h3>
            <p className="text-black-50">{item.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="discover py-3">
      <div className="container text-center">
        <h2>Discover More</h2>
        <div className="row g-3 pt-3">{productscard}</div>
      </div>
    </div>
  );
}

export default Discover;
