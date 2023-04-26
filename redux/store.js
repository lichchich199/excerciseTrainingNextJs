import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../components/order/slice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
    }
})