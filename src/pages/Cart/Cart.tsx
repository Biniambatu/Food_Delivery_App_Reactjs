import { useSelector } from "react-redux";
import "./Cart.css";
import CartList from "./CartList";

const Cart = () => {
  const cartItems = useSelector(state => state.foodReducer.cartList);
  const total = useSelector(state => state.foodReducer.total)

  return (
    <div>
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <CartList key={index} items={item} />
          ))}
        </tbody>
      </table>
      
    </div>
    <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Delivery Fee</b>
              <b>${4}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total + 4}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
