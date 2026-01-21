import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../Reducer/counterSlice"
import { useState } from "react"

export const Counter = () => {
    const [amount, setAmount] = useState("")
    const count = useSelector(state => state.counter.value)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrementByValue = () => {
        dispatch(incrementByValue(amount))
    }


    return (
        <>
            <h1>Coun : {count}</h1>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
            <br />
            <input type="text" placeholder="Increment by value" defaultValue={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleIncrementByValue}>Increment By Value</button>
        </>
    )
}