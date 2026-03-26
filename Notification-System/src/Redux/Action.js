import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './ActionType';

// export const notificationSuccess = (payload) => {
//     return {
//         type: types.NOTIFICATION_SUCCESS,
//         payload: payload
//     }
// }

// export const notificationError = () => {
//     return {
//         type: types.NOTIFICATION_ERROR
//     }
// }

// export const notificationWarning = () => {
//     return {
//         type: types.NOTIFICATION_WARNING,
//     }
// }


let id = 0;

export const addNotify = (msg, type) => (dispatch) => {
    let newId = ++id;

    dispatch({
        type: ADD_NOTIFICATION,
        payload: {id: newId, msg, type}
    })

    // Auto-remove after 3-5 seconds

    setTimeout(() => {
        dispatch({type: REMOVE_NOTIFICATION, payload: newId})
    }, 3000);
}


export const removeNotify = (id) => (dispatch) => {
    dispatch({type: REMOVE_NOTIFICATION, payload: id})
}