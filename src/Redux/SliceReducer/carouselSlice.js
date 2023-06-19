import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieTrending } from "../../api-services/trendingServices";


const carouselSlice = createSlice({
    name: "carousel",
    initialState: { isLoading: false, data: {} },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTrending.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTrending.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchTrending.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

export const fetchTrending = createAsyncThunk("/movie/fetchTrending", async () => {
    let res = await getMovieTrending();
    if (res && res.status === 200) {
        let customizeData = { data: res.data, status: res.status };
        return customizeData;
    }
    return {};
})


export default carouselSlice.reducer;