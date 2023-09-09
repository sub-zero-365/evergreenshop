import { configureStore } from "@reduxjs/toolkit";
import Slider from "../actions/Slider";
import cartItems from "../actions/cartItems";

const store = configureStore({
    reducer: {
        cartSlider: Slider,
        cartItems,
    },
});

export default store;