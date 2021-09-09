import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { Profile } from "../../Screens/Profile";
import { Home } from "../../Screens/Home";
import { Chats } from "../../Screens/Chats";
import { ROUTES } from "../../constants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              label="Home"
              component={Link}
              to={ROUTES.MAIN}
              {...a11yProps(0)}
            />
            <Tab
              label="Profile"
              component={Link}
              to={ROUTES.PROFILE}
              {...a11yProps(1)}
            />
            <Tab
              label="Chats"
              component={Link}
              to={ROUTES.CHATS}
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
      </div>
      <Switch>
        <Route path={ROUTES.PROFILE}>
          <Profile />
        </Route>
        <Route exact path={ROUTES.MAIN}>
          <Home />
        </Route>
        <Route path={ROUTES.CHATS}>
          <Chats />
        </Route>
        <Route path={ROUTES.NOT_FOUND}>Page not found 404</Route>
        <Route path="*">
          <Redirect to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
