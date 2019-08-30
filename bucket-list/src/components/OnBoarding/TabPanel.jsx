import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


const TabPanel = props => {
  const { value, index, children, ...other} = props;


  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={ value !== index }
      id={ `nav-tabpanel-${index}`}
      { ...other }
    >

      <Box component='div'>{ children }</Box>
    </Typography>
  )
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


export default TabPanel;
