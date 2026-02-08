import { useDispatch } from "react-redux"
import { addTodo } from "../Reducer/todoReducer"
import { useRef } from "react"
import { TodoList } from "./TodoList"

export const Todo = () => {
    const dispatch = useDispatch()

    const inputRef = useRef()

    const handleAddTask = () => {
        let inputRefVal = inputRef.current.value.trim();

        if(!inputRefVal){
            alert("Please write task before adding!")
            return
        }

        dispatch(addTodo(inputRefVal))

        inputRef.current.value = ""
    }


    return (
        <>
            <h1>Todo</h1>
            <div>
                <input type="text" placeholder="Enter the task name" ref={inputRef} />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <TodoList />
        </>
    )
}