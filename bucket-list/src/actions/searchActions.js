import axiosWithAuth from '../utils'

export const RESET_BUCKET_SEARCH = "RESET_BUCKET_SEARCH"
export const RESET_FRIEND_SEARCH = "RESET_FRIEND_SEARCH"

export const SEARCH_BUCKET_LIST = "SEARCH_BUCKET_LIST"

export const SEARCH_FRIENDS_START = "SEARCH_FRIENDS_START"
export const SEARCH_FRIENDS_SUCCESS = "SEARCH_FRIENDS_SUCCESS"
export const SEARCH_FRIENDS_FAIL = "SEARCH_FRIENDS_FAIL"

export const resetBucketSearch = () => dispatch =>
{
    dispatch({ type: RESET_BUCKET_SEARCH })
}

export const searchBucketList = (searchString) => dispatch =>
{
    dispatch({ type: SEARCH_BUCKET_LIST, payload: searchString })
}