import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}

const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodo: (state, action) => {
            const todoData = {
                id: Date.now(),
                text: action.payload,
                isEdited: false,
                isCompleted: false
            }
            state.todo.push(todoData)
        }
    }
})

export const {addTodo} = todoReducer.actions

export default todoReducer.reducer