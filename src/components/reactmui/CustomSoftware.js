import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import Hidden from "@mui/material/Hidden";
import IconButton from '@mui/material/IconButton';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/styles/useTheme";
import makeStyles from "@mui/styles/makeStyles";

import backArrow from "./assests/backArrow.svg";
import forwardArrow from "./assests/forwardArrow.svg";
import lightbulb from "./assests/bulb.svg";
import stopwatch from "./assests/stopwatch.svg";
import cash from "./assests/cash.svg";
import root from "./assests/root.svg";

import documentsAnimation from "./animations/documentsAnimation/data.js";
import scaleAnimation from "./animations/scaleAnimation/data.json";
import automationAnimation from "./animations/automationAnimation/data.json";
import uxAnimation from "./animations/uxAnimation/data.js";

import CallToAction from "./ui/CallToAction.js";

const useStyles = makeStyles(theme => ({
	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		[theme.breakpoints.down('sm')]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		}
	},
	heading: {
		maxWidth: "40em"
	},
	arrowContainer: {
		marginTop: "0.5em"
	},
	itemContainer: {
		maxWidth: "40em"
	}
}));

function CustomSoftware(props){
	const classes = useStyles();
	const theme = useTheme();
	const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const documentsOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
	

	const scaleOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const automationOptions = {
        loop: true,
        autoplay: true, 
        animationData: automationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const uxOptions = {
        loop: true,
        autoplay: true, 
        animationData: uxAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };




	return (
		<Grid container direction="column">
			<Grid item>
				<Grid container direction="row" className={classes.rowContainer} justifyContent={matchesMd ? "center":undefined}>
					<Hidden mdDown>
						<Grid item className={classes.arrowContainer}  style={{marginRight: "1em", marginLeft: "-3em"}}>
							<IconButton component={Link} to="/services" onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} style={{backgroundColor: "transparent"}}>
								<img src={backArrow} alt="backArrow" />
							</IconButton>
						</Grid>
					</Hidden>

					<Grid item container direction="column" className={classes.heading}>
						<Grid item>
							<Typography variant="h2" align={matchesMd ? "center":undefined}>
								Custom software Development
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" paragraph align={matchesMd ? "center":undefined}>
								Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</Typography>
						</Grid>

						<Grid item>
							<Typography variant="body1" paragraph align={matchesMd ? "center":undefined}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
							</Typography>
						</Grid>

						<Grid item>
							<Typography variant="body1" paragraph align={matchesMd ? "center":undefined}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin
							</Typography>
						</Grid>

						<Grid item>
							<Typography variant="body1" paragraph align={matchesMd ? "center":undefined}>
								 It was popularised in the 1960s with the release of Letraset shee
							</Typography>
						</Grid>
					</Grid>
					<Hidden mdDown>
						<Grid item className={classes.arrowContainer}>
							<IconButton component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(2);}} style={{backgroundColor: "transparent"}}>
								<img src={forwardArrow} alt="forwardArrow" />
							</IconButton>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>

			<Grid item container direction="row" className={classes.rowContainer} justifyContent="center" style={{marginTop: "15em", marginBottom: "15em"}}>
				<Grid item container direction="column" md style={{maxWidth: "40em"}} alignItems="center">
					<Grid item>
						<Typography>Save Energy</Typography>
					</Grid>
					<Grid item>
						<img src={lightbulb} alt="lightbulb" />
					</Grid>
				</Grid>
				<Grid item container direction="column" md style={{maxWidth: "40em",marginBottom: matchesMd ? "5em":undefined, marginTop: matchesMd ? "5em":undefined}} alignItems="center">
					<Grid item>
						<Typography>Save Time</Typography>
					</Grid>
					<Grid item>
						<img src={stopwatch} alt="stopwatch" />
					</Grid>
				</Grid>
				<Grid item container direction="column" md style={{maxWidth: "40em"}} alignItems="center">
					<Grid item>
						<Typography>Save Mony</Typography>
					</Grid>
					<Grid item>
						<img src={cash} alt="cash" />
					</Grid>
				</Grid>
			</Grid>

			{/* Digital Documents & Dats block, Scale block  */}
		{ matchesMd && console.log("md down")}
			<Grid item container direction={matchesMd ? "column":"row"} className={classes.rowContainer} alignItems={matchesMd ? "center":undefined} justifyContent="space-around">
					
					<Grid item container direction={matchesSM ? "column":"row"} className={classes.itemContainer} md
						style={{
							marginBottom: matchesMd || matchesSM ? "10em":undefined
						}}
					>
						<Grid 
							item 
							container 
							direction="column" 
							md 
							style={{
								maxWidth: matchesSM ? undefined : matchesMd ? "50%": undefined
							}}
						>
							<Grid item>
								<Typography variant="h4" align={matchesSM ? "center":undefined}>Digital Documents & Dats</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>
									Reduce Errors, Reduce Waste, Reduce Costs.
								</Typography>

								<Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>
									survived not only five centuries, but also the leap into electronic typesetting, 
									remaining essentially unchanged. It was popularised in the 1960s with the release 
										publishin
								</Typography>

								<Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>
									It was popularised in the 1960s with the release of Letraset shee
								</Typography>
							</Grid>
						</Grid>
						<Grid item md>
							<Lottie options={documentsOptions} style={{maxWidth: 275, maxHeight: 275, minHeight: 250}} />
						</Grid>
					</Grid>


					<Grid item container direction={matchesSM ? "column":"row"} className={classes.itemContainer} md>
						<Grid item md>
							<Lottie options={scaleOptions} style={{maxWidth: 280, maxHeight: 260}} />
						</Grid>
						<Grid item container direction="column" md style={{maxWidth: matchesSM ? undefined : matchesMd ? "50%": undefined}}>
							<Grid item>
								<Typography variant="h4" align={matchesSM ? "center":"right"}>Scale</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" align={matchesSM ? "center":"right"} paragraph>
									survived not only five centuries, but also the leap into electronic typesetting, 
									remaining essentially unchanged. It was popularised in the 1960s with the release 
										publishin
								</Typography>
							</Grid>
						</Grid>
					</Grid>
			</Grid>

		{/* Root cause analysis */}

			<Grid item container className={classes.rowContainer} style={{marginTop: "20em", marginBottom: "20em"}}>
				<Grid item container justifyContent="center">
					<Grid item>
						<img src={root} alt="root" with={matchesSM ? "300":"458em"} height={matchesSM ? "300":"458em"} />
					</Grid>
				</Grid>

				<Grid item container>
					<Grid item>
						<Typography variant="h4" align="center" gutterBottom>Root-Cause Analysis</Typography>
						<Typography variant="body1" align="center" paragraph>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							publishin
						</Typography>
					</Grid>
				</Grid>
			</Grid>

		{/* Automation and User experiance block */}

			<Grid item container className={classes.rowContainer} direction={matchesMd ? "column":"row"} alignItems={matchesMd ? "center":undefined} justifyContent="space-around">
					
					<Grid item container direction={matchesSM ? "column":"row"} className={classes.itemContainer} md
						style={{
							marginBottom: matchesMd || matchesSM ? "10em":undefined
						}}
					>
						<Grid item container direction="column" md 
							style={{
								maxWidth: matchesSM ? undefined : matchesMd ? "50%": undefined
							}}
						>
							<Grid item>
								<Typography variant="h4" align={matchesSM ? "center":undefined}>Automation</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>
									Reduce Errors, Reduce Waste, Reduce Costs.
								</Typography>

								<Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>
									survived not only five centuries, but also the leap into electronic typesetting, 
									remaining essentially unchanged. It was popularised in the 1960s with the release 
										publishin
								</Typography>

								<Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>
									It was popularised in the 1960s with the release of Letraset shee
								</Typography>
							</Grid>
						</Grid>
						<Grid item md>
							<Lottie options={automationOptions} style={{maxWidth: 280, maxHeight: 290}} />
						</Grid>
					</Grid>


					<Grid item container direction={matchesSM ? "column":"row"} className={classes.itemContainer} md style={{marginBottom: "10em"}}>
						<Grid item md>
							<Lottie options={uxOptions} style={{maxWidth: 155, maxHeight: 310}} />
						</Grid>
						<Grid item container direction="column" md 
							style={{
								maxWidth: matchesSM ? undefined : matchesMd ? "50%": undefined
							}}
						>
							<Grid item>
								<Typography variant="h4" align={matchesSM ? "center":"right"}>User Experience Design</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" align={matchesSM ? "center":"right"} paragraph>
									survived not only five centuries, but also the leap into electronic typesetting, 
									remaining essentially unchanged. It was popularised in the 1960s with the release 
									publishin
								</Typography>
							</Grid>
						</Grid>
					</Grid>
			</Grid>

			<Grid item>
				<CallToAction setValue={props.setValue}/>
			</Grid>

		</Grid>
	);
}

export default CustomSoftware;