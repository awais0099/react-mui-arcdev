import { createTheme } from '@mui/material/styles'

const arcBlue = "#0B72b9";
const arcOrange = "#ffba60";
const arcGray = "#868686";
const arcWhite = "#fff";

export default createTheme({
    palette: {
        common: {
            arcBlue: arcBlue,
            arcOrange: arcOrange,
            arcWhite: arcWhite
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        },
    },
    typography: {
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.7em",
            color: arcBlue
        },
        h6: {
            fontFamily: "Raleway",
            fontWeight: 500,
            lineHeight: 1,
            color: arcBlue
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGray
        },
        subtitle2: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: "white"
        },
        body1: {
            fontSize: "1.25rem",
            color: arcGray,
            fontWeight:300
        },
        learnButton: {
            color: arcBlue,
            borderColor: arcBlue, 
            borderRadius: '50px',
            textTransform: "none",
            fontWeight: "bold",
            fontFamily: "Roboto"
        },
        caption: {
            fontWeight: 300,
            fontSize: "1rem",
            color: arcGray
        }
    },
    components: {
        MuiInputLabel: {
          styleOverrides: {
            root: {
              fontSize: '1rem',
              color: arcBlue
            },
          },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: arcGray,
                    fontWeight: 300
                },
                underline: {
                    "&:before": {
                        borderBottom: `2px solid ${arcBlue}`
                    },
                    "&&:hover:before": {
                        borderBottom: `2px solid ${arcBlue}`
                    },
                }
            }
        }
    },
})