import React from 'react';
import Typed from "react-typed";
import {makeStyles} from "@material-ui/styles";
import {
    Typography, 
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import avatar from "../avatar.png";
//import { Height } from '@material-ui/icons';
//CSS STYLE
const useStyles = makeStyles (theme => ({
    avatar: {
        width: 150,
        height: 150,
        margin: 1
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer:{
        position: "absolute",
        top:"10%",
        left: "50%",
        transform: "translate(-50%, 50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1

    }
}))

const Header = () => {
    const classes= useStyles()  
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="avatar img"/>
            </Grid>
            <Typography className={classes.title}  variant = "h4">
                <Typed strings={["Web Designer", "web Devoloper", "Backend Developer"]} typeSpeed={40}/>
            </Typography>
            <Typography className={classes.subtitle} variant = "h5">
                <Typed strings={["Sakila Jayasooriya"]} typeSpeed={40} backSpeed = {60}
                loop/>
            </Typography>
        </Box>
    )
}

export default Header
