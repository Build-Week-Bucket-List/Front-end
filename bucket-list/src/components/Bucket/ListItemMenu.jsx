import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MenuItem } from './Bucket-Styles';
import EditItemModal from './EditItemModal';
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteItem } from '../../actions'
import AddImageModal from './AddImageModal';


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

export default function ClickAway({item}) {
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [imageOpen, setImageOpen] = React.useState(false);
  const classes = useStyles();

  const dispatch = useDispatch()

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = (event) => {
    if(!(imageOpen || editOpen)) setOpen(false);
  };
  
  const handleDelete = () => {
    dispatch(deleteItem(item))
    setOpen(false)
  }

  const handleToggleComplete = _ =>
  {
    dispatch(toggleComplete(item))
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button onClick={handleClick}><MoreVertIcon /></Button>
          {/* <MoreVertIcon onClick={handleClick}/> */}
          {open ? (
            <Paper className={classes.paper}>
                <MenuItem onClick={handleToggleComplete}>Mark {!item.completed ? `Completed` : `Incomplete`}</MenuItem>                           
                <MenuItem><EditItemModal item={item} setEditOpen={setEditOpen} editOpen={editOpen} /></MenuItem>                
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                <MenuItem><AddImageModal item={item} setImageOpen={setImageOpen} imageOpen={imageOpen} /></MenuItem>                
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}