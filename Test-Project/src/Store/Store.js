// import {configureStore} from "@reduxjs/toolkit"
// import authReducer  from "../Reducer/authReducer"

// export const store = configureStore({
//     reducer:{
//         auth: authReducer
//     }
// })

import {applyMiddleware, combineReducers, createStore} from "redux"
import {thunk} from "redux-thunk"

import { authReducer } from "../Reducer/Auth/authReducer"
import { productReducer } from "../Reducer/Product/productReducer"



const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer
})

const enhancer = applyMiddleware(thunk)

export const myStore = createStore(rootReducer,enhancer)
