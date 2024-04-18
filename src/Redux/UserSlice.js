import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
            state.error = false;
        },
        loginFailed: (state) => {
            state.error = true;
        },
        logout: (state) => {
            state.user = null;
            state.isFetching = false;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    logout,
} = userSlice.actions;
export default userSlice.reducer;
