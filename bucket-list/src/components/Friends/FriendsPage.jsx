import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import PrimarySearchAppBar from '../Header'
import { getList } from '../../actions'
import { FriendDiv } from './FriendStyles'


const FriendsPage = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [searchString, setSearchString] = useState('')
    // user hits enter to run the search
    const isEnterReq = true

    useEffect(_ =>
        {
            if(state.friends.length === 0)
            {
                dispatch(getList())
            }
        }, [])

    return (
        <>
            <PrimarySearchAppBar 
                isEnterReq={isEnterReq}
                searchPlaceholder={'Search List...'}   
                history={props.history}
                searchString={searchString} 
                setSearchString={setSearchString}
            />
            {state.friends.length > 0 ? state.friends.map(friend => <FriendDiv key={friend.id}>{friend.name}</FriendDiv>) : null}
        </>
    )
}

export default FriendsPage