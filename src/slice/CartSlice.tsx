import { createSlice } from "@reduxjs/toolkit";
//import { food_list } from "../assets/assets";

const foodSlice = createSlice({
    name: "foodCart",
    initialState: {
        food_list : [],
        total: 0
    },
    reducers: ({
        addToCart(state, action){
          const updatedItem = state.food_list.concat(action.payload)

          return {...state, food_list: updatedItem}
          
        },
        removeFromCart(state, action){
            const updatedItem = state.food_list.filter(item => item.id !== action.payload.id)

            return {...state, food_list: updatedItem}
        } 
    })
})


export const {addToCart, removeFromCart} = foodSlice.actions
export const foodState = foodSlice.reducer