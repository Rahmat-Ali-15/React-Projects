// import { legacy_createStore} from "redux"


// import { Reducer } from "../Redux/Reducer"

// export const myStore = legacy_createStore(Reducer)

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";


import {Reducer as notificationReducer} from "../Redux/Reducer"

const root = combineReducers({
    notification: notificationReducer
})

export const myStore = legacy_createStore(root, applyMiddleware(thunk))