import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/styles";
import MealList from "../Profile/MealList"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    justify: "center"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  pageData: {
    justify: "center"
  }
}));

export default function Profile(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Favorites" {...a11yProps(0)} />
          <Tab label="Your Posts" {...a11yProps(1)} />
          <Tab label="Your Info" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MealList info={props.meals || []}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <MealList info={props.favorites || []}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography  variant="h5">
          {props.user_name}
        </Typography >
      </TabPanel>
    </div>
  );
}


// export default function Profile(props) {


//   return (
//     <ThemeProvider theme={theme}>
//       <Card >
//         {props.user_name}
//         <MealList info={props.meals} />
//         <MealList info={props.favorites} />
//       </Card>
//     </ThemeProvider>
//   );
// }
