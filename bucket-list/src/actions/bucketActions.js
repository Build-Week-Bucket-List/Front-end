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

export const getList = () => {
    return dispatch => {
        dispatch({ type: GET_LIST_START });
        axiosWithAuth()
        .get('')
        .then(res => {
            console.log('response from getBucket',res);
            dispatch({ type: GET_LIST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('There was an error in getBucket axios call', err);
            dispatch({ type: GET_LIST_FAIL, payload: err.response })
        })
    }
}

export const addItem = (item) => dispatch =>
{
    dispatch({ type: {ADD_ITEM_START} })
    axiosWithAuth()
        .put('')
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