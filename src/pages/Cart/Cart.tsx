import { useSelector } from "react-redux"
import "./Cart.css"
const Cart = () => {
  const cartItems = useSelector(state => state.foodReducer.cartItems)
  return (
    <div>
      {cartItems.map((items) => (
         <h1>{items.name}</h1>
      ))}
     
    </div>
  )
}

export default Cart