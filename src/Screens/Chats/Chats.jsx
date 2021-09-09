import { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import "./Chats.css";
import SimpleList from "../../Components/simpleList/SimpleList";
import { Chat } from "../../Components/chat";
import { Form } from "../../Components/form/Form";
import { getId } from "../../utils";

const initialChats = {};

export const Chats = () => {
  const [chats, setChats] = useState(initialChats);
  const path = useRouteMatch();

  const [messageList, setMessageList] = useState([]);
  const handleChangeMessageList = useCallback(
    ({ author, text }) => {
      let newMessage = {
        id: getId(),
        author: author,
        text: text,
      };
      setMessageList([...messageList, newMessage]);
    },
    [messageList]
  );
  useEffect(() => {
    if (messageList.length !== 0) {
      const timeout = setTimeout(() => {
        console.log(
          "ЧатБот: Сообщение отправил " +
            messageList[messageList.length - 1].author
        );
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messageList]);

  return (
    <BrowserRouter>
      <div>
        <h2>Chats</h2>
        <div className={Chat}>
          <div className={SimpleList}>
            <SimpleList setChats={setChats} chats={chats} />
          </div>
        </div>

        <div></div>
        <div className="App-div">
          <Chat messageList={messageList} />
          <Form handleChangeMessageList={handleChangeMessageList} />
        </div>

        <Switch>
          <Route exact path={path}>
            <h3>Please select a chat.</h3>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
