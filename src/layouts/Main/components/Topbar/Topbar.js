import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Badge,
  Hidden,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Logout from "@material-ui/icons/ExitToApp";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar style={{backgroundColor:'#3067bf'}}> 
        <img
          alt="Logo"
          src="/images/stocksd.png"
          style={{ width: 50, height: 50, padding: 1 }}
        />

        <h4
          style={{
            color: "white",
            textAlign: "center",
            padding: 10,
            marginTop: 10,
          }}
        >
          PORTFOLIO PROJECT
        </h4>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            ></Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          ></IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
