import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filterMovie } from "../../api-services/filterMovie";

const filterSlice = createSlice({
    name: "filter",
    initialState: { type: "movie", genres: [[28]], data: {}, loading: false },
    reducers: {
        updateType: (state, action) => {
            state.type = action.payload
        },
        updateGenres: (state, action) => {
            state.genres = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilter.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchFilter.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(fetchFilter.rejected, (state) => {
                state.loading = false
            })
    }
})

export const fetchFilter = createAsyncThunk("/filter/fetchFilter", async ({ page: page, genres: genres, type: type }) => {
    try {
        let res = await filterMovie({ page, genres, type });
        if (res && res.status === 200) {
            return res.data
        }
    } catch (error) { }
})

export const { updateGenres, updateType } = filterSlice.actions

export default filterSlice.reducer