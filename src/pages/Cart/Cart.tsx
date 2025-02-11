import { useSelector } from "react-redux"
import "./Cart.css"
const Cart = () => {
  const cartItems = useSelector(state => state.foodReducer.food_list)
  return (
    <div>
      {cartItems.map((items) => (
        <>
         <h1>{items.name}</h1>
         <h1>{items.description}</h1>
         <h1>{items.price}</h1>
         <h1>{items.image}</h1>
        </>
         
      ))}
     
    </div>
  )
}

export default Cart