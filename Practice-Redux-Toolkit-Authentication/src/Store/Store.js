import {configureStore} from "@reduxjs/toolkit"
import authReducer  from "../Reducer/authReducer"

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})