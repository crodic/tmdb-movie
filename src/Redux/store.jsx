import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "./SliceReducer/carouselSlice";
import filterSlice from "./SliceReducer/filterSlice";
import authSlice from "./SliceReducer/authSlice";

export const store = configureStore({
    reducer: {
        //[Name_children_reducer]: [sliceReducer]
        carousel: carouselSlice,
        filter: filterSlice,
        auth: authSlice,
    },
});
