import * as AuthAction from "../AuthActions/AuthActionType"

export const getLoginRequest = () => {
    return {
        type: AuthAction.GET_LOGIN_REQUEST
    }
}

export const getLoginSuccess = (payload) => {
    return {
        type: AuthAction.GET_LOGIN_SUCCESS,
        payload: payload
    }
}

export const getLoginFailure = () => {
    return {
        type: AuthAction.GET_SIGNUP_FAILURE
    }
}