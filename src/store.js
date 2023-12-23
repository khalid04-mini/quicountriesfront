import homeReducer from "./UI/Home/HomeSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        home: homeReducer
    }
})

export default store;