import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { TextField } from "formik-material-ui";
import { addItem } from "../actions";
import * as Yup from "yup";

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

export default function AddImageModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      if  (image) {
					const data = new FormData()
					data.append('image', image)
          axios.post('https://imgur-bucketlist.herokuapp.com/upload', data)
          	.then(res => console.log(res))
      }
  })

  return (
    <div>
      <IconButton
        aria-label="add new item"
        color="inherit"
        onClick={handleOpen}
      >
        <AddIcon />
      </IconButton>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <input
              accept="image/*"
              className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                Upload
              </Button>
            </label>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
