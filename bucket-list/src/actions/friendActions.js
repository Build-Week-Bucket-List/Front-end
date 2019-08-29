import { axiosWithAuth, axiosWithAuthFriend } from '../utils';

export const SEARCH_FRIEND_START = "SEARCH_FRIEND_START"
export const SEARCH_FRIEND_SUCCESS = "SEARCH_FRIEND_SUCCESS"
export const SEARCH_FRIEND_FAIL = "SEARCH_FRIEND_FAIL"
export const REQUEST_FRIEND_START = "REQUEST_FRIEND_START"
export const REQUEST_FRIEND_SUCCESS = "REQUEST_FRIEND_SUCCESS"
export const REQUEST_FRIEND_FAIL = "REQUEST_FRIEND_FAIL"
export const APPROVE_FRIEND_START = "APPROVE_FRIEND_START"
export const APPROVE_FRIEND_SUCCESS = "APPROVE_FRIEND_SUCCESS"
export const APPROVE_FRIEND_FAIL = "APPROVE_FRIEND_FAIL"
export const CLEAR_FRIEND_SEARCH_RESULTS = "CLEAR_FRIEND_SEARCH_RESULTS"
export const VIEW_FRIEND_START = "VIEW_FRIEND_START"
export const VIEW_FRIEND_SUCCESS = "VIEW_FRIEND_SUCCESS"
export const VIEW_FRIEND_FAIL = "VIEW_FRIEND_FAIL"


export const searchFriend = (searchString) => {
    return dispatch => {
        dispatch({ type: SEARCH_FRIEND_START });
        axiosWithAuth()
        .get(`https://hypedupharris-bucketlist.herokuapp.com/users/search/${searchString}`)
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
        console.log('username from requestUser',username)
        axiosWithAuthFriend()
        .post(`https://hypedupharris-bucketlist.herokuapp.com/users/add`, username)
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

export const approveFriend = (requestid) => {
    return dispatch => {
        console.log('request id from approveFriend', requestid)
        dispatch({ type: APPROVE_FRIEND_START });
        axiosWithAuth()
        .put(`https://hypedupharris-bucketlist.herokuapp.com/users/add/${requestid}`, true)
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

export const clearFriendSearchResults = _ => dispatch =>
{
    dispatch({ type: CLEAR_FRIEND_SEARCH_RESULTS })
}

export const viewFriend = (username, history) => dispatch =>
{
    dispatch({ type: VIEW_FRIEND_START })
    axiosWithAuth()
    .get(`https://hypedupharris-bucketlist.herokuapp.com/list/username/${username}`)
        .then(res =>
            {
                console.log('res from viewFriend', res)
                dispatch({ type: VIEW_FRIEND_SUCCESS, payload: res.data })
                history.push(`/friend/${username}`)
            })
        .catch(err =>
            {
                console.log('err from viewFriend', err)
                dispatch({ type: VIEW_FRIEND_FAIL, payload: err })
            })
}