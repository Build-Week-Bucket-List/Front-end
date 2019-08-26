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
    SEARCH_FRIEND_START,
    SEARCH_FRIEND_SUCCESS,
    SEARCH_FRIEND_FAIL, 
    REQUEST_FRIEND_START,
    REQUEST_FRIEND_SUCCESS,
    REQUEST_FRIEND_FAIL,
    APPROVE_FRIEND_START,
    APPROVE_FRIEND_SUCCESS,
    APPROVE_FRIEND_FAIL,

} from '../actions'

const initialState = {
    bucketList: [
        {
            isCompleted: false,
            title: "Finish this App",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            description:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        }],
    friends: [],
    isLoading: false,
    error: '',
    curRequestedFriends: [],
    friendSearchResults: [],
    username: 'Qwerty4'
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
        case SEARCH_FRIEND_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case SEARCH_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                friendSearchResults: [action.payload]
            }
        case SEARCH_FRIEND_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case REQUEST_FRIEND_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REQUEST_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                curRequestedFriends: [...state.curRequestedFriends, action.payload]
            }
        case REQUEST_FRIEND_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case APPROVE_FRIEND_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case APPROVE_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                friends: [...state.friends, action.payload]
            }
        case APPROVE_FRIEND_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}