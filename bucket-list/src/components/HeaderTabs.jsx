import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import BucketList from './Bucket/BucketList';
import { Archive } from './Bucket/Archive';

import HomeIcon from '@material-ui/icons/Home';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function HeaderTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BrowserRouter>
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
            {/* <Switch>
                <Route exact path='/home' />
                <Route path='/archive' component={Archive} />
            </Switch> */}
        </Paper>
    </BrowserRouter>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import HomeIcon from '@material-ui/icons/Home';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
// }));

// export default function OutlinedButtons() {
//   const classes = useStyles();

//   return (
//     <div>
//        <input
//         accept="image/*"
//         className={classes.input}
//         id="outlined-button-file"
//         multiple
//         type="file"
//       />
     
//       <Button variant="outlined" color="inherit" className={classes.button}>
//         Home
//       </Button>
//       <Button variant="outlined" color="inherit" className={classes.button}>
//         Complete
//       </Button>
//     </div>
//   );
// }
