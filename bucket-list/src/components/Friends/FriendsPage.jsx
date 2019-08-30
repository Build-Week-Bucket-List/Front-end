import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import PrimarySearchAppBar from '../Header'
import { getList, viewFriend, clearFriendSearchResults, deleteFriend } from '../../actions'
import { FriendDiv, FriendFlex, FriendRowDiv } from './FriendStyles'
import SwipeableTemporaryDrawer from './SearchDrawer'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

/* const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing(2),
    },
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
            color: red[800],
        },
    },
})); */


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
                dispatch(clearFriendSearchResults())
            // }
        }, []) //eslint-disable-line

    const handleDelete = reqid =>
    {
        dispatch(deleteFriend(reqid))
    }

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
                        .filter(friend => friend.friendusername !== state.username)
                        .map((friend, index) => <FriendRowDiv key={index}><FriendDiv  onClick={_ => dispatch(viewFriend(friend.friendusername, props.history))} >
                            {friend.friendusername}
                        </FriendDiv> <DeleteForeverIcon onClick={_ => handleDelete(friend.requestid)}/> </FriendRowDiv>) 
                        : null}
                    {state.friends.length > 0 ? state.friends
                        .filter(friend => friend.friendusername === state.username)
                        .map((friend, index) => <FriendRowDiv key={index}><FriendDiv onClick={_ => dispatch(viewFriend(friend.requester, props.history))} >
                            {friend.requester}
                        </FriendDiv> <DeleteForeverIcon onClick={_ => handleDelete(friend.requestid)} /> </FriendRowDiv>) 
                        : null}
            </FriendFlex>
            <SwipeableTemporaryDrawer />
        </>
    )
}

export default FriendsPage