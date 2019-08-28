import { axiosWithAuth } from '../utils';

export const SEARCH_FRIEND_START = "SEARCH_FRIEND_START"
export const SEARCH_FRIEND_SUCCESS = "SEARCH_FRIEND_SUCCESS"
export const SEARCH_FRIEND_FAIL = "SEARCH_FRIEND_FAIL"
export const REQUEST_FRIEND_START = "REQUEST_FRIEND_START"
export const REQUEST_FRIEND_SUCCESS = "REQUEST_FRIEND_SUCCESS"
export const REQUEST_FRIEND_FAIL = "REQUEST_FRIEND_FAIL"
export const APPROVE_FRIEND_START = "APPROVE_FRIEND_START"
export const APPROVE_FRIEND_SUCCESS = "APPROVE_FRIEND_SUCCESS"
export const APPROVE_FRIEND_FAIL = "APPROVE_FRIEND_FAIL"


export const searchFriend = (username) => {
    return dispatch => {
        dispatch({ type: SEARCH_FRIEND_START });
        axiosWithAuth()
        .get('', username)
        .then(res => {
            console.log('response from searchFriend', res)
            dispatch({ type: SEARCH_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('There was an error in searchFriend axios call', err)
            dispatch({ type: SEARCH_FRIEND_FAIL, payload: err.response })
        })
    }
}

export const requestFriend = (username) => {
    return dispatch => {
        dispatch({ type: REQUEST_FRIEND_START });
        axiosWithAuth()
        .get('', username)
        .then(res => {
            console.log('response from requestFriend', res)
            dispatch({ type: REQUEST_FRIEND_SUCCESS, payload: res.data })
            })
        .catch(err => {
            console.log('There was an error in requestFriend', err)
            dispatch({ type: REQUEST_FRIEND_FAIL, payload: err.response })
        })
    }
}

export const approveFriend = (username) => {
    return dispatch => {
        dispatch({ type: APPROVE_FRIEND_START });
        axiosWithAuth()
        .put('', username)
        .then(res => {
            console.log('response from approveFriend', res)
            dispatch({ type: APPROVE_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('There was an error in approveFriend', err)
            dispatch({ type: APPROVE_FRIEND_FAIL, payload: err.response })
        })
    }
}
