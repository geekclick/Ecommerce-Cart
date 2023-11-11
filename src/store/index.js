import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "./reducers/cartSlice";

const reducers = combineReducers({
    cart,
});

const store = configureStore({
    reducer: reducers,
});

export default store;