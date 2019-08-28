import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import PrimarySearchAppBar from '../Header'
import { getList } from '../../actions'
import { FriendDiv, FriendFlex } from './FriendStyles'
import SwipeableTemporaryDrawer from './SearchDrawer'

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
                searchPlaceholder={'Search Friends...'}   
                history={props.history}
                searchString={searchString} 
                setSearchString={setSearchString}
            />
            <FriendFlex>
                {state.friends.length > 0 ? state.friends.map(friend => <FriendDiv key={friend.id}>{friend.name}</FriendDiv>) : null}
            </FriendFlex>
            <SwipeableTemporaryDrawer />
        </>
    )
}

export default FriendsPage