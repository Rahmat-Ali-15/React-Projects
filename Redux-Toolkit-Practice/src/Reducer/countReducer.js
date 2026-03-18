import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const countReducer = createSlice({
    name : "count",
    initialState,
    reducers : {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        incrementByValue: (state, action) => {
            state.count += Number(action.payload)
        }
    }
})

export const { increment, decrement, incrementByValue } = countReducer.actions;

export default countReducer.reducer