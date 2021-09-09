import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import "./simpleList.css";
import { ROUTES } from "../../constants";
// import { getId } from "../../utils";
// import { getCounter } from "../../utils";
import { useDispatch } from "react-redux";
import { addChatAction } from "../../Store/Chats/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// const counter = getCounter();

export default function SimpleList({ chats, setChats, chatId }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  // const addChat = () => {
  //   const id = getId();
  //   setChats({
  //     ...chats,
  //     [id]: {
  //       name: `Chat ${counter()}`,
  //       messages: [],
  //     },
  //   });
  // };

  const addChat = useCallback(() => {
    dispatch(addChatAction);
    console.log(dispatch(addChatAction));
  }, [dispatch]);

  const deleteChat = (id) => {
    setChats((prevChats) => {
      const newChats = { ...prevChats };
      delete newChats[id];
      return newChats;
    });
  };

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={addChat}
          >
            CREATE CHAT
          </Button>
          {Object.keys(chats).map((id) => {
            return (
              <React.Fragment key={id}>
                <ListItem>
                  <Link to={`/chats/${id}`}>
                    <ListItemText primary={chats[id].name} />
                  </Link>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteChat(id)}
                  ></Button>
                </ListItem>
              </React.Fragment>
            );
          })}
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders"></List>
      </div>
      <Switch>
        <Route>
          <Redirect to={ROUTES.CHATS} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { SimpleList };
