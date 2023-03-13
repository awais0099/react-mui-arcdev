import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";




import customSoftwareIcon from "./assests/CustomSoftwareIcon.svg";
import mobileAppsIcon from "./assests/mobileIcon.svg";
import websitesIcon from "./assests/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
	learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
    },
    servicesContainer: {
        marginTop: "10em",
        [theme.breakpoints.down('sm')]: {
            padding: 25
        },
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.arcOrange,
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0em",
        }
    },
}));

function Services(props){
	const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Grid container direction="column"
			>
			<Grid item style={{marginLeft: matchesSM ? "0em":"5em"}}>
				<Typography
					variant="h2"
					align={matchesSM ? "center":undefined}
					gutterBottom
				>
					Services
				</Typography>
			</Grid>

			{/* IOS/Android block */}
            <Grid item>
                <Grid
                	container
                	direction="row" 
                	justifyContent={matchesSM ? "center" : "flex-end"} 
                	className={classes.servicesContainer}
                	style={{marginTop: matchesSM ? "1em":"5em"}}
                >
                    <Grid item
                        style={{textAlign: matchesSM ? "center": undefined,width: matchesSM ? undefined:"35em" }}
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
                        style={{marginRight: matchesSM ? "0em":matchesMD ? "2em":"5em", marginTop: matchesSM ? "1em":undefined}}
                    >
                        <img src={mobileAppsIcon} alt="mobile app icon" className={classes.icon} width="250em" />
                    </Grid>
                </Grid>
            </Grid>

			{/* services block */}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justifyContent={matchesSM ? "center" : undefined} 
                    className={classes.servicesContainer}
                >
                    <Grid item 
                        style={{ marginLeft: matchesSM ? "0em":matchesMD ? "2em":"5em", 
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
                    <Grid item style={{marginTop: matchesSM ? "1em":undefined}}>
                        <img src={customSoftwareIcon} alt="custom software icon" className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>

			{/*-------website block-------*/}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justifyContent={matchesSM ? "center" : "flex-end"} 
                    className={classes.servicesContainer}
                >
                    <Grid item 
                        style={{ marginLeft: matchesSM || matchesMD ? "0em":"5em", 
                        textAlign: matchesSM ? "center": undefined, width: matchesSM ? undefined:"35em" }}
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
                    <Grid item style={{marginRight: matchesSM ? "0em":matchesMD ? "2em":"5em", marginTop: matchesSM ? "1em":undefined}}>
                        <img src={websitesIcon} alt="website icon" className={classes.icon} width="250em" />
                    </Grid>
                </Grid>
            </Grid>
		</Grid>
	);
}

export default Services;