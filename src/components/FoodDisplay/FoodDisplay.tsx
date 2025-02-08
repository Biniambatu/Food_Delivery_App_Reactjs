import { useContext } from "react"
import "./FoodDisplay.css"
//import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem"
import { food_list } from "../../assets/assets"


const FoodDisplay = ({category}) => {

   
  return (
    <div className="food-display" id="food-display" >
        <h2>Top dishes near you </h2>
        <div className="food-display-list">
            {food_list.map((item, index) => {
                if( category === "All" || category === item.category ){
                return (<FoodItem key={index} item={item}/>)              
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay