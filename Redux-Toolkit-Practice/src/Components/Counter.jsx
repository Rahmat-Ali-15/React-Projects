import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../Reducer/countReducer"
import { useRef } from "react"

export const Counter = () => {
    const count = useSelector(state => state.count.count)
    const dispatch = useDispatch()

    const val = useRef()

    
    const handleIncrement = () => {
        dispatch(increment())
    }
    
    const handleDecrement = () => {
        dispatch(decrement())
    }
    
    const handleIncrementByValue = () => {
        const data = val.current.value
        dispatch(incrementByValue(data))
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <div>
                <button onClick={handleDecrement}>Decrease Count</button>
                <button onClick={handleIncrement}>Increase Count</button>
                <input type="text" ref={val} />
                <button onClick={handleIncrementByValue}>Increment By Value</button>
            </div>
        </>
    )
}