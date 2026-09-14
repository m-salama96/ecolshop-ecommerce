import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartConext";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  return (
    <section className="cart py-4 ">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8 left p-1">
            <h3 className="mb-4 ">Your Shopping Cart</h3>
            {cart.length === 0 ? (
              <h4 className="text-center py-5">No products in cart</h4>
            ) : (
              <div className="body p-1">
                {cart.map((item) => (
                  <div className="cart-prodct mb-2" key={item.id}>
                    <div className="row align-items-center g-2 p-1">
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
                              <button
                                type="button"
                                onClick={() => {
                                  decreaseQuantity(item.id);
                                }}
                              >
                                -
                              </button>

                              <span>{item.quantity}</span>

                              <button
                                type="button"
                                onClick={() => {
                                  increaseQuantity(item.id);
                                }}
                              >
                                +
                              </button>
                            </div>
                            {/* quantity ### */}

                            <button
                              type="button"
                              className="btn ms-2 d-flex align-items-center"
                              onClick={() => {
                                removeFromCart(item.id);
                              }}
                            >
                              <MdDelete className="" />
                              remove
                            </button>
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
          <div className="col-12 col-lg-4 right">
            <div className="cart-summary p-3">
              <h3>Order Summary</h3>

              <div className="d-flex justify-content-between mt-4">
                <span>Subtotal</span>
                <span>
                  $
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
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
                      (total, item) => total + item.price * item.quantity,
                      0,
                    )
                    .toFixed(2)}
                </h5>
              </div>

              <button
                type="button"
                className="btn btn-dark w-100 mt-4"
                onClick={() => navigate("/checkout")}
                disabled={cart.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
