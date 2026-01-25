import * as authActions from "./../../Actions/AuthActions/AuthActionType"

const initialState = {
    isLoggedIn: false,
    isAuth: false,
    isLoading: false,
    isError: false,
    userData: []
}


export const authReducer = (state = initialState,action) => {
    switch(action.type){

        // Getting login request
        case authActions.GET_LOGIN_REQUEST :{
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        // Login success
        case authActions.GET_LOGIN_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                userData: [...state.userData, action.payload]
            }
        }

        // Login Failure
        case authActions.GET_LOGIN_FAILURE:
            return{
                isLoading: false,
                isError: true
            }

        default:
            return state

    }
}