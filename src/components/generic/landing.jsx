import React from 'react'
import image from '../util/homeImg.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90vw"
    },
    image: {
        backgroundRepeat: 'no-repeat',
        backgroundColor: 
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100vh', 
        width: "90vw"
    },
    title: {
        position: 'absolute',
        top: '0vh',
        justify: "center",
        alignItems: "center",
        backgroundColor: 'black',
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
    }
}));
//Component contains the home image and the title.
export default function HomePage() {
    const classes = useStyles()
    return (
        <div> 
            <img src= {image} alt="Home image"className={classes.image} ></img>
            <div className= {classes.title}>
                <Typography component = "h1" variant = "h1">
                    Welcome to Hack Illinois
                </Typography>
            </div>
        </div>       

    );
}
