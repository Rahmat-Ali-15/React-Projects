import * as ProdutAction from "../ProductAction/ProductActionType"

export const getProductDataRequest = () => {
    return{
        type: ProdutAction.GET_PRODUCT_DATA_REQUEST
    }
}

export const getProductDataSuccess = (payload) => {
    return {
        type: ProdutAction.GET_PRODUCT_DATA_SUCCESS,
        payload: payload
    }
}

export const getProductDataFailure = () => {
    return {
        type: ProdutAction.GET_PRODUCT_DATA_FAILURE
    }
}