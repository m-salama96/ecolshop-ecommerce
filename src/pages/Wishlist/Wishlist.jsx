import "./Wishlist.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartConext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="wishlist py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>My Wishlist</h2>
          <p className="text-muted">
            Save your favorite products and shop them later.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-5">
            <FaHeart className="wishlist-empty-icon mb-3" />

            <h3>Your Wishlist is Empty</h3>

            <p className="text-muted">
              Save products you love and come back to them later.
            </p>

            <Link to="/shop" className="btn btn-dark mt-2">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {wishlist.map((item) => (
              <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                <div className="wishlist-item border rounded p-3 h-100">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="img-fluid w-100"
                    />
                  </Link>

                  <div className="pt-3">
                    <h5 className="text-truncate">{item.title}</h5>

                    <p className="mb-3">${item.price}</p>

                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-dark flex-grow-1"
                        onClick={() =>
                          addToCart({
                            ...item,
                            quantity: 1,
                          })
                        }
                      >
                        Add to Cart
                      </button>

                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
