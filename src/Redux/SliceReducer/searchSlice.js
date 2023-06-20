import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: { value: "" },
    reducers: {
        updateValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateValue } = searchSlice.actions

export default searchSlice.reducer