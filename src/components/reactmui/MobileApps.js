import React from "react";
import {
	Grid,
	Typography,
	Button,
	IconButton,
	Hidden,
} from "@mui/material";

import {makeStyles, useTheme} from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import backArrow from "./assests/backArrow.svg";
import forwardArrow from "./assests/forwardArrow.svg";
import swissKnife from "./assests/swissKnife.svg";
import extendAccess from "./assests/extendAccess.svg";
import increaseEngagement from "./assests/increaseEngagement.svg";

import integrationAnimation from "./animations/integrationAnimation/data.json"

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

function MobileApps(props){
	const classes = useStyles();
	const theme = useTheme();
	const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const integrationOptions = {
        loop: true,
        autoplay: true, 
        animationData: integrationAnimation,
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
								IOS/Android Apps Development
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

		{/* Integration and Simultan block */}

			<Grid item container direction={matchesSM ? "column":"row"} className={classes.rowContainer} 
				align={matchesSM ? "center":undefined}
				style={{marginTop: "15em"}}
			>
					
					<Grid item container 
						direction={matchesSM ? "column":"row"} 
						className={classes.itemContainer}
						md
					>
						<Grid item container direction="column" md 
						>
							<Grid item>
								<Typography variant="h4">
									Integration
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" paragraph>
									Reduce Errors, Reduce Waste, Reduce Costs.
								</Typography>

								<Typography variant="body1" paragraph>
									survived not only five centuries, but also the leap into electronic typesetting, 
									remaining essentially unchanged. It was popularised in the 1960s with the release 
										publishin
								</Typography>

								<Typography variant="body1" paragraph align={matchesSM ? "center":undefined}>
									It was popularised in the 1960s with the release of Letraset shee
								</Typography>
							</Grid>
						</Grid>
					</Grid>

					<Grid item md>
						<Lottie options={integrationOptions} style={{maxWidth: "20em"}} />
					</Grid>

					<Grid item container 
						direction={matchesSM ? "column":"row"} 
						className={classes.itemContainer} md 
						style={{marginBottom: "10em"}}
					>
						
						<Grid item container direction="column" md 
						>
							<Grid item>
								<Typography variant="h4" align={matchesSM ? "center":"right"}>
									Simultaneous Plateform Support
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" paragraph align={matchesSM ? "center":"right"}>
									survived not only five centuries, but also the leap into electronic typesetting, 
									remaining essentially unchanged. It was popularised in the 1960s with the release 
									publishin
								</Typography>
							</Grid>
						</Grid>
					</Grid>
			</Grid>


			<Grid item container direction={matchesMd ? "column":"row"} className={classes.rowContainer}
				justifyContent="center"
				style={{marginTop: "15em", marginBottom: "15em"}}
			>
				<Grid item container direction="column" alignItems="center" md>
					<Grid item>
						<Typography variant="h4" align="center" gutterBottom>
							Extend Functionality
						</Typography>
					</Grid>
					<Grid item>
						<img src={swissKnife} alt="swissKnife" />
					</Grid>
				</Grid>
				<Grid item container direction="column" alignItems="center" md
					style={{marginBottom: matchesMd ? "5em":undefined, marginTop: matchesMd ? "5em":undefined}}
					alignItems="center"
				>
					<Grid item>
						<Typography variant="h4" align="center" gutterBottom>Extend Access</Typography>
					</Grid>
					<Grid item>
						<img src={extendAccess} alt="extendAccess" style={{maxWidth: matchesSM ? "20em":"28em"}} />
					</Grid>
				</Grid>
				<Grid item container direction="column" md alignItems="center">
					<Grid item>
						<Typography variant="h4" align="center" gutterBottom>Increase Engagement</Typography>
					</Grid>
					<Grid item>
						<img src={increaseEngagement} alt="increase Engagement" />
					</Grid>
				</Grid>
			</Grid>

			{/*-------The Call-to-action block-------*/}
            <Grid item>
                <CallToAction setValue={props.setValue} setSelectedIndex={props.setSelectedIndex} />
            </Grid>
		</Grid>
	);
}

export default MobileApps;