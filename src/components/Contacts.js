import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {
    TextField, 
    Typography, 
    Button, 
    Grid, 
    Box} from "@material-ui/core";
import Navbar from "./Navbar";
import SendIcon from "@material-ui/icons/Send";

const useStyle = makeStyles ((theme)=>({
    form:{
        top:"50%",
        left:"50%",
        transform :"translate(-50%, -50%)",
        position:"absolute",
    },
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato"
    }
}))

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset": {
                borderColor: "tan",
            }, 
            "&:hover fieldset":{
                borderColor: "tan",
            },
            "& .Mui-focused fieldset":{
                borderColor: "tan"
            }
        },
    },
})(TextField);


const Contacts = () => {
    const classes = useStyle()
    return (
        <Box component = "div" style={{background:"#233", height:"100vh"}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component = "form" className={classes.form}>
                    <Typography 
                        variant = "h5"
                        style={{
                            color:"tomato",
                            textAlign:"center",
                            textTransform:"uppercase",
                        }}
                        >
                        Hire or Contact me...
                    </Typography>
                    <InputField 
                        fullWidth={true} 
                        label="Name" 
                        inputProps={{style:{color:"white"}}}
                        variant="outlined" 
                        margin="dense" 
                        size="medium"/>
                    <br/>

                    <InputField 
                        fullWidth={true} 
                        label="Email" 
                        inputProps={{style:{color:"white"}}} 
                        variant="outlined" 
                        margin="dense"
                        size="medium"/>
                    <br/>

                    <InputField 
                        fullWidth={true} 
                        label="Company Name" 
                        inputProps={{style:{color:"white"}}} 
                        variant="outlined" 
                        margin="dense" 
                        size="medium"/>
                    <br/>
                    <Button variant="outlined" fullWidth={true} endIcon={<SendIcon/>} className={classes.button}>
                        Contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
