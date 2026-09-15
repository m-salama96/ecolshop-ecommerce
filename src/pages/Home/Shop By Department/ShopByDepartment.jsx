import "./ShopByDepartment.css";
import { MdOutlineTrendingFlat } from "react-icons/md";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

function ShopByDepartment() {
  const category = ["furniture", "groceries", "smartphones", "womens-shoes"];

  const navigate = useNavigate();

  const handleCategory = (category) => navigate(`/shop?category=${category}`);

  const { products } = useContext(ProductContext);

  const category1 = category
    .map((category) =>
      products.find((product) => product.category === category),
    )
    .filter(Boolean);

  const card = category1.map((product) => (
    <div className="col-3 py-2 " key={product.id}>
      <div
        className="card position-relative py-2 "
        onClick={() => handleCategory(product.category)}
      >
        <div className="img ">
          <img
            src={product.images[0]}
            className="card-img-top"
            alt={product.title}
          />
        </div>
        <h5 className="m-0 pt-1">{product.category.replace("-", " ")}</h5>
      </div>
    </div>
  ));

  return (
    <div className="shop-by-department py-3">
      <div className="container">
        {/* header  */}
        <div className="row header">
          <div className="col-8">
            <h2>Shop By Department</h2>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-end">
            <Link to="/shop" className="d-flex align-items-center">
              <h4 className="m-0">View All</h4>
              <span className="ps-1 d-flex">
                <MdOutlineTrendingFlat />
              </span>
            </Link>
          </div>
        </div>
        {/* header ## */}

        <div className="container text-center">
          <div className="row g-1 g-lg-5">{card}</div>
        </div>
      </div>
    </div>
  );
}

export default ShopByDepartment;
