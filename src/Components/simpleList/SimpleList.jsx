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
import { useDispatch, useSelector } from "react-redux";
import { addChatAction, deleteChatAction } from "../../Store/Chats/actions";
import { chatListSelector } from "../../Store/Chats/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// const counter = getCounter();

export default function SimpleList({ chatId }) {
  const classes = useStyles();

  const chats = useSelector(chatListSelector);

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
    dispatch(addChatAction(), [dispatch]);
  }, [chats]);

  const deleteChat = useCallback(
    (id) => {
      dispatch(deleteChatAction({ id }), [dispatch, id]);
    },
    [chats]
  );

  // const deleteChat = (id) => {
  //   setChats((prevChats) => {
  //     const newChats = { ...prevChats };
  //     delete newChats[id];
  //     return newChats;
  //   });
  // };

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
          {chats.map((chat) => {
            return (
              <React.Fragment key={chat.id}>
                <ListItem>
                  <Link to={`/chats/${chat.id}`}>
                    <ListItemText primary={chat.name} />
                  </Link>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteChat(chat.id)}
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
