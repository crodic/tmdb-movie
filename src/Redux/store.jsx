import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import carouselSlice from "./SliceReducer/carouselSlice";

export const store = configureStore({
    reducer: {
        //[Name_children_reducer]: [sliceReducer]
        carousel: carouselSlice,
    },
});
