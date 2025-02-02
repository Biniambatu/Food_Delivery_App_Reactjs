import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/assets";

const foodSlice = createSlice({
    name: "foodCart",
    initialState: {
        cartItems : [],
        total: 0
    },
    reducers: ({
        addToCart(state, action){
          const updatedItem = state.cartItems.concat(action.payload)
          return {...state, cartItems: updatedItem}
        },
        removeFromCart(state, action){

        } 
    })
})


export const {addToCart, removeFromCart} = foodSlice.actions
export const foodState = foodSlice.reducer