import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import { requestFriend } from '../../actions'
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
    
    const state = useSelector(state => state)

    const classes = useStyles();

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

    /* const toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        dispatch(clearFriendSearchResults())
        // setState({ ...state, left: open });

    }; */

    const sideList = props => {
        return (
        <div
            className={classes.list}
            role="presentation"
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(false)}
            >
            <List>
                {state.friendSearchResults
                .filter(el => el !== state.username)
                .map((el, index) => (
                <div key={index}>
                    <ListItem button>
                        <ListItemText primary={el} />
                        <ListItemIcon><AddIcon onClick={_ => dispatch(requestFriend(el))}/></ListItemIcon>
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