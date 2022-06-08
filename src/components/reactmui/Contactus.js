import React, {useState} from "react";
import axios from "axios";
import {
	Grid,
	Typography,
	useMediaQuery,
	Button,
	Hidden,
	TextField,
	Dialog,
	DialogContent,
	CircularProgress,
	Snackbar
} from "@mui/material";

import {makeStyles, useTheme} from "@mui/styles";
import { Link } from "react-router-dom";

import email from "./assests/email.svg";
import phone from "./assests/phone.svg"
import send from "./assests/send.svg"

import callToActionBackground from "./assests/background.jpg";
import callToActionMobileBackground from "./assests/mobileBackground.jpg";


const useStyles = makeStyles(theme => ({
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
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
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
		[theme.breakpoints.down("md")]: {
			marginRight: "0em",
			marginLeft: "0em",
		},
    	"&:hover": {
    		background: theme.palette.secondary.light
    	}
    },
    message: {
    	border: `2px solid ${theme.palette.common.arcBlue}`,
    	marginTop: "5em",
    	borderRadius: 5
    },
    sendButton: {
        borderRadius: 50,
        height: "45px",
        width: 245,
        textTransform: "none",
        fontSize: "1rem",
        fontFamily: "Pacifico",
        color: "white",
        backgroundColor: theme.palette.common.arcOrange,
        "&:hover": {
        	backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]: {
        	width: 225,
        	height: 40
        }
    },
}));

function Contactus(props) {
	const [nameInput, setNameInput] = useState('');

	const [emailInput, setEmailInput] = useState('');
	const [emailInputHelper, setEmailInputHelper] = useState('');

	const [phoneInput, setPhoneInput] = useState('');
	const [phoneInputHelper, setPhoneInputHelper] = useState('');

	const [messageInput, setMessageInput] = useState('');
	
	const [open, setOpen] = useState(false);
	const [alert, setAlert] = useState({open: false, message: "", backgroundColor: ""});

	const [loading, setLoading] = useState(false);

	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));


	const onChangeHandler = event => {
		let error;

		switch (event.target.id) {
			case 'email':
				setEmailInput(event.target.value);
				error = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

				if (!error) {
					setEmailInputHelper("Invalid Email");
				} else {
					setEmailInputHelper("");
				}
				break;

			case 'phone':
				setPhoneInput(event.target.value);
				error = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

				if (!error) {
					setPhoneInputHelper("Invalid Phone");
				} else {
					setPhoneInputHelper("");
				}
				break;
			default:
				break;
		}
	}

	const sendConfirmButtonContent = (
		<React.Fragment>
			Send Message 
			<img src={send} alt="send message icon" style={{marginLeft: "1em"}} />
		</React.Fragment>

	);

	const onConfirm = () => {
		setLoading(true);

		axios
			.get("#")
			.then(respons => {
				setLoading(false);
				setOpen(false);
				setNameInput("");
				setEmailInput("");
				setPhoneInput("");
				setMessageInput("");

				setAlert({open: true, message: "Message sent successfully!", backgroundColor: "#4BB543"});
				console.log(respons);
			})
			.catch(error => {
				setLoading(false);
				setAlert({open: true, message: "Something went wrong, please try again!", backgroundColor: "#FF3232"});
				console.log(error);
			})

	}

	return (
		<Grid container>

			<Grid container direction="row">
				<Grid item container lg={4} xl={3} direction="column" justifyContent="center"
					alignItems="center"
					style={{marginBottom: matchesMD ? "5em":0, marginTop: matchesSM ? "1em":matchesMD ? "5em":0}}
					>
					<Grid item>
						<Grid container direction="column">
							<Grid item>
								<Typography variant="h2" style={{lineHeight: 1}} align={matchesMD ? "center":undefined}>Contact Us</Typography>
								<Typography variant="body1" align={matchesMD ? "center":undefined} style={{color: theme.palette.common.arcBlue}}>we are waiting</Typography>
							</Grid>

							<Grid item container direction="row"
								style={{marginTop: "2em"}}
							>
								<Grid item>
									<img src={phone} alt="phone" style={{marginRight: "0.5em"}} />
								</Grid>
								<Grid item>
									<Typography variant="body1" style={{color: theme.palette.common.arcBlue, fontSize: "1rem"}} align="left">(555) 555 5555</Typography>
								</Grid>
							</Grid>

							<Grid item container direction="row"
								style={{marginBottom: "2em"}}
							>
								<Grid item>
									<img src={email} alt="email" style={{marginRight: "0.5em", verticalAlign:"bottom"}} />
								</Grid>
								<Grid item>
									<Typography variant="body1" style={{color: theme.palette.common.arcBlue, fontSize: "1rem"}}>contactus@gmail.com</Typography>
								</Grid>
							</Grid>

							<Grid item container direction="column" style={{maxWidth: "20em"}}>
								<Grid item>
									<TextField
										id="name"
										label="Name"
										variant="standard"
										fullWidth
										value={nameInput}
										onChange={event => setNameInput(event.target.value)}
										style={{marginBottom: "2em"}}
									/>
								</Grid>

								<Grid item>
									<TextField
										id="email"
										label="Email"
										variant="standard"
										fullWidth
										error={emailInputHelper.length !== 0}
										helperText={emailInputHelper}
										value={emailInput}
										onChange={onChangeHandler}
										style={{marginBottom: "2em"}}
									/>
								</Grid>

								<Grid item>
									<TextField
										id="phone"
										label="Phone"
										variant="standard"
										fullWidth
										error={phoneInput.length !== 0}
										helperText={phoneInputHelper}
										value={phoneInput}
										onChange={onChangeHandler}
									/>
								</Grid>
							</Grid>
							<Grid item>
								<TextField id="message" 
									className={classes.message}
									variant="standard" 
									fullWidth
									value={messageInput}
									multiline
									rows={10}
									 InputProps={{
							            disableUnderline: true
							         }}
									onChange={event => setMessageInput(event.target.value)}
								/>
							</Grid>

							<Grid item container justifyContent="center" style={{marginTop: "2em"}}>
								<Button
									variant="contained" className={classes.sendButton}
									onClick={() => setOpen(true)}
									disabled={
										nameInput.length === 0 ||
										messageInput.length === 0 ||
										emailInputHelper.length !== 0 ||
										phoneInputHelper.length !==0
									}
								>
									Send Message 
									<img src={send} alt="send message icon" style={{marginLeft: "1em"}} />
								</Button>
							</Grid>

						</Grid>
					</Grid>
				</Grid>


			{/* contact form dialog/modal */}

				<Dialog open={open} onClose={() => setOpen(false)}
					style={{zIndex: theme.zIndex.modal + 2}}
					fullScreen={matchesSM || matchesXS}
				>
					<DialogContent>
							<Grid item>
								<Typography variant="h4" gutterBottom>Confirm Message</Typography>
							</Grid>
							<Grid item>
								<TextField
									id="name"
									label="Name"
									variant="standard"
									fullWidth
									value={nameInput}
									onChange={event => setNameInput(event.target.value)}
									style={{marginBottom: "2em"}}
								/>
							</Grid>

							<Grid item>
								<TextField
									id="email"
									label="Email"
									variant="standard"
									fullWidth
									error={emailInputHelper.length !== 0}
									helperText={emailInputHelper}
									value={emailInput}
									onChange={onChangeHandler}
									style={{marginBottom: "2em"}}
								/>
							</Grid>

							<Grid item>
								<TextField
									id="phone"
									label="Phone"
									variant="standard"
									fullWidth
									error={phoneInput.length !== 0}
									helperText={phoneInputHelper}
									value={phoneInput}
									onChange={onChangeHandler}
								/>
							</Grid>
							<Grid item>
								<TextField id="message" 
									className={classes.message}
									variant="standard" 
									fullWidth
									value={messageInput}
									multiline
									rows={10}
									InputProps={{
							        	disableUnderline: true
							        }}
									onChange={event => setMessageInput(event.target.value)}
								/>
							</Grid>
							<Grid item container alignItems="center" justifyContent="center"
								style={{marginBottom: "0.2em", marginTop: "0.8em"}}
							>
								<Grid item>
									<Button color="primary" onClick={() => setOpen(false)}>Cancel</Button>
								</Grid>
								<Grid item>
									<Button variant="contained"
										className={classes.sendButton}
										onClick={onConfirm}
									>
										{loading ? <CircularProgress /> : sendConfirmButtonContent}
									</Button>
								</Grid>
							</Grid>
					</DialogContent>	
				</Dialog>

				<Snackbar
					open={alert.open}
					message={alert.message}
					autoHideDuration={4000}
					onClose={() => setAlert({...alert, open: false})}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					contentProps={{style: {backgroundColor: alert.backgroundColor} }}
				/>

        {/* contact form dialog/modal */}

				<Grid item container lg={8} xl={9} className={classes.callToAction} direction="row" alignItems="center">
					<Grid container item direction={matchesMD ? "column": "row"} >
		                <Grid item sm style={{ marginLeft: matchesMD ? "0em":"5em", textAlign: matchesSM && "center"}}>
		                    <Grid container direction="column" alignItems={matchesMD ? "center":undefined}>
		                        <Typography variant="h2" align={matchesMD ? "center":undefined}>
									Simple Software. <br /> Revolutionary Results.
								</Typography>
								<Typography variant="subtitle2" color="white" style={{fontSize: "1.5rem"}}
									align={matchesMD ? "center":undefined}
								>
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
                		<Grid item sm style={{marginRight: matchesMD ? "0em":"5em", textAlign: matchesMD ? "center":"right"}}>
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

			</Grid>
			{/* end 1st row*/}

		</Grid>
	);
}

export default Contactus;
