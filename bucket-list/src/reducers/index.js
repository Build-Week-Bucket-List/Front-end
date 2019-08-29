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
    VIEW_FRIEND_START,
    VIEW_FRIEND_SUCCESS,
    VIEW_FRIEND_FAIL,
} from '../actions'

const initialState = {
    bucketList: [
        {
            id: 0,
            completed: false,
            itemtitle: "Finish this App",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            itemdesc:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 1,
            completed: false,
            itemtitle: "Have a Nap",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            itemdesc:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 2,
            completed: false,
            itemtitle: "Meet at 11",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            itemdesc:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 3,
            completed: false,
            itemtitle: "Be done in a snap",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            itemdesc:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 4,
            completed: false,
            itemtitle: "Testing some more text",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            itemdesc:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
        {
            id: 5,
            completed: false,
            itemtitle: "And now this",
            dateCreated: Date.now(),
            image: "https://i.imgur.com/pBmNhc1.jpg",
            itemdesc:"We will finish this app before Thursday",
            journal: '',
            comments: '',
        },
    ],
    friends: [{id: 0, name: "Bob"}, {id: 1, name: "Bobby"}, {id: 2, name: "Robert"}, {id: 3, name: "Roberta"}, {id: 4, name: "Bobbert"}],
    isLoading: false,
    error: '',
    curRequestedFriends: [],
    friendSearchResults: [],
    username: 'Qwerty4',
    friendBucket: []
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
                bucketList: action.payload.items,
                curRequestedFriends: action.payload.friendRequests,
                friends: action.payload.friends
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

        default:
            return state
    }
}