import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./../../utils/status";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const storeInLocalStorage = (carts) => {
  localStorage.setItem("cart", JSON.stringify(carts));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find((i) => i.id === action.payload.id);
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let temTotalPrice = tempQty * item.price; // Düzeltildi
            return {
              ...item,
              quantity: tempQty,
              totalPrice: temTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal + cartItem.price * cartItem.quantity;
      }, 0);
      storeInLocalStorage(state.carts);
    },
    cleartCart: (state) => {
      state.carts = []; // Hata düzeltildi
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal + cartItem.price * cartItem.quantity;
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, cleartCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
