import { cartSlice } from "./cart";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

export default store;