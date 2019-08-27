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
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    RESET_BUCKET_SEARCH,
    SEARCH_BUCKET_LIST,
    SEARCH_FRIENDS_START,
    SEARCH_FRIENDS_SUCCESS,
    SEARCH_FRIENDS_FAIL,
} from '../actions'

const initialState = {
    bucketList: [
        {
            id: 0,
            isCompleted: false,
            title: "Finish this App",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            description:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 1,
            isCompleted: false,
            title: "Have a Nap",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            description:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 2,
            isCompleted: false,
            title: "Meet at 11",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            description:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 3,
            isCompleted: false,
            title: "Be done in a snap",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            description:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 4,
            isCompleted: false,
            title: "Testing some more text",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            description:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 5,
            isCompleted: false,
            title: "And now this",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            description:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
    ],
    friends: [],
    isLoading: false,
    error: '',
    curRequestedFriends: [],
    friendSearchResults: [],
    username: 'Qwerty4',
    searchBucketString: ''
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
        case ADD_ITEM_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                //TODO: Update bucketList based either on payload or in action
            }
        case ADD_ITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case RESET_BUCKET_SEARCH:
            return {
                ...state,
                searchBucketString: ''
            }
        case SEARCH_BUCKET_LIST:
            return {
                ...state,
                searchBucketString: action.payload
            }
        default:
            return state
    }
}