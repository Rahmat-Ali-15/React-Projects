import * as types from "../Redux/ActionType"


// const initialState = {
//     isAuth: false,
//     isError: false
// }

// export const Reducer = ( state = initialState,{type, payload}) => {
//     console.log("🚀 ~ payload:", payload);
//     switch(type){
//         case types.NOTIFICATION_SUCCESS:
//             return {
//                 ...state,
//                 isAuth: true,
//             }

//         case types.NOTIFICATION_ERROR:
//             return{
//                 isError: true,
//                 isAuth: false,
//             }
        
//         default:
//             return state
//     }
// }

const initialValue = []

export const Reducer = (state = initialValue, {type, payload}) => {
    switch(type){
        case types.ADD_NOTIFICATION:
            return [...state, payload]

        case types.REMOVE_NOTIFICATION:
            return state.filter((el) => el.id !== payload);
        
        default:
            return state
    }
}