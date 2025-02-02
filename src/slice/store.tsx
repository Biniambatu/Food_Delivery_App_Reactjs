import { configureStore } from "@reduxjs/toolkit";
import { foodState } from "./CartSlice";

export const store = configureStore({
    reducer:{
        foodReducer : foodState
    }
})