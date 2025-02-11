import { useDispatch } from "react-redux";
import { removeFromCart } from "../../slice/CartSlice";


const CartList = ({ items }) => {
    const { name, price, description, image, quantity } = items;
    const dispatch = useDispatch()
    return (
      <tr>
        <td className="cart-item">
          <img src={image} alt={name} />
        </td>
        <td>{name}</td>
        <td>${price}</td>
        <td>1</td>
        <td>${price * quantity}</td>
        <td className="cart-remove" onClick={() => dispatch(removeFromCart(items))}>x</td>
      </tr>
    );
  };
  
  export default CartList;
  