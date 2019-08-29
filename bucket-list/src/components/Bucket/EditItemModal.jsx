import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring";
import { Button, TextField } from "@material-ui/core";
import { editItem } from "../../actions";

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

export default function EditItemModal({item, ...props}) {
  const [values, setValues] = useState({title: item.itemtitle, desc: item.itemdesc})
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpen = () => {
    props.setEditOpen(true);
  };

  const handleClose = () => {
    props.setEditOpen(false);
  };

  const handleSubmit = e => {
		e.preventDefault()
		dispatch(editItem({...item, itemtitle: values.title, itemdesc: values.desc}))
		handleClose();
	}

  return (
    <div>
      <div onClick={handleOpen}>Edit Item</div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.editOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.editOpen}>
          <div className={classes.paper}>
          <form onSubmit={handleSubmit} >
              <TextField
                name="title"
                label="Title"
                onChange={e => setValues({...values, title: e.target.value})}
                value={values.title}
                fullWidth
              />
              <TextField
                name="description"
                label="Description"
                multiline
								rows="4"
								value={values.desc}
								fullWidth
								onChange={e => setValues({...values, desc: e.target.value})}
              />
							<Button type="submit" variant="contained" color="primary" fullWidth>
								Save Edit
							</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
