import React, { useState } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import callToActionBackground from "../assests/background.jpg";
import callToActionMobileBackground from "../assests/mobileBackground.jpg";


const useStyle = makeStyles(theme => ({
	learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    callToAction: {
    	background: `url(${callToActionBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "60em",
        [theme.breakpoints.down("md")]: {
        	background: `url(${callToActionMobileBackground})`,
        }
    },
    estimateButton: {
    	background: theme.palette.common.arcOrange,
    	color: "white",
		height: 80,
        width: 205,
	    fontSize: "1.5rem",
	    fontFamily: "Pacifico",
	    borderRadius: "50px",
	    textTransform: "none",
	    marginRight: "5em",
		marginLeft: "2em",
		[theme.breakpoints.down("sm")]: {
			marginRight: "0em",
			marginLeft: "0em",
		},
		[theme.breakpoints.down("md")]: {
			marginRight: "2em",
			marginLeft: "0em",
		},
    	"&:hover": {
    		background: theme.palette.secondary.light
    	}
    }
}))

export default function CallToAction(props) {
	const classes = useStyle();
	const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));


	return (
		<Grid container direction="row" alignItems="center" className={classes.callToAction}>
           	<Grid container item direction={matchesSM ? "column": "row"} >
                <Grid item sm style={{ marginLeft: matchesSM ? "0em":matchesMD ? "2em":"5em", textAlign: matchesSM && "center"}}>
                    <Grid container direction="column">
                        <Typography variant="h2">
							Simple Software. <br /> Revolutionary Results.
						</Typography>
						<Typography variant="subtitle2" color="white" style={{fontSize: "1.5rem"}}>
							Take advantage of 21st century
						</Typography>
						<Grid item>
							<Button
								component={Link}
								to="/estimate" 
								onClick={() => props.setValue(1)}
								variant="outlined"
								className={classes.learnButton}
							>
								Learn more
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm style={{marginRight: matchesSM ? "0em":matchesMD ? "2em":"5em", textAlign: matchesSM ? "center":"right"}}>
                    <Button
						component={Link}
						to="/estimate" 
						onClick={() => props.setValue(9)}
						variant="contained"
						className={classes.estimateButton}
					>
						Free Estimate
					</Button>
                </Grid>
            </Grid>
        </Grid>
	);
}