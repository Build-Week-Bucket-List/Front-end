import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import PrimarySearchAppBar from '../Header'
import { getList, viewFriend } from '../../actions'
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
            console.log('c',state.friends)
            // if(state.friends.length === 0)
            // {
                dispatch(getList())
                setSearchString('')
            // }
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
                {state.friends.length > 0 ? state.friends
                    .map((friend, index) => <FriendDiv key={index} onClick={_ => dispatch(viewFriend(friend.requester, props.history))} >
                        {friend.requester}
                    </FriendDiv>) 
                    : null}
            </FriendFlex>
            <SwipeableTemporaryDrawer />
        </>
    )
}

export default FriendsPage