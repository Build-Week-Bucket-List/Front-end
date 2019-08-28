import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';

import Login from './Login';
import RegisterWithFormik from './RegisterWithFormik';

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
};

const TabBar = props => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position='static'>
        <Tabs value={ value } onChange={ handleChange } centered>
          <Tab label='Register' {...a11yProps(0)} />
          <Tab label='Login' {...a11yProps(1)} />
        </Tabs>

      </AppBar>
      <TabPanel value={ value } index={ 0 }>
        <RegisterWithFormik history={ props.history } />
      </TabPanel>

      <TabPanel value={ value } index={ 1 }>
        <Login history={ props.history } />
      </TabPanel>
    </div>
  )
};

export default TabBar;
