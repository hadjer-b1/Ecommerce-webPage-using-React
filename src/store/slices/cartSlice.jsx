 import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.total += item.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);

      if (existing) {
        state.total -= existing.price * existing.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);

      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
        state.total -= existing.price;
      } else if (existing) {
        state.total -= existing.price;
        state.items = state.items.filter(i => i.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
