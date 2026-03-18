import { configureStore } from "@reduxjs/toolkit"

import countReducer from "../Reducer/countReducer"
import  todoReducer  from "../Reducer/todoReducer"

export const myStore = configureStore({
    reducer: {
        count: countReducer,
        todos: todoReducer
    }
})