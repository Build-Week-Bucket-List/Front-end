import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    GET_LIST_START,
    GET_LIST_SUCCESS,
    GET_LIST_FAIL,
} from '../actions'

const initialState = {
    bucketList: [],
    friends: [],
    isLoading: false,
    error: '',

}

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case REGISTER_USER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case REGISTER_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGIN_USER_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_LIST_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                bucketList: action.payload
            }
        case GET_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}