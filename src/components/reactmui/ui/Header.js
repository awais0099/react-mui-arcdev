import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar } from "@mui/material";
import { useScrollTrigger } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Tabs, Tab} from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assests/logo.svg";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.7em'
    }
  },
  logo: {
    height:"8em",
    [theme.breakpoints.down('md')]: {
      height: "7em"
    },
    [theme.breakpoints.down('sm')]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: "0px"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    fontFamily: "Raleway",
    fontSize: "1rem",
    fontWeight: 700,
    textTransform: "none",
    minWidth: 10,
    marginLeft: "25px",
    color: theme.palette.common.arcWhite,
    opacity: 0.7,
    "&.Mui-selected":{
      color: theme.palette.common.arcWhite,
      opacity: 1
    }
  },
  button: {
    borderRadius: '50px',
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    textTransform: "none",
    fontSize: "1rem",
    fontFamily: "Pacifico",
    color: "white",
    backgroundColor: theme.palette.common.arcOrange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 0
  },
  menuItem: {
    fontFamily: "Raleway",
    fontSize: "1rem",
    fontWeight: 700,
    textTransform: "none",
    color:theme.palette.common.arcWhite,
    backgroundColor: theme.palette.common.arcBlue,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    },
  },
  selected: {
    color: theme.palette.common.arcWhite,
    opacity: 1,
    "&:link": {
      backgroundColor: "white"
    }
  },
  drawer: {
    backgroundColor: theme.palette.primary.main
  },
  drawerItem: {
    fontFamily: "Raleway",
    fontSize: "1rem",
    fontWeight: 700,
    textTransform: "none",
    minWidth: 10,
    marginLeft: "25px",
    color: "white",
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcOrange
  },
  drawerItemSelected: {
    opacity: 1
  },
  drawerIconContainer: {
    marginLeft: "auto"
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}))

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false); 
  const [openMenu, setOpenMenu] = useState(false);

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));

  const serviceMenuOption = [
      {name: 'Services', link: "/services"},
      {name: "Custom Software", link: "/customsoftware"},
      {name: "Mobile App Development", link: "/mobileapps"},
      {name: "Website Development", link: "/websites"},
    ];
  
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (window.location.pathname === '/' && props.value !== 0) {
          props.setValue(0);
        }
        break;
      case "/services":
        if (window.location.pathname === "/services" !== 1) {
          props.setValue(1);
        }
        break;
      case "/revolution":
        if (window.location.pathname === "/revolution" && props.value !== 2) {
          props.setValue(2);
        }
        break;
      case "/about-us":
        if (window.location.pathname === "/about-us" && props.value !== 3) {
          props.setValue(3);
        }
        break;
      case "/contact-us":
        if (window.location.pathname === "/contact-us" && props.value !== 4) {
          props.setValue(4);
        }
        break;
      case "/services":
        if (props.value !== 1) {
          props.setValue(1);
        }
        props.setSelectedIndex(0);
        break;
      case "/customsoftware":
        if (props.value !== 1) {
          props.setValue(1);
        }
        props.setSelectedIndex(1);
        break;

      case "/mobileapps":
        if (props.value !== 1) {
          props.setValue(1);
        }
        props.setSelectedIndex(2);
        break;
      case "/websites":
        if (props.value !== 1) {
          props.setValue(1);
        }
        props.setSelectedIndex(3);
        break;
      case "/estimate":
        props.setValue(4);
        break;
      default:
        break;
    }
    // console.log(value+" "+window.location.pathname);
  }, [props.value]);

  const serviceTabClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };
  
  const handleSelectedMenuItem = (e, index) => {
    props.setSelectedIndex(index);
    setOpen(false);
    setAnchorEl(null);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  }
  
  const tabs = (
    <React.Fragment>
      <Tabs value={props.value} onChange={handleChange} textColor="secondary" className={classes.tabContainer}>
        <Tab label="Home" component={Link} to="/" className={classes.tab} />
        <Tab label="Services" component={Link} to="/services" className={classes.tab} 
          aria-owns={ anchorEl ? "service-menu":undefined}
          onMouseOver={ (event) => serviceTabClickHandler(event) }
        />
        <Tab label="The Revolution" component={Link} to="/revolution" className={classes.tab} />
        <Tab label="About Us" component={Link} to="/about-us" className={classes.tab} />
        <Tab label="Contact Us" component={Link} to="/contact-us" className={classes.tab}/>
      </Tabs>
      <Button component={Link} onClick={() => props.setValue(99)} to="/estimate" className={classes.button} variant="contained">Free Estimate</Button>
        <Menu
          id="service-menu"
          elevation={0}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          classes={{paper: classes.menu}}
          MenuListProps={{onMouseLeave: handleClose}}
          style={{zIndex: 1302}}
      >
        {serviceMenuOption.map( (option, index) => (
          <MenuItem
            key={option.name}
            selected={index === props.selectedIndex && props.value === 1}
            onClick={ (event) => {handleSelectedMenuItem(event, index); props.setValue(1); handleClose(); }}
            classes={{root: classes.menuItem, selected: classes.selected}}
            component={Link}
            to={option.link}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false) }
        onOpen={() => setOpenDrawer(true) }
        classes={{paper: classes.drawer}}
      >
        <div className={classes.toolbarMargin}></div>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" selected={props.value === 0} onClick={() => {setOpenDrawer(false); props.setValue(0);} }>
              <ListItemText className={props.value === 0 ? [classes.drawerItem, classes.drawerItemSelected].join(' ') : classes.drawerItem} primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/services" selected={props.value === 1} onClick={() => {setOpenDrawer(false); props.setValue(1);} }>
              <ListItemText className={props.value === 1 ? [classes.drawerItem, classes.drawerItemSelected].join(' ') : classes.drawerItem} primary="Services" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/revolution" selected={props.value === 2} onClick={() => {setOpenDrawer(false); props.setValue(2);} }>
              <ListItemText className={props.value === 2 ? [classes.drawerItem, classes.drawerItemSelected].join(' ') : classes.drawerItem} primary="The Revolution" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/about-us" selected={props.value === 3} onClick={() => {setOpenDrawer(false); props.setValue(3);} }>
              <ListItemText className={props.value === 3 ? [classes.drawerItem, classes.drawerItemSelected].join(' ') : classes.drawerItem} primary="About Us" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/contact-us" selected={props.value === 4} onClick={() => {setOpenDrawer(false); props.setValue(4);}}>
              <ListItemText className={props.value === 4 ? [classes.drawerItem, classes.drawerItemSelected].join(' ') : classes.drawerItem} primary="Contact Us" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className={classes.drawerItemEstimate}>
            <ListItemButton component={Link} to="/estimate" selected={props.value === 4} onClick={() => {setOpenDrawer(false); props.setValue(5);}}>
              <ListItemText className={props.value === 5 ? [classes.drawerItem, classes.drawerItemSelected].join(' ') : classes.drawerItem} primary="Estimate" />
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

    return (
      <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
              <Toolbar disableGutters>
                <Button component={Link} to="/" disableRipple onClick={() => props.setValue(0)} className={classes.logoContainer}>
                  <img src={logo} alt="logo svg" className={classes.logo} />
                </Button>
                { match ? drawer : tabs }
              </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
      </React.Fragment>
    );
}

export default Header;