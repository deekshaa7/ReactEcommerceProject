import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "myCart",
  initialState: {
    cart:[]
  },
  reducers: {
    addtoCart: (state, action)=> {
      let checkCount = true;
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload.id) {
          checkCount = false;
          
        }
      }
      if (checkCount) {
        state.cart.push(action.payload);
      } else {
        alert("Product already exists");
      }
    }
  }
});

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
