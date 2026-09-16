import "./Hero.css";
import heroimg1 from "../../../assets/hero/hero.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="container text-center">
        <div className="row d-flex align-items-center">
          <div className="col-7 col-lg-6 col-md-6 text-start p-2">
            <p className="pb-2 text-black-50">
              In This Season, Find The Best 🔥
            </p>
            <h2>
              Exclusive Collection <br />
              For Everyone
            </h2>
            <button
              type="button"
              className="btn btn-dark rounded-pill "
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
