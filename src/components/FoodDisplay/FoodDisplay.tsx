
import "./FoodDisplay.css"

import FoodItem from "../FoodItem/FoodItem"
import { useSelector } from "react-redux"



const FoodDisplay = ({category}:any) => {

const food_list = useSelector(state => state.foodReducer.food_list)
   
  return (
    <div className="food-display" id="food-display" >
        <h2>Top dishes near you </h2>
        <div className="food-display-list">
            {food_list.map((item:any, index:any) => {
                if( category === "All" || category === item.category ){
                return (<FoodItem key={index} item={item}/>)              
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay