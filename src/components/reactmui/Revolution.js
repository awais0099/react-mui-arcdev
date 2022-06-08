import React from "react";
import {
	Grid,
	Typography,
	Hidden,
	useMediaQuery
} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
import Lottie from "react-lottie";

import vision from "./assests/vision.svg";
import consultation from "./assests/consultationIcon.svg";
import mockup from "./assests/mockupIcon.svg";
import review from "./assests/reviewIcon.svg";
import design from "./assests/designIcon.svg";
import build from "./assests/buildIcon.svg";
import launch from "./assests/launchIcon.svg";
import maintain from "./assests/maintainIcon.svg";
import iterate from "./assests/iterateIcon.svg";

import technologyAnimation from "./animations/technologyAnimation/data.json";


const useStyles = makeStyles(theme => ({
	rowContainer: {
		paddingLeft: "5em",
		paddingRight: "5em",
		[theme.breakpoints.down('sm')]: {
			paddingLeft: "1.5em",
			paddingRight: "1.5em",
		}
	},
}));

function Revolution(props){
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const technologyOptions = {
        loop: true,
        autoplay: true, 
        animationData: technologyAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };


	return (
		<Grid container direction="column">
			<Grid item className={classes.rowContainer} style={{marginTop: "2em"}}>
				<Typography variant="h2" align={matchesMD ? "center":undefined} style={{fontFamily: "Pacifico"}}>The Revolution</Typography>
			</Grid>
			
			<Grid item container direction={matchesMD ? "column":"row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "5em"}}>
				<Grid item lg>
					<img src={vision} alt="vision" 
						style={{
								maxWidth: matchesMD ? 300:"40em", 
								marginRight: matchesMD ? 0:"5em",
								marginBottom: matchesMD ? "5em":0
							}} 
					/>
				</Grid>
				<Grid item container direction="column" lg style={{maxWidth: "40em"}}>
					<Grid item>
						<Typography variant="h4" align={matchesMD ? "center":"right"}>Vision</Typography>
					</Grid>

					<Grid item>
						<Typography variant="body1" align={matchesMD ? "center":"right"} paragraph>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>

						<Typography variant="body1" align={matchesMD ? "center":"right"} paragraph>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>

						<Typography variant="body1" align={matchesMD ? "center":"right"} paragraph>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>

						<Typography variant="body1" align={matchesMD ? "center":"right"} paragraph>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>

						<Typography variant="body1" align={matchesMD ? "center":"right"} paragraph>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid item container direction={matchesMD ? "column":"row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "10em", marginBottom: "10em"}}>
				<Grid item container direction="column" lg 
					style={{
							maxWidth: matchesSM ? 300:"40em", 
							marginRight: matchesSM ? 0:"5em",
							marginBottom: matchesMD ? "5em":0
						}}
				>
					<Grid item>
						<Typography variant="h4" align={matchesMD ? "center":undefined}>Technology</Typography>
					</Grid>

					<Grid item>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined}>
							survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essentially unchanged. It was popularised in the 1960s with the release 
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg container justifyContent={matchesMD ? "center":"flex-end"}>
					<Lottie options={technologyOptions} style={{maxWidth: "40em", margin: 0}} />
				</Grid>
			</Grid>

		{/* the process block*/}
			<Grid item className={classes.rowContainer}>
				<Typography variant="h4" align="center" gutterBottom>Process</Typography>
			</Grid>

			<Grid item container direction={matchesMD || matchesSM ? "column":"row"} className={classes.rowContainer}
				style={{backgroundColor: "#B3B3B3", height: "90em"}}
			>
				<Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
					<Grid item>
						<Typography variant="h4" gutterBottom
							style={{color: "#000", marginTop: "5em"}}
						>
							Consultation
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" align={matchesMD ? "center":undefined} paragraph style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf: "center"}}>
					<img src={consultation} alt="vision" width="100%" style={{maxWidth: matchesMD ? 300:700}} />
				</Grid>
			</Grid>


			<Grid item container direction={matchesMD || matchesSM ? "column":"row"} className={classes.rowContainer}
				style={{backgroundColor: "#ff7373", height: "90em"}}
			>
				<Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
					<Grid item>
						<Typography variant="h4" gutterBottom align={matchesMD ? "center":undefined} style={{color: "#000", marginTop: "5em"}}>Mockup</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf: "center"}}>
					<img src={mockup} alt="vision" width="100%" style={{maxWidth: matchesMD ? 300:1000}} />
				</Grid>
			</Grid>


			<Grid item container direction={matchesMD ? "column":"row"} className={classes.rowContainer}
				style={{backgroundColor: "#39B54A", height: "90em"}}
			>
				<Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
					<Grid item>
						<Typography variant="h4" gutterBottom
							align={matchesMD ? "center":undefined}
							style={{color: "#000", marginTop: "5em"}}
						>
								Review
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
							publishin
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf: "center"}}>
					<img src={review} alt="vision" width="100%" style={{maxWidth: matchesMD || matchesSM ? 200:undefined}} />
				</Grid>
			</Grid>


			<Grid item container direction={matchesMD || matchesSM ? "column":"row"} className={classes.rowContainer}
				style={{backgroundColor: "#A67C52", height: "90em"}}
			>
				<Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
					<Grid item>
						<Typography variant="h4" gutterBottom
							style={{color: "#000", marginTop: "5em"}}
						>
							Design
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg>
					<img src={design} alt="vision" style={{maxWidth: matchesMD || matchesSM ? 400:1000}} />
				</Grid>
			</Grid>

			<Grid item container direction={matchesMD || matchesSM ? "column":"row"} className={classes.rowContainer}
				style={{backgroundColor: "#FBB03B", height: "90em"}}
			>
				<Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
					<Grid item>
						<Typography variant="h4" gutterBottom
							align={matchesMD ? "center":undefined}
							style={{color: "#000", marginTop: "5em"}}
						>
							Build
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf: "center"}}>
					<img src={build} alt="build" width="100%" style={{maxWidth: matchesMD ? 700:1000}} />
				</Grid>
			</Grid>

			<Grid item container direction={matchesMD || matchesSM ? "column":"row"} className={classes.rowContainer}
				style={{backgroundColor: "#C1272D", height: "90em"}}
			>
				<Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
					<Grid item>
						<Typography variant="h4" gutterBottom
							align={matchesMD ? "center":undefined}
							style={{color: "#000", marginTop: "5em"}}
						>
							Launch
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf: "center"}}>
					<img src={launch} alt="launch" width="100%" style={{maxWidth: 200}} />
				</Grid>
			</Grid>

			<Grid item container direction={matchesMD || matchesSM ? "column":"row"} className={classes.rowContainer}
				style={{backgroundColor: "#8E45CE", height: "90em"}}
			>
				<Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
					<Grid item>
						<Typography variant="h4" gutterBottom
							align={matchesMD ? "center":undefined}
							style={{color: "#000", marginTop: "5em"}}
						>
							Maintain
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf: "center"}}>
					<img src={maintain} alt="maintain" width="100%" style={{maxWidth: matchesMD || matchesSM ? 200:undefined}} />
				</Grid>
			</Grid>

			<Grid item container direction={matchesMD || matchesSM ? "column":"row"} className={classes.rowContainer}
				style={{backgroundColor: "#29ABE2", height: "90em"}}
			>
				<Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
					<Grid item>
						<Typography variant="h4" gutterBottom
							align={matchesMD ? "center":undefined}
							style={{color: "#000", marginTop: "5em"}}
						>
							Iterate
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

						<Typography variant="body1" paragraph align={matchesMD ? "center":undefined} style={{color: "#fff", maxWidth: "20em"}}>
								survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with the release 
								of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
								publishin
						</Typography>

					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf: "center"}}>
					<img src={iterate} alt="iterate" width="100%" style={{maxWidth: 500}} />
				</Grid>
			</Grid>



		</Grid>
	);
}

export default Revolution;