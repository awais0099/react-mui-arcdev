import React from 'react';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from "react-router-dom";

import footerAdornment from '../assests/FooterAdornment.svg';
import facebook from '../assests/facebook.svg';
import instagram from '../assests/instagram.svg';
import twitter from '../assests/twitter.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.arcBlue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adorment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]: {
            width: "21em"
        },
        [theme.breakpoints.down('sm')]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: ".75rem",
        fontWeight: "bold",
        textDecoration: "none",
        opacity: 0.7,
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        width: "4em",
        height: "4em",
        [theme.breakpoints.down('xs')]: {
            height: "2.5em",
            width: '2.5em'
        },
        [theme.breakpoints.down('sm')]: {
            height: "2.5em",
            width: '2.5em'
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: "1.5em",
        [theme.breakpoints.down('xs')]: {
            right: "0.6em"
        },
        [theme.breakpoints.down('sm')]: {
            right: "0.6em"
        }
    }
}));

export default function Footer(props) {
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justifyContent="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(0)} to="/" className={classes.link}>Home</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(0) }} to="/services" className={classes.link}>Services</Grid>
                            <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(1) }} to="/customsoftware" className={classes.link}>Custom Software Development</Grid>
                            <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(2) }} to="/mobileapps" className={classes.link}>Mobile App Development</Grid>
                            <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(3) }} to="/websites" className={classes.link}>Website Development</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(2)} to="/revolution" className={classes.link}>The Revolution</Grid>
                            <Grid item component={Link} onClick={() => props.setValue(2)} to="/revolution" className={classes.link}>Vision</Grid>
                            <Grid item component={Link} onClick={() => props.setValue(2)} to="/revolution" className={classes.link}>Technology</Grid>
                            <Grid item component={Link} onClick={() => props.setValue(2)} to="/revolution" className={classes.link}>Process</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about-us" className={classes.link}>About Us</Grid>
                            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about-us" className={classes.link}>History</Grid>
                            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about-us" className={classes.link}>Team</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(4)} to="/contact-us" className={classes.link}>Contact Us</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img
                src={footerAdornment}
                alt='black decorative slash'
                className={classes.adorment}
            />
            <Grid container justifyContent="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img
                        src={facebook}
                        alt='facebook'
                        className={classes.icon}
                    />      
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img
                        src={instagram}
                        alt='instagram'
                        className={classes.icon}
                    />      
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img
                        src={twitter}
                        alt='twitter'
                        className={classes.icon}
                    />      
                </Grid>
            </Grid>
        </footer>
    )
}