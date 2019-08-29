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
export const TOGGLE_COMPLETE_START = "TOGGLE_COMPLETE_START"
export const TOGGLE_COMPLETE_SUCCESS = "TOGGLE_COMPLETE_SUCCESS"
export const TOGGLE_COMPLETE_FAIL = "TOGGLE_COMPLETE_FAIL"
export const DELETE_ITEM_START = "DELETE_ITEM_START"
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS"
export const DELETE_ITEM_FAIL = "DELETE_ITEM_FAIL"
export const ADD_JOURNAL_START = "ADD_JOURNAL_START"
export const ADD_JOURNAL_SUCCESS = "ADD_JOURNAL_SUCCESS"
export const ADD_JOURNAL_FAIL = "ADD_JOURNAL_FAIL"


export const getList = () => {
    return dispatch => {
        dispatch({ type: GET_LIST_START });
        axiosWithAuth()
        .get('https://hypedupharris-bucketlist.herokuapp.com/list/user')
        .then(res => {
            console.log('response from getList', res);
            console.log('fgl', res.data.friends.filter(friend => friend.accepted === true))
            dispatch({ type: GET_LIST_SUCCESS, payload: { 
                items: res.data.items, 
                friendRequests: res.data.requests,
                friends: res.data.friends.filter(friend => friend.accepted === true),
                username: res.data.username,
                journal: res.data.journal
            }})
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
    
    axiosWithAuth()
        .post('https://hypedupharris-bucketlist.herokuapp.com/list/item', item)
            .then(res =>
                {
                    console.log("res from addItem", res)
                    dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data })
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
    let sendItem = Object.keys(item).reduce((acc, prop) => {
        return prop === 'journal' ? acc : {...acc, [prop]:item[prop]}
    }, {})
    axiosWithAuth()
        .put(`https://hypedupharris-bucketlist.herokuapp.com/list/item/${item.itemid}`, sendItem)
            .then(res =>
                {
                    console.log("res from editItem", res)
                    dispatch({ type: EDIT_ITEM_SUCCESS, payload: res })
                })
            // .then(dispatch(getList()))
            .catch(err =>
                {
                    console.log("err from editItem", err)
                    dispatch({ type: EDIT_ITEM_FAIL, payload: err.response })
                })
}

export const toggleComplete = (item) => dispatch =>
{
    console.log('item',item)
    console.log('sent item from toggle complete',  { ...item, completed: !item.completed })
    dispatch({ type: TOGGLE_COMPLETE_START })
    let sendItem = Object.keys(item).reduce((acc, prop) => {
        return prop === 'journal' ? acc : {...acc, [prop]:item[prop]}
    }, {})
    axiosWithAuth()
        .put(`https://hypedupharris-bucketlist.herokuapp.com/list/item/${item.itemid}`, { ...sendItem, completed: !item.completed })
            .then(res =>
                {
                    console.log("res from toggleComplete", res)
                    dispatch({ type: TOGGLE_COMPLETE_SUCCESS, payload: {res: res, itemid: item.id} })
                })
            // .then(dispatch(getList()))
            .catch(err =>
                {
                    console.log("err from toggleComplete", err)
                    dispatch({ type: TOGGLE_COMPLETE_FAIL, payload: err.response })
                })
}

export const deleteItem = (item) => dispatch =>
{
    dispatch({type: DELETE_ITEM_START})
    axiosWithAuth()
    .delete(`https://hypedupharris-bucketlist.herokuapp.com/list/item/${item.itemid}`)
    .then(res => 
        {
            console.log('response from deleteItem', res)
            dispatch({ type: DELETE_ITEM_SUCCESS, payload: item })
        })
    //.then(dispatch(getList()))
    .catch(err => 
        {
            console.log('There was in error from deleteItem', err)
            dispatch({ type: DELETE_ITEM_FAIL, payload: err.response })
        })
}

export const addJournal = (itemid, journalEntry) => dispatch =>
{
    dispatch({ type: ADD_JOURNAL_START })
    axiosWithAuth()
        .post(`https://hypedupharris-bucketlist.herokuapp.com/list/journal/${itemid}`, journalEntry)
            .then(res =>
                {
                    console.log("res from addJournal", res)
                    dispatch({ type: ADD_JOURNAL_SUCCESS, payload: {itemid: itemid, journalEntry: journalEntry} })
                })
            .catch(err =>
                {
                    console.log("err from addJournal", err)
                    dispatch({ type: ADD_JOURNAL_FAIL, payload: err.response })
                })
}