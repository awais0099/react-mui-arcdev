import React from "react";
import Hidden from "@mui/material/Hidden";
import IconButton from '@mui/material/IconButton';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/styles/useTheme";
import makeStyles from "@mui/styles/makeStyles";

import { Link } from "react-router-dom";

import backArrow from "./assests/backArrow.svg";
import forwardArrow from "./assests/forwardArrow.svg";
import analytics from "./assests/analytics.svg";
import ecommerce from "./assests/ecommerce.svg";
import outreach from "./assests/outreach.svg";
import seo from "./assests/seo.svg";


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
	},
	paragraphContainer: {
		maxWidth: "30em",
	}
}));

function Websites(props){
	const classes = useStyles();
	const theme = useTheme();
	const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	
	return (
		<Grid container direction="column">
			<Grid item>
				<Grid container direction="row" className={classes.rowContainer} justifyContent={matchesMd ? "center":undefined}>
					<Hidden mdDown>
						<Grid item className={classes.arrowContainer}  style={{marginRight: "1em", marginLeft: "-3em"}}>
							<IconButton component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} style={{backgroundColor: "transparent"}}>
								<img src={backArrow} alt="back to ios/android page" />
							</IconButton>
						</Grid>
					</Hidden>

					<Grid item container direction="column" className={classes.heading}>
						<Grid item>
							<Typography variant="h2" align={matchesMd ? "center":undefined}>
								Websites Development
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
							<IconButton component={Link} to="/services" onClick={() => {props.setValue(1); props.setSelectedIndex(0);}} style={{backgroundColor: "transparent"}}>
								<img src={forwardArrow} alt="back to services page" />
							</IconButton>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>

		{/* Analytics block */}
			<Grid item container direction={matchesSM ? "column":"row"} className={classes.rowContainer} alignItems="center">
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" align={matchesSM ? "center":undefined} gutterBottom>Analytics</Typography>
						</Grid>
						<Grid item>
							<img src={analytics} alt="analytics" style={{marginLeft: "-2.75em"}} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.paragraphContainer}
					align={matchesSM ? "center":undefined}
					style={{marginLeft: matchesSM ? 0:"1em"}}
				>
					<Typography variant="body1" paragraph>
						survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release 
						of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin
					</Typography>
				</Grid>
			</Grid>


		{/* Analytics block */}
			<Grid item container direction={matchesSM ? "column":"row"} justifyContent="flex-end"
				className={classes.rowContainer} alignItems="center"
				style={{marginTop: "15em", marginBottom: "15em"}}
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" gutterBottom align="center">E-Commerce</Typography>
						</Grid>
						<Grid item>
							<img src={ecommerce} alt="ecommerce"/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.paragraphContainer}
					align={matchesSM ? "center":undefined}
					style={{marginLeft: matchesSM ? 0:"1em"}}
				>
					<Typography variant="body1" paragraph>
						survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release 
						of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin
					</Typography>
				</Grid>
			</Grid>


		{/* Analytics block */}
			<Grid item container direction={matchesSM ? "column":"row"} className={classes.rowContainer} alignItems="center">
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" gutterBottom align="center">Outreach</Typography>
						</Grid>
						<Grid item>
							<img src={outreach} alt="outreach" style={{marginLeft: "-2.75em"}} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.paragraphContainer}>
					<Typography variant="body1" paragraph
						align={matchesSM ? "center":undefined}
						style={{marginLeft: matchesSM ? 0:"1em"}}
					>
						survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release 
						of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin
					</Typography>
				</Grid>
			</Grid>


			{/* Analytics block */}
			<Grid item container direction={matchesSM ? "column":"row"} justifyContent="flex-end"
				className={classes.rowContainer} alignItems="center"
				style={{marginTop: "15em", marginBottom: "15em"}}
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" gutterBottom align="center">
								Search Engine<br/> Optimiztion
							</Typography>
						</Grid>
						<Grid item>
							<img src={seo} alt="seo"/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.paragraphContainer}>
					<Typography variant="body1" paragraph
						align={matchesSM ? "center":undefined}
						style={{marginLeft: matchesSM ? 0:"1em"}}
					>
						survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release 
						of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin
					</Typography>
				</Grid>
			</Grid>

			{/*-------The Call-to-action block-------*/}
            <Grid item>
                <CallToAction setValue={props.setValue} setSelectedIndex={props.setSelectedIndex} />
            </Grid>
		</Grid>
	);
}

export default Websites;