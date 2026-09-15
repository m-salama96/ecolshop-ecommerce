import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function Footer() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="footer bg-dark text-start pb-2">
      <div className="container ">
        <div className="row pt-4">
          {/* Stay Up  */}
          <div className="col-12 col-lg-4">
            <h4 className="fs-4">
              Stay Updated With
              <br /> Our New Offers
            </h4>
            <p>Subscribe to our newsletter and get 10% off your first order.</p>
            <form className="position-relative mt-2 w-75">
              <input type="text" placeholder="Enter Your Email"></input>
              <button type="submet" className="btn rounded-pill bg-dark ">
                Subscribe
              </button>
            </form>
          </div>
          {/* Stay Up  ## */}
          {/* Top Cat */}
          <div className="col-12 col-lg-2 ">
            {/* Top Cat mobile  */}
            <div className="accordion d-lg-none w-100" id="accordionExample">
              <div className="accordion-item ">
                <h4 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Top Categories
                  </button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse  p-0"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li className="my-2">
                        <Link to="/shop?category=mens-shirts">
                          Men Collection
                        </Link>
                      </li>

                      <li className="my-2">
                        <Link to="/shop?category=womens-dresses">
                          Women Collection
                        </Link>
                      </li>

                      <li className="my-2">
                        <Link to="/shop?category=laptops">Electronics</Link>
                      </li>

                      <li className="my-2">
                        <Link to="/shop?category=sports-accessories">
                          Kids Collection
                        </Link>
                      </li>

                      <li className="my-2">
                        <Link to="/shop?category=womens-bags">Accessories</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Top Cat mobile ## */}
            {/* Top Cat pc */}
            <div className="d-none d-lg-block">
              <h4 className="pb-2">Top Categories</h4>
              <ul>
                <li className="my-2">
                  <Link to="/shop?category=mens-shirts">Men Collection</Link>
                </li>

                <li className="my-2">
                  <Link to="/shop?category=womens-dresses">
                    Women Collection
                  </Link>
                </li>

                <li className="my-2">
                  <Link to="/shop?category=laptops">Electronics</Link>
                </li>

                <li className="my-2">
                  <Link to="/shop?category=sports-accessories">
                    Kids Collection
                  </Link>
                </li>

                <li className="my-2">
                  <Link to="/shop?category=womens-bags">Accessories</Link>
                </li>
              </ul>
            </div>
            {/* Top Cat pc ##*/}
          </div>
          {/* Top Cat ## */}
          {/* Quick Li */}

          <div className="col-12 col-lg-2">
            {/* Quick Li mobile*/}
            <div className="accordion d-lg-none w-100" id="accordionExample2">
              <div className="accordion-item ">
                <h4 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTow"
                  >
                    Quick Links
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse  p-0"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <ul>
                      <li className="my-2 ">
                        <a href="#">About Us</a>
                      </li>
                      <li className="my-2 ">
                        <a href="#">Contact Us</a>
                      </li>
                      <li className="my-2 ">
                        <a href="#">FAQs</a>
                      </li>
                      <li className="my-2 ">
                        <a href="#">Shipping & Delivery</a>
                      </li>
                      <li className="my-2 ">
                        <a href="#">Return Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Li mobile ##*/}
            {/* Quick Li pc*/}
            <div className="d-none d-lg-block">
              <h4>Quick Links</h4>
              <ul>
                <li className="my-2 ">
                  <a href="#">About Us</a>
                </li>
                <li className="my-2 ">
                  <a href="#">Contact Us</a>
                </li>
                <li className="my-2 ">
                  <a href="#">FAQs</a>
                </li>
                <li className="my-2 ">
                  <a href="#">Shipping & Delivery</a>
                </li>
                <li className="my-2 ">
                  <a href="#">Return Policy</a>
                </li>
              </ul>
            </div>
            {/* Quick Li pc ##*/}
          </div>
          {/* Quick Li ## */}
          {/* Customer  */}
          <div className="col-12 col-lg-2 ">
            {/* Customer mobile */}
            <div className="accordion d-lg-none w-100" id="accordionExample3">
              <div className="accordion-item ">
                <h4 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Customer Service
                  </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse  p-0"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample3"
                >
                  <div className="accordion-body">
                    <ul>
                      <li className="my-2 ">
                        <a href="#">My Account</a>
                      </li>
                      <li className="my-2 ">
                        <a href="#">Order Tracking</a>
                      </li>
                      <li className="my-2 ">
                        <a href="#">Wishlist</a>
                      </li>
                      <li className="my-2 ">
                        <a href="#">Support Center</a>
                      </li>
                      <li className="my-2 ">
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Customer mobile ## */}
            {/* Customer pc */}
            <div className="d-none d-lg-block">
              <h4>Customer Service</h4>
              <ul>
                <li
                  className="my-2 "
                  onClick={() => {
                    if (user) {
                      navigate("/profile");
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  <a href="#">My Account</a>
                </li>
                <li className="my-2 ">
                  <a href="#">Order Tracking</a>
                </li>
                <li className="my-2 " onClick={() => navigate("/wishlist")}>
                  <a href="#">Wishlist</a>
                </li>
                <li className="my-2 ">
                  <a href="#">Support Center</a>
                </li>
                <li className="my-2 ">
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            {/* Customer pc ##*/}
          </div>
          {/* Customer  */}
          <div className="col-12 col-lg-2 follow-us ">
            {/* follow us mobile  */}
            <div className="accordion d-lg-none w-100" id="accordionExample4">
              <div className="accordion-item ">
                <h4 className="accordion-header" id="headingFore">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFore"
                    aria-expanded="true"
                    aria-controls="collapseFore"
                  >
                    Follow Us
                  </button>
                </h4>
                <div
                  id="collapseFore"
                  className="accordion-collapse collapse show  p-0"
                  aria-labelledby="headingFore"
                  data-bs-parent="#accordionExample4"
                >
                  <div className="accordion-body">
                    <a href="#" className="pe-4 fs-4 ">
                      <FaFacebook className="face" />
                    </a>

                    <a href="#" className="pe-4 fs-4 ">
                      <FaInstagram className="inst" />
                    </a>

                    <a href="#" className="pe-4 fs-4 ">
                      <FaTwitterSquare className="twitt" />
                    </a>

                    <a href="#" className="pe-4 fs-4 ">
                      <FaYoutube className="yout" />
                    </a>
                  </div>

                  {/* Follow us mobile ## */}
                </div>
              </div>
            </div>
            {/* Follow us pc */}
            <div className="d-none d-lg-block">
              <h4>Follow Us</h4>
              <a href="#" className="pe-4 fs-4 ">
                <FaFacebook className="face" />
              </a>

              <a href="#" className="pe-4 fs-4 ">
                <FaInstagram className="inst" />
              </a>

              <a href="#" className="pe-4 fs-4 ">
                <FaTwitterSquare className="twitt" />
              </a>

              <a href="#" className="pe-4 fs-4 ">
                <FaYoutube className="yout" />
              </a>
            </div>
            {/* Follow us pc ## */}
          </div>
        </div>

        <div className="row text-white">
          <div className="col-12 col-lg-3 ">
            <p className="pt-3">© 2024 Ecolshop. All Rights Reserved.</p>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-3">
            <a href="#" className="me-2 fs-2">
              <FaCcVisa />
            </a>
            <a href="#" className="me-2 fs-2">
              <FaCcMastercard />
            </a>
            <a href="#" className="me-2 fs-2">
              <FaCcPaypal />
            </a>
            <a href="#" className="me-2 fs-2">
              <FaGooglePay />
            </a>
            <a href="#" className="me-2 fs-2">
              <SiApplepay />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
