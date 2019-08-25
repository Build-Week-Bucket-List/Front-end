import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
} from '../actions'

const initialState = {
    error: "",

}

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        default:
            return state
    }
}