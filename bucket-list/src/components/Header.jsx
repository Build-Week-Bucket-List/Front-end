import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { searchFriend } from '../actions'
import { logoutUser } from '../actions/onboardingActions';

import AddItemModal from './Bucket/AddItemModal'
import HeaderTabs from './HeaderTabs'
import NotificationMenu from './NotificationMenu'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: '#000000'
    },
    title: {
        fontFamily: "Cinzel, serif",
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const style = {
    fontFamily: "'Cinzel', serif"
}

export default function PrimarySearchAppBar(props) {
    
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const {searchPlaceholder, isEnterReq, searchString, setSearchString} = props

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const handleChange = event =>
    {
        setSearchString(event.target.value)
    }

    const checkEnter = event => 
    {
        if(event.keyCode === 13 && isEnterReq)
        {
            dispatch(searchFriend(searchString.toLowerCase()))
            setSearchString('')
        }
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={_ => props.history.push('/home')}>Profile</MenuItem>
            <MenuItem onClick={_ => dispatch(logoutUser(props.history))}>Logout</MenuItem>
        </Menu>
        );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >           
            {/* <Badge badgeContent={state.curRequestedFriends.length} color="secondary" >
                <NotificationMenu />
            </Badge>             */}
            <MenuItem onClick={ () => {return null}} style={{overflow: 'auto'}}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <NotificationMenu />
                </IconButton>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem onClick={_ => props.history.push('/friends')}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <PeopleIcon />
                </IconButton>
                <p>Friends</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.bar}>
            <Toolbar>
                <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                >
                </IconButton>
                <Typography className={classes.title} style={style} variant="h6" noWrap >
                    <Link to='/home' style={{textDecoration: 'none', color: 'inherit'}}>
                        Bucket List
                    </Link>
                </Typography>
                <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder={`${searchPlaceholder}`}
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchString}
                    onChange={handleChange}
                    onKeyDown={checkEnter}
                    name='search'
                />
                </div>
                {!props.isEnterReq && <AddItemModal />}
                {!props.isEnterReq && <HeaderTabs history={props.history} />}
                
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                <IconButton aria-label="show friends" color="inherit" onClick={_ => props.history.push('/friends')}>
                    <Badge badgeContent={null} color="secondary">
                        <PeopleIcon />
                    </Badge>
                </IconButton>
                {/* <IconButton aria-label="show new notifications" color="inherit"> */}
                    <Badge badgeContent={state.curRequestedFriends.length} color="secondary">
                        <NotificationMenu />
                    </Badge>
                {/* </IconButton> */}
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
                </div>
            </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}