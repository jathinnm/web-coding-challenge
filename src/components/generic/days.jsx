
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Event from ".//event.jsx";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#a8cbb7",
    width: "100%",
    minHeight: "100vh",
    top: "10vh"
  },
}));

export default function DaysTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  //Handles tab changes
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="8/7/2020" {...a11yProps(0)} />
          <Tab label="8/8/2020" {...a11yProps(1)} />
          <Tab label="8/9/2020" {...a11yProps(2)} />
          <Tab label="8/10/2020" {...a11yProps(3)} />
          <Tab label="8/11/2020" {...a11yProps(4)} />
          <Tab label="8/12/2020" {...a11yProps(5)} />
          <Tab label="8/13/2020" {...a11yProps(6)} />
          <Tab label="8/14/2020" {...a11yProps(7)} />
          <Tab label="8/15/2020" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/*Each instance of Event passes the respective array of events for that day as a prop to event component*/}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Event
            eventList = {props.friday1Events}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Event
            eventList = {props.saturday1Events}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Event
            eventList = {props.sundayEvents}
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Event
            eventList = {props.mondayEvents}
          />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Event
            eventList = {props.tuesdayEvents}
          />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Event
            eventList = {props.wednesdayEvents}
          />
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <Event
            eventList = {props.thursdayEvents}
          />
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          <Event
            eventList = {props.friday2Events}
          />
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          <Event
            eventList = {props.saturday2Events}
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}