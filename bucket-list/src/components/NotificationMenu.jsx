import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { grey } from '@material-ui/core/colors';
import { ItemButton, MenuItem } from './Bucket/Bucket-Styles';
import { useSelector, useDispatch } from 'react-redux'
import { approveFriend } from '../actions'


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        top: 36,
        width: 130,
        right: 0,
        //left: 0,
    },
    fake: {
    backgroundColor: grey[200],
    height: theme.spacing(1),
    margin: theme.spacing(2),
    // Selects every two elements among any group of siblings.
    '&:nth-child(2n)': {
        marginRight: theme.spacing(3),
        },
    },
}));

export default function NotificationMenu(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const handleClick = () => {
        setOpen(prev => !prev);
    };

    const handleClickAway = (event) => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
            {/* <Button onClick={handleClick}><NotificationsIcon /></Button> */}
            <NotificationsIcon style={{position: 'relative', top: '10px'}} onClick={handleClick}/>
            {open ? (
                <Paper className={classes.paper}>
                    { state.curRequestedFriends.length === 0 ? null :
                        state.curRequestedFriends
                        .map((req, index) => <MenuItem key={index} onClick={_ => dispatch(approveFriend(req))}>
                            {req.requester}
                        </MenuItem>)
                    }
                </Paper>
            ) : null}
            </div>
        </ClickAwayListener>
        </div>
    );
}