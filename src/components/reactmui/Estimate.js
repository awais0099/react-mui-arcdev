import React, { useState } from "react";
import axios from "axios";
import { 
    Grid,
    Typography,
    Button,
    Hidden,
    useMediaQuery,
    IconButton,
    Dialog,
    DialogContent,
    TextField,
    CircularProgress,
    Snackbar
} from "@mui/material";
import { cloneDeep } from "lodash";
import {makeStyles, useTheme} from "@mui/styles";
import Lottie from "react-lottie";
import estimateAnimation from "./animations/estimateAnimation/data.json";

import customSoftwareIcon from "./assests/CustomSoftwareIcon.svg";
import mobileAppsIcon from "./assests/mobileIcon.svg";
import websitesIcon from "./assests/websiteIcon.svg";
import check from "./assests/check.svg";
import send from "./assests/send.svg";
import software from "./assests/software.svg";
import mobile from "./assests/mobile.svg";
import website from "./assests/website.svg";
import backArrow from "./assests/backArrow.svg";
import forwardArrow from "./assests/forwardArrow.svg";
import backArrowDisabled from "./assests/backArrowDisabled.svg";
import forwardArrowDisabled from "./assests/forwardArrowDisabled.svg";
import camera from "./assests/camera.svg";
import upload from "./assests/upload.svg";
import person from "./assests/person.svg";
import persons from "./assests/persons.svg";
import people from "./assests/people.svg";
import info from "./assests/info.svg";
import bell from "./assests/bell.svg";
import users from "./assests/users.svg";
import iphone from "./assests/iphone.svg";
import gps from "./assests/gps.svg";
import customized from "./assests/customized.svg";
import data from "./assests/data.svg";
import android from "./assests/android.svg";
import globe from "./assests/globe.svg";
import biometrics from "./assests/biometrics.svg";

const useStyles = makeStyles(theme => ({
    icon: {
        width: "12em",
        height: "10em"
    },
    message: {
    	border: `2px solid ${theme.palette.common.arcBlue}`,
    	marginTop: "5em",
      marginBottom: "1.5em",
    	borderRadius: 5
    },
    estimateButton: {
        width: 225,
        height: 50,
        fontSize: "1.25rem",
        marginTop: "1.6em",
        borderRadius: 50,
        backgroundColor: theme.palette.common.arcOrange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    specialText: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.5rem",
      color: theme.palette.common.arcOrange
    }
}));

function Estimate (props) {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const estimateOptions = {
        loop: true,
        // autoplay: true, 
        animationData: estimateAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultQuestions = [{
        id: 1,
        title: "Which service are you interested in ?",
        active: true,
        subtitle: null,
        options: [
            {
                id: 1,
                title: "Website Development",
                subtitle: null,
                icon: websitesIcon,
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "IOS/Android App Development",
                subtitle: null,
                icon: mobileAppsIcon,
                iconAlt: "phone and tablet outline",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Custom Software Development",
                subtitle: null,
                icon: software,
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    }];

    const softwareQuestions = [
        { ...defaultQuestions[0], active: false },
        {
          id: 2,
          title: "Which platforms do you need supported?",
          subtitle: "Select all that apply.",
          options: [
            {
              id: 1,
              title: "Web Application",
              subtitle: null,
              icon: website,
              iconAlt: "computer outline",
              selected: false,
              cost: 100
            },
            {
              id: 2,
              title: "iOS Application",
              subtitle: null,
              icon: iphone,
              iconAlt: "outline of iphone",
              selected: false,
              cost: 100
            },
            {
              id: 3,
              title: "Android Application",
              subtitle: null,
              icon: android,
              iconAlt: "outlines of android phone",
              selected: false,
              cost: 100
            }
          ],
          active: true
        },
        {
          id: 3,
          title: "Which features do you expect to use?",
          subtitle: "Select all that apply.",
          options: [
            {
              id: 1,
              title: "Photo/Video",
              subtitle: null,
              icon: camera,
              iconAlt: "camera outline",
              selected: false,
              cost: 25
            },
            {
              id: 2,
              title: "GPS",
              subtitle: null,
              icon: gps,
              iconAlt: "gps pin",
              selected: false,
              cost: 25
            },
            {
              id: 3,
              title: "File Transfer",
              subtitle: null,
              icon: upload,
              iconAlt: "outline of cloud with arrow pointing up",
              selected: false,
              cost: 25
            }
          ],
          active: false
        },
        {
          id: 4,
          title: "Which features do you expect to use?",
          subtitle: "Select all that apply.",
          options: [
            {
              id: 1,
              title: "Users/Authentication",
              subtitle: null,
              icon: "",
              iconAlt: "outline of a person with a plus sign",
              selected: false,
              cost: 25
            },
            {
              id: 2,
              title: "Biometrics",
              subtitle: null,
              icon: biometrics,
              iconAlt: "fingerprint",
              selected: false,
              cost: 25
            },
            {
              id: 3,
              title: "Push Notifications",
              subtitle: null,
              icon: bell,
              iconAlt: "outline of a bell",
              selected: false,
              cost: 25
            }
          ],
          active: false
        },
        {
          id: 5,
          title: "What type of custom features do you expect to need?",
          subtitle: "Select one.",
          options: [
            {
              id: 1,
              title: "Low Complexity",
              subtitle: "(Informational)",
              icon: info,
              iconAlt: "'i' inside a circle",
              selected: false,
              cost: 25
            },
            {
              id: 2,
              title: "Medium Complexity",
              subtitle: "(Interactive, Customizable, Realtime)",
              icon: customized,
              iconAlt: "two toggle switches",
              selected: false,
              cost: 50
            },
            {
              id: 3,
              title: "High Complexity",
              subtitle: "(Data Modeling and Computation)",
              icon: data,
              iconAlt: "outline of line graph",
              selected: false,
              cost: 100
            }
          ],
          active: false
        },
        {
          id: 6,
          title: "How many users do you expect?",
          subtitle: "Select one.",
          options: [
            {
              id: 1,
              title: "0-10",
              subtitle: null,
              icon: person,
              iconAlt: "person outline",
              selected: false,
              cost: 1
            },
            {
              id: 2,
              title: "10-100",
              subtitle: null,
              icon: persons,
              iconAlt: "outline of two people",
              selected: false,
              cost: 1.25
            },
            {
              id: 3,
              title: "100+",
              subtitle: null,
              icon: people,
              iconAlt: "outline of three people",
              selected: false,
              cost: 1.5
            }
          ],
          active: false
        }
      ];
      
      
      const websiteQuestions = [
        { ...defaultQuestions[0], active: false },
        {
          id: 2,
          title: "Which type of website are you wanting?",
          subtitle: "Select one.",
          options: [
            {
              id: 1,
              title: "Basic",
              subtitle: "(Informational)",
              icon: info,
              iconAlt: "person outline",
              selected: false,
              cost: 100
            },
            {
              id: 2,
              title: "Interactive",
              subtitle: "(Users, API's, Messaging)",
              icon: customized,
              iconAlt: "outline of two people",
              selected: false,
              cost: 200
            },
            {
              id: 3,
              title: "E-Commerce",
              subtitle: "(Sales)",
              icon: globe,
              iconAlt: "outline of three people",
              selected: false,
              cost: 250
            }
          ],
          active: true
        }
      ];
      
  const [questions, setQuestions] = useState(defaultQuestions);

  const [dialogOpen, setDialogOpen] = useState(false);


/*=============== Form input =======================================*/
  const [nameInput, setNameInput] = useState('');

	const [emailInput, setEmailInput] = useState('');

	const [emailInputHelper, setEmailInputHelper] = useState('');

	const [phoneInput, setPhoneInput] = useState('');

	const [phoneInputHelper, setPhoneInputHelper] = useState('');

	const [messageInput, setMessageInput] = useState('');

  /*======================================================*/

  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({open: false, message: "", backgroundColor: ""});
/*======================================================*/
  const [service, setService] = useState([]);
  
  const [platforms, setPlatforms] = useState([]);
  
  const [features, setFeatures] = useState([]);
  
  const [customFeatures, setCustomFeatures] = useState("");
  
  const [category, setCategory] = useState("");
  
  const [users, setUsers] = useState("");
/*======================================================*/


  const nextQuestion = () => {
    const newQuestions  = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(question => question.active);
          
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = {...currentlyActive[0], active: false};
    newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};
    setQuestions(newQuestions);
  }

  const previousQuestion = () => {
    const newQuestions  = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(question => question.active);
        
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = {...currentlyActive[0], active: false};
    newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};
    setQuestions(newQuestions);
  }

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  }

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
       return true;
    } else {
       return false;
    }
  }

      const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previousSelected = currentlyActive[0].options.filter(option => option.selected);

        switch(currentlyActive[0].subtitle) {
          case 'Select one.':
            if (previousSelected[0]) {
              previousSelected[0].selected = !previousSelected[0].selected;
            }
            newSelected.selected = !newSelected.selected;
            break;
          default:
            newSelected.selected = !newSelected.selected;
            break;
        }

        switch(newSelected.title) {
          case 'Custom Software Development':
            setQuestions(softwareQuestions);
            setService(newSelected.title);
            setPlatforms([]);
            setFeatures([]);
            setCustomFeatures([]);
            setCategory('');
            setUsers('');
            break;
          case 'Website Development':
            setQuestions(websiteQuestions);
            setService(newSelected.title);
            setPlatforms([]);
            setFeatures([]);
            setCustomFeatures([]);
            setCategory('');
            setUsers('');
            break;
          case 'IOS/Android App Development':
            setQuestions(softwareQuestions);
            setService(newSelected.title);
            setPlatforms([]);
            setFeatures([]);
            setCustomFeatures([]);
            setCategory('');
            setUsers('');
            break;
          default:
            setQuestions(newQuestions);
            break;
        }
      }

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

      const getTotal = () => {
        let cost = 0;
        const selections = questions
          .map(question => question.options.filter(option => option.selected))
          .filter(question => question.length > 0);

        selections.map(options => options.map(option => cost += option.cost) );
        
        if (questions.length > 2) {
          let userCost = questions
            .filter(question => {
              let checkOptions = [];
              if (question.title === "How many users do you expect?") {
                checkOptions = question.options.filter(option => option.selected);
                if (checkOptions.length > 0) {
                  return question;
                }
              }
            });

          if (userCost.length > 0) {
            userCost = userCost.map(question => question.options.filter(option => option.selected)
            )[0][0].cost;
            cost -= userCost;
            cost *= userCost;
          }
        }
        // console.log(cost);
        setTotal(cost);
      }

  const getPlateform = () => {
    let newPlatforms = [];
    if (questions.length > 2) {
        questions
          .filter(question => question.title === "Which platforms do you need supported?")
          .map(question => question.options.filter(option => option.selected))[0]
          .map(option => newPlatforms.push(option.title));

        setPlatforms(newPlatforms);
    }
      console.log(newPlatforms);
  }

  const getFeatures = () => {
    let newFeatures = [];
    if (questions.length > 2) {
        questions
          .filter(question => question.title === "Which features do you expect to use?")
          .map(question => question.options.filter(option => option.selected))[0]
          .map(option => newFeatures.push(option.title));

        setFeatures(newFeatures);
    }
    console.log(newFeatures);
  }

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions.filter(question => question.title === "What type of custom features do you expect to need?")
      .map(question => question.options.filter(option => option.selected))[0][0].title;

      setCustomFeatures(newCustomFeatures);
      
      console.log(newCustomFeatures);
    }
  }

  const softwareSelection = (
    <Grid container direction="column">
                        
                        <Grid item container alignItems="center" style={{marginBottom: "1.5em"}}>
                          <Grid item xs={2}>
                            <img src={check} alt="checkmark" />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography variant="body1">
                              you want {service}
                              {platforms.length > 0 ? 
                                ` for ${
                                    /* if only web application is selected...*/
                                    platforms.indexOf("Web Application") > -1 && platforms.length === 1
                                    ? //then finish sentence here
                                     "a Web Application."
                                : //otherwise, if web application and another platform is selected...
                                platforms.indexOf("Web Application") > -1 &&
                                  platforms.length === 2
                                ? //then finish the sentence here
                                  `a Web Application and an ${platforms[1]}.`
                                : //otherwise, if only one platform is selected which isn't web application...
                                platforms.length === 1
                                ? //then finish the sentence here
                                  `an ${platforms[0]}`
                                : //otherwise, if other two options are selected...
                                platforms.length === 2
                                ? //then finish the sentence here
                                  "an iOS Application and an Android Application."
                                : //otherwise if all three are selected...
                                platforms.length === 3
                                ? //then finish the sentence here
                                  "a Web Application, an iOS Application, and an Android Application."
                                : null
                            }`
                               :null}
                             </Typography>
                          </Grid>
                        </Grid>

                        <Grid item container alignItems="center" style={{marginBottom: "1.5em"}}>
                          <Grid item xs={2}>
                            <img src={check} alt="checkmark" />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography variant="body1">
                              {"with "}
                              
                              {/* if we have features... */}
                              {features.length > 0
                                ? //...and there's only 1...
                                  features.length === 1
                                    ? //then end the sentence here
                                    `${features[0]}.`
                                    : //otherwise, if there are two features...
                                  features.length === 2
                                    ? //...then end the sentence here
                                    `${features[0]} and ${features[1]}.`
                                    : //otherwise, if there are three or more features...
                                    features
                                  //filter out the very last feature...
                                  .filter(
                                    (feature, index) =>
                                    index !== features.length - 1
                                  )
                                  //and for those features return their name...
                                  .map((feature, index) => (
                                    <span key={index}>{`${feature}, `}</span>
                                  ))
                                : null}
                                {features.length > 0 &&
                                  features.length !== 1 &&
                                features.length !== 2
                                  ? //...and then finally add the last feature with 'and' in front of it
                                  ` and ${features[features.length - 1]}.`
                              : null}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item container alignItems="center">
                          <Grid item xs={2}>
                            <img src={check} alt="checkmark" />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography variant="body1">
                              The custom features will be of {customFeatures},
                              and the project will be use by about {users}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
  );

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions.filter(question => question.title === "Which type of website are you wanting?")[0].options.filter((option) => option.selected)[0].title;
      setCategory(newCategory);
      console.log(newCategory);
    }
  }
  const websiteSelection = (
    <Grid container direction="column"> 
      <Grid item container alignItems="center" spacing={1}>
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography>
            You want {category ===  "Basic" ? "A basic website." : `an ${category} website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const sendEstimate = () => {
    // write here
    setLoading(true);

		axios
			.get("#")
			.then(respons => {
				setLoading(false);

				setAlert({open: true, message: "Estimate placed successfully!", backgroundColor: "#4BB543"});
				console.log(respons);
			})
			.catch(error => {
				setLoading(false);
				setAlert({open: true, message: "Something went wrong, please try again!", backgroundColor: "#FF3232"});
				console.log(error);
			})
  }

  const estimateDisabled = () => {
    let disabled = true;
    const emptySelections = questions
      .map(question => question.options.filter(option => option.selected))
      .filter(question => question.length !== 0);

      if (questions.length === 2) {
        if (emptySelections.length === 1) {
          disabled = false;
        }
      } else if (questions.length === 1) {
          disabled = true;
      } else if (questions.length > 2) {
        if (emptySelections.length === questions.length - 1) {
          disabled = false;
        }
      }

      return disabled;
  }

    return(
        <Grid container direction="row">
            <Grid item container direction="column" lg alignItems={matchesMD ? "center":undefined}>
                <Grid item style={{marginLeft: matchesMD ? 0:"5em"}}>
                    <Typography variant="h2"
                      style={{fontWeight: 500, fontSize: "2.5rem", marginTop: "2em"}}
                    >Estimate</Typography>
                </Grid>
                <Grid item style={{marginRight: matchesMD ? 0:"10em", maxWidth: "50em", marginTop: "7.5em"}}>
                    <Lottie options={estimateOptions} height={"100%"} width={"100%"} />
                </Grid>
            </Grid>

            <Grid item container direction="column" lg alignItems="center" style={{marginRight: matchesMD ? 0:"2em", marginBottom: "25em"}}>
                {questions.filter(question => question.active).map((question, index) => (
                    <React.Fragment key={index}>
                        <Grid item>
                            <Typography variant="h2" align="center"
                                style={{fontWeight: 300, marginTop: "5em", lineHeight: 1.25}}
                            >
                                {question.title}
                            </Typography>
                            <Typography variant="body1" align="center"
                                style={{marginBottom: "1em"}}
                            >
                                {question.subtitle}
                            </Typography>
                        </Grid>

                        <Grid item container>
                            {question.options.map((option, index) => (
                                <Grid item container direction="column" md
                                  key={index}
                                  component={Button}
                                  onClick={() => handleSelect(option.id)}
                                  style={{
                                    backgroundColor: option.selected ? theme.palette.common.arcOrange:null,
                                    marginBottom: matchesMD || matchesSM ? "1.5em":0,
                                    marginLeft: matchesMD || matchesSM ? "1em":0,
                                    marginRight: matchesMD || matchesSM ? "1em":0
                                  }}
                                >
                                    <Grid item style={{ maxWidth: "12em" }}>
                                        <Typography variant="h6" align="center" style={{marginBottom: "1em"}}>
                                            {option.title}
                                        </Typography>
                                        <Typography variant="caption" align="center">
                                            {option.subtitle}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img
                                            src={option.icon}
                                            className={classes.icon}
                                            alt={option.iconAlt}
                                        />
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </React.Fragment>
                ))}
                <Grid item container justifyContent="space-between" style={{width: "15em", marginTop: "1.5em"}}>
                    <Grid item>
                        <IconButton
                          onClick={previousQuestion}
                          disabled={navigationPreviousDisabled()}
                        >
                            <img src={navigationPreviousDisabled() ? backArrowDisabled:backArrow} alt="Previous question" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={nextQuestion}
                          disabled={navigationNextDisabled()}
                        >
                            <img src={navigationNextDisabled() ? forwardArrowDisabled:forwardArrow} alt="Next question" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                      variant="contained"
                      className={classes.estimateButton}
                      disabled={estimateDisabled()}
                      onClick={() => {
                          setDialogOpen(true);
                          getTotal();
                          getPlateform();
                          getFeatures();
                          getCustomFeatures();
                          getCategory();
                        }
                      }
                    >
                      Get Estimate
                    </Button>
                </Grid>
            </Grid>

{/**************************** dialog */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}
              style={{zIndex: theme.zIndex.modal + 2}}
              fullWidth
              maxWidth="lg"
              fullScreen={matchesMD || matchesSM}
            >
              <Grid container justifyContent="center">
                <Grid item style={{marginTop: "1em"}}>
                  <Typography variant="h2" align="center">Estimate</Typography>
                </Grid>
              </Grid>
              <DialogContent>
                <Grid container justifyContent="space-around">
                  <Grid item container direction="column" md={7}
                    style={{
                      maxWidth: "20em",
                    }}
                  >
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
                    <Grid item>
                      <Typography variant="body1" paragraph>
                        We can create this digital solution for an estimated
                        <span className={classes.specialText}>${total.toFixed(2)}</span>
                      </Typography>
                      <Typography variant="body1">Fill out your name, phone number and email, place your request, and we will get back to you with details moving forward and a final price.</Typography>
                    </Grid>
                  </Grid>

                  <Grid item container direction="column" md={5}
                    alignItems={matchesMD || matchesSM ? "center":undefined}
                    style={{
                      maxWidth: "30em",
                      marginTop: matchesMD || matchesSM ? "1.5em":0,
                      marginBottom: matchesMD || matchesSM ? "1.5em":0,
                    }}
                  >
                    <Grid item>
                      {questions.length > 2 ? softwareSelection:websiteSelection}
                    </Grid>
                    <Grid item>
                      <Button variant="contained"
                        disabled={
                          nameInput.length === 0 ||
                          emailInputHelper.length !== 0 ||
                          phoneInputHelper.length !== 0 ||
                          messageInput.length === 0
                        }
                        className={classes.estimateButton} style={{fontSize:"1rem", width:"190px"}}>
                        {loading ? <CircularProgress /> : <React.Fragment>
                          Place Request
                          <img src={send} alt="paper airplane" style={{marginLeft: "0.5em"}} />
                        </React.Fragment>}
                      </Button>
                    </Grid>
                    
                    <Hidden mdUp>
                      <Grid item>
                        <Button style={{fontWeight: 300}} color="primary"
                          onClick={() => setDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                      </Grid>    
                    </Hidden>

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
        </Grid>
    );
}

export default Estimate;