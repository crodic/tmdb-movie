import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const childrenSlice = createSlice({
    name: '[name_children_reducer]',
    initialState: {
        //SomeThing state
        //count: 0,
    },
    reducers: {
        //function reducer (name action)
        //count: (state, action) => state.count = action.payload
    },
    extraReducers: builder => {
        builder.addCase(/*<functionThunk>.pending || .fulfill || .rejected , (state, action) => {//do something}*/)
    }
})

export const functionThunk = createAsyncThunk("/name", async () => {
    //call api;
})

export default childrenSlice.reducer;
// export {// action in reducers} = childrenSlice.actions