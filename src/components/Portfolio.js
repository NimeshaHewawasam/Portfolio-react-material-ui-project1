import React from 'react';
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";

const useStyles = makeStyles({
    Maincontainer:{
        background: "#233",
        height: "100%"
    },
    Cardcontainer:{
        maxWidth:345,
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.Maincontainer}>
            <Navbar/>
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={6}>
                    {/* Project 1*/}
                    <Card className={classes.Cardcontainer}>
                        <CardActionArea>
                            <CardMedia
                                component = "img"
                                alt = "Project 1"
                                height ="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant = "h5">
                                    Project 1
                                </Typography>
                                <Typography gutterBottom variant = "body 2" color="textSecondary" component="p">
                                Register free in Taxipool as a traveler or taxi driver. After that travelers can post their taxi share offers free with contact details. That offers will be shown in the search page according to pick up place and date. Taxi drivers can publish their any type of taxi offers with pickup, drop off locations, date, price and other details.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                    {/* Project 2*/}
                    <Card className={classes.Cardcontainer}>
                        <CardActionArea>
                            <CardMedia
                                component = "img"
                                alt = "Project 2"
                                height ="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant = "h5">
                                    Project 2
                                </Typography>
                                <Typography gutterBottom variant = "body 2" color="textSecondary" component="p">
                                Register free in Taxipool as a traveler or taxi driver. After that travelers can post their taxi share offers free with contact details. That offers will be shown in the search page according to pick up place and date. Taxi drivers can publish their any type of taxi offers with pickup, drop off locations, date, price and other details.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                    {/* Project 3*/}
                    <Card className={classes.Cardcontainer}>
                        <CardActionArea>
                            <CardMedia
                                component = "img"
                                alt = "Project 3"
                                height ="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant = "h5">
                                    Project 3
                                </Typography>
                                <Typography gutterBottom variant = "body 2" color="textSecondary" component="p">
                                Register free in Taxipool as a traveler or taxi driver. After that travelers can post their taxi share offers free with contact details. That offers will be shown in the search page according to pick up place and date. Taxi drivers can publish their any type of taxi offers with pickup, drop off locations, date, price and other details.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                    {/* Project 4*/}
                    <Card className={classes.Cardcontainer}>
                        <CardActionArea>
                            <CardMedia
                                component = "img"
                                alt = "Project 4"
                                height ="140"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant = "h5">
                                    Project 4
                                </Typography>
                                <Typography gutterBottom variant = "body 2" color="textSecondary" component="p">
                                Register free in Taxipool as a traveler or taxi driver. After that travelers can post their taxi share offers free with contact details. That offers will be shown in the search page according to pick up place and date. Taxi drivers can publish their any type of taxi offers with pickup, drop off locations, date, price and other details.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>

            </Grid>
           
        </Box>
    )
}

export default Portfolio
