import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    background: {
      backgroundColor: "#222b5c",
      padding: "5vh"
    },
    root: {
      display: 'flex',
      marginTop: '4vh',
      bottom: '10vh',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      backgroundColor: '#e28b79'
    },
    content: {
      flex: '1 0 auto',
      backgroundColor: '#e28b79'
    },
    description: {
        display: 'flex',
        backgroundColor: '#e28b79'
      },
}));

export default function Events(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [sortedEvents, setSortedEvents] = React.useState(props.eventList.sort(function(a, b) {return a.startTime - b.startTime;}));
  return (
    <Paper className = {classes.background}>
    {sortedEvents.map((event) =>
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h8" variant="h8">
                        {event.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {new Date(event.startTime*1000).toLocaleString().split(",")[1].trim() + " - " + new Date(event.endTime*1000).toLocaleString().split(",")[1].trim()} 
                    </Typography>
                </CardContent>
            </div>
            <div className = {classes.details}>
                <CardContent
                className={classes.description}
                >
                    <Typography  variant= "body1">
                        {event.description}
                    </Typography>
                </CardContent>

             </div>
        </Card>

    )} 
    </Paper>
  );
}