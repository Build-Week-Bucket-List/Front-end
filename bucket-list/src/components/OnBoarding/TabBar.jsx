import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import Typography from '@material-ui/core/Typography';

import Login from './Login';
import Register from './Register';

import { makeStyles } from '@material-ui/core/styles';


function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
};

const useStyles = makeStyles(theme => ({
  tabs: {
    border: "#DA9417",
  },
  title: {
    left: 52,
    position: "absolute",
    fontFamily: "Cinzel, serif"
  },
  appBar: {
   height: 64
  }
}))

const TabBar = props => {
  const [value, setValue] = useState(1);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#000000",
  }

  const indicatorStyle = {
    backgroundColor: "#DA9417"
  }




  return (
    <div>
      <AppBar position='static' style={style} className={classes.appBar}>
        <div className='title-container'>
        <Typography className={classes.title} variant="h6" noWrap >
          Bucket List
        </Typography>
        <Tabs value={value} onChange={handleChange} centered className={classes.tabs} TabIndicatorProps={{ style: indicatorStyle }}>
          <Tab label='Register' {...a11yProps(0)} />
          <Tab label='Login' {...a11yProps(1)} />
        </Tabs>
        </div>
      </AppBar>      
      <TabPanel value={value} index={0}>
        <Register history={props.history} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Login history={props.history} />
      </TabPanel>
    </div>
  )
};

export default TabBar;
