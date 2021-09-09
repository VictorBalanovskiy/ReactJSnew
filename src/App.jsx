import React from "react";
import { store } from "./Store";
import { Provider } from "react-redux";
import SimpleTabs from "./Components/simpleTabs/SimpleTabs";
import "./App.css";

const App = ({ chats, chatId }) => {
  return (
    <Provider store={store}>
      <div className="App-header">
        <header>
          <SimpleTabs chats={chats} chatId={chatId} />
        </header>
      </div>
    </Provider>
  );
};

export default App;
