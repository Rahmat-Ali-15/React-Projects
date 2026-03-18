import * as LoginActionType from "../auth/ActionType"

const API = import.meta.env.API;

export const getLoginRequest = () => {
    return {
        type: LoginActionType.GET_LOGIN_REQUEST
    }
}

export const getLoginSuccess = (payload) => {
    return {
        type: LoginActionType.GET_LOGIN_SUCCESS,
        payload: payload
    }
}

export const getLoginFailure = () => {
    return {
        type: LoginActionType.GET_LOGIN_FAILURE
    }
}