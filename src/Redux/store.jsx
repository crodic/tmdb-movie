import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "./SliceReducer/carouselSlice";
import searchSlice from "./SliceReducer/searchSlice";
import filterSlice from "./SliceReducer/filterSlice";

export const store = configureStore({
    reducer: {
        //[Name_children_reducer]: [sliceReducer]
        carousel: carouselSlice,
        search: searchSlice,
        filter: filterSlice,
    },
});
