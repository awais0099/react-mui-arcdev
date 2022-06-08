import Reat from "react";
import {
	Grid,
	Typography,
	useMediaQuery,
	Avatar,
	Hidden
} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";

import CallToAction from "./ui/CallToAction.js";

import founder from "./assests/founder.jpg";
import yearbook from "./assests/yearbook.svg";
import puppy from "./assests/puppy.svg";
import history from "./assests/history.svg";


const useStyles = makeStyles(theme => ({
	missionStatement: {
		fontStyle: "italic",
		fontWeight: "300",
		fontSize: "1.5rem",
		maxWidth: "50em",
		lineHeight: 1.4
	},
	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		[theme.breakpoints.down('sm')]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		}
	},
	avatar: {
		height: "25em",
		width: "25em",
		[theme.breakpoints.down('sm')]: {
			height: "20em",
			width: "20em",
			maxWidth: 300,
			maxHeight: 300
		}
	}
}));

function AboutUs(props){
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


	return (
		<Grid container direction="column">

			{/* about us block */}
			<Grid item className={classes.rowContainer} style={{marginTop: matchesMD ? "1em":"2em"}}>
				<Typography variant="h2" align={matchesMD ? "center":undefined}>About Us</Typography>
			</Grid>

			<Grid item container justifyContent="center" className={classes.rowContainer}
				style={{marginTop: "3em"}}
			>
				<Typography variant="h4" align="center"  className={classes.missionStatement}>
					survived not only five centuries, but also the leap into electronic typesetting, 
					remaining essentially unchanged. It was popularised in the 1960s with the release 
					of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
					publishin
				</Typography>
			</Grid>

			{/* about us block */}
			<Grid item container
				direction={matchesMD ? "column":"row"}
				className={classes.rowContainer}
				alignItems={matchesMD ? "center":undefined}
				justifyContent="space-around"
				style={{marginTop: "10em", marginBottom: "10em"}}
			>
				<Grid item>
					<Grid item container direction="column" lg style={{maxWidth: "35em"}}>
						<Grid item>
							<Typography variant="h4" gutterBottom align={matchesMD ? "center":undefined}>History</Typography>
						</Grid>

						<Grid item>
							<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
								remaining essentially unchanged. It was popularised 
							</Typography>

							<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
								remaining essentially unchanged. It was popularised in the 1960s with the release 
							</Typography>

							<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
								remaining essentially unchanged. It was popularised in the 1960s with the release 
									of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
									publishin
							</Typography>

							<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
								remaining essentially unchanged. It was popularised in the 1960s with the release 
									of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
									publishin
							</Typography>

							<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
								remaining essentially unchanged. It was popularised in the 1960s with the release 
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Grid item container lg justifyContent="center">
						<img src={history} alt="history"
							style={{maxHeight: matchesSM ? 200:"20em"}} 
						/>
					</Grid>
				</Grid>

			</Grid>


			<Grid item container direction="column" alignItems="center"
				 className={classes.rowContainer}
				 style={{marginBottom: "15em"}}
			>
				<Grid item>
					<Typography variant="h4" gutterBottom align="center">Team</Typography>
				</Grid>
				
				<Grid item>
					<Typography variant="body1" paragraph align="center">remaining essentially unchanged. It was</Typography>
				</Grid>

				<Grid item>
					<Typography variant="body1" align="center">containing Lorem Ipsum passages, and more recently with de</Typography>
				</Grid>

				<Grid item>
					<Avatar alt="founder" src={founder} className={classes.avatar} />
				</Grid>

				<Grid item container direction="row" justifyContent={matchesMD ? "center":undefined}>
					
					<Hidden mdUp>
						<Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
							<Typography variant="body1" paragraph align="center">
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
							</Typography>

							<Typography variant="body1" paragraph align="center">
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
							</Typography>
						</Grid>
					</Hidden>

					<Grid item container direction="column" lg
						alignItems={matchesMD ? "center":undefined}
						style={{marginBottom: matchesMD ? "2.5em":0}}
					>
						<Grid item>
							<img src={yearbook} alt="founder" style={{maxWidth: matchesMD ? 300:undefined}} />
						</Grid>
						<Grid item>
							<Typography variant="caption">Caption</Typography>
						</Grid>
					</Grid>

					<Hidden mdDown>
						<Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
							<Typography variant="body1" paragraph align="center">
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
							</Typography>

							<Typography variant="body1" paragraph align="center">
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
							</Typography>
						</Grid>
					</Hidden>

					<Grid item container direction="column" lg alignItems={matchesMD ? "center":"flex-end"}>
						<Grid item>
							<img src={puppy} alt="puppy" style={{maxWidth: matchesMD ? 300:undefined}} />
						</Grid>
						<Grid item>
							<Typography variant="caption">Caption</Typography>
						</Grid>
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

export default AboutUs;