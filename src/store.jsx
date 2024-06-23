import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
const store=configureStore({
    reducer:{
        myCart:cartReducer
    }
})
export default store;