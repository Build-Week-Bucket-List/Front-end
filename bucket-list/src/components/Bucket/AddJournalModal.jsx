import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import { Button, TextField } from "@material-ui/core";
import { addJournal } from "../../actions";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  form: {
    display: "flex",
    flexDirection: "column"
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function AddImageModal(props) {
	const [journal, setJournal] = useState("");
  const [journalOpen, setJournalOpen] = useState(false);
  const classes = useStyles();
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setJournalOpen(true);
  };

  const handleClose = () => {
    setJournalOpen(false);
	};
	

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addJournal(props.item.itemid, journal))
		handleClose();
		setJournal("");
	}
  return (
    <div>
      <IconButton onClick={handleOpen} aria-label="add journal">
        <CommentIcon />
      </IconButton>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={journalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={journalOpen}>
          <div className={classes.paper}>
            <form onSubmit={e => handleSubmit(e)}>
              <TextField
                name="journal"
                label="Journal Entry"
                multiline
								rows="4"
								value={journal}
								fullWidth
								onChange={e => setJournal(e.target.value)}
              />
							<Button type="submit" variant="contained" color="primary" fullWidth>
								Add Entry
							</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
