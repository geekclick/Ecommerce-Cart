import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTocart: (state, action) => {
            state.cart.push(action.payload);
        },
        updateCart: (state, action) => {
            const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
            state.cart = updatedCart
        }
    },
});

export const {
    addTocart,
    updateCart,
} = cartSlice.actions;

export default cartSlice.reducer;