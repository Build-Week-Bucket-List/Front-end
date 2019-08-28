import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import MailIcon from '@material-ui/icons/Mail';
import { clearFriendSearchResults, requestFriend } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer(props) {
    
    const friendSearchResults = useSelector(state => state.friendSearchResults)
    


    const classes = useStyles();
    const [drawerState, setDrawerState] = React.useState({
        left: false,
    });

    // useEffect(_ =>
    //     {
    //         if (friendSearchResults.length > 0)
    //         {
    //             console.log('a')
    //             setDrawerState({ ...drawerState, left: true });
    //         }
    //         else
    //         {
    //             setDrawerState({ ...drawerState, left: false });
    //         }
    //     }, friendSearchResults)

    const dispatch = useDispatch()

    const toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        dispatch(clearFriendSearchResults())
        // setState({ ...state, left: open });

    };

    const sideList = props => {
        console.log('friend search results', friendSearchResults)
        return (
        <div
            className={classes.list}
            role="presentation"
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(false)}
            >
            <List>
                {friendSearchResults.map((el, index) => (
                <div key={index}>
                    <ListItem button>
                        <ListItemText primary={el} />
                        <ListItemIcon><AddIcon /></ListItemIcon>
                    </ListItem>
                    <Divider />
                </div>
                ))}
            </List>
        </div>
    )};

    return (
        <div>
            {/* <SwipeableDrawer
                open={drawerState.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            > */}
                {sideList('left')}
            {/* </SwipeableDrawer> */}
        </div>
    );
}