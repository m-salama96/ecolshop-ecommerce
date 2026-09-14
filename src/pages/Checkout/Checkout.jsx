import "./Checkout.css";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa6";
import { HiOutlineLockClosed } from "react-icons/hi";

import { useContext } from "react";
import { CartContext } from "../../Context/CartConext";

import { useNavigate } from "react-router-dom";

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

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/order-success");
  };

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
    <div className="check-out py-3">
      <form onSubmit={handelSubmit}>
        <div className="container">
          <h2>Checkout</h2>
          <p>Please fill in your details and complete your order.</p>
          <div className="row py-2 g-3">
            {/* col left  */}
            <div className="col-12 col-lg-8 left">
              <div className="container">
                <div className="row">
                  {/* col 1 */}
                  <div className="col-12">
                    <div className="container">
                      <h3 className="fs-4 py-1">
                        <IoPersonCircleOutline className="fs-2 pb-1" /> Customer
                        Information
                      </h3>
                      <div className="row py-2">
                        {/* col top */}
                        <div className="col-12 py-1">
                          <div className="row g-2">
                            <div className="col-6">
                              <label htmlFor="Firstname">First Name</label>
                              <input
                                id="Firstname"
                                type="text"
                                className="form-control mt-1 "
                                placeholder="First Name"
                                required
                              />
                            </div>
                            <div className="col-6">
                              <label htmlFor="lastname">Last Name</label>
                              <input
                                id="lastname"
                                type="text"
                                className="form-control mt-1"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        {/* col top ## */}
                        {/* col buttom ## */}
                        <div className="col-12 py-1">
                          <div className="row g-2">
                            <div className="col-12 col-lg-6 col-md-6">
                              <label htmlFor="email">Email</label>
                              <input
                                id="email"
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                required
                              />
                            </div>
                            <div className="col-12 col-lg-6 col-md-6">
                              <label htmlFor="Phone"> Phone</label>
                              <input
                                id="Phone"
                                type="tel"
                                className="form-control mt-1"
                                placeholder="Phone Number"
                                inputMode="numeric"
                                maxLength={20}
                                minLength={4}
                                pattern="[0-9]{0,20}"
                                onChange={(e) => {
                                  e.target.value = e.target.value.replace(
                                    /\D/g,
                                    "",
                                  );
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        {/* col buttom ## */}
                      </div>
                    </div>
                  </div>
                  {/* col 1 ## */}
                  {/* col 2 */}
                  <div className="col-12">
                    <div className="container">
                      <h3 className="fs-4 pt-1">
                        <MdLocationPin className="fs-2" /> Shipping Address
                      </h3>
                      <div className="row pb-2">
                        {/* col top */}
                        <div className="col-12 py-1">
                          <div className="row g-2">
                            <div className="col-12 col-lg-6 col-md-6">
                              <label htmlFor="country">Country</label>
                              <select
                                id="country"
                                className="form-select mt-1"
                                required
                              >
                                <option value="" disabled>
                                  Select Country
                                </option>
                                <option value="Egypt">Egypt</option>
                                <option value="Saudi Arabia">
                                  Saudi Arabia
                                </option>
                                <option value="United Arab Emirates">
                                  United Arab Emirates
                                </option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Qatar">Qatar</option>
                                <option value="United States">
                                  United States
                                </option>
                                <option value="United Kingdom">
                                  United Kingdom
                                </option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Canada">Canada</option>
                              </select>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6">
                              <label htmlFor="Address"> Address</label>
                              <input
                                id="Address"
                                type="text"
                                className="form-control mt-1"
                                placeholder="Street Address"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        {/* col top */}
                        {/* col buttom ## */}
                        <div className="col-12 py-1">
                          <div className="row g-2">
                            <div className="col-6 ">
                              <label htmlFor="City">City</label>
                              <input
                                id="City"
                                type="text"
                                className="form-control mt-1"
                                placeholder="City"
                                required
                              />
                            </div>
                            <div className="col-6">
                              <label htmlFor="ZIPCode"> ZIP Code</label>
                              <input
                                id="ZIPCode"
                                type="text"
                                className="form-control mt-1"
                                placeholder="ZIP Code"
                              />
                            </div>
                          </div>
                        </div>
                        {/* col buttom ## */}
                      </div>
                    </div>
                  </div>
                  {/* col 2 ## */}
                  {/* col 3 */}
                  <div className="col-12">
                    <div className="container">
                      <h3 className="fs-4 py-1">
                        <FaRegCreditCard className="fs-3" /> Payment Method
                      </h3>
                      <div className="row py-2 ">
                        {/* Cash on Delivery */}
                        <div className="container">
                          <div className="form-check">
                            <input
                              className="form-check-input "
                              type="radio"
                              name="payment"
                              id="cash"
                              value="cash"
                              required
                              checked={paymentMethod === "cash"}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />

                            <label className="form-check-label" htmlFor="cash">
                              Cash on Delivery
                            </label>
                          </div>

                          <div
                            className={`collapse ${
                              paymentMethod === "cash" ? "show" : ""
                            }`}
                          >
                            <div className="card card-body mt-2">
                              Pay when your order is delivered.
                            </div>
                          </div>

                          {/* Credit Card */}
                          <div className="form-check mt-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment"
                              id="card"
                              value="card"
                              checked={paymentMethod === "card"}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />

                            <label className="form-check-label" htmlFor="card">
                              Credit / Debit Card
                            </label>
                          </div>

                          <div
                            className={`collapse ${
                              paymentMethod === "card" ? "show" : ""
                            }`}
                          >
                            <div className="card card-body mt-2">
                              <div className="mb-3">
                                <label className="form-label">
                                  Card Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="1234 5678 9012 3456"
                                  required={paymentMethod === "card"}
                                  inputMode="numeric"
                                  maxLength={20}
                                  minLength={20}
                                  pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                                  onChange={(e) => {
                                    const value = e.target.value
                                      .replace(/\D/g, "")
                                      .slice(0, 16)
                                      .replace(/(.{4})/g, "$1 ")
                                      .trim();

                                    e.target.value = value;
                                  }}
                                />
                              </div>

                              <div className="row">
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Expiry Date
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="MM/YY"
                                    required={paymentMethod === "card"}
                                    inputMode="numeric"
                                    maxLength={5}
                                    minLength={5}
                                    pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                                    onChange={(e) => {
                                      let value = e.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 4);

                                      if (value.length > 2) {
                                        value =
                                          value.slice(0, 2) +
                                          "/" +
                                          value.slice(2);
                                      }

                                      e.target.value = value;
                                    }}
                                  />
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label">CVV</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="123"
                                    required={paymentMethod === "card"}
                                    inputMode="numeric"
                                    maxLength={3}
                                    minLength={3}
                                    pattern="[0-9]{3}"
                                    onChange={(e) => {
                                      const value = e.target.value.replace(
                                        /\D/g,
                                        "",
                                      );

                                      e.target.value = value;
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* col 3 ## */}
                  </div>
                </div>
              </div>
            </div>
            {/* col left ## */}
            {/* col right  */}

            <div className="col-12 col-lg-4 right">
              <div className="container ">
                <div className="row">
                  <h2 className="fs-4 py-2">
                    <FaCartArrowDown /> Order Summery
                  </h2>
                  <div className="col-12 ">
                    {cart.length === 0 ? (
                      <h4 className="text-center py-5">No products in cart</h4>
                    ) : (
                      <div className="body py-2 p-1">
                        {cart.map((item) => (
                          <div className="cart-prodct mb-2" key={item.id}>
                            <div className="row align-items-center g-1 p-1">
                              <div className="col-3 col-lg-2 img">
                                <img
                                  src={item.images[0]}
                                  alt={item.title}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-9 col-lg-10 text">
                                <h5>{item.title}</h5>

                                <div className="row pt-2">
                                  <div className="col-7 d-flex align-items-center">
                                    {/* quantity  */}
                                    <div className="quantity-control mt-1">
                                      <span>Qty:{item.quantity}</span>
                                    </div>
                                    {/* quantity ### */}
                                  </div>
                                  <div className="col-5 justify-content-end d-flex align-items-center">
                                    <h5 className="pe-2">$ {item.price}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="cart-summary p-1">
                      <div className="d-flex justify-content-between mt-4">
                        <span>Subtotal</span>
                        <span>
                          $
                          {cart
                            .reduce(
                              (total, item) =>
                                total + item.price * item.quantity,
                              0,
                            )
                            .toFixed(2)}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between mt-3">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>

                      <hr />

                      <div className="d-flex justify-content-between">
                        <h5>Total</h5>
                        <h5>
                          $
                          {cart
                            .reduce(
                              (total, item) =>
                                total + item.price * item.quantity,
                              0,
                            )
                            .toFixed(2)}
                        </h5>
                      </div>

                      <button type="submit" className="btn btn-dark w-100 mt-4">
                        <HiOutlineLockClosed className="mb-1 me-1" />
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col right ## */}
          </div>
          <div className="featuers py-2 pt-4">
            <div className="container">
              <div className="row g-1 p-1">{featuers2}</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
