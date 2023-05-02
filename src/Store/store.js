import { configureStore } from "@reduxjs/toolkit";
import orderValueSlice from "./orderValueSlice";

export const store = configureStore({
    reducer: {
        orderValue: orderValueSlice
    }
})
