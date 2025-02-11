import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/assets";

const foodSlice = createSlice({
    name: "foodCart",
    initialState: {
        cartList : [],
        food_list,
        total: 0
    },
    reducers: ({
        addToCart(state, action){
          const updatedItem = state.cartList.concat(action.payload)
          const updatedTotal = state.total + action.payload.price
          return {...state, cartList: updatedItem, total: updatedTotal}
          
        },
        removeFromCart(state, action){
            const updatedItem = state.cartList.filter(item => item._id !== action.payload._id)
            const updatedTotal = state.total - action.payload.price
            return {...state, cartList: updatedItem, total: updatedTotal}
        } 
    })
})


export const {addToCart, removeFromCart} = foodSlice.actions
export const foodState = foodSlice.reducer