import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function HeaderTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.history.location.pathname === '/archive' ? 1 : 0);

  function handleChange(event, newValue) {
    setValue(newValue);
    console.log('newValue', newValue)
  }

  return (    
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab icon={<HomeIcon />} component={Link} to='/home' />
                <Tab icon={<CheckBoxIcon /> } component={Link} to='/archive' />                  
            </Tabs>           
        </Paper>   
  );
}