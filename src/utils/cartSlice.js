import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItemCount: 0,
    amount:0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      itemInCart
        ? itemInCart.quantity++
        : state.items.push({ ...action.payload, quantity: 1 });
      state.totalItemCount++;
    },
    decreamentItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInCart) return;
      if (itemInCart.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      } else {
        itemInCart.quantity--;
      }
      state.totalItemCount--;
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemToRemove.id);
      state.totalItemCount--;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItemCount = 0;
    },
    updateAmount: (state, action) => {
      state.amount=action.payload;
    },
  },
});

export const { addItem, decreamentItem, removeItem, clearCart,updateAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
