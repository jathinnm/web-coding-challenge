import React, {useEffect}from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Days from "../generic/days.jsx";
import Landing from "../generic/landing.jsx";
import Paper from '@material-ui/core/Paper'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
            {value === index && (
                <Box p={0}>
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        minHeight: '100vh',
        width: "100vw",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: "10vw", 
        backgroundColor: "#e28b79", 
        top: "10vh"
    },
    paper: {
        width: "90vw",
        backgroundColor: "#a8cbb7"
    }, 
    tabContent: {
        justify: 'center',
        align: 'center'
    }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [schedule, setSchedule] = React.useState();
  
  const [friday1Events, setFriday1Events] = React.useState();
    let friday1EventsArr = []
  const [saturday1Events, setSaturday1Events] = React.useState();
    let saturday1EventsArr = []
  const [sundayEvents, setSundayEvents] = React.useState();
    let sundayEventsArr = []
  const [mondayEvents, setMondayEvents] = React.useState();
    let mondayEventsArr = []
  const [tuesdayEvents, setTuesdayEvents] = React.useState();
    let tuesdayEventsArr = []
  const [wednesdayEvents, setWednesdayEvents] = React.useState();
    let wednesdayEventsArr = []
  const [thursdayEvents, setThursdayEvents] = React.useState();
    let thursdayEventsArr = []
  const [friday2Events , setFriday2Events]= React.useState();
    let friday2EventsArr = []
  const [saturday2Events, setSaturday2Events] = React.useState();
    let saturday2EventsArr = []

  const handleCellHover = () => {
    axios.get("https://api.hackillinois.org/event/").then(res =>{
        const data = res.data;
        setSchedule(data);
    })
  }

  const handleClick = () => {
    console.log(schedule)
    schedule.events.map(function(event, i) {
        var startTime = new Date(event.startTime*1000).toLocaleString()
        if (startTime.split(",")[0].trim() == "8/7/2020") {
            friday1EventsArr.push(event)
            setFriday1Events(friday1EventsArr)
        } else if (startTime.split(",")[0].trim() == "8/8/2020") {
            saturday1EventsArr.push(event)
            setSaturday1Events(saturday1EventsArr)
        } else if (startTime.split(",")[0].trim() == "8/9/2020") {
            sundayEventsArr.push(event)
            setSundayEvents(sundayEventsArr)
        } else if (startTime.split(",")[0].trim() == "8/10/2020") {
            mondayEventsArr.push(event)
            setMondayEvents(mondayEventsArr)
        } else if (startTime.split(",")[0].trim() == "8/11/2020") {
            tuesdayEventsArr.push(event)
            setTuesdayEvents(tuesdayEventsArr)
        } else if (startTime.split(",")[0].trim() == "8/12/2020") {
            wednesdayEventsArr.push(event)
            setWednesdayEvents(wednesdayEventsArr)
        } else if (startTime.split(",")[0].trim() == "8/13/2020") {
            thursdayEventsArr.push(event)
            setThursdayEvents(thursdayEventsArr)
        } else if (startTime.split(",")[0].trim() == "8/14/2020") {
            friday2EventsArr.push(event)
            setFriday2Events(friday2EventsArr)
        } else if (startTime.split(",")[0].trim() == "8/15/2020") {
            saturday2EventsArr.push(event)
            setSaturday2Events(saturday2EventsArr)
        } 
    })
    console.log(mondayEvents)
  };
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  if (mondayEvents == undefined) {
    return (
      <div className={classes.root}>
        <Tabs
          indicatorColor = "primary"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Schedule" {...a11yProps(1)} onMouseEnter = {handleCellHover}   onClick = {handleClick} />
        </Tabs>
        <TabPanel value={value} index={0}  >
            <Landing/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h1>Error Loading Schedule</h1>
        </TabPanel>
      </div>
    );
  } else if(mondayEvents != undefined) {
      return (
        <div className={classes.root}>
          <Tabs
            indicatorColor = "primary"
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Schedule" {...a11yProps(1)} onMouseOver = {handleCellHover} onClick = {handleClick} />
          </Tabs>
          <TabPanel value={value} index={0}  >
            <Landing/>
          </TabPanel>
          <TabPanel value={value} index={1} className = {classes.tabContent}>
            <Paper className = {classes.paper} elevation = {3} variant = "outlined" >
              <Days
                friday1Events = {friday1Events}
                saturday1Events = {saturday1Events}
                sundayEvents = {sundayEvents}
                mondayEvents = {mondayEvents}
                tuesdayEvents = {tuesdayEvents}
                wednesdayEvents = {wednesdayEvents}
                thursdayEvents = {thursdayEvents}
                friday2Events = {friday2Events}
                saturday2Events = {saturday2Events}
              />
             </Paper> 
          </TabPanel>
        </div>
      );
  }
}