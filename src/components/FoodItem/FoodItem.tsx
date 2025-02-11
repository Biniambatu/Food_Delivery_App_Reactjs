import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
// import { StoreContext } from '../../context/StoreContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../slice/CartSlice'

const FoodItem = ({item}:any) => {
 
  // const [itemCount, setItemCount] = useState(0)
  const { _id, name, description, price, image } = item
  //const {cartItems, addToCart, removeFromCart}:any = useContext(StoreContext)
  const dispatch = useDispatch()
  
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt="image" />
        <button onClick={()=> dispatch(addToCart(item))}>add to cart</button>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem