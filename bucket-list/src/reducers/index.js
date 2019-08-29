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
    CLEAR_FRIEND_SEARCH_RESULTS,
    EDIT_ITEM_START,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAIL,
    TOGGLE_COMPLETE_START,
    TOGGLE_COMPLETE_SUCCESS,
    TOGGLE_COMPLETE_FAIL,
    DELETE_ITEM_START,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL,
    VIEW_FRIEND_START,
    VIEW_FRIEND_SUCCESS,
    VIEW_FRIEND_FAIL,
    ADD_JOURNAL_START,
    ADD_JOURNAL_SUCCESS,
    ADD_JOURNAL_FAIL
} from '../actions'

const initialState = {
    bucketList: [],
    friends: [],
    isLoading: false,
    error: '',
    curRequestedFriends: [],
    friendSearchResults: [],
    username: '',
    friendBucket: [],
    journal: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
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
                bucketList: action.payload.items,
                curRequestedFriends: action.payload.friendRequests,
                friends: action.payload.friends,
                username: action.payload.username,
                journal: action.payload.journal
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
                friendSearchResults: action.payload
            }
        case SEARCH_FRIEND_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case CLEAR_FRIEND_SEARCH_RESULTS:
            return {
                ...state,
                friendSearchResults: []
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
                bucketList: [...state.bucketList, action.payload]
            }
        case ADD_ITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case EDIT_ITEM_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case EDIT_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                //TODO: Update bucketList based either on payload or in action
            }
        case EDIT_ITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case TOGGLE_COMPLETE_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case TOGGLE_COMPLETE_SUCCESS:
            return {
                ...state,
                bucketList: state.bucketList.map(item => {
                    if (item.id === action.payload.itemid) {
                        item.completed = !item.completed;
                        return item;
                    }
                    else {
                        return item;
                    }
                }),
                isLoading: false,
                error: ''
            }
        case TOGGLE_COMPLETE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_ITEM_START:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case DELETE_ITEM_SUCCESS:
            console.log('delete item success', action.payload)
            return {
                ...state,
                bucketList: state.bucketList.filter(item => item.itemid !== action.payload.itemid),
                isLoading: false,
                error: ''
            }
        case DELETE_ITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case VIEW_FRIEND_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case VIEW_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                friendBucket: action.payload
            }
        case VIEW_FRIEND_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_JOURNAL_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case ADD_JOURNAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                bucketList: state.bucketList.map(el => el.itemid === action.payload.itemid ?
                    { ...el, journal: [...state.journal, {entry: action.payload.journalEntry}] } : el)
            }
        case ADD_JOURNAL_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}