import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state,action) => {
        state.isLoggedIn = true,
        state.user = action.payload
    },
    logout: (state) => {
        state.isLoggedIn = false
    }
  },
});


export const {login, logout} = authReducer.actions;

export default authReducer.reducer;