import React, { useState } from "react";
import Lottie from "react-lottie";
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";

import CallToAction from "./ui/CallToAction.js";

import animationData from "./animations/landinganimation/data";
import customSoftwareIcon from "./assests/CustomSoftwareIcon.svg";
import mobileAppsIcon from "./assests/mobileIcon.svg";
import websitesIcon from "./assests/websiteIcon.svg";
import infoBackground from "./assests/infoBackground.svg";
import revolutionBackground from "./assests/repeatingBackground.svg";

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    estimateButton: {
        borderRadius: '50px',
        height: "45px",
        width: "145px",
        textTransform: "none",
        fontSize: "1rem",
        fontFamily: "Pacifico",
        color: "white",
        backgroundColor: theme.palette.common.arcOrange,
        "&:hover": {
        backgroundColor: theme.palette.secondary.light
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: '1em',
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0"
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.arcOrange,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
    },
    subtitle: {
        marginBottom: '1em'
    },
    servicesContainer: {
        marginTop: "12em",
        [theme.breakpoints.down('sm')]: {
            padding: 25
        },
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0em",
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "8em",
            paddingTop: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
        }
    },
    informationContainer: {
        height: "30em",
        backgroundColor: "red",
        padding: "10em"
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%"
    }
}));


export default function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            {/* hero block */}
            <Grid item>
                <Grid container justifyContent="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant="h2" align="center">
                            Bringing West Coast Technology<br />to the Midwest
                        </Typography>
                        <Grid container className={classes.buttonContainer} justifyContent="center" spacing={2}>
                            <Grid item>
                                <Button component={Link} onClick={() => props.setValue(9)} to="/estimate" variant="contained" className={classes.estimateButton}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} variant="outlined" className={classes.learnButtonHero}>Learn More</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>

            {/* services block */}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justifyContent={matchesSM || matchesMD ? "center" : undefined} 
                    className={classes.servicesContainer}
                >
                    <Grid item 
                        style={{ marginLeft: matchesSM || matchesMD ? "0em":"5em", 
                        textAlign: matchesSM ? "center": undefined }}
                    >
                        <Typography variant="h4">
                            Custome Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>Save Energy, Save Time, Save Money.</Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from  to <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button component={Link} to="/customsoftware" onClick={() => {props.setValue(1); props.setSelectedIndex(0);}} variant="outlined" className={classes.learnButton}>Learn more</Button>
                    </Grid>
                    <Grid item>
                        <img src={customSoftwareIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>

            {/* IOS/Android block */}
            <Grid item>
                <Grid container direction="row" justifyContent={matchesSM || matchesMD ? "center" : "flex-end"} className={classes.servicesContainer}>
                    <Grid item
                        style={{ 
                        textAlign: matchesSM ? "center": undefined }}
                    >
                        <Typography variant="h4">
                            IOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality, Extend Access, Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create standalone app {matchesSM ? null : <br />} with either mobile plateform
                        </Typography>
                        <Button
                            component={Link} 
                            to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(1);}}
                            variant="outlined" className={classes.learnButton}
                        >
                            Learn more
                        </Button>
                    </Grid>
                    <Grid
                        item
                        style={{marginRight: matchesSM || matchesMD ? "0em":"5em",}}
                    >
                        <img src={mobileAppsIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>

            {/*-------website block-------*/}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justifyContent={matchesSM || matchesMD ? "center" : undefined} 
                    className={classes.servicesContainer}
                >
                    <Grid item 
                        style={{ marginLeft: matchesSM || matchesMD ? "0em":"5em", 
                        textAlign: matchesSM ? "center": undefined }}
                    >
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More, Discover More, Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for search engines, built for speed
                        </Typography>
                        <Button component={Link} to="/websites" onClick={() => {props.setValue(1); props.setSelectedIndex(2);}} variant="outlined" className={classes.learnButton}>Learn more</Button>
                    </Grid>
                    <Grid item>
                        <img src={websitesIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            
            {/*------- the Revolution block -------*/}
            <Grid item>
                <Grid container style={{height: "100em", marginTop: "12em"}} alignItems="center" justifyContent="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container style={{textAlign: "center"}} direction="column" alignItems="center">
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>The Revolution</Typography>    
                                </Grid>
                                <Grid item style={{textAlign: "center"}}>
                                    <Typography variant="subtitle1">Visionary insights coupled with cutting-edge technology is a recipe for revolution.</Typography>    
                                    <Button
                                        component={Link}
                                        to="/revolution"
                                        onClick={() => props.setValue(2)}
                                        variant="outlined" className={classes.learnButton}
                                    >
                                        Learn more
                                    </Button>
                                </Grid>
                            </Grid>    
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />    
                </Grid>
            </Grid>


            {/*------- Information block -------*/}
            <Grid item>
                <Grid container style={{height: "80em"}} direction="row" alignItems="center" className={classes.infoBackground}>
                    
                    <Grid container item spacing={matchesSM ? 10:undefined} direction={matchesSM ? "column": "row"} >
                        <Grid item sm style={{ marginLeft: matchesSM ? "0em": "5em", textAlign: matchesSM && "center"}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color: "white"}}>About Us</Typography>
                                <Typography variant="subtitle2">Lets get personal</Typography>
                                <Grid item>
                                    <Button component={Link} to="/about-us" onClick={() => props.setValue(3)} variant="outlined" style={{color: "white", borderColor: "white"}} className={classes.learnButton}>Learn more</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{marginRight: matchesSM ? "0em": "5em", textAlign: matchesSM ? "center":"right"}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color: "white"}}>Contact Us</Typography>
                                <Typography variant="subtitle2">Lets get personal</Typography>
                                <Grid item>
                                    <Button component={Link} to="/contact-us" onClick={() => props.setValue(4)} variant="outlined" style={{color: "white", borderColor: "white"}} className={classes.learnButton}>Learn more</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div />
                </Grid>
            </Grid>
            
            {/*-------The Call-to-action block-------*/}
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    );
}