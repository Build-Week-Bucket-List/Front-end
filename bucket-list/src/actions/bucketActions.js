import { axiosWithAuth } from '../utils';

export const GET_LIST_START = "GET_LIST_START"
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS"
export const GET_LIST_FAIL = "GET_LIST_FAIL"
export const GET_ITEM_START = "GET_ITEM_START"
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS"
export const GET_ITEM_FAIL = "GET_ITEM_FAIL"
export const ADD_ITEM_START = "ADD_ITEM_START"
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS"
export const ADD_ITEM_FAIL = "ADD_ITEM_FAIL"
export const EDIT_ITEM_START = "EDIT_ITEM_START"
export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS"
export const EDIT_ITEM_FAIL = "EDIT_ITEM_FAIL"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"


export const getList = () => {
    return dispatch => {
        dispatch({ type: GET_LIST_START });
        axiosWithAuth()
        .get('https://hypedupharris-bucketlist.herokuapp.com/list/user')
        .then(res => {
            console.log('response from getList', res);
            dispatch({ type: GET_LIST_SUCCESS, payload: res.data.items })
        })
        .catch(err => {
            console.log('There was an error in getList axios call', err.response);
            dispatch({ type: GET_LIST_FAIL, payload: err.response })
        })
    }
}

export const addItem = (item) => dispatch =>
{
    dispatch({ type: ADD_ITEM_START })
    console.log('item from addItem', item)
    axiosWithAuth()
        .post('https://hypedupharris-bucketlist.herokuapp.com/list/item', item)
            .then(res =>
                {
                    console.log("res from addItem", res)
                    dispatch({ type: ADD_ITEM_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from addItem", err)
                    dispatch({ type: ADD_ITEM_FAIL, payload: err.response })
                })
}
export const editItem = (item) => dispatch =>
{
    dispatch({ type: EDIT_ITEM_START })
    console.log('item from editItem', item)
    axiosWithAuth()
        .put('https://hypedupharris-bucketlist.herokuapp.com/list/item', item)
            .then(res =>
                {
                    console.log("res from editItem", res)
                    dispatch({ type: EDIT_ITEM_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from editItem", err)
                    dispatch({ type: EDIT_ITEM_FAIL, payload: err.response })
                })
}

export const toggleComplete = () => {
    return dispatch => {
        dispatch({ type: TOGGLE_COMPLETE });        
    }
}
