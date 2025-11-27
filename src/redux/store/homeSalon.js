import { configureStore } from "@reduxjs/toolkit";
import homeSalonReducer from "../userSlice/homeSalon";
import supperadmin from '../userSlice/SuperAdmin'

export const store = configureStore({
    reducer:{
        homeSalon:homeSalonReducer,
        salons:supperadmin
    }
})