import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart: function (state, action) {
      const newItem = action.payload;

      const productIndex = state.products.findIndex(
        (p) => p.title === newItem.title
      );

      // If already exists
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        product.total += newItem.price;
        product.quantity += 1;

        state.total += newItem.price;
        state.products[productIndex] = product;
      } else {
        state.quantity += 1;
        state.total += newItem.price;

        newItem.quantity = 1;
        state.products.push(newItem);
      }
    },
    removeFromCart: function (state) {},
    increaseProductQty: function (state, action) {
      const title = action.payload;

      const productIndex = state.products.findIndex((p) => p.title === title);

      const product = state.products[productIndex];
      product.quantity++;
      product.total += product.price;
      state.products[productIndex] = product;
    },
    decreaseProductQty: function (state, action) {
      const title = action.payload;

      const productIndex = state.products.findIndex((p) => p.title === title);

      const product = state.products[productIndex];

      product.quantity--;
      product.total -= product.price;

      if (product.quantity <= 0) {
        state.products.splice(productIndex, 1);
        state.quantity--;
      } else {
        state.products[productIndex] = product;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export { cartSlice };
