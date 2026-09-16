import "./Hero2.css";
import heroimg1 from "../../../assets/hero/hero2.png";
import { useNavigate } from "react-router-dom";

export default function Hero2() {
  const navigate = useNavigate();

  return (
    <div className="hero2">
      <div className="container text-center">
        <div className="row d-flex align-items-center">
          <div className="col-7 col-lg-6 col-md-6 text-start p-2">
            <h2>
              Our Special Offer <br />
              In Kids Products
            </h2>
            <p className="pb-2 text-black-50">
              Explore a wide range of high-quality products for your little
              ones. Get special discounts and exciting offers.
            </p>
            <button
              type="button"
              className="btn btn-dark rounded-pill mt-1"
              onClick={() => navigate("/shop")}
            >
              Explore Now
            </button>
          </div>
          <div className="col-5 col-lg-6 col-md-6">
            <img className="img-fluid" src={heroimg1} alt="heroimg" />
          </div>
        </div>
      </div>
    </div>
  );
}
