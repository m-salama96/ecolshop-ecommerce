import "./OrderSuccess.css";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();
  return (
    <div className="order-success d-flex justify-content-center text-center ">
      <div>
        <TiTick className="icon" />
        <h2 className="pb-3 pt-2">Order Confirmed!</h2>
        <p> Thank you for your order.</p>
        <p> Your order has been placed successfully.</p>
        <input
          className="btn btn-primary mt-2"
          type="reset"
          value="Continue Shopping"
          onClick={() => {
            navigate("/shop");
          }}
        ></input>
      </div>
    </div>
  );
}
