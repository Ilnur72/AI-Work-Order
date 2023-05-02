import { configureStore } from "@reduxjs/toolkit";
import orderValueSlice from "./orderValueSlice";
import dataValueSlice from "./dataSlice";

export const store = configureStore({
    reducer: {
        orderValue: orderValueSlice,
        dataValue: dataValueSlice
    }
})
