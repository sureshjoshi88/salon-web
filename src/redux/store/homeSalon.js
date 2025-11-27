import { configureStore } from "@reduxjs/toolkit";
import homeSalonReducer from "../userSlice/homeSalon";

export const store = configureStore({
    reducer:{
        homeSalon:homeSalonReducer
    }
})