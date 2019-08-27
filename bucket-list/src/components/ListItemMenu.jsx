import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ItemButton, MenuItem } from './Bucket/Bucket-Styles';
import EditItemModal from './EditItemModal';


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

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = (event) => {
    if(!editOpen) setOpen(false);
  };

  const fake = <div className={classes.fake} />;

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button onClick={handleClick}><MoreVertIcon /></Button>
          {/* <MoreVertIcon onClick={handleClick}/> */}
          {open ? (
            <Paper className={classes.paper}>
                <MenuItem>Mark Complete</MenuItem>                           
                <MenuItem><EditItemModal setEditOpen={setEditOpen} editOpen={editOpen} /></MenuItem>                
                <MenuItem>Delete</MenuItem>                
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}