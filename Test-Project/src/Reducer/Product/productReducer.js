import * as productAction from "../../Actions/ProductAction/ProductActionType";

const initialState = {
  isLoading: false,
  isError: false,
  productData: [],
  totalCartItem: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Getting product data request
    case productAction.GET_PRODUCT_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    // Getting product data when the action is seccess
    case productAction.GET_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        productData: action.payload,
      };

    // Getting product data error
    case productAction.GET_PRODUCT_DATA_FAILURE:
      return {
        isLoading: false,
        isError: true,
      };

    // Add to Cart
    case productAction.ADD_TO_CART:
      return{
        ...state,
        totalCartItem: [...state.totalCartItem, action.payload]
      }

    // Delete item form cart
    case productAction.DELTE_CART_ITEM:
      return {
        ...state,
        totalCartItem: state.totalCartItem.filter(item => item.id !== action.payload)
      }

    default:
      return state;
  }
};
