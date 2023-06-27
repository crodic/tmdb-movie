import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    auth: localStorage.getItem("auth") ?
        localStorage.getItem("auth") : sessionStorage.getItem("auth") ? sessionStorage.getItem("auth") : false,

    user: JSON.parse(localStorage.getItem("user")) ?
        JSON.parse(localStorage.getItem("user")) : JSON.parse(sessionStorage.getItem("user")) ?
            JSON.parse(sessionStorage.getItem("user")) : { userName: "", avatar: "", email: "", service: "" },

    token: localStorage.getItem("token") ? localStorage.getItem("token") : sessionStorage.getItem("token") ?
        sessionStorage.getItem("token") : "",
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateAuth: (state, action) => {
            state.auth = action.payload
        },
        updateUser: (state, action) => {
            state.user = action.payload
        },
        updateToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { updateAuth, updateToken, updateUser } = authSlice.actions;
export default authSlice.reducer